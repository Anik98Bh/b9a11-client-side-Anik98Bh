import { Slide } from "react-awesome-reveal";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";

const QueryDetails = () => {
    const query = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { id } = useParams();
    const [recommendation, setRecommendation] = useState([]);
    const queryItem = query?.find(q => q?._id === id)
    // console.log(queryItem)
    const newDate = new Date().toLocaleString();
    const { name, brand, title, _id, email, userName, reason, image, date } = queryItem;

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;

        const recommendedName = form.recommendedName.value;
        const recommendedTitle = form.recommendedTitle.value;
        const recommendedReason = form.recommendedReason.value;
        const recommendedImage = form.recommendedImage.value;

        const recommendationForm = { recommendedImage, recommendedName, recommendedReason, recommendedTitle, queryId: _id, queryTitle: title, productName: name, creatorEmail: email, creatorName: userName, recommenderEmail: user?.email, recommenderName: user?.displayName, createdAt: newDate };

        //console.log(recommendationForm)

        fetch('https://b9a11-server-side-anik98-bh.vercel.app/recommendation', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recommendationForm),
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Recommendation Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    useEffect(() => {
        axiosSecure.get(`/recommendation`)
            .then(res => {
                const data = res.data;
                const filterData = data?.filter(d => d.queryId === id)
                setRecommendation(filterData);
            })
    }, [axiosSecure, id])


    return (
        <div className="bg-slate-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold font-mono mb-2">Query Details</h1>
            </div>
            <div className="md:flex gap-4">
                <div className=" lg:w-3/4 bg-base-100 px-5 py-5">
                    <figure className="md:p-10"><img className="md:h-[500px] w-full rounded animate__animated animate__slideInLeft" src={image} alt="" /></figure>
                    <Slide triggerOnce>
                        <div className=" md:px-10 space-y-4 mt-2">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-acma text-wrap">{name}</h2>
                                <p className="text-wrap bg-red-50 p-2 rounded-full font-bold">{date}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <h2 className="text-xl font-acma text-wrap">{brand}</h2>
                                <p className="text-wrap bg-green-100 p-2 rounded-full">Recommendation Count: <b>{recommendation.length}</b></p>
                            </div>
                            <hr />
                            <p><b>Query:</b> {title}</p>
                            <hr />
                            <p><b className="text-red-600">Reason:</b> {reason}</p>
                        </div>
                    </Slide>
                </div>
                {/* form */}
                <div className="lg:w-1/4 shrink-0  bg-base-100 animate__animated animate__slideInRight">
                    <h1 className="text-3xl text-center font-bold mt-2">Recommendation Here</h1>
                    <p className="text-center font-bold mt-3">Please Give your Valuable Recommendation</p>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Recommended product Name
                                </span>
                            </label>
                            <input type="text" name="recommendedName" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Recommendation Title</span>
                            </label>
                            <input type="text" name="recommendedTitle" placeholder="Title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Recommendation Reason</span>
                            </label>
                            <input type="text" name="recommendedReason" placeholder="Reason" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Recommended Product Image
                                </span>
                            </label>
                            <input type="text" name="recommendedImage" placeholder="ImageURL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent font-bold" type="submit" value="Add Recommendation" />
                        </div>
                    </form>
                </div>
            </div>
            <h1 className="text-3xl text-center my-8 underline">Recommendations</h1>
            <div>
                {
                    recommendation.map(recommend =>
                        <div key={recommend._id}
                            className="box-content border rounded-xl w-1/2 ml-5 bg-violet-100 grid grid-cols-1 mb-10 px-5 py-3">

                            <div className="flex gap-5">
                                <div className="w-4/5 ">
                                    <Slide triggerOnce>
                                        <div className=" space-y-4">
                                            <div className="flex justify-between items-center">
                                                <h1 className="text-2xl font-bold">{recommend.recommenderName}</h1>
                                                <p className="text-wrap bg-red-100 p-2 rounded-full font-bold">{recommend.createdAt}</p>
                                            </div>
                                            <hr />
                                            <div className="flex justify-between items-center">
                                                <p>{recommend.recommenderEmail}</p>
                                                <p>Recommended Product: <b>{recommend.recommendedName}</b></p>
                                            </div>
                                            <hr />
                                            <p><b>Query:</b> {recommend.recommendedTitle}</p>
                                            <p><b className="text-red-600">Reason:</b> {recommend.recommendedReason}</p>
                                        </div>
                                    </Slide>
                                </div>
                                <div>
                                    <img className="h-44 w-36 rounded"
                                        src={recommend.recommendedImage} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default QueryDetails;