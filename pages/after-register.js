import Layout from '../components/layout';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,     // TODO: 100% width of parent 
    },
    comingsoon: {
        marginLeft: 300,
        marginTop: 100,
    }
}));
export default function AfterRegister() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <img className={classes.comingsoon} src={"comingsoon.png"} alt={"coming soon"} width={"500"}></img>
        </div>
    );
}

AfterRegister.Layout = Layout;

