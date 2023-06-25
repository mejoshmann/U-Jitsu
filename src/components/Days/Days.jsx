import { useState } from "react";
import "./Days.scss";

function Days() {
  const today = new Date();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [offset, setOffset] = useState(0);
  const previousWeek = () => {
    setOffset(offset - 7);
  };
  const nextWeek = () => {
    setOffset(offset + 7);
  };

  const nextSevenDays = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i + offset);
    nextSevenDays.push(date);
  }

  return (
    <>
      <div className="days">
        {nextSevenDays.map((date, index) => {
          const dayIndex = (date.getDay() + index) % 7;
          const dayName =
            dayIndex >= 0 && dayIndex < dayNames.length
              ? dayNames[dayIndex]
              : "";
              const isCurrentDay = date.toDateString() === today.toDateString();

          return (
            <div
              key={index}
              className={`days__day ${dayName.toLowerCase()} ${
                isCurrentDay ? "current-day" : ""
              }`}
            >
              <p className={`days__${dayName.toLowerCase()}`}>{dayName}</p>
              <h3 className="days__date">{date.getDate().toString()}</h3>
            </div>
          );
        })}
      </div>
      <button onClick={previousWeek}>Previous Week</button>
      <button onClick={nextWeek}>Next Week</button>
    </>
  );
}

export default Days;
