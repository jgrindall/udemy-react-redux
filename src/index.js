import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
const YOUTUBE_API_KEY = "AIzaSyCJBosVAWWJ0Nv12lpIVmewOzxIyw6gY1E";
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import _ from 'underscore'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {"videos": [], "selectedVideo":null};
        this.load("cats");
        this.onSearched = _.debounce(this.onSearched.bind(this), 1000);
    }
    load(term){
        var _this = this;
        YTSearch({"key":YOUTUBE_API_KEY, "term":term}, function(videos){
            console.log("now", videos);
            _this.setState({"videos":videos, "selectedVideo":videos[0]});
        });
    }
    onSelect(video){
        this.setState({"selectedVideo":video});
    }
    onSearched(term){
        this.load(term);
    }
    render(){
        return <div>
            <div>Hi</div>
            <SearchBar onChange={this.onSearched.bind(this)}/>
            <VideoDetail video = {this.state.selectedVideo}/>
            <VideoList onSelect={this.onSelect.bind(this)} videos = {this.state.videos}/>
        </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));
