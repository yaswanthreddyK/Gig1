import React from 'react'
import "./Companies.css"
import Search from "../../components/Search/Search"
import CompanyCard from '../../components/companyCard/CompanyCard'
import { Link } from 'react-router-dom'

function Companies() {

    const company = {
        name: "Google",
        location: 'Chennai, India',
        image: "../../../public/img/google.jpg",
        tags: ["Carbon Emission", "Agriculture"]
    }
  return (
    <div className='companies-container'>
       <Search />
       <div className='size-adjust'>

       <div className='companies-list'>
        <Link to="1">
        <CompanyCard {...company}/>
        </Link>
        <Link to="2">
        <CompanyCard {...company}/>
        </Link>
        <Link to="3">
        <CompanyCard {...company}/>
        </Link>
        <Link to="4">
        <CompanyCard {...company}/>
        </Link>
        <Link to="5">
        <CompanyCard {...company}/>
        </Link>
        <Link to="6">
        <CompanyCard {...company}/>
        </Link>
        
       </div>
       </div>
    </div>
  )
}

export default Companies