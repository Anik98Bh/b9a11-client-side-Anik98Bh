import { useLoaderData } from "react-router-dom";
import DataCart from "./DataCart";

const Queries = () => {
    const queries = useLoaderData();
    console.log(queries)

    return (
        <div>
            <h1 className="text-center text-4xl font-acma mb-5">All Queries</h1>
            <div className="mb-5 flex justify-end mr-5">
                <label className="input input-secondary input-bordered flex items-center gap-2 md:w-1/2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    queries.map(query => <DataCart
                        key={query._id}
                        query={query}
                    ></DataCart>)
                }
            </div>
        </div>
    );
};

export default Queries;