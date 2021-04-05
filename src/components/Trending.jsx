import React, { Component } from "react";
import {NavLink, withRouter} from 'react-router-dom'
import * as axios from "axios";
import MovieList from './MovieList'
import {Typography, Container} from '@material-ui/core'
// const apiKey = 'c8971b346877ee4bba0d277ad44911fe'
import movieRequest from './service/api'

class Trending extends Component {

    state ={
        movies: [],
      }
    
  componentDidMount() {
    movieRequest(`/trending/movie/day`)
      .then(({results}) => this.setState({movies: results}))
      }

    render() {
        return(
            <>
            <Container className='trending-container' maxWidth='sm'>
              <Typography className='trending-title' variant='h2' gutterBottom aligh='center' color='primary'>Trending Today</Typography>
            </Container>
            <MovieList results={[...this.state.movies]}/>
            </>
        )
    }
}
export default Trending;