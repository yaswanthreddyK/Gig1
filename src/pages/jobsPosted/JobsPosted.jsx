import React from 'react'
import Filter from '../../components/filter/Filter'
import PostedJobsList from '../../components/postedJobsList/PostedJobsList'

function JobsPosted() {
  return (
    <div>

    <div>
        <Filter />
    </div>
    <div>
    <PostedJobsList />
    </div>
    
    </div>
  )
}

export default JobsPosted