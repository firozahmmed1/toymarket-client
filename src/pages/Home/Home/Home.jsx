
const Home = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/QYq2YpV/slider-1.jpg" className="w-full" />
                <div className="bg-red-200 absolute flex items-center w-full h-full">
                    <div>
                        <h1>Hello</h1>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide1" className="btn  btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Home;