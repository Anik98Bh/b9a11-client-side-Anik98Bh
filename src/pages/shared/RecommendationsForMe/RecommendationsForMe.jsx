import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import TabForMe from "./TabForMe";

const RecommendationsForMe = () => {
    const { user, loading } = useAuth();
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
        <div className="overflow-x-auto ">
            {/* head */}
            {
                loading ? <div className=" flex justify-center   mt-20">
                    <span className="loading loading-spinner loading-lg text-warning size-20"></span>
                </div> :
                    <table className="table bg-indigo-50 animate__animated animate__fadeInDown">
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
                                <th>Creator Product</th>
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
            }
        </div>
    );
};

export default RecommendationsForMe;