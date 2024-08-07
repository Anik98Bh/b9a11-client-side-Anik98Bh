import { Slide } from "react-awesome-reveal";

const CardQuery = ({ query }) => {
    const { name, brand, title, reason, userName, image,userImage,date } = query;
    return (
        <div className="border px-5 py-2 rounded bg-base-100">
            <figure>
                <img className="h-[282px] w-full rounded" src={image} alt="" />
            </figure>
            <div className="space-y-4 mt-3">
                <Slide triggerOnce>
                    <div className="flex justify-between">
                        <h2 className="text-xl font-acma text-wrap">{name}</h2>
                        <p className="text-wrap">{date}</p>
                    </div>
                    <hr />
                    <div className="flex gap-4 items-center">
                        <img className="w-10 h-10 rounded-full" src={userImage} alt="" />
                        <p>{userName}</p>
                    </div>
                    <hr />
                    <h2 className="text-xl font-acma"><b>Brand: </b>{brand}</h2>
                    <p><b>Query:</b> {title}</p>
                    <p><b className="text-red-600">Reason:</b> {reason}</p>
                   
                </Slide>
            </div>
        </div>
    );
};

export default CardQuery;