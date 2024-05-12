import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";

const MyRecommendations = () => {
    const { user } = useAuth();
    const [item, setItem] = useState([]);
    const axiosSecure=useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(`/recommendation/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setItem(res.data);
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
                        <th>Image</th>
                        <th>Recommender Email</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <button className="btn btn-sm btn-circle">
                                <RiDeleteBin6Line className="text-3xl text-red-600" />
                            </button>
                        </th>
                        <td>
                            <div className="">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-20 h-20">
                                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <div className="font-bold">Hart Hagerty</div>
                                <div className="text-sm opacity-50">United States</div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default MyRecommendations;