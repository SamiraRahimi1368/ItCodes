import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import urlFor from '../shared/Image'

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
            className="grid max-w-screen-lg grid-cols-3 gap-x-10 gap-y-20 mt-10  select-none cursor-grab md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800 "
        >
            {
                testimonials.map(testimonial => <SwiperSlide
                    className="border rounded-lg p-5 m:10 bg-slate-50 text-blues "
                >
                    <h3 > {testimonial.rating}</h3>
                    <h3 className='pt-6 text-center md:text-left space-y-4'> {testimonial.message} </h3>
                    <img className="w-10 h-10 md:w-20 md:h-auto border-4 border-indigo-200 border-b-indigo-500 rounded-full border-l-indigo-500 md:h-auto  rounded-full mx-auto object-cover "

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