"use client";
import React from "react";
import {
  SpeechRecognition,
  SpeechRecognitionErrorEvent,
  SpeechRecognitionEvent,
} from "@/interfaces";
import { useState, useRef, useEffect } from "react";
import { useMyContext } from "@/context/my-context";

const VoiceTrans = ({
  showTrans,
  onClose,
}: {
  showTrans: boolean;
  onClose: () => void;
}) => {
  const { setrIsChatStarted, setPrompt } = useMyContext();
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + event.results[i][0].transcript);
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startRecording = () => {
    if (recognitionRef.current) {
      setTranscript("");
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleSend = () => {
    setPrompt(transcript);
    setrIsChatStarted(true);
    setTranscript("");
  };

  return (
    <div
      className={
        showTrans
          ? "absolute bottom-0 transition-all w-full"
          : "absolute -left-full transition-all w-full"
      }
    >
      <div className="bg-slate-50 dark:bg-slate-900 py-6 w-full h-34 flex flex-col justify-center items-center">
        {transcript && (
          <span className="mt-4 text-md text-center">{transcript}</span>
        )}
        <div className="w-full mt-6 flex items-center justify-center">
          <div className="flex justify-between items-center w-full px-6">
            <div onClick={onClose}>
              <i className="bx bx-x text-3xl"></i>
            </div>
            <div className="h-16 w-16 rounded-full border border-slate-600 flex justify-center items-center">
              {isRecording ? (
                <i
                  onClick={toggleRecording}
                  className="bx bx-user-voice text-3xl"
                ></i>
              ) : (
                <i
                  onClick={toggleRecording}
                  className="bx bx-microphone text-4xl"
                ></i>
              )}
            </div>
            <div onClick={handleSend}>
              <i className="bx bx-send text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceTrans;
