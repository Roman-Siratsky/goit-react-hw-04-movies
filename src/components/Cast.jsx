import axios from 'axios';
import React, { Component } from 'react'
import CastMember from './CastMember'
import {apiKey} from './apiKey'

class Cast extends Component {

    state = {
        cast: [],
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.filmId}/credits?api_key=${apiKey}`)
        .then(res => {
            return res.data.cast
        }).then((cast) => {
            this.setState({cast: [...cast]})
        })
    }

    render() {
        return (
            <CastMember cast={this.state.cast}/>
        )
    }
}
export default Cast;
