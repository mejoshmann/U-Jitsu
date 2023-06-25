import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Education.scss";

function Points() {
  const [pointsData, setPointsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1080/knowledge/page"
        );
        setPointsData(response.data[0].points);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="education">
      <Link to="/Knowledge" className="education__back">
        Back
      </Link>
      <h2 className="education__heading">Points Scoring</h2>

      {pointsData.map((point) => (
      
        <div className="education__container" key={point.id}>
          <div className="education__headCont">
            <h2 className="education__heading">{point.heading}</h2>
            <p className="education__point">{point.points}</p>
          </div>
          <p className="education__info">{point.info}</p>
        </div>
      ))}
    </div>
  );
}

export default Points;
