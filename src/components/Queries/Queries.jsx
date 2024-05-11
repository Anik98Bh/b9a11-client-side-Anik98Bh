import { useLoaderData } from "react-router-dom";
import DataCart from "./DataCart";

const Queries = () => {
    const queries = useLoaderData();
    console.log(queries)

    return (
        <div>
            <h1 className="text-center text-4xl font-acma mb-5">Queries</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    queries.map(query=><DataCart 
                        key={query._id}
                        query={query}
                    ></DataCart>)
                }
            </div>
        </div>
    );
};

export default Queries;