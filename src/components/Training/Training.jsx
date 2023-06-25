import axios from "axios";
import { useState } from "react";
import "./Training.scss";

function Training() {


  const currentDate = new Date();
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);


  const [trainData, setTrainData] = useState({
    date: "",
    hours: "",
    journal: "",
    takedowns: "",
    positions: "",
    submissions: "",
    movements: "",
    gi: "",
    nogi: "",
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post("http://localhost:1080/training", trainData)
    .then((response) => {
      console.log("Training sent successfully", response.data);
    })
    .catch((error) => {
      console.error("Error sending Training data: ", error);
    });
  };
  // const [toggled, setToggled] = useState(false);
  const [showButtons, setShowButtons] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
  });

  const handleButtonClick = (buttonName, e) => {
    e.preventDefault();
    setShowButtons((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const handleToggle = () => {
    setTrainData((prevState) => ({
      ...prevState,
      gi: !prevState.gi,
    }));
  }

  return (
    <>
      <form action="post" className="form" onSubmit={handleSubmit}>
        <div className="form__date">{formattedDate}</div>
        <label className="form__toggle">
          <div
            className={`toggle-slider ${trainData.gi ? "on" : "off"}`}
            onClick={handleToggle}
          >
            <div className="slider"></div>
            <p className="form__toggle--noGi">{trainData.noGi ? "No Gi" : "Gi"}</p>
          </div>
        </label>
        <label className="form__hours">Hours Trained
          <input type="number" pattern="[0-9]" className="form__hours-input"
          onChange={(e)=> setTrainData({...trainData, hours: parseInt(e.target.value) || ""})}
          />
        </label>
        <div className="form__positions">
          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button1", e)}
          >
            Takedowns
          </button>
          {showButtons.button1 && (
            <div className="form__button-container">
              <button type="button" className="form__button--move" value="Single Leg"
              onClick={(e) => setTrainData({...trainData, takedowns: "Single Leg"})} 
              >Single Leg/</button>
              <button type="button" className="form__button--move" value="Double Leg"
              onClick={(e) => setTrainData({...trainData, takedowns: "Double Leg"})} 
              >Double Leg</button>
              <button type="button" className="form__button--move" value="Osoto Gari"
              onClick={(e) => setTrainData({...trainData, takedowns: "Osoto Gari"})} 
              >Osoto Gari</button>
              <button type="button" className="form__button--move" value="Shoulder Throw"
              onClick={(e) => setTrainData({...trainData, takedowns: "Shoulder Throw"})} 
              >Shoulder Throw</button>
            </div>
          )}

          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button2", e)}
          >
            Positions
          </button>
          {showButtons.button2 && (
            <div className="form__button-container">
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, positions: "Guard"})} 
              >Guard</button>
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, positions: "Side Control"})} 
              >Side Control</button>
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, positions: "Mount"})}
              >Mount</button>
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, positions: "Back Control"})}
              >Back Control</button>
            </div>
          )}

          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button3", e)}
          >
            Submissions
          </button>
          {showButtons.button3 && (
            <div className="form__button-container">
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, submissions: "Triangle"})}
              >Triangle</button>
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, submissions: "Arm Bar"})}
              >Arm Bar</button>
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, submissions: "Guillotine"})}
              >Guillotine</button>
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, submissions: "Rear Naked Choke"})}
              >Rear Naked Choke</button>
            </div>
          )}

          <button
            className="form__button"
            onClick={(e) => handleButtonClick("button4", e)}
          >
            Movements
          </button>
          {showButtons.button4 && (
            <div className="form__button-container">
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, movements: "Bridging"})}
              >Bridging</button>
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, movements: "Shrimping"})}
              >Shrimping</button>
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, movements: "Escapes"})}
              >Escapes</button>
              <button type="button" className="form__button--move"
              onClick={(e) => setTrainData({...trainData, movements: "Guard Passes"})}
              >Guard Passes</button>
            </div>
          )}
        </div>

        <label htmlFor="journal" className="form__journal">
          <textarea type="text" className="form__journal-input" 
          onChange={(e) => setTrainData({...trainData, journal: e.target.value})} />
        </label>
        <label htmlFor="submit" className="form__submit">
          <button className="form__submit--button" id="submit">Add Training</button>
        </label>
      </form>
    </>
  );
}

export default Training;
