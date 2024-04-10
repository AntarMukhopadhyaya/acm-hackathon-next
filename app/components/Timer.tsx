
import {useState, useRef, useEffect } from "react";
import './fonts/font.css';

function Timer() {
    const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(7);
  const intervalRef = useRef<NodeJS.Timeout>(); // Update the type of intervalRef

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              clearInterval(intervalRef.current);
              // Timer reached 0
              return;
            }
            setDays((prevDays) => prevDays - 1);
            setHours(23);
          } else {
            setHours((prevHours) => prevHours - 1);
          }
          setMinutes(59);
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
        }
        setSeconds(59);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [days, hours, minutes, seconds]);
  return (
        <div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-info rounded-box text-accent-content" data-theme="ligt">
                <span className="countdown font-blanka text-4xl">
                  <span style={{ "--value": days } as React.CSSProperties}></span>
                </span>
              </div>
              <div className="flex flex-col p-2 bg-info rounded-box text-accent-content" data-theme="ligt">
                <span className="countdown text-4xl font-blanka">
                  <span style={{ "--value": hours } as React.CSSProperties}> </span>
                </span >
              </div>
              <div className="flex flex-col p-2 bg-info rounded-box text-accent-content" data-theme="ligt">
                <span className="countdown font-blanka text-4xl">
                  <span style={{ "--value": minutes } as React.CSSProperties}></span>
                </span>
              </div>
              <div className="flex flex-col p-2 bg-info rounded-box text-accent-content" data-theme="ligt">
                <span className="countdown font-blanka text-4xl">
                  <span style={{ "--value": seconds } as React.CSSProperties}></span>
                </span>
              </div>
            </div>
        </div>
      );
    }

export default Timer