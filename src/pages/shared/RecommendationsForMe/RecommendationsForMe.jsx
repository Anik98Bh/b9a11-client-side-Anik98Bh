import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import TabForMe from "./TabForMe";

const RecommendationsForMe = () => {
    const { user } = useAuth();
    const [item, setItem] = useState([]);
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(`/recommendation_for_me/${user?.email}`)
            .then(res => {
                setItem(res.data);
                console.log(res.data);
            })
    }, [axiosSecure, setItem, user?.email]);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Recommending Image</th>
                        <th>Recommender Email</th>
                        <th>Recommender Name</th>
                        <th>Recommending <br /> Product</th>
                        <th>Recommending Date</th>
                        <th>Creator Info</th>
                        <th>Creator <br /> Product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map(query => <TabForMe
                            key={query._id}
                            query={query}></TabForMe>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default RecommendationsForMe;