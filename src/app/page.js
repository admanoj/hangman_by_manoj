"use client";
import React, { useEffect, useState } from "react";

const HangMan = () => {
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const hangmanArr = ["|", `-O-`, `|`, `/  /`];
  //to store all the selections in a array

  const [question, setQuestion] = useState(["_", "h", "_", "_", "o"]);
  const answer = ["r", "h", "i", "n", "o"];
  const [hangCount, setHangcount] = useState(0);

  // useEffect(()=>{

  // },[selectedKeys.length])

  function addSelection(item) {
    // check if item is in the answer
    const isIncluded = answer.includes(item);
    if (isIncluded) {
      //check what index it exists on
      const id = answer.indexOf(item);
      //create new copy of question
      const currentQuestion = [...question];
      //change the index in question to the item that is clicked
      currentQuestion[id] = item;
      //set the output as new question
      setQuestion(currentQuestion);
    } else {
      setHangcount(hangCount + 1);
    }
  }

  return (
    <div>
      Guess the animal
      <br />
      {question} <br />
      {keyboard.map((item) => {
        return (
          <div className="flex gap-4 p-2 m-2">
            {item.map((item) => {
              return (
                <div
                  onClick={() => addSelection(item)}
                  className="bg-gray-800 text-white p-4 rounded-lg cursor-pointer"
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      })}
      <div className="flex flex-col justify-center items-center w-[300px] text-4xl">
        {hangCount}
        {hangmanArr.map((item, id) => {
          if (id > hangCount) return null;
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default HangMan;
