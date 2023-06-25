import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Education.scss";


function Submissions() {
  const [submissionData, setSubmissionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1080/knowledge/page"
        );
        setSubmissionData(response.data[3].submissions);
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
      <h2 className="education__heading">Submissions</h2>

      {submissionData.map((submission) => (
        <div className="education__container" key={submission.id}>
          <div className="education__headCont">
            <h2 className="education__heading">{submission.heading}</h2>
            <p className="education__point">{submission.points}</p>
          </div>
          <p className="education__info">{submission.info}</p>
        </div>
      ))}
    </div>
  );
}

export default Submissions;