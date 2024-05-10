
const AddQueries = () => {

    const handleCheckout=e=>{
        e.preventDefault()
        // const form = e.target;
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
                            <span className="label-text"> Image-URL</span>
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
                        <input type="" name="reason" placeholder="Boycotting Reason"  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email"  placeholder="email" className="input input-bordered" />
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