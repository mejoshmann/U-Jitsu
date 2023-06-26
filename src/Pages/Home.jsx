import News from "../components/News/News";
import Chart from "../components/Chart/Chart";
import User from "../components/User/User";

function Home() {
    return(
        <>
            <User/>            
            <News/>
            <Chart/>
        </>
    )
}

export default Home;