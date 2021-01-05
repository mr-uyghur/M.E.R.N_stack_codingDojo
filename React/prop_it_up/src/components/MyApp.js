import React, { Component } from 'react';

class MyApp extends Component {
    render() {
        const { name, age, hairColor } = this.props;
        return <div>
         <h1>  {name} </h1>
        <p> Age {age} </p>
        <p> Hair Color {hairColor} </p>
        </div>;
    }
}
    
export default MyApp;