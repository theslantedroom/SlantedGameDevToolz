import { useCallback } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
export const useSpeech = () => {
  const { speak: _speak, cancel } = useSpeechSynthesis();

  const speak = useCallback(
    (string: string) => {
      console.log("Speak:", string);
      _speak({
        text: string,
        onEnd: () => {
          console.log("xxx");
        },
      });
    },
    [_speak]
  );

  return { speak };
};
