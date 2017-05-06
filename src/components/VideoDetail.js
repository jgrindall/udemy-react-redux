import React from 'react';

class VideoDetail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(!this.props.video){
            return <div/>;
        }
        else{
            const url = "https://www.youtube.com/embed/" + this.props.video.id.videoId;
            return <div className="video-detail col-md-8">
                <div className = "embed-responsive embed-responsive-16by9">
                    <iframe src = {url} className="embed-responsive-item"></iframe>
                </div>
                <div className="details">
                    <div>{this.props.video.snippet.title}</div>
                    <div>{this.props.video.snippet.description}</div>
                </div>
            </div>;
        }
    }
}

export default VideoDetail;
