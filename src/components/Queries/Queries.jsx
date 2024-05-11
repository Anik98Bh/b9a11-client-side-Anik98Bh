import { useLoaderData } from "react-router-dom";
import DataCart from "./DataCart";

const Queries = () => {
    const queries = useLoaderData();
    console.log(queries)

    return (
        <div>
            <h1>Queries</h1>
            <div className="grid grid-cols-2 gap-10">
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