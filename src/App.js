import React from 'react'

//First way for represent code 
/*
class App extends React.Component {
    render(){
        return(
        <div>
            <h1>Hello World</h1>
            <b>Bold</b>
        </div>
        ) 
    }
}
*/

//Second way for represent the same code
/*class App extends React.Component {
    render(){
        return React.createElement('h1', null, 'Hello Egghead')
    }
}*/

//other way for represent the same code
//const App = () => <h1>Hello stateless jaja</h1>


//set properties on Reacts Components
/*
class App extends React.Component {
    render(){
        let txt = this.props.txt
        return <h1>{txt}</h1>
    }
}

App.proptypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}


App.defaultProps = {
    txt: "This is the prop text JB"
}
*/



//Manage React Component State with setState

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }
    }
    update( e ){
        this.setState({txt: e.target.value})
    }
    render(){
        return(
        <div>
            <input type="text"
            onChange={this.update.bind(this)}/>
            <h1>{this.state.txt} - {this.state.cat}</h1>
        </div>
        ) 
    }
}


export default App