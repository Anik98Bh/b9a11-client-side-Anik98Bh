import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth/useAuth";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateQueries = () => {
    const query = useLoaderData();
    const { id } = useParams();
    const { user } = useAuth();
    const queryItem = query.find(q => q._id === id)
    const { name, brand, title, reason, image, _id } = queryItem;

    const handleUpdateQueries = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const title = form.title.value;
        const reason = form.reason.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const date = new Date().toLocaleString();

        const updatedQueries = { name, brand, title, reason, userName, email, image, userImage: user.photoURL, date, _id };

        // send data to the server
        fetch(`http://localhost:5000/myQueries/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedQueries),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: ' Queries Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className="bg-lime-50">
            <h1 className="text-center text-3xl font-bold">Update Queries</h1>
            <form onSubmit={handleUpdateQueries} className="card-body animate__animated animate__zoomIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Brand</span>
                        </label>
                        <input type="text" name="brand" defaultValue={brand} placeholder="Product Brand" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Image-URL</span>
                        </label>
                        <input type="text" name="image" defaultValue={image} placeholder=" Image-URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Query Title</span>
                        </label>
                        <input type="text" name="title" defaultValue={title} placeholder="Query Title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Boycotting Reason</span>
                        </label>
                        <input type="text" name="reason" defaultValue={reason} placeholder="Boycotting Reason" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="userName" defaultValue={user?.displayName} placeholder="User name" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-outline btn-primary btn-block text-xl font-bold font-acma" type="submit" value="Update Query" />
                </div>
            </form>
        </div>
    );
};

export default UpdateQueries;