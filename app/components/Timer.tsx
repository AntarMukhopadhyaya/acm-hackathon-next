import { useState, useRef, useEffect } from "react";
import './fonts/font.css';

function Timer() {
  // Define the end time (set this to your desired end time)
  const endTime = new Date("2024-09-12T23:59:59Z"); // Example end time

  const calculateTimeLeft = () => {
    const now: Date = new Date();
    const difference: number = endTime.getTime() - now.getTime();

    let timeLeft: { days: number; hours: number; minutes: number; seconds: number };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Time is up
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <div className="visible max-sm:invisible">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-info rounded-box text-accent-content" data-theme="light">
          <span className="countdown font-blanka text-4xl">
            <span style={{ "--value": timeLeft.days } as React.CSSProperties}></span>
          </span>
        </div>
        <div className="flex flex-col p-2 bg-info rounded-box text-accent-content" data-theme="light">
          <span className="countdown text-4xl font-blanka">
            <span style={{ "--value": timeLeft.hours } as React.CSSProperties}></span>
          </span>
        </div>
        <div className="flex flex-col p-2 bg-info rounded-box text-accent-content" data-theme="light">
          <span className="countdown font-blanka text-4xl">
            <span style={{ "--value": timeLeft.minutes } as React.CSSProperties}></span>
          </span>
        </div>
        <div className="flex flex-col p-2 bg-info rounded-box text-accent-content" data-theme="light">
          <span className="countdown font-blanka text-4xl">
            <span style={{ "--value": timeLeft.seconds } as React.CSSProperties}></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
