import React, { Component } from 'react';

class MyApp extends Component {
    birthDay = () => {
        this.setState({age:this.props.age } )
        // chekc if the input isn't a number
        if( typeof this.state.age != 123 ){
            // conver str to digits
            let num = parseFloat(this.state.age)
            // increase the num
            num++;
            this.setState({ age: num})
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    render() {
        const { name,  hairColor } = this.props;
        return <div>
         <h1>  {name} </h1>
        <p> Age: {this.state.age} </p>
        <p> Hair Color {hairColor} </p>
        <button onClick={ this.birthDay }>BirthDay Button for {name}</button>
        </div>;
    }
}
    
export default MyApp;