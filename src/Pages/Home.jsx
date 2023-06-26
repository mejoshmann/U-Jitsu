import News from "../components/News/News";
import Chart from "../components/Chart/Chart";
import User from "../components/User/User";
import Schedule from "../components/Schedule/Schedule";

function Home() {
    return(
        <>
            <User/>            
            <News/>
            <Schedule />
            <Chart/>
        </>
    )
}

export default Home;