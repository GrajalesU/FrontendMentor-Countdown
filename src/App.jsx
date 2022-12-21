import { useState } from "react";
import DateElement from "./components/DateElement";
import NumberDate from "./components/NumberDate";
import { timeUntilEndOfYear } from "./utils/date";

function App() {
  const { days, hours, minutes, seconds } = timeUntilEndOfYear();
  const [time, setTime] = useState({ days, hours, minutes, seconds });
  const [itsTimeToParty, setParty] = useState(false);

  const partyTimer = setTimeout(() => {
    setTime((current) => {
      return {
        ...current,
        seconds: current.seconds - 1,
      };
    });
    if (time.seconds === 0 && time.minutes >= 1) {
      setTime((current) => {
        return {
          ...current,
          minutes: current.minutes - 1,
          seconds: 59,
        };
      });
    }
    if (time.minutes === 0 && time.hours >= 1) {
      setTime((current) => {
        return {
          ...current,
          hours: current.hours - 1,
          minutes: 59,
        };
      });
    }
    if (time.hours === 0 && time.days >= 1) {
      setTime((current) => {
        return {
          ...current,
          days: current.days - 1,
          hours: 59,
        };
      });
    }
    if (
      time.days === 0 &&
      time.hours === 0 &&
      time.minutes == 0 &&
      time.seconds == 0
    ) {
      setParty(true);
      clearTimeout(partyTimer);
    }
  }, 1000);

  return (
    <div className="min-h-screen w-full flex items-center bg-zinc-900  bg-stars">
      <div className="container mx-auto">
        <h1 className="text-lg md:text-2xl text-center font-bold tracking-wide text-white mb-8">
          New Year's 2023 Countdown Clock is Running! Join the Countdown!
        </h1>
        {!itsTimeToParty ? (
          <div className="flex mx-auto justify-center">
            <DateElement type={"DAYS"} number={time.days} />
            <DateElement type={"HOURS"} number={time.hours} />
            <DateElement type={"MINUTES"} number={time.minutes} />
            <DateElement type={"SECONDS"} number={time.seconds} />
          </div>
        ) : (
          <h2 className="text-lg md:text-2xl text-center font-bold tracking-wide text-white mb-8">
            It's time to party!!
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;


