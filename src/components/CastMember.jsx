import React from 'react'
import {Grid, Typography, Container, CardMedia, CardContent, Card} from '@material-ui/core'
import useStyles from '../styles'

const CastMember = ({cast}) => {
    const classes = useStyles()
    return(
        <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4} justify="center">
                        {cast.map(member => <Grid item key={member.id} xs={12} sm={6} md={4} lg={3}>
                                <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
                                    title=''
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h6'>
                                    {member.name}
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                    {member.character}
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </Container>
    )
}

export default CastMember;