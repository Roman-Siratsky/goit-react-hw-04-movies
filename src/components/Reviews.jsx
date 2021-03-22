import React, { Component } from 'react'
import axios from 'axios';
import {Typography} from '@material-ui/core'
const apiKey = 'c8971b346877ee4bba0d277ad44911fe'
class Reviews extends Component {

    state = {
        reviews: [],
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.filmId}/reviews?api_key=${apiKey}`)
        .then(res => res.data.results).then(results => results.length > 0
            ? this.setState({reviews: [...results]})
            : null
        )
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