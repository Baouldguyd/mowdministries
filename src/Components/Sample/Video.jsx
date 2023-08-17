import React from 'react'
import { FaVideo } from 'react-icons/fa';

const Video = () => {
  return (
    <div className='video'>
        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1><FaVideo/> Videos</h1>
            </div>
            <div className='line'></div>
        </div>

        <div className='videoFile'>
            <div>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VsVqgUOo7ks" title="Fruit Bearing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9D2Y0Q5InmE" title="Event" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>


           <div>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/t4ZSWMLjE7U" title="Morning Glory" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tN8UW6dwE_4" title="JESUS LOVES YOU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            

        </div>


    </div>
  )
}

export default Video;