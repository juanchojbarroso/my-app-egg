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




class App extends React.Component {
    render(){
        let txt = this.props.txt
        return <h1>{txt}</h1>
    }
}
export default App