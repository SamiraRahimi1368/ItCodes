const Colleuges = () => {
    return <div className="">
        <img className="w-full h-96 object-cover brightness-50 pt-18 mt-10 absolute -z-10"
            src="/images/banner-bg.jpg"
        />
        <div className="text-center grid mx-auto max-w-screen-lg">
            <h1 className="font-bold text-orange-600 pt-24">WANT TO WORK WITH US?
            </h1>
            <h1 className="font-bold text-white	text-4xl pt-10">Digitally transform and grow your business!
            </h1>
            <h1 className="text-lg text-white pt-6  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur voluptatem accusantium doloremque adipiscing elit.
            </h1>
        </div>
        <div className="inline p-6 inline flex place-content-center">
                    <button className="bg-white text-purple-700 hover:bg-blue-700 hover:text-white w-40 h-12 py-2 px-4 rounded mt-5 font-bold transition-colors duration-150  rounded-lg focus:shadow-outline ">
                        About Us
                    </button>
                    <button className="bg-purple-500 text-white hover:bg-blue-700 font-bold hover:text-white w-40 h-12 py-2 px-4 rounded mt-5 transition-colors duration-150  rounded-lg focus:shadow-outline ml-5">
                        Contact Us
                    </button>
                </div>
    </div>
}

export default Colleuges