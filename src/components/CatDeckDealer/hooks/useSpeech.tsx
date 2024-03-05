import { useCallback } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
export const useSpeech = ({
  isMuteSpeech = false,
}: {
  isMuteSpeech?: boolean;
}) => {
  const onEnd = useCallback(() => {
    console.log("end");
  }, []);
  const {
    speak: _speak,
    cancel,
    // speaking,
    // supported,
    voices,
  } = useSpeechSynthesis(onEnd);
  const speak = useCallback(
    (string: string, voice = 5) => {
      if (isMuteSpeech) return;
      const isMexican = voice === 7;
      const isBritishFemale = voice === 5;
      const isManager = voice === 1;
      const isCoach = isMexican;

      let rate = 1;
      if (isManager) rate = 1.2;
      if (isBritishFemale) rate = 1;
      if (isCoach) rate = 1;

      _speak({
        text: string,
        voice: voices[voice],
        rate: rate,
        pitch: isManager ? 0.8 : 0.9,
      });
    },
    [_speak, isMuteSpeech, voices]
  );

  return { speak, cancelSpeaking: cancel };
};
