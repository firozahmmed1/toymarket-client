
const Gallery = () => {
    return (
        <div className="container mx-auto mt-12">
             <h1 className="text-4xl mb-8 font-bold text-center italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700">Photo Gallery</h1>
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/TkRB50Y/4f67670da1.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/841Cdby/baac215bcc.jpg" />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/wWnZwPG/999990bd1f.jpg" />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/9cwyX8W/3e02be5fe3.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/BK3vw8n/a4cc32b9c3.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/RyVzmky/e1a4ef2473.jpg" />
                    </div>
                </div>
            </div>
        </div>);
};

export default Gallery;