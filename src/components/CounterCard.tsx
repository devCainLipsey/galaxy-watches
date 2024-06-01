"use client";

import React, { useEffect, useState } from "react";

const CounterCard: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds === 0) {
          if (prevTime.minutes === 0) {
            if (prevTime.hours === 0) {
              if (prevTime.days === 0) {
                clearInterval(interval);
                return prevTime;
              }
              return {
                days: prevTime.days - 1,
                hours: 23,
                minutes: 59,
                seconds: 59,
              };
            }
            return {
              ...prevTime,
              hours: prevTime.hours - 1,
              minutes: 59,
              seconds: 59,
            };
          }
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        }
        return { ...prevTime, seconds: prevTime.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" mt-20 flex justify-center items-center max-[670px]:hidden">
      <div className="w-full bg-black shadow-xl overflow-hidden rounded-3xl">
        <div className="flex">
          <div className="p-16 flex flex-col">
            <div className="uppercase tracking-wide text-3xl text-center text-indigo-300 font-semibold mb-8">
              Coming soon
            </div>
            <div className="uppercase tracking-wide text-3xl text-center text-white font-semibold mb-2">
              Galaxy Guardian G-2000
              <span className="mt-5 h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 w-full block"></span>
            </div>

            <div className="flex flex-row">
              <div className="mr-10">
                <div className="text-2xl text-indigo-200">Days</div>
                <div className="text-3xl text-center font-semibold text-white">
                  {timeLeft.days}
                </div>
              </div>
              <div className="mr-10">
                <div className="text-2xl text-indigo-200">Hours</div>
                <div className="text-3xl text-center font-semibold text-white">
                  {timeLeft.hours}
                </div>
              </div>
              <div className="mr-10">
                <div className="text-2xl text-indigo-200">Minutes</div>
                <div className="text-3xl text-center font-semibold text-white">
                  {timeLeft.minutes}
                </div>
              </div>
              <div>
                <div className="text-2xl text-indigo-200">Seconds</div>
                <div className="text-3xl text-center font-semibold text-white">
                  {timeLeft.seconds}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img
              className="h-96 w-full object-cover max-[790px]:hidden"
              src="https://images.unsplash.com/photo-1619037961428-e6410a7afd38?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress"
              alt="Coming Soon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
