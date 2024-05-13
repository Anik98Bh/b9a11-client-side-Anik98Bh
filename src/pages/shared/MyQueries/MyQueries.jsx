import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";
import QueryData from "./QueryData";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { FaSortAlphaDownAlt, FaSortAlphaUp } from "react-icons/fa";

const MyQueries = () => {
    const { user } = useAuth();
    const [item, setItem] = useState([]);
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(`/myQueries/${user?.email}`)
            .then(res => {
                console.log(res.data);
                const data = res.data.slice().sort((a, b) => new Date (b.date) - new Date(a.date));
                setItem(data);
            })
    }, [axiosSecure, setItem, user?.email]);

    const handleSortAsc = () => {
        const sortedData = item.slice().sort((a, b) => new Date (b.date) - new Date(a.date));
        setItem(sortedData);
    }
    const handleSortDesc = () => {
        const sortedData = item.slice().sort((a, b) => new Date (a.date) - new Date(b.date));
        setItem(sortedData);
    }

    return (
        <div className="bg-stone-100">
            <div className="md:flex md:px-10 gap-5">
                <div className=" space-y-7 pl-12 md:w-1/2 bg-slate-100 rounded ">
                    <Slide triggerOnce>
                        <h2 className="text-6xl font-bold mt-10">Make Your Queries!</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="">
                            <Link to="/addQueries">
                                <button className="btn font-bold btn-secondary mb-3">Add Query</button>
                            </Link>
                        </div>
                    </Slide>
                </div>
                <div className="carousel md:w-1/2 md:h-[400px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/J7Z92kS9/elegant-smartphone-composition.jpg" className="w-full rounded-xl" />
                        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* 2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/K8HqzGdP/muhammad-taha-khan-zx-Bwhnwpbs-A-unsplash.jpg" className="w-full rounded-xl" />
                        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/nLZPTf9R/vinicius-amnx-amano-jf15-wy-Mow-unsplash.jpg" className="w-full rounded-xl" />
                        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* 4 */}
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/Fsxw9Qrp/joan-tran-re-Ey-SFady-JQ-unsplash.jpg" className="w-full rounded-xl" />
                        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* grid column */}
            <div className="dropdown dropdown-bottom grid place-items-end my-8 mr-5">
                <div tabIndex={0} role="button" className="btn btn-warning m-1">Sort by Date</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-20">
                    <li onClick={()=>handleSortAsc()}><a><FaSortAlphaDownAlt className=" text-2xl text-blue-700" /></a></li>
                    <li onClick={()=>handleSortDesc()}><a><FaSortAlphaUp className=" text-2xl text-orange-700" /></a></li>
                </ul>
            </div>
            {/* query post */}
            {item?.length > 0 ? <>  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                {
                    item?.map(query => <QueryData
                        key={query._id}
                        item={item}
                        setItem={setItem}
                        query={query}
                    ></QueryData>)
                }
            </div></> :
                < div className="text-center mt-14">
                    <h1 className="text-4xl text-center mb-3 font-bold font-mono">Query Not Found</h1>
                    <p>Please click Add-Query and Submit Your Query!</p>
                    <Link to="/addQueries">
                        <button className="btn btn-outline mt-2 font-bold btn-secondary">Add Query</button>
                    </Link>
                </div>

            }



        </div>
    );
};

export default MyQueries;