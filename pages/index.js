import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Link from 'next/link';


// TODO: replace Paper with something generic, like div?
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,     // TODO: 100% width of parent 
    },
    
    grey_grid: {
        backgroundColor: "#F2F2F2",
    },

    feature_card: {
        width: 360,
        height: 240,
    },
    xmlid: {
        paddingTop: 80,
        paddingBottom: 80,
        paddingLeft:95,
        paddingRight: 95,
        backgroundColor: "#3C5940",
    }
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid container spacing={1} justify="center" alignItems="center">
            <Grid container item lg={12} justify="center" alignItems="center">
                <Grid item lg={6}>
                    <img className={classes.xmlid} src={"home/XMLID.jpg"} alt={"xmlid"} width={"300"}></img>
                </Grid>
                <Grid item lg={6}>
                <p>It's time to learn</p>
                <Link href="/after-register" passHref>
                    <Button variant="contained" color="secondary">Sign Up</Button>
                </Link>
                </Grid>
            </Grid>
            <Grid className={classes.grey_grid} container item lg={12}>
                <Grid item lg={6}>
                <p>Feature that is amazing</p>
                </Grid>
                <Grid item lg={6}>
                    <Card className={classes.feature_card}>

                    </Card>
                </Grid>
            </Grid>
            <Grid container item lg={12}>
                <Grid item lg={6}>
                <p>feature box</p>
                </Grid>
                <Grid item lg={6}>
                <p>Feature that is amazing</p>
                </Grid>
            </Grid>
            <Grid className={classes.grey_grid} container item lg={12}>
                <Grid item lg={6}>
                <p>Feature that is amazing</p>
                </Grid>
                <Grid item lg={6}>
                <p>feature box</p>
                </Grid>
            </Grid>
            <Grid container item lg={12}>
                <Grid item lg={12}>
                <p>footer</p>
                </Grid>
            </Grid>
          </Grid>
        </div>
      );
}

Home.Layout = Layout;