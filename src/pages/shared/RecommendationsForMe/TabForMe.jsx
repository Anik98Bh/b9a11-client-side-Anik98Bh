import { GoDotFill } from "react-icons/go";

const TabForMe = ({ query }) => {
    const { recommendedImage, recommendedName, productName, creatorEmail, creatorName, recommenderEmail, recommenderName, createdAt } = query;

    return (
        <tr>
            <th>
                <button
                    className="btn btn-sm btn-circle">
                    <GoDotFill className="text-3xl text-green-600" />
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                        <img src={recommendedImage} alt="" />
                    </div>
                </div>
            </td>
            <td>
                <div className="btn btn-sm bg-orange-50 p-2 rounded-full font-bold">{recommenderEmail}</div>
            </td>
            <td>
                <div>
                    <div className="btn btn-sm bg-blue-50 p-2 rounded-full font-bold">{recommenderName}</div>
                </div>
            </td>
            <td>
                <p className="bg-green-100 px-2 rounded-full font-bold btn btn-sm">{recommendedName}</p>
            </td>
            <td>
                <p className="btn btn-sm bg-red-50 p-2 rounded-full font-bold">{createdAt}</p>
            </td>
            <td>
                <div>
                    <div className="font-bold">{creatorName}</div>
                    <div className="text-sm opacity-90">{creatorEmail}</div>
                </div>
            </td>
            <td>
                <p className="bg-green-100 px-2 rounded-full font-bold btn btn-sm">{productName}</p>
            </td>
        </tr>
    );
};

export default TabForMe;