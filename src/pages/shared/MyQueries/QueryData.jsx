import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const QueryData = ({ query, item, setItem }) => {
    const { name, brand, title, reason, userName, image, userImage, date, _id } = query;

    const handleDelete = _id => {
        console.log(_id)
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
                fetch(`http://localhost:5000/myQueries/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Queries has been deleted.",
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
        <div>
            <div className="border px-5 py-2 rounded bg-gray-50">
                <figure className="my-3">
                    <img className="h-[282px] w-full rounded-xl border animate__animated  animate__backInUp" src={image} alt="" />
                </figure>
                <div className="space-y-4 mt-3">
                    <Slide triggerOnce>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-acma text-wrap">{name}</h2>
                            <p className="text-wrap bg-red-50 p-2 rounded-full font-bold">{date}</p>
                        </div>
                        <hr />
                        <div className="flex gap-4 items-center">
                            <img className="w-10 h-10 rounded-full" src={
                                    userImage ? userImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rlHILcxkNp4iwSUhRCeGjQAnZcisSGs9txj5d4FvFr782-NoItG0iDd0GD0eK4WITxU&usqp=CAU'
                                }  alt="" />
                            <p><b>{userName}</b></p>
                        </div>
                        <hr />
                        <h2 className="text-xl font-acma"><b>Brand: </b>{brand}</h2>
                        <p><b>Query:</b> {title}</p>
                        <p><b className="text-red-600">Reason:</b> {reason}</p>
                        <hr />
                        <div className="flex justify-between">
                            <Link to={`/updateQueries/${_id}`}>
                                <button className="bg-green-200 rounded-full btn-sm font-bold">Update</button>
                            </Link>
                            <Link to={`/queries/${_id}`}><button className="btn-sm bg-blue-200 rounded-full font-bold text-red-600">View Details</button></Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="bg-red-200 rounded-full btn-sm font-bold">Delete</button>
                        </div>

                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default QueryData;