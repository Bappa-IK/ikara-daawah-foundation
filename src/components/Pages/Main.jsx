import Banner from '../Layout/Banner';
import RecentTalim from '../RecentTalim';

import { useState, useEffect } from 'react';

export default function Main() {
  const [videos, setVidoes] = useState([])
  
  useEffect(() => {
      fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC9WnBOVbZOh3WmZgnyM9Vow&maxResults=4&order=date&key=AIzaSyAdVGZBnvaK5ruErfOYiui_1CG7vifDoSk')
      .then(res => res.json())
      .then(data => setVidoes(data))
  }, [])
  

  return (
    <div>
        <Banner />
        <div className="main--title">
            <h2>The Dawah Project is a charity, dedicated to spreading knowledge about Islam, reaching millions of Muslims & non-Muslims worldwide, through the media.</h2>
        </div>
        <h3 className='title'>Recent Ta'alim</h3>

        <RecentTalim videos={videos} />
        
        <p className='channel--link'> To visit our YouTube channel click <span><a href="https://www.youtube.com/@IKARA_DAAWAH_FOUNDATION_TV/videos">here</a></span></p>
    </div>        
  )
}
