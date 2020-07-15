import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Success extends Component {
    render(){
        const {imageUrl, name}=this.props.location.state
        return(
            <main>
            <h2>Meet your new pet {name}!</h2>
            <img src= {imageUrl} alt="your new pet" />

            </main>
        )
    }
}