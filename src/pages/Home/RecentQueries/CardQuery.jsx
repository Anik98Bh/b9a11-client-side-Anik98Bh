import { Slide } from "react-awesome-reveal";

const CardQuery = ({ query }) => {
    const { product_image, date_posted, alternation_reason, brand_name, product_name, query_title } = query;
    return (
        <div className="border px-5 py-5 rounded bg-base-100">
            <figure>
                <img className="h-[282px] w-full rounded" src={product_image} alt="" />
            </figure>
            <div className="space-y-4 mt-3">
            <Slide triggerOnce>
                <p className="text-end">{date_posted}</p>
                <h2 className="text-2xl font-acma">{product_name}</h2>
                <h2 className="text-xl font-acma"><b>Brand: </b>{brand_name}</h2>
                <p><b>Query:</b> {query_title}</p>
                <p><b>Reason:</b> {alternation_reason}</p>
                </Slide>
            </div>
        </div>
    );
};

export default CardQuery;