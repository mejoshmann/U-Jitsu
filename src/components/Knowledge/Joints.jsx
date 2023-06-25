import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Education.scss";


function Joints() {
        const [jointData, setJointData] = useState([]);

        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(
                "http://localhost:1080/knowledge/page"
              );
              setJointData(response.data[4].jointlocks);
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
            <h2 className="education__heading">Joint Locks</h2>
      
            {jointData.map((joint) => (
              <div className="education__container" key={joint.id}>
                <div className="education__headCont">
                  <h2 className="education__heading">{joint.heading}</h2>
                  <p className="education__point">{joint.points}</p>
                </div>
                <p className="education__info">{joint.info}</p>
              </div>
            ))}
          </div>
        );
      }
    


export default Joints;