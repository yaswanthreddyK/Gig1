import React, { useState } from 'react';
import ApplicantList from "../../components/applicantList/ApplicantList"
import Filter from "../../components/filter/Filter"
import "./Applications.css"


function Applications() {

  return (
    <div>
       <Filter />
        <div className='applicants-list'>
        <ApplicantList />
        </div>
    </div>
  )
}

export default Applications