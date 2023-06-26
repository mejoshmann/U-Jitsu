import { useEffect, useState } from "react";
import axios from "axios";
import "./News.scss";

function News() {
  const [scrapedData, setScrapedData] = useState([]);
  // const [cover, setCover] = useState("");
  // const [title, setTitle] = useState("");
  // const [local, setLocal] = useState("");
  // const [date, setDate] = useState("");
  // const [daysLeft, setDaysLeft] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:1080/scrape");
        // const { title, date, location, daysLeft } = response.data;
        const data = response.data;
        setScrapedData(data);
        // setCover(cover);
        // setTitle(title);
        // setDate(location);
        // setLocal(date)
        // setDaysLeft(daysLeft);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="news">
        {scrapedData.map((data, index) => (
          <div className="news__comps" key={index}>
            <div className="news__comp--container">
              <h2 className="news__comp-heading">{data.title}</h2>
              <div className="news__comp--local">{data.local}</div>
              <div className="news__comp--date">{data.date}</div>
              <div className="news__comp--days">{data.daysLeft}</div>
              <div className="news__comp--link"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default News;
