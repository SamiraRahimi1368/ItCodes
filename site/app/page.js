import Hero from "../components/index/Hero"
import Solutions from "../components/index/Solutions"
import AboutUs from "../components/index/AboutUs"
import Statics from "../components/index/Statics"
import ChooseUs from "../components/index/ChooseUs"
import Testimonial from "../components/index/Testimonial"
import TrustUs from "../components/index/TrustUs"
import Members from "../components/index/Members"
import Blogs from "../components/index/Blogs"
import Collaboration from "../components/index/Collaboration"
import Customers from "../components/index/Customers"
import Colleuges from "../components/index/Colleuges"
import React from 'react'
// import { SocialIcon } from "react-social-icons"

const Home = async () => {

    const projectId = 'q8l0xi0c'
    const dataset = 'production'

    let query = encodeURIComponent('*[_type == "testimonial"]')
    let url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
    let response = await fetch(url)
    let testimonials = (await response.json()).result
    query = encodeURIComponent('*[_type == "member"]')
    url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
    let response1 = await fetch(url)
    let members = (await response1.json()).result

    query = encodeURIComponent('*[_type == "blog"]')
    url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
    let response2 = await fetch(url)
    let blogs = (await response2.json()).result

    query = encodeURIComponent('*[_type == "customer"]')
    url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
    let response3 = await fetch(url)
    let customers = (await response3.json()).result

    query = encodeURIComponent('*[_type == "post"]')
    url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
    let response5 = await fetch(url)
    let solutions = (await response5.json()).result


    return (
        <div>
            <Hero />
            <Solutions solutions={solutions} />
            <ChooseUs />
            <TrustUs />
            <Statics />
            <Collaboration />
            <Testimonial testimonials={testimonials} />
            <Members members={members} />
            <Blogs blogs={blogs} />
            <Colleuges />
            <Customers customers={customers} />
            <AboutUs />
        </div>
    )
}
export default Home
