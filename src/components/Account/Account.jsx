import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import User from "../User/User";
import "./Account.scss";

function Settings() {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = () => {
    axios
      .delete("http://localhost:1080/profile")
      .then((response) => {
        console.log("Profile successfully deleted");
        console.log(response);
        alert("Profile Successfully deleted");
      })
      .catch((error) => {
        console.error("Error deleting profile", error);
        if (error.response && error.response.status === 404) {
          alert("No profile found. ");
        } else {
          setError("Error deleting profile section.");
        }
      })
      .finally(() => {
        setShowModal(false);
      });
  };
  return (
    <>
      <div className="settings">
        <h1 className="settings__heading">Account</h1>
        <div className="settings__profile-pic">
          <div className="settings__pic"></div>
        </div>
        <User />
        <div className="settings__belt">
          <div className="settings__belt--black"></div>
        </div>
        <div className="settings__cont">
          <p className="settings__p">Profile Information</p>
          <h3 className="settings__change-belt">Change belt level</h3>
          <h3 className="settings__edit-profile">Edit Profile</h3>
        </div>
        <div className="settings__cont">
          <p className="settings__p">Account Information</p>
          <h3 className="settings__email">Change Email</h3>
          <h3 className="settings__password">Update Password</h3>
        </div>
        <div className="settings__cont">
          <p className="settings__p">Change Notifications</p>
          <div className="settings__notifications-cont">
            <h4 className="settings__notifications--h4">Notifications</h4>
            <div className="settings__notifications--slider"></div>
          </div>
        </div>
        <div className="settings__cont">
          <p className="settings__p">Support</p>
          <h3 className="settings__support--email">Email Support</h3>
          <h3 className="settings__support--terms">Terms & Conditions</h3>
        </div>
        <button className="settings__delete" onClick={() => setShowModal(true)}>
          Delete Account
        </button>
        {error && <p className="error">{error}</p>}
        {showModal && (
          <div className="settings__modal">
            {/* <div className="settings__modalCont"> */}
              <h2 className="settings__confirm">Confirm Profile Delete</h2>
              <p className="settings__confirm--p">
                Are you sure you want to delete the profile?
              </p>
              <div className="settings__modal-buttons">
                <div className="settings__modal-button" onClick={handleDelete}>
                  Delete Account
                </div>
                <div
                  className="settings__modal-button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </div>
              </div>
            {/* </div> */}
          </div>
        )}
       <Link to="/Start"> <button className="settings__logout">Log Out</button></Link>
      </div>
    </>
  );
}

export default Settings;
