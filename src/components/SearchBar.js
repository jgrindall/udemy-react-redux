import React from 'react';

// simple functional component
const SearchBarFun = () => {
    return <input/>;
};

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {"term":"type here"};
    }
    render(){
        return <div>
            <input onChange = {this.onTextChange.bind(this)}/>
            <span>{this.state.term}</span>    
        </div>;
    }
    onTextChange(e){
        var val = e.target.value;
        console.log(e, val);
        this.setState({"term": val});
    }
}

export default SearchBar;
