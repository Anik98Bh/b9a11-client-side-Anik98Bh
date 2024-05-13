import Banner from "../../components/Banner/Banner";
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
        </div>
    );
};

export default Home;