import { useLoaderData } from "react-router-dom";
import DataCart from "./DataCart";
import { useState } from "react";
import { CiGrid2V, CiGrid31 } from "react-icons/ci";
import { BsGrid3X2 } from "react-icons/bs";
import useAuth from "../../hooks/useAuth/useAuth";

const Queries = () => {
    const { loading } = useAuth();
    const queries = useLoaderData();
    const [filterData, setFilterData] = useState(queries);

    const handleSearch = e => {
        const search = e.target.value;
        if (search) {
            const availableData = queries?.filter(query => query?.name.toLowerCase().includes(search.toLowerCase()));
            setFilterData(availableData);
        }
        else {
            setFilterData(queries)
        }
    }

    return (
        <div>
            <h1 className="text-center text-4xl font-acma mb-5">All Queries</h1>
            <div className="flex justify-between items-center">
                {/* grid column */}
                <div className="dropdown dropdown-right grid place-items-end my-8 mr-5">
                    <div tabIndex={0} role="button" className="btn btn-warning m-1">Lay Out</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28 flex">
                        <li><a><CiGrid31 className=" text-2xl" /></a></li>
                        <li><a><CiGrid2V className=" text-2xl" /></a></li>
                        <li><a><BsGrid3X2 className=" text-2xl" /></a></li>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

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