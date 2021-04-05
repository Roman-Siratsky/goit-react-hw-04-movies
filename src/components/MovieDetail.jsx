import axios from 'axios';
import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';
import Cast from './Cast'
import Reviews from "./Reviews";
// import {apiKey} from './apiKey'
import routes from '../routes'
import { Button, Container, Grid, Card, CardMedia, Typography, CardContent, ButtonGroup } from '@material-ui/core';
import movieRequest from './service/api';


class MovieDetail extends Component {

    state = {
        title: null,
        vote_average: null,
        overview: null,
        release_date: null,
        poster_path: null,
        genres: []
    }

    componentDidMount() {
        movieRequest(`/movie/${this.props.match.params.movieId}&append_to_response=images`)
            .then((data) => this.setState({ ...data, genres: data.genres }))
    }

    handleGoback = () => {
        const {location, history} = this.props;
        (location.state && location.state.from)
        ? history.push(location.state.from)
        : history.push(routes.gh + routes.home)
    }

    render() {
        const {title, vote_average, overview, release_date, genres, poster_path} = this.state;
        return (
            <>
                <div className='back-button'>
                    <Button variant="contained" color="primary"
                    onClick={this.handleGoback}>
                        Вернуться назад
                    </Button>
                    </div>
                    <ul className='detail-list'>
                    <li>
                        <img className='detail-image' src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
                    </li>
                    <li>
                            <Card className='card'>
                                <CardContent>
                                    <Typography gutterBottom variant='h6'>
                                        {title}
                                    </Typography>
                                    <Typography gutterBottom variant='h5'>
                                        {`User score: ${Number(vote_average)*10}%`}
                                    </Typography>
                                    <Typography gutterBottom variant='h6'>
                                        Overview
                                    </Typography>
                                    <Typography gutterBottom variant='subtitle1'>
                                        {overview}
                                    </Typography>
                                    <Typography gutterBottom variant='h6'>
                                        Genres
                                    </Typography>
                                    <div className='genres'>
                                        {genres.map(genre => <div className="genre"><Typography gutterBottom variant='subtitle1'>{genre.name}</Typography></div>)}
                                    </div>
                            </CardContent>
                            </Card>
                    </li>
                    </ul>
                    <div className='button-group'>
                        <ButtonGroup align='center' variant="contained" color="primary">
                        <NavLink to={`${routes.gh + routes.movies}/${this.props.match.params.movieId}/cast`}>
                            <Button color="primary">Cast</Button>
                        </NavLink>
                        <NavLink to={`${routes.gh + routes.movies}/${this.props.match.params.movieId}/reviews`}>
                            <Button color="primary">Reviews</Button>
                        </NavLink>
                        </ButtonGroup>
                    </div>
                    <div>
                    <Route path={`${routes.gh + routes.movies}/${this.props.match.params.movieId}/cast`} render={() => <Cast filmId={this.props.match.params.movieId}/>}/>
                    <Route path={`${routes.gh + routes.movies}/${this.props.match.params.movieId}/reviews`} render={() => <Reviews filmId={this.props.match.params.movieId}/>}/>
                </div>
            </>
        )
    }
}
export default MovieDetail;
