"use client";

import { questions } from "@/constants";
import { Button } from "../ui/button";
import React, { FC, useState } from "react";
import { toast } from "../ui/use-toast";
// import Image from "next/image";
import { BookmarkIcon } from "@radix-ui/react-icons";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Answer = {
  index: number;
  answer: string;
  text: string;
};

const Quiz: FC = () => {
  const [result, setResult] = useState<string>("");
  const [answersArr, setAnswersArr] = useState<Answer[]>([]);
  const [styleObj, setStyleObj] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const handleAnswerClick = (
    questionIndex: number,
    answerValue: string,
    textValue: string
  ) => {
    const answer: Answer = {
      index: questionIndex,
      answer: answerValue,
      text: textValue,
    };

    // Check if the answer already exists
    const existingAnswerIndex = answersArr.findIndex(
      (item) => item.index === questionIndex
    );

    if (existingAnswerIndex !== -1) {
      // Update existing answer
      const updatedAnswers = [...answersArr];
      updatedAnswers[existingAnswerIndex].answer = answerValue;
      updatedAnswers[existingAnswerIndex].text = textValue;
      setAnswersArr(updatedAnswers);
    } else {
      // Add new answer
      setAnswersArr([...answersArr, answer]);
    }

    // Update the selected answer for the specific question
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: textValue }));

    handleFindStyle();
  };

  const handleFindStyle = () => {
    // answersArr.map((answerObj, i) => {
    //   const answerObjIndex = answersArr[i];
    //   const newAnswer = answerObjIndex.answer;

    //   const answerValue = newAnswer.valueOf();

    const style = {
      Boho: 0,
      Chic: 0,
      Edgy: 0,
      Classic: 0,
      Sporty: 0,
    };

    answersArr.forEach((answerObj) => {
      const userAnswerValue = answerObj.answer;

      if (userAnswerValue === "boho") {
        style.Boho += 1;
      } else if (userAnswerValue === "classic") {
        style.Classic += 1;
      } else if (userAnswerValue === "chic") {
        style.Chic += 1;
      } else if (userAnswerValue === "sporty") {
        style.Sporty += 1;
      } else if (userAnswerValue === "edgy") {
        style.Edgy += 1;
      } else {
        return userAnswerValue;
      }
      console.log(styleObj);

      setStyleObj(style);
    });
  };

  function getTheResult(obj: any) {
    let highestCategory = 0;

    let winningCategory = "";

    for (const style in obj) {
      if (obj[style] > highestCategory) {
        highestCategory = obj[style];
        winningCategory = style;
      }
      // console.log(highestCategory, winningCategory);
    }
    return setResult(winningCategory);
  }

  function handleStartOver(obj: any) {
    setStyleObj(obj);
    setResult("");
    setSelectedAnswers(obj);
  }

  return (
    <section className="container relative mb-0 mt-12 bg-white md:h-[800px]">
      <div className="flex items-center justify-center">
        <div></div>
        <div className="w-full">
          <div className="mb-4">
            <h2 className="text-4xl font-semibold">Fashion Style Quiz</h2>
            <p>Answer the questions below to find out your fashion style</p>
          </div>

          <div id="quiz">
            {questions.map((option, i) => (
              <div key={i}>
                <p className="mb-2 mt-8 font-semibold md:text-lg">
                  <span>{option.id}. </span>
                  {option.text}
                </p>
                <div className="flex w-[275px] flex-col justify-center md:h-[47px] md:w-full md:flex-row md:items-center md:justify-start">
                  {option.answers.map((answer, j) => (
                    <p
                      className={`${selectedAnswers[i] === answer.text ? "bg-secondary/60" : "bg-white"} my-2 ml-4 flex  cursor-pointer rounded-lg border border-teal-600 px-2 py-1 text-center text-sm shadow hover:bg-teal-600/60 hover:shadow-lg hover:transition-all focus:outline-none focus:ring-2`}
                      key={j}
                      onClick={(e) =>
                        handleAnswerClick(i, answer.value, answer.text)
                      }
                    >
                      {answer.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div className="mx-auto mt-8 flex w-full items-center gap-4 md:mx-0 md:w-1/2 md:flex-row">
              <Button
                className="bg-teal-600 hover:border-2 hover:border-teal-600 hover:bg-white hover:text-black"
                onClick={() => {
                  getTheResult(styleObj);
                }}
              >
                Get Your Style
              </Button>
              <Button
                className="border-2 border-teal-600 bg-white text-black hover:bg-teal-600 hover:text-slate-100 md:ml-2"
                onClick={handleStartOver}
              >
                Start over
              </Button>
            </div>
          </div>

          <div className="mt-12 h-[300px] w-full">
            {result && (
              <div id="result" className="h-24 w-full">
                <h2 className="text-2xl font-semibold">
                  Your Fashion Style is:{" "}
                  <span>
                    {result}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        toast({
                          title: "Saved",
                          description: "Results save to your profile",
                        });
                      }}
                    >
                      <BookmarkIcon className="size-8" />
                    </Button>
                  </span>
                </h2>
              </div>
            )}
          </div>
          {/*
          {result && (
            <div>
              <Alert>
                <BookmarkIcon className="size-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your fashion style is {result}!
                </AlertDescription>
              </Alert>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
