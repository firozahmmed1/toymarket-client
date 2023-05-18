
const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/QYq2YpV/slider-1.jpg" className="w-full rounded-2xl" />
                <div className="bg-gradient-to-r  to-[rgb(139,0,139, 0)] from-orange-300 ] absolute flex items-center w-full h-full rounded-2xl">
                    <div  className="ml-8 space-y-2">
                        <h1 className="font-bold text-5xl italic text-[#273746]">Toys Garden</h1>
                        <p className="font-bold text-2xl  text-[#273746]">Toys are available for your kids</p>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide1" className="btn bg-purple-600 btn-circle mr-3">❮</a>
                    <a href="#slide2" className="btn  bg-purple-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/M8fCtPZ/slider-2.jpg" className="w-full rounded-2xl" />
                <div className="bg-gradient-to-r  to-[rgb(139,0,139, 0)] from-orange-300 ] absolute flex items-center w-full h-full rounded-2xl">
                    <div  className="ml-8 space-y-2">
                        <h1 className="font-bold text-5xl italic text-[#273746]">Toys Garden</h1>
                        <p className="font-bold text-2xl  text-[#273746]">Toys are available for your kids</p>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide2" className="btn bg-purple-600 btn-circle mr-3">❮</a>
                    <a href="#slide3" className="btn  bg-purple-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/F0gYsmg/slider-3.jpg" className="w-full rounded-2xl" />
                <div className="bg-gradient-to-r  to-[rgb(139,0,139, 0)] from-orange-300 ] absolute flex items-center w-full h-full rounded-2xl">
                    <div  className="ml-8 space-y-2">
                        <h1 className="font-bold text-5xl italic text-[#273746]">Toys Garden</h1>
                        <p className="font-bold text-2xl  text-[#273746]">Toys are available for your kids</p>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide3" className="btn bg-purple-600 btn-circle mr-3">❮</a>
                    <a href="#slide1" className="btn  bg-purple-600 btn-circle">❯</a>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Carousel;