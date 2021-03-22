import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {Grid, Typography, Container, CardMedia, CardContent, Card} from '@material-ui/core'
import useStyles from '../styles'

const MovieList = ({results, location}) => {
    const classes = useStyles()
    return(
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4} justify="center">
                        {results.map(result => <Grid item key={result.id} xs={12} sm={6} md={4} lg={3}>
                            <NavLink className='movie-link' to={{
                                    pathname: `/movies/${result.id}`,
                                    state: {
                                        from: location
                                    }
                                }}>
                                <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={`https://image.tmdb.org/t/p/w300/${result.poster_path}`}
                                    title=''
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h6'>
                                        {result.title}
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                        {result.overview.slice(0, 60) + '...'}
                                    </Typography>
                                </CardContent>
                                </Card>
                                </NavLink>
                            </Grid>
                        )}
                    </Grid>
                </Container>
    )
}

export default withRouter(MovieList);