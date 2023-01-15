import urlFor from "../shared/Image"
import Image from "next/image"

const Customers = ({ customers }) => {

    return <div
        className="text-center	 text-slate-800"
    >
        <h1 className="font-bold text-orange-600 pt-14">TRUSTED BY OVER 40,000
        </h1>
        <h1 className="font-bold text-blue-900	text-4xl pt-5	">Our Customers
        </h1>

        <div className="flex max-w-screen-lg mx-auto gap-2 gap-y-20 mt-5 flex-wrap justify-center mt-10  select-none cursor-grab  ">
            {
                customers.map(customer => <div
                    className=" p-5 m:10  text-bluess "
                    key={customer._id}
                >
                    <Image className="w-24 h-24 md:w-36 md:h-auto  mx-auto "
                        src={urlFor(customer.image).width(200).url()}
                        width={200}
                        height={200}
                        alt="customer-image"
                    />
                    <h3 className='text-slate-900 font-bold ' > {customer.name}</h3>
                </div>)
            }
        </div>

    </div>
}
export default Customers