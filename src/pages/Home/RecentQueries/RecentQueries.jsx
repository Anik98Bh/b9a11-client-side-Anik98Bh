import { useEffect, useState } from "react";
import CardQuery from "./CardQuery";

const RecentQueries = () => {
    const [queries, setQueries]=useState([]);

    useEffect(()=>{
        fetch('query.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setQueries(data)
        })
    },[])

    return (
        <div className=" mt-16 px-6">
            <div className="text-center">
                <h1 className="text-5xl font-acma">Recent Queries:{queries.length}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    queries.map(query=><CardQuery 
                        key={query._id}
                        query={query}
                        ></CardQuery>)
                }
            </div>
        </div>
    );
};

export default RecentQueries;