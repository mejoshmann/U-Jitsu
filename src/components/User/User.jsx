import { useState, useEffect } from "react";
import axios from "axios";
import "./User.scss";

function User() {
  const [name, setName] = useState("");
  const [belt, setBelt] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:1080/training")
      .then((response) => {
        const name = response.data[0]?.profile[0]?.name;
        const belt = response.data[0]?.profile[0]?.belt;
        if (name) {
          setName(name);
        } else {
          console.error("Name not found.");
        }
        if (belt) {
            setBelt(belt);
          } else {
            console.error("Belt not found.");
          }

      })
      .catch((error) => {
        console.error("Error fetching name:", error);
      });
  }, []);

  return (
    <>
      <div className="user">
        <h3 className="user__greeting">Hello</h3>
        <div className="user__container">
          <h2 className="user__heading">{name}</h2>
          <div className="user__belt" style={{ backgroundColor: belt }}>
            <div className="user__belt-tip"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
