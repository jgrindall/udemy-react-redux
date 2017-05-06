import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
const YOUTUBE_API_KEY = "AIzaSyCJBosVAWWJ0Nv12lpIVmewOzxIyw6gY1E";
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {"videos": []};
        this.load();
    }
    load(){
        var _this = this;
        YTSearch({"key":YOUTUBE_API_KEY, "term":"cats"}, function(videos){
            console.log("now", videos);
            _this.setState({"videos":videos});
        });
    }
    render(){
        return <div>
            <div>Hi</div>
            <SearchBar/>
            <VideoDetail video = {this.state.videos[0]}/>
            <VideoList videos = {this.state.videos}/>
        </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));
