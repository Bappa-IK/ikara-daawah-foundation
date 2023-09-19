import React from 'react'
import Video from '../Video'
import { useState, useEffect } from 'react'

export default function Media() {
  const [videos, setVidoes] = useState([])
  

  useEffect(() => {
      fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC9WnBOVbZOh3WmZgnyM9Vow&maxResults=136&order=date&key=AIzaSyAdVGZBnvaK5ruErfOYiui_1CG7vifDoSk')
      .then(res => res.json())
      .then(data => setVidoes(data))
  }, [])
  
  return (
    <>
        <div className='address'>
            <h2>TA'ALIM PLAYLIST</h2>
            <p className='channel--link'> To visit our YouTube channel click <span><a href="https://www.youtube.com/@IKARA_DAAWAH_FOUNDATION_TV/videos">here</a></span></p>
        </div>
        
        <Video videos={videos}/>

        <div className="pagination">
          <div className="prev">
            <span>Prev</span>
          </div>
          <div className="next">
            <span>Next</span>
          </div>
        </div>
    </>
  )
}
