import axios from 'axios';
import React, { Component } from 'react'
import CastMember from './CastMember'
import movieRequest from './service/api';
// import {apiKey} from './apiKey'

class Cast extends Component {

    state = {
        cast: [],
    }

    componentDidMount() {
        movieRequest(`/movie/${this.props.filmId}/credits`)
            .then(({cast}) => this.setState({cast: cast}))
    }

    render() {
        return (
            <CastMember cast={this.state.cast}/>
        )
    }
}
export default Cast;
