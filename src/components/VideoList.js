import React from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var onSelect = this.props.onSelect;
        var items = this.props.videos.map(function(video, i){
            return <VideoListItem
                onSelect={onSelect}
                video={video}
                key={video.etag}
            />;
        });
        return <ul className="col-md-4 list-group">
            {items}
        </ul>;
    }
}

export default VideoList;
