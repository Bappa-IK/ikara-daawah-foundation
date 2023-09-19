import React from 'react'

export default function RecentTalim({ videos }) {
    const embedUrl = "https://youtube.com/embed/"
  return (
        <div className="recent-videos">
                {
                    videos.items?.map(video => {
                        return (
                            <div className="video" key={video.id.videoId}>
                                <iframe width={280} height={280} src={embedUrl + video.id.videoId} title={video.snippet.title} allowFullScreen frameBorder="0"></iframe>  
                                <div className="video--details">
                                    <h4>{video.snippet.title}</h4>
                                    <p>{video.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }        
        </div>
  )
}
