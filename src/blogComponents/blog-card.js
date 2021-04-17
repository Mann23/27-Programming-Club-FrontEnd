import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// eslint-disable-next-line
import sampleCardImage from "./images/sampleCardImage.jpg";

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        marginTop: "5%",
        marginRight: "2%",
        marginLeft: "2%",
        marginBottom: "5%",
        // boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)"
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
    },
    media: {
        height: 30,
    },
});

export default function BlogCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>

                <CardMedia
                    className={classes.media}
                    // image={sampleCardImage}
                    title=""
                />

                <CardContent>
                    <Typography gutterBottom variant="h4" component="h5">
                        Lizard
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary" variant="outlined">
                    Learn More
                </Button>
                <Button size="small" color="primary">
                    Edit
                </Button>
                <Button size="small" color="primary">
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}