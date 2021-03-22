import axios from "axios";
import React, { Component } from "react";
import { withRouter} from 'react-router-dom'
import MovieList from './MovieList';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {apiKey} from './apiKey'


class Movies extends Component {
    
    state = {
        results: [],
        query: '',
        page: 1
    }

    onInputChange = (e) => {
        const {value} = e.currentTarget;
        this.setState({query: value})
    }


    OnMoviesSearch = (e) => {
        const {query, page} = this.state
        e.preventDefault()
        axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&query=${query}&page=${page}`)
        .then(res => res.data.results).then((results) => {
            this.setState({results: [...results]})
        })
    }

    render() {
        window.state = this.state
        return(
            <div className='search-wrapper'>
            <form className='movie-form'>
                <label className='input-label' htmlFor="">
                    <Input
                        className='input'
                        autoFocus={true}
                        color='primaryColor'
                        value={this.state.query}
                        onChange={this.onInputChange}
                        placeholder='type movie title here'
                    />
                </label>
                <Button variant="contained" color="primary" onClick={this.OnMoviesSearch} type='submit'>Search</Button>
            </form>
            <MovieList results={this.state.results}/>
            </div>
        )
    }
}
export default withRouter(Movies);