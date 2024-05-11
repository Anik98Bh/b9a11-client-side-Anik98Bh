import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth/useAuth";

const AddQueries = () => {
    const {user}=useAuth();
    console.log(user)

    const handleCheckout = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const title = form.title.value;
        const reason = form.reason.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const date = new Date().toLocaleString();

        const newQueries = { name, brand, title, reason, userName, email, image,userImage:user.photoURL, date};

        console.log(newQueries);

        // send data to the server
        fetch('http://localhost:5000/queries',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newQueries),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Queries Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })

    }

    return (
        <div>
            <h1 className="text-center text-3xl">Add Queries</h1>
            <form onSubmit={handleCheckout} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Product Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Brand</span>
                        </label>
                        <input type="text" name="brand" placeholder="Product Brand" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Image-URL</span>
                        </label>
                        <input type="text" name="image" placeholder=" Image-URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Query Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Query Title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Boycotting Reason</span>
                        </label>
                        <input type="text" name="reason" placeholder="Boycotting Reason" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="userName" defaultValue={user?.displayName} placeholder="User name" className="input input-bordered"/>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block text-xl font-bold font-acma" type="submit" value="Add Query" />
                </div>
            </form>
        </div>
    );
};

export default AddQueries;