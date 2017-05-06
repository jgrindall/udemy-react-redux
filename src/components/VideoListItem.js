import React from 'react';

class VideoListItem extends React.Component{
    constructor(props){
        super(props);
    }
    onClick(){
        this.props.onSelect(this.props.video);
    }
    render(){
        return <li onClick={this.onClick.bind(this)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={this.props.video.snippet.thumbnails.default.url}/>
                </div>
                <div className="media-body">
                    <div className = "media-heading">
                        {this.props.video.snippet.title}
                    </div>
                </div>
            </div>
        </li>;
    }
}

export default VideoListItem;
