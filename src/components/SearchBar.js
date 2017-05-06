import React from 'react';

// simple functional component
const SearchBarFun = () => {
    return <input/>;
};

class SearchBar extends React.Component{
    render(){
        return <input onChange = {this.onTextChange}/>;
    }
    onTextChange(){
        console.log(arguments);
    }
}

export default SearchBar;
