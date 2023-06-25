import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import axios from "axios";
import "./News.scss";

function News() {

  const [eventDate, setEventDate] = useState("");
  const [event, setEvent] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:1080/scrape.js");
        const { eventDate, event } = response.data;
        console.log("response",response);

        setEventDate(eventDate);
        setEvent(event);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (eventDate && event) {
      const blob = new Blob([eventDate], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "data.json");
    }
  }, [eventDate, event]);



  return (
    <>
     <div className="news">
     <div className="news__comp--heading1">
  <h1>{event}</h1>
</div>
<div className="news__comp--date">{eventDate}</div>
        <div className="news__comps">
          <div className="news__comp--container">
            <div className="news__comp--heading1">
              <h1>{event}</h1>
            </div>
            <div className="news__comp--local"></div>
            <div className="news__comp--date">{eventDate}</div>
            <div className="news__comp--link"></div>
          </div>
     
        </div>
      </div>
    </>
  );
}

export default News;
