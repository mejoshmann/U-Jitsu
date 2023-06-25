import News from "../components/News/News";
import Chart from "../components/Chart/Chart";
import Pie from "../components/PieChart/Pie";
import User from "../components/User/User";

function Home() {
    return(
        <>
            <User/>            
            <News/>
            <Chart/>
            <Pie/>
        </>
    )
}

export default Home;