import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const MyTableRecom = ({ query, item, setItem }) => {
    const { _id, recommendedImage, recommendedName, productName, creatorEmail, creatorName, recommenderEmail, recommenderName, createdAt } = query;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/recommendation/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Recommendation has been deleted.",
                                icon: "success"
                            });
                            const remaining = item.filter(query => query._id !== _id);
                            setItem(remaining);
                        }
                    })
            }
        });
    }

    return (
        <tr>
            <th>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-sm btn-circle">
                    <RiDeleteBin6Line className="text-3xl text-red-600" />
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
                <div>
                    <div className="font-bold">{creatorName}</div>
                    <div className="text-sm opacity-90">{creatorEmail}</div>
                </div>
            </td>
            <td>
                <p className="bg-green-100 px-2 rounded-full font-bold btn btn-sm">{productName}</p>
            </td>
            <td>
                <p className="bg-green-100 px-2 rounded-full font-bold btn btn-sm">{recommendedName}</p>
            </td>
            <td>
                <p className="btn btn-sm bg-red-50 p-2 rounded-full font-bold">{createdAt}</p>
            </td>
        </tr>
    );
};

export default MyTableRecom;