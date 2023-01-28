'use client'
import urlFor from "../shared/Image"
import Image from "next/image"
const socialIconStyle = "scale-0 group-hover:scale-100 transition duration-500 text-5xl text-white font-black "

const Members = ({ members }) => {
    return <div className="text-center "

    >

        <h1 className="font-bold text-orange-600 pt-10">TEAM MEMBER
        </h1>
        <h1 className="font-bold text-blue-900	text-4xl pt-5 	">Expert Team</h1>

        <div
            className="relative text-blue-400 grid mx-auto max-w-screen-lg  grid-cols-4 gap-x-8 gap-y-20 pt-10 "
        >
            {
                members.map(member => <div
                    className="w-full aspect-square md:aspect-auto md:h-96 lg:aspect-square lg:h-auto"
                    key={member._id}
                >
                    <div className="relative overflow-hidden w-full aspect-square">
                        <div className="w-full aspect-square md:aspect-auto md:h-96 lg:aspect-square lg:h-auto  hover:grayscale transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-50 group">
                            <Image
                                src={urlFor(member.image).width(200).url()}

                                className="w-full h-full mx-auto object-cover rounded "
                                alt="member"
                                fill
                            />
                            <div className="absolute top-0 right-0 bottom-0 left-0 flex gap-4 justify-between m-auto w-48 h-20 items-center ">
                                <a href="https://www.google.com" target="_blank" className={socialIconStyle} >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1ZM24 38q5.05-4.65 8.325-7.975 3.275-3.325 5.2-5.825 1.925-2.5 2.7-4.45.775-1.95.775-3.9 0-3.3-2.1-5.425T33.5 8.3q-2.55 0-4.75 1.575T25.2 14.3h-2.45q-1.3-2.8-3.5-4.4-2.2-1.6-4.75-1.6-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 1.95.775 3.925.775 1.975 2.7 4.5Q12.4 26.8 15.7 30.1 19 33.4 24 38Zm0-14.85Z" /></svg>
                                </a>
                                <div className={socialIconStyle}>T</div>
                                <div className={socialIconStyle}>I</div>
                            </div>
                        </div>

                    </div>

                    <h3 className='text-slate-900 font-bold pt-6'> {member.name} </h3>
                    <h3>{member.job}</h3>
                </div>)

            }
        </div>
    </div >


}


export default Members