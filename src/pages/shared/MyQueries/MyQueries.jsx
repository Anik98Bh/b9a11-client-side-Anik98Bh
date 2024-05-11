import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";
import QueryData from "./QueryData";

const MyQueries = () => {
    const {user}=useAuth();
    const {item,setItem}=useState();

    useEffect(() => {
        fetch(`http://localhost:5000/myQueries/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)
            })
    }, []);

    return (
        <div>
            <div className="flex px-10 gap-5">
                <div className=" space-y-7 pl-12 w-1/2 ">
                    <Slide triggerOnce>
                        <h2 className="text-6xl font-bold mt-10">Make Your Queries!</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="">
                            <Link to="/addQueries">
                                <button className="btn font-bold btn-secondary">Add Query</button>
                            </Link>
                        </div>
                    </Slide>
                </div>
                <div className="carousel w-1/2 h-[400px]">
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
            {/* <div>
                {
                    item.map(query=><QueryData 
                        key={query._id} 
                        query={query}
                        ></QueryData>)
                }
            </div> */}

        </div>
    );
};

export default MyQueries;