import { Slide } from "react-awesome-reveal";
import { useLoaderData, useParams } from "react-router-dom";

const QueryDetails = () => {
    const query = useLoaderData();
    const { id } = useParams();
    const queryItem = query?.find(q => q?._id === id)
    const { name, brand, title, reason, image, date } = queryItem;
    console.log(query)

    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-bold font-mono">Query Details</h1>
            </div>
            <div className="md:flex gap-4">
                <div className=" lg:w-3/4 bg-base-100 px-5 py-5">
                    <figure className="md:p-10"><img className="md:h-[500px] w-full rounded animate__animated animate__slideInLeft" src={image} alt="" /></figure>
                    <Slide triggerOnce>
                    <div className=" md:px-10 space-y-4 mt-2">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-acma text-wrap">{name}</h2>
                            <p className="text-wrap bg-red-50 p-2 rounded-full">{date}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <h2 className="text-xl font-acma text-wrap">{brand}</h2>
                            <p className="text-wrap bg-green-100 p-2 rounded-full">Recommendation Count: 0</p>
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
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Recommended product Name
                                </span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Recommendation Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Recommendation Reason</span>
                            </label>
                            <input type="text" name="reason" placeholder="Reason" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Recommended Product Image
                                </span>
                            </label>
                            <input type="text" name="image" placeholder="ImageURL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent font-bold" type="submit" value="Add Recommendation" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QueryDetails;