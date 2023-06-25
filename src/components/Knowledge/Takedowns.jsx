import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Education.scss';

function Takedowns() {
  const [takedownData, setTakedownData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1080/knowledge/page"
        );
        setTakedownData(response.data[1].takedowns);
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
      <h2 className="education__heading">Takedowns</h2>

      {takedownData.map((takedowns) => (
        <div className="education__container" key={takedowns.id}>
          <div className="education__headCont">
            <h2 className="education__heading">{takedowns.heading}</h2>
            <p className="education__point">{takedowns.points}</p>
          </div>
          <p className="education__info">{takedowns.info}</p>
        </div>
      ))}
    </div>
  );
}

export default Takedowns;