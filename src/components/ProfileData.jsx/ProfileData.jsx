import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProfileData.scss";

function ProfileData() {
  const [formData, setFormData] = useState({
    name: "",
    belt: "",
    experience: "",
    gender: "",
    age: "",
    location: "",
    school: "",
    bio: "",
  });

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      try {
      setFormData(JSON.parse(storedFormData));
    } catch (error) {
      console.error("Error parsing stored data", error)
    }
  }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);





  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:1080/profile", formData)
      .then((response) => {
        console.log("Data sent successfully", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

 

  return (
    <>
      <div className="profile">
        <div className="profile__account">
         <Link to="/Settings"><button className="profile__back">&lt; Account</button></Link>
          <h2 className="profile__myProfile">My Profile</h2>
        </div>
        <form className="proForm" onSubmit={handleSubmit}>
          <label htmlFor="name" className="proForm__userName">
            User Name
            <input
              type="text"
              id="name"
              className="proForm__name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value})
                
              }
            />
          </label>
          <div className="proForm__belt--radios">
            <h4 className="proForm__belt--heading">Belt Colour</h4>
            <div className="proForm__belt--container">
            <label htmlFor="white" className="proForm__belt">
              White
              <input
                type="radio"
                id="white"
                name="belt"
                className="proForm__belt--radio"
                value="white"
                onChange={(e) =>
                  setFormData({ ...formData, belt: e.target.value })
                }
              />
            </label>

            <label htmlFor="blue" className="proForm__belt">
              Blue
              <input
                type="radio"
                id="blue"
                name="belt"
                className="proForm__belt--radio"
                value="blue"
                onChange={(e) =>
                  setFormData({ ...formData, belt: e.target.value })
                }
              />
            </label>
            <label htmlFor="purple" className="proForm__belt">
              Purple
              <input
                type="radio"
                id="purple"
                name="belt"
                className="proForm__belt--radio"
                value="purple"
                onChange={(e) =>
                  setFormData({ ...formData, belt: e.target.value })
                }
              />
            </label>
            <label htmlFor="brown" className="proForm__belt">
              Brown
              <input
                type="radio"
                id="brown"
                name="belt"
                className="proForm__belt--radio"
                value="Brown"
                onChange={(e) =>
                  setFormData({ ...formData, belt: e.target.value })
                }
              />
            </label>
            <label htmlFor="black" className="proForm__belt">
              Black
              <input
                type="radio"
                id="black"
                name="belt"
                className="proForm__belt--radio"
                value="Black"
                onChange={(e) =>
                  setFormData({ ...formData, belt: e.target.value })
                }
              />
            </label>
          </div>
          </div>
          <div className="proForm__experience">
            <h4 className="proForm__experience--heading">
              Your grappling experience
            </h4>
            <div className="proForm__yrBtns">
              <label htmlFor="lessOne" className="proForm__experience--radios">
                {`< 1 Less`}
                <input
                  type="radio"
                  id="lessOne"
                  name="years"
                  className="proForm__yrRadio"
                  value="< 1"
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                />
              </label>
              <label htmlFor="one" className="proForm__experience--radios">
                1 Year
                <input
                  type="radio"
                  id="one"
                  name="years"
                  className="proForm__yrRadio"
                  value="1"
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                />
              </label>
              <label htmlFor="two" className="proForm__experience--radios">
                2 Years
                <input
                  type="radio"
                  id="two"
                  name="years"
                  className="proForm__yrRadio"
                  value="2"
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                />
              </label>
              <label htmlFor="three" className="proForm__experience--radios">
                3 Years
                <input
                  type="radio"
                  id="three"
                  name="years"
                  className="proForm__yrRadio"
                  value="3"
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                />
              </label>
              <label htmlFor="four" className="proForm__experience--radios">
                4 Years
                <input
                  type="radio"
                  id="four"
                  name="years"
                  className="proForm__yrRadio"
                  value="4"
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                />
              </label>
              <label htmlFor="five" className="proForm__experience--radios">
                5 +
                <input
                  type="radio"
                  id="five"
                  name="years"
                  className="proForm__yrRadio"
                  value="5 +"
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                />
              </label>
            </div>
          </div>

          <div className="proForm__genCont">
            <label htmlFor="male" className="proForm__gender">
              Male
              <input
                type="radio"
                className="proForm__male"
                name="gender"
                id="male"
                value="male"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
            </label>
      
            <label htmlFor="female" className="proForm__gender">
              Female
              <input
                type="radio"
                className="proForm__female"
                name="gender"
                id="female"
                value="female"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
            </label>
          </div>

          <label htmlFor="age" className="proForm__age">
            Your Age
            <input
              type="range"
              min="1"
              max="100"
              id="age"
              className="proForm__slider"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
            <p className="proForm__age--value" defaultValue={0}>
              {formData.age}
            </p>
          </label>
          <label htmlFor="location" className="proForm__location">
            Location
            <input
              type="text"
              id="location"
              className="proForm__localInput"
              placeholder="Your Location?"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </label>
          <label htmlFor="school" className="proForm__school">
            School
            <input
              type="text"
              id="school"
              className="proForm__academy"
              placeholder="Your Academy?"
              value={formData.school}
              onChange={(e) =>
                setFormData({ ...formData, school: e.target.value })
              }
            />
          </label>
          <label htmlFor="bio" className="proForm__bio">
            Bio
            <input
              type="text"
              id="bio"
              className="proForm__bioInput"
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
              placeholder="A bit about yourself"
            />
          </label>
          <label htmlFor="submit" className="proForm__submit">
            <button className="proForm__submitBtn" type="submit">
              Update
            </button>
           
          </label>
        </form>
      </div>
    </>
  );
}

export default ProfileData;
