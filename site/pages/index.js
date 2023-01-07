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

const Home = ({ testimonials, members, blogs, customers, solutions }) => {
  return (
    <div className="">
      <Hero />
      {/* <Solutions solutions={solutions} /> */}
      <ChooseUs />
      <TrustUs />
      <Statics />
      <Collaboration />
      <br />
      <Testimonial testimonials={testimonials} />
      <br />
      <Members members={members} />
      <br />
      <Blogs blogs={blogs} />
      <Colleuges />
      <Customers customers={customers} />
      <AboutUs />


    </div>
  )
}
export default Home

export async function getServerSideProps(context) {
  const projectId = 'q8l0xi0c'
  const dataset = 'production'

  let query = encodeURIComponent('*[_type == "testimonial"]')
  let url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
  let response = await fetch(url)
  let testimonialsData = await response.json()
  console.log(url)
  query = encodeURIComponent('*[_type == "member"]')
  url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
  let response1 = await fetch(url)
  let membersData = await response1.json()

  query = encodeURIComponent('*[_type == "blog"]')
  url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
  let response2 = await fetch(url)
  let blogsData = await response2.json()

  query = encodeURIComponent('*[_type == "customer"]')
  url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
  let response3 = await fetch(url)
  let customersData = await response3.json()

  query = encodeURIComponent('*[_type == "post"]')
  url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
  let response5 = await fetch(url)
  let solutionsData = await response5.json()

  return {
    props: {
      testimonials: testimonialsData.result,
      members: membersData.result,
      blogs: blogsData.result,
      customers: customersData.result,
      solutions: solutionsData.result
    }
  }
}

