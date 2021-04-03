import {makeStyles} from '@material-ui/core/styles'
// import NonFoundPage from './components/NonFoundPage';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        listStyleType: 'none',
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    cardMedia: {
        paddingTop: '86.30%',
        height: '60%',
    }
}))

export default useStyles;