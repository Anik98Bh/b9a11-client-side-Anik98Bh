import { Slide } from "react-awesome-reveal";

const Community = () => {
    return (
        <div className="flex gap-5 px-60 mt-36">
            <div className="">
                <Slide triggerOnce>
                    <h1 className="text-7xl font-bold font-acma">Our Community</h1>
                    <p className="mt-10">We believe that <b>Alternative Stocks</b> is the most human place on the internet. Our community is powered by the creativity, passion, and generosity of our volunteer moderators and users who spend time here and make it their own.</p>
                    <button className="bg-orange-600 mt-8 text-xl rounded-full px-5 py-2 font-bold text-white">Visit Alternative Stocks</button>
                </Slide>
            </div>
            <div className="w-">
                <img className="rounded-xl" src="https://i.postimg.cc/9MsBLzmj/hannah-busing-Zyx1b-K9mqm-A-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};

export default Community;