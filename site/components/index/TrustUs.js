import Image from "next/image"

const TrustUs = () => {
    return <div className="pt-26 flex max-w-screen-lg mx-auto gap-10 items-start">

        <div className="w-full aspect-square mx-auto mb-8 sm:w-4/5 lg:ml-0 lg:w-full">
            <h1 className="font-bold text-sm text-orange-600 ">WHY TRUST US??
            </h1>
            <h1 className="font-bold text-black pt-5 text-3xl">Achieve digital transformation for your retail business services

            </h1>
            <h1 className="text-lg text-gray-600 pt-6  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
            <div class="grid gap-3 mt-10 md:grid-cols-2 md:gap-4 md:gap-x-6">
                <span className="bg-white text-black hover:bg-purple-700 hover:text-white w-auto h-14 py-2 px-4 rounded mt-5 font-bold transition-all duration-150  rounded-lg focus:shadow-outline border-l-2 border-l-purple-700 pt-4">Protect your Business</span>
                <span className="bg-white text-black hover:bg-purple-700 hover:text-white w-auto h-14 py-2 px-4 rounded mt-5 font-bold transition-all duration-150  rounded-lg focus:shadow-outline border-l-2 border-l-purple-700 pt-4">Data Security</span>
                <span className="bg-white text-black hover:bg-purple-700 hover:text-white w-auto h-14 py-2 px-4 rounded mt-5 font-bold transition-all duration-150  rounded-lg focus:shadow-outline border-l-2 border-l-purple-700 pt-4">Running your Business</span>
                <span className="bg-white text-black hover:bg-purple-700 hover:text-white w-auto h-14 py-2 px-4 rounded mt-5 font-bold transition-all duration-150  rounded-lg focus:shadow-outline border-l-2 border-l-purple-700 pt-4">Network Security</span>
                <span className="bg-white text-black hover:bg-purple-700 hover:text-white w-auto h-14 py-2 px-4 rounded mt-5 font-bold transition-all duration-150  rounded-lg focus:shadow-outline border-l-2 border-l-purple-700 pt-4">Small Business Owners</span>
                <span className="bg-white text-black hover:bg-purple-700 hover:text-white w-auto h-14 py-2 px-4 rounded mt-5 font-bold transition-all duration-150  rounded-lg focus:shadow-outline border-l-2 border-l-purple-700 pt-4">Network Monitoring</span>
            </div>
        </div>
        <div className="w-full aspect-square mx-auto mb-8 sm:w-4/5 lg:ml-0 lg:w-full"
        >
            <Image
                src='/images/choose-2.jpg'
                width={500}
                height={500}
                alt="choose"
            />

        </div>

    </div>
}

export default TrustUs