import React, { Component } from 'react'
import axios from 'axios';
import {Typography} from '@material-ui/core'
import movieRequest from '../service/api';
import {fetchReviews} from '../service/api'
class Reviews extends Component {

    state = {
        reviews: [],
    }

    componentDidMount() {
        fetchReviews(this.props.filmId)
            .then((reviews) => this.setState({reviews: reviews}))
    }

    render() {
        return (
            <ul style={{'list-style-type': 'none'}}>
                {
                this.state.reviews.length > 0 
                ? this.state.reviews.map(review => (
                    <li className='review-item' key={review.key}>
                        <Typography variant='h4'>{review.author}</Typography>
                        <Typography gutterBottom variant='subtitle2'>{review.content}</Typography>
                    </li>
                ))
                : <Typography variant='h2' align='center'>There are no reviews</Typography>
            }
            </ul>
        )
    }
}
export default Reviews;