import { useEffect, useState } from "react";
import axios from "axios";
import "./Today.scss";

function Today() {

const [hours, setHours] = useState();

  useEffect(() => {
    axios
        .get("http://localhost:1080/")
        .then((response) => {
            const weekTrain = response.data[4].weekTrain;
            const today = new Date().getDate();
            const todayData = weekTrain.find((item) => item.date === today);
            if (todayData) {
            setHours(todayData.hours);
            } else {
                console.error("No training data available for today.");
            }
        })
        .catch((error) => {
            console.error("Error fetching training data:", error);
        });
},[]);

  return (
    <>
      <div className="today">
        <div className="today__leftCont">
          <div class="blob"></div>
        </div>
        <div className="today__rightCont">
          <h4 className="today__hours">You trained {hours || "0"} hours today</h4>
          <h4 className="today__positions">Positions trained</h4>
          <h5 className="today__positions--trained">Something</h5>
        </div>
      </div>
    </>
  );
}

export default Today;
