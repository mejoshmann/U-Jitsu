import { useEffect, useState } from "react";
import axios from "axios";
import "./News.scss";

function News() {
  const [scrapedData, setScrapedData] = useState([]);
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [local, setLocal] = useState("");
  const [date, setDate] = useState("");
  const [daysLeft, setDaysLeft] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:1080/scrape");
        const { title, date, location, daysLeft } = response.data;
        const data = response.data;
        setScrapedData(data);
        setCover(cover);
        setTitle(title);
        setDate(location);
        setLocal(date)
        setDaysLeft(daysLeft);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="news">
        <h2 className="news__upcoming">Upcoming Events</h2>
        <div className="news__container">
        {scrapedData.map((data, index) => (
          <div className="news__comps" key={index}>
              <h2 className="news__heading">{data.title}</h2>
              <div className="news__data">
              <div className="news__local">{data.local}</div>
              <div className="news__date">{data.date}</div>
              <button className="news__register">Register</button>
              </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default News;
