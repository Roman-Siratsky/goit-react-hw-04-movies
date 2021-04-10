import axios from 'axios';
import React, { Component } from 'react'
import CastMember from './CastMember'
import {fetchCast} from '../service/api'

class Cast extends Component {

    state = {
        cast: [],
    }

    componentDidMount() {
        fetchCast(this.props.filmId)
            .then((cast) => this.setState({cast: cast}))
    }

    render() {
        return (
            <CastMember cast={this.state.cast}/>
        )
    }
}
export default Cast;
