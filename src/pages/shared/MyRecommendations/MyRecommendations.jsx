import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import MyTableRecom from "./MyTableRecom";

const MyRecommendations = () => {
    const { user } = useAuth();
    const [item, setItem] = useState([]);
    const axiosSecure=useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(`/recommendation/${user?.email}`)
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
                        <th>Creator Info</th>
                        <th>Creator <br /> Product</th>
                        <th>Recommending <br /> Product</th>
                        <th>Recommending Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map(query =><MyTableRecom 
                            key={query._id}
                            item={item}
                            setItem={setItem} 
                            query={query}></MyTableRecom>)
                    }
                   
                </tbody>

            </table>
        </div>
    );
};

export default MyRecommendations;