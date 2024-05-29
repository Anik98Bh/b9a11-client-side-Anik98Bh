import Banner from "../../components/Banner/Banner";
import Asking from "./Asking/Asking";
import Community from "./Community/Community";
import PeoplePlausible from "./PeoplePlausible/PeoplePlausible";
import RecentQueries from "./RecentQueries/RecentQueries";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <RecentQueries></RecentQueries>
            <PeoplePlausible></PeoplePlausible>
            <Community></Community>
            <Asking></Asking>
        </div>
    );
};

export default Home;