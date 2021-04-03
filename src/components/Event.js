import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Divider, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  list: {
    padding: '20px',
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  grid: {
      paddingTop : theme.spacing(5),
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    }
}));

export const Event = React.memo(function Event({event}) {
  const classes = useStyles();
  return (
   <Grid className={classes.grid}>
    <Card className={classes.root}>
       
      <Typography variant="h3" align="center">{event.name}</Typography>

      <Divider variant="middle" />

        <div className={classes.list}>
          <Typography align="center">{event.time}</Typography>
        </div>

      <Divider variant="middle" />
      
        <Button disabled={!event.notexpired} variant="contained" color="primary" className={classes.button}>
        {event.notexpired ? "Go!" : "Finished"}
        </Button>
    </Card>
    </Grid>
  );
});

export default Event



















// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import Grid from '@material-ui/core/Grid';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';



// const useStyles = makeStyles((theme) =>({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   grid: {
//    paddingTop : 10,
//    width: '100%',
//    maxWidth: 360,
//    backgroundColor: theme.palette.background.paper,
//  }
// }));

// const Event = ({event}) => {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//    <Grid className={classes.grid}>
//       <Card className={classes.root}>
//          <CardContent>
//          <Typography variant="h5" component="h2">
//             {bull}{"  " +event.name}
//          </Typography>
//          <Typography className={classes.pos} color="textSecondary">
//             {event.time}
//          </Typography>
//          </CardContent>

//          <CardActions>
//          <Button size="large">{event.notexpired ? "Go!" : <s>Go!</s>}</Button>
//          </CardActions>

//       </Card>
//    </Grid>
//   );
// }

// export default Event;