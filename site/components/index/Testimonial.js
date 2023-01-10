import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import urlFor from '../shared/Image'
import Image from "next/image"

const star = (i, filled) => <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path className={'text-[#ffce39] ' + (filled && 'fill-[#ffce39]')} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

const Testimonial = ({ testimonials }) => {

    return <div
        className="text-center	mt-24 text-slate-800"
    >
        <h1 className="font-bold text-orange-600 pt-4">TESTIMONIAL
        </h1>
        <h1 className="font-bold text-blue-900	text-4xl pt-5	">What Our Client Say
        </h1>
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={4}
            // breakpoints={{
            //     [md]: {
            //         slidesPerView: 2
            //     },
            //     [lg]: {
            //         slidesPerView: 3
            //     }
            // }}
            className="grid max-w-screen-lg grid-cols-3 gap-x-10 gap-y-20 mt-10  select-none cursor-grab md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800 "
        >
            {
                testimonials.map(testimonial => <SwiperSlide
                    className="border rounded-lg p-5 m:10 bg-slate-50 text-blues "
                    key={testimonial._id}
                >

                    <div className="flex gap-0.5 justify-center">
                        {
                            [...Array(5).keys()].map(i => star(i, (i + 1) < (testimonial.rating * 1)))
                        }
                    </div>
                    <h3 className='pt-6 text-center md:text-left space-y-4'> {testimonial.message} </h3>
                    <Image className="w-10 h-10 md:w-20 md:h-auto border-4 border-indigo-200 border-b-indigo-500 rounded-full border-l-indigo-500 md:h-auto  rounded-full mx-auto object-cover "
                    width={200}
                    height={200}
                    alt="testimonial"

                        src={urlFor(testimonial.image).width(200).url()}
                    />
                    <h3 className='text-slate-900 font-bold flex justify-center mt-5 font-lg'> {testimonial.name} </h3>
                    <h3 className='text-slate-700 dark:text-slate-500 flex justify-center' > {testimonial.job} </h3>

                </SwiperSlide>)
            }
        </Swiper>

    </div>
}


export default Testimonial