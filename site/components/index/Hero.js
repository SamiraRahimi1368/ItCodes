import { useRouter } from "next/router"
import Image from "next/image"

const Hero = () => {
    const { locale } = useRouter()
    return <div
        className="hero -mt-16"
        style={{ background: 'linear-gradient(to bottom, #370b6f, #00429b, #006dba, #0095ce, #2dbcdc)' }}
    >
        <div className="pt-36 flex max-w-screen-lg mx-auto gap-20 items-start ">
            <div className="text-white">
                <h1>{locale}</h1>
                <div className="font-bold text-5xl ">IT Solutions & Business Services Company</div>
                <div className="pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.</div>
                <div>
                    <button className="bg-white text-purple-700 hover:bg-blue-700 hover:text-white w-40 h-12 py-2 px-4 rounded mt-10 font-bold transition-colors duration-150  rounded-lg focus:shadow-outline ">
                        About Us
                    </button>
                    <button className="bg-purple-500 text-white hover:bg-blue-700 font-bold hover:text-white w-40 h-12 py-2 px-4 rounded mt-10 transition-colors duration-150  rounded-lg focus:shadow-outline ml-5">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="w-full aspect-square sm:w-4/5 sm:mx-auto md:w-2/3 lg:w-full xl:w-4/5"
            >
                <Image
                    // fill
                    width={500}
                    height={500}
                    src='/images/home-font.png'
                    alt="home-font"
                />
            </div>
        </div>
        <div >
        <Image
            // fill
            width={1600}
            height={500}
            src='/images/home-bottom-shape.png'
            alt="home-bottom"
        />
    </div>
    </div>
}

export default Hero