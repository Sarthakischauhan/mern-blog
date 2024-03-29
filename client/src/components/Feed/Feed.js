import React from 'react'
import Greetings from '../Greetings/Greetings'
import Carousel from '../Carousel/Carousel'

const Feed = () => {
  return (
    // Heading 
    <div className="feed">
        <Greetings />
        <Carousel />
        <div className='posts'>
            Posts
        </div>
    </div>

  )
}

export default Feed