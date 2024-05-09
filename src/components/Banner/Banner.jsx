
const Banner = () => {
    return (
        <div className="md:flex">
            <div className="md:w-2/3">
                <h1 className="text-5xl text-center font-bold font-acma mt-24">Find Your Alternative Products <br /> & Grave It!</h1>
                <p className="px-5 mt-8 text-center">If you shop online, you’re familiar with product recommendations. Every time you visit your favorite brand’s website, you’ll see a list of products recommended just for you based on your search history, your past purchases, and countless other data points. Behind the scenes artificial intelligence (AI) and machine learning algorithms are crunching these numbers, trying to determine exactly what you want to see in real time.</p>
                <p className="px-5 mt-8 text-center">Product recommendations have played an outsized role in the rapid acceptance of ecommerce. Amazon and Netflix were early adopters of AI-powered product recommendations, investing millions to build and test their own proprietary solutions. Of course, this strategy paid off — and now a growing number of businesses have made product recommendations central to their digital business models.</p>
            </div>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div id="slide1" className="carousel-item relative">
                    <img src="https://i.postimg.cc/J7Z92kS9/elegant-smartphone-composition.jpg" className="rounded-box w-96" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left- right-16 -bottom-5">
                        <a href="#slide7" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative">
                    <img src="https://i.postimg.cc/FsGCMgpn/mae-mu-z8-PEo-NIl-Glg-unsplash.jpg" className="rounded-box w-96" />
                     <div className="absolute flex justify-end transform -translate-y-1/2 left- right-16 -bottom-5">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative">
                    <img src="https://i.postimg.cc/K8HqzGdP/muhammad-taha-khan-zx-Bwhnwpbs-A-unsplash.jpg" className="rounded-box w-96" />
                     <div className="absolute flex justify-end transform -translate-y-1/2 left- right-16 -bottom-5">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative">
                    <img src="https://i.postimg.cc/tgnrV0jL/nikhil-82-LJQZGw-W5o-unsplash.jpg" className="rounded-box w-96" />
                     <div className="absolute flex justify-end transform -translate-y-1/2 left- right-16 -bottom-5">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative">
                    <img src="https://i.postimg.cc/nLZPTf9R/vinicius-amnx-amano-jf15-wy-Mow-unsplash.jpg" className="rounded-box w-96" />
                     <div className="absolute flex justify-end transform -translate-y-1/2 left- right-16 -bottom-5">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative">
                    <img src="https://i.postimg.cc/Fsxw9Qrp/joan-tran-re-Ey-SFady-JQ-unsplash.jpg" className="rounded-box w-96" />
                     <div className="absolute flex justify-end transform -translate-y-1/2 left- right-16 -bottom-5">
                        <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide7" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative">
                    <img src="https://i.postimg.cc/cCyPJxt9/deanna-alys-6-LBBOwk-Pzy-Q-unsplash.jpg" className="rounded-box w-96" />
                     <div className="absolute flex justify-end transform -translate-y-1/2 left- right-16 -bottom-5">
                        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;