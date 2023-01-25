'use client'
import urlFor from "../shared/Image"
import Image from "next/image"
const socialIconStyle = "scale-0 group-hover:scale-100 transition duration-500 text-5xl text-white font-black "

const Members = ({ members }) => {
    return <div className="text-center"

    >

        <h1 className="font-bold text-orange-600 pt-10">TEAM MEMBER
        </h1>
        <h1 className="font-bold text-blue-900	text-4xl pt-5 	">Expert Team</h1>

        <div
            className="relative text-blue-400 grid mx-auto max-w-screen-lg  grid-cols-4 gap-x-4 gap-y-20 pt-10"
        >
            {
                members.map(member => <div
                    className="w-full aspect-square md:aspect-auto md:h-96 lg:aspect-square lg:h-auto"
                    key={member._id}
                >
                    <div className="relative">
                        <div className="w-full aspect-square md:aspect-auto md:h-96 lg:aspect-square lg:h-auto">
                            <Image
                                src={urlFor(member.image).width(200).url()}

                                className="w-64 h-64 mx-auto ml-4 object-cover rounded hover:scale-110 hover:grayscale transition-all duration-600 ease-in-out group-hover:scale-110 group-hover:brightness-[0.2] transition duration-500"
                                alt="member"
                                // width={200}
                                // height={200}
                                fill
                            />
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 left-0 flex gap-4 justify-between m-auto w-48 h-10 items-center">
                            <div className={socialIconStyle}>F</div>
                            <div className={socialIconStyle}>T</div>
                            <div className={socialIconStyle}>I</div>
                        </div>
                    </div>
                    <div className="absolute z-10 top-0 right-0 bottom-0 left-0 flex gap-4 justify-between m-auto w-20 h-16 items-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-6 h-6 display: inline-block text-cyan-700 text-sm"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-6 h-6 display: inline-block text-cyan-700 text-sm"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-6 h-6 display: inline-block text-cyan-700 text-sm"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                        </svg>
                    </div>
                    <h3 className='text-slate-900 font-bold pt-6'> {member.name} </h3>
                    <h3>{member.job}</h3>
                </div>)

            }
        </div>
    </div >


}


export default Members