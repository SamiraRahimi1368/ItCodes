import urlFor from "../shared/Image"
import Image from "next/image"
import Script from 'next/script'


const Blogs = ({ blogs }) => {
    return <div
        className="text-center	bg-slate-100 text-slate-800"
    >
        <Script src="https://cdn.sanity.io/script.js" />

        <h1 className="font-bold text-orange-600 pt-4">BLOG & ARTICLE</h1>
        <h1 className="font-bold text-blue-900	text-4xl pt-5	">Recent Blog
        </h1>
        <div className="grid mx-auto max-w-screen-lg grid-cols-3 gap-x-4 gap-y-20 pt-10  mt-10  select-none cursor-grab rounded-xl"
        >
            {
                blogs.map(blog => <div
                    className="border rounded-lg  bg-slate-50 text-bluess"
                    key={blog._id}
                >
                    <Image className="mx-auto w-full object-cover  rounded-lg	 mx-auto "
                        src={urlFor(blog.image).width(200).url()}
                        width={200}
                        height={200}
                        alt="blogImage"
                    />
                    <svg class="w-6 h-6 display: inline-block text-cyan-700 text-sm	" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <a className='pt-6 p-1 text-center md:text-left text-cyan-700  display: inline-block text-sm' href="#"> {blog.author}
                        <svg class="w-5 h-5 ml-5 display: inline-block text-cyan-700 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>                </a>
                    <a className='text-slate-900  display: inline-block text-cyan-700 text-sm	' href="#"> {blog._updatedAt}
                    </a>
                    <h3 className='text-slate-900 font-bold p-6 ' > {blog.title}</h3>
                    <h3 className='text-slate-700 dark:text-slate-500 text-left p-5 text-sm
'                   > {blog.message} </h3>
                    <a className="m-10 text-neutral-500 hover:text-sky-700 font-bold " href="#"> Read More</a>

                </div>)
            }
        </div>

    </div>
}
export default Blogs