import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const YOUTUBE_API_KEY = "AIzaSyCJBosVAWWJ0Nv12lpIVmewOzxIyw6gY1E";

const App = () => {
    return <div>
        <div>Hi</div>
        <SearchBar/>
    </div>;
};



ReactDOM.render(<App/>, document.querySelector(".container"));
