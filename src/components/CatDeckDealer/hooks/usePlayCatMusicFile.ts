import { useCallback, useEffect, useRef } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { randomArrayItem } from "../../../util/randomArrayItem";

const audioSources = [
  `./audio/${"Columbian Soul"}.mp3`,
  `./audio/${"In Love With You"}.mp3`,
  `./audio/${"Walking In My Sleep"}.mp3`,
];
export function usePlayCatMusicFile({
  hasInteracted,
}: {
  hasInteracted: boolean;
}) {
  const {
    load: loadMusic,
    stop: stopMusic,
    fade: fadeMusic,
  } = useGlobalAudioPlayer();
  const _src = randomArrayItem(audioSources);
  const playMusic = useCallback(() => {
    loadMusic(_src, {
      autoplay: true,
    });
  }, [_src, loadMusic]);

  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const preloadAudio = async () => {
      const promises = audioSources.map((src) => {
        return new Promise((resolve, reject) => {
          const audio = new Audio();
          audio.src = src;
          audio.preload = "auto";
          audio.addEventListener("loadedmetadata", resolve);
          audio.addEventListener("error", () => {
            console.error("audioSources error src", src);
            reject();
          });
        });
      });

      try {
        await Promise.all(promises);
        console.log("All audio files are preloaded");
      } catch (error) {
        console.log("Error preloading audio files:", error);
      }
    };
    preloadAudio();
  }, []);

  useEffect(() => {
    if (hasPlayedRef.current === true) {
      return;
    }
    hasPlayedRef.current = true;
    playMusic();
  }, [hasInteracted, playMusic]);

  return { playMusic };
}

export const musicQuasarLoops = ["QuasarA110", "QuasarB110", "QuasarC110"];
