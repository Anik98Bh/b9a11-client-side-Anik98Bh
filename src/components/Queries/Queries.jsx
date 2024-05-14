import { useEffect, useState } from "react";
import { BsGrid3X2 } from "react-icons/bs";
import { CiGrid2V } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import DataCart from "./DataCart";

const gridClass = "grid grid-cols-4 gap-3";
const listClass = "grid grid-cols-1 gap-4 lg:gap-28 md:grid-cols-2 lg:grid-cols-2";
const resetClass = "grid grid-cols-1 gap-4 lg:gap-10 md:grid-cols-2 lg:grid-cols-3";

const Queries = () => {
    const { loading } = useAuth();
    const queries = useLoaderData();
    const [filterData, setFilterData] = useState(queries);



    const [isGrid, setIsGrid] = useState(null);

    const toggleLayout = (status) => {
        // console.log("sta", status)
        setIsGrid(status);
    };

    const handleSearch = e => {
        const search = e.target.value;
        if (search) {
            const availableData = queries?.filter(query => query?.name.toLowerCase().includes(search.toLowerCase()));
            const data = availableData.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
            setFilterData(data);
        }
        else {
            const data = queries.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
            setFilterData(data)
        }
    }
    useEffect(() => {
        const data = queries.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
        setFilterData(data)
    }, [queries])

    return (
        <div className="bg-stone-100">
            <h1 className="text-center text-4xl font-acma mb-5">All Queries</h1>
            <div className="flex justify-between items-center mx-10">
                {/* grid column */}
                <div className="dropdown dropdown-right grid place-items-end my-8 mr-5">
                    <div tabIndex={0} role="button" className="btn btn-warning m-1 ">Lay Out</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28 flex">
                        <li onClick={() => toggleLayout(null)}><a>Reset</a></li>
                        <li onClick={() => toggleLayout(false)}><a><CiGrid2V className=" text-2xl" /></a></li>
                        <li onClick={() => toggleLayout(true)}><a><BsGrid3X2 className=" text-2xl" /></a></li>
                    </ul>
                </div>
                <div className="mb-5 flex justify-end mr-5 w-1/2">
                    <label className="input input-secondary input-bordered flex items-center gap-2 md:w-1/2">
                        <input onChange={handleSearch} name="search" type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
            </div>
            {loading ? <div className=" flex justify-center mt-20">
                <span className="loading loading-spinner loading-lg text-warning size-20"></span>
            </div> :
                <div className={isGrid === true ? gridClass : isGrid === false ? listClass : resetClass}>

                    {filterData?.map(query => <DataCart
                        key={query._id}
                        query={query}
                    ></DataCart>)
                    }
                </div>
            }
        </div>
    );
};

export default Queries;