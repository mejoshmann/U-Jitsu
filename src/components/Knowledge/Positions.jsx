    import axios from "axios";
    import { useState, useEffect } from "react";
    import { Link } from "react-router-dom";
    import "./Education.scss";
    
    function Positions() {
      const [positionData, setPositionData] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://localhost:1080/knowledge/page"
            );
            setPositionData(response.data[2].positions);
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
          <h2 className="education__heading">Positions</h2>

          {positionData.map((position) => (
            <div className="education__container" key={position.id}>
              <div className="education__headCont">
                <h2 className="education__heading">{position.heading}</h2>
                <p className="education__point">{position.points}</p>
              </div>
              <p className="education__info">{position.info}</p>
            </div>
          ))}
        </div>
      );
    }
    
export default Positions;