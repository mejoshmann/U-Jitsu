import { useEffect, useState } from "react";
import axios from "axios";
import "./Today.scss";

function Today() {
  // const [hours, setHours] = useState();
  // const [positions, setPositions] = useState(null);
  // const [journal, setJournal] = useState(null);
  const today = new Date();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [nextSevenDays, setNextSevenDays] = useState([]);
  const [trainingData, setTrainingData] = useState([]);

  const [offset, setOffset] = useState(0);
  const previousWeek = () => {
    setOffset(offset - 7);
  };
  const nextWeek = () => {
    setOffset(offset + 7);
  };

  useEffect(() => {
    axios
      .get("http://localhost:1080/training")
      .then((response) => {
        const trainingData = response.data[2];
        setTrainingData(trainingData);

        const calculatedDays = [];
        for (let i = 0; i < 7; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() + i + offset);
          calculatedDays.push({ date, index: i });
        }
        setNextSevenDays(calculatedDays);
      })
      .catch((error) => {
        console.error("No training data available for today.");
      });
  }, []);

  // const handleDayClick = (index) => {
  //   const selectedData = trainingData.find((data) => data.date === nextSevenDays[index].date.toDateString());
  //   if (selectedData) {
  //     setHours(selectedData.hours || null);
  //     setPositions(selectedData.positions || null);
  //     setJournal(selectedData.journal || null);
  //   } else {
  //     console.error("No training data available for this day.");
  //   }
  // };


  return (
    <>
      <div className="days">
        {nextSevenDays.map((day, index) => {
          const dayIndex = (day.date.getDay() + 7) % 7;
          const dayName =
            dayIndex >= 0 && dayIndex < dayNames.length
              ? dayNames[dayIndex]
              : "";
          const isCurrentDay = day.date.toDateString() === today.toDateString();

          return (
            <div
              key={index}
              className={`days__day ${dayName.toLowerCase()} ${
                isCurrentDay ? "current-day" : ""
              }`}
              // onClick={() => handleDayClick(index)}
            >
              <p className={`days__${dayName.toLowerCase()}`}>{dayName}</p>
              <h3 className="days__date">{day.date.getDate().toString()}</h3>
            </div>
          );
        })}
      </div>
      <button className="days__leftBtn" onClick={previousWeek}>{`<`}</button>
      <button className="days__rightBtn" onClick={nextWeek}>{`>`}</button>


      <div className="today">
        <div className="today__leftCont"></div>
        <div className="today__rightCont">
          {trainingData.training && trainingData.training.length > 0 ? (
            <>
              <h4 className="today__hours">
                You trained {trainingData.training[0]?.hours} hours today
              </h4>
              <h4 className="today__positions">
                Positions trained: {trainingData.training[0]?.positions}
              </h4>
              <h5 className="today__positions--trained">
                Journal: {trainingData.training[0]?.journal}
              </h5>
            </>
          ) : (
            <p>No training data available for today.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Today;
