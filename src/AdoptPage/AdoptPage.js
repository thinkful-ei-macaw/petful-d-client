import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Config from '../config';

class AdoptPage extends Component {
    state = {
        people: [],
        dogs: [],
        cats: []
    }

    componentDidMount() {

    }

    getPeopleAndPets() {
        Promise.all([
            fetch(`${Config.API_ENDPOINT}/people`),
        
            fetch(`${Config.API_ENDPOINT}/pets/dogs`),
        
            fetch(`${Config.API_ENDPOINT}/pets/cats`)
        
        ]).then(([peopleRes, dogsRes, catsRes]) => {
        
            if(!peopleRes.ok) {
                return peopleRes.json().then((err) => Promise.reject(err));
            }

            if(!dogsRes.ok) {
                return dogsRes.json().then((err) => Promise.reject(err));
            }

            if(!catsRes.ok) {
                return catsRes.json().then((err) => Promise.reject(err));
            }
        
            return Promise.all(peopleRes.json(), dogsRes.json(), catsRes.json());
        
        }).then(([people, cats, dogs]) => {
            this.setState({people, cats, dogs})
        })
        .catch((error) => console.error(error))
    }
    
    render() {
        return (
            <div>
                <p>This is the Adopt Page</p>
                {/* Insert Data Here */}
            </div>
        )
    }
}

export default AdoptPage;