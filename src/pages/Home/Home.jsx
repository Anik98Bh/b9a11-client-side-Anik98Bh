import Banner from "../../components/Banner/Banner";
import Community from "./Community/Community";
import PeoplePlausible from "./PeoplePlausible/PeoplePlausible";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PeoplePlausible></PeoplePlausible>
            <Community></Community>
        </div>
    );
};

export default Home;