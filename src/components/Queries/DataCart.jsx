import { Slide } from "react-awesome-reveal";

const DataCart = ({query}) => {
    const { name, brand, title, reason, userName, image,userImage,date } = query;

    return (
        <div className="border px-5 py-2 rounded bg-base-100 flex gap-10">
            <figure className="my-3">
                <img className="h-[365px] w-96 rounded border animate__animated  animate__backInUp" src={image} alt="" />
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
                    <hr />
                    <div className="flex justify-between">
                        <button className="bg-green-200 rounded-full btn-sm font-bold">Recommendation Count: 0</button>
                        <button className="btn-sm bg-blue-100 rounded-full font-bold text-red-600">Recommend</button>
                    </div>
                   
                </Slide>
            </div>
        </div>
    );
};

export default DataCart;