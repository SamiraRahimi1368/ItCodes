import urlFor from "../shared/Image"

const Members = ({ members }) => {
    return <div className="text-center">
        <h1 className="font-bold text-orange-600 pt-10">TEAM MEMBER
        </h1>
        <h1 className="font-bold text-blue-900	text-4xl pt-5 	">Expert Team

        </h1>

        <div
            className="text-blue-400 grid mx-auto max-w-screen-lg  grid-cols-4 gap-x-4 gap-y-20 pt-10	"
        >

            {
                members.map(member => <div className="">

                    <img className="w-64 h-64 mx-auto ml-4 object-cover rounded hover:scale-110 hover:grayscale transition-all duration-600 ease-in-out hover:brightness-50 hover:w-full h-auto"
                        src={urlFor(member.image).width(200).url()} />

                    <h3 className='text-slate-900 font-bold pt-6'> {member.name} </h3>
                    <h3>{member.job}</h3>
                </div>)
            }
        </div>
    </div>
}


export default Members