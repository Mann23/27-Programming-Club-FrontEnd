import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import history from '../history';


const useStyles = makeStyles({
    root: {
        maxWidth: "900px",
        marginTop: "2%",
        marginRight: "2%",
        marginLeft: "2%",
        marginBottom: "2%",
        // boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)"
        boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
    },
    media: {
        height: 30,
    },
});

export default function BlogCard(prop) {
    const classes = useStyles();

    const ViewBtnHandler = () => {
        console.log(prop.blogId);

        history.push('/view-blog/'+ prop.blogId);

        window.location.reload(false);
    };

    const EditBtnHandler = () => {
        console.log(prop);

        console.log("edit button pressed...");
        history.push('/edit-blog/'+ prop.blogId);

        window.location.reload(false);
    };

    const DeleteBtnHandler = () => {
        console.log(prop.blogId);

        console.log("delete button pressed...");

        axios
            .delete("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => {
                console.log(res);
                console.log("inside reponce promise");
                // setBlogs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

            window.location.reload(false);
    };

    if (prop.uid == prop.authorId) {
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} title="" />

                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h5">
                            {prop.titleBlog}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            component="p"
                        >
                            {prop.abstractBlog}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        variant="outlined"
                        onClick={ViewBtnHandler}
                    >
                        Learn More
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                        onClick={EditBtnHandler}
                    >
                        Edit
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                        onClick={DeleteBtnHandler}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        );
    } else {
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} title="" />

                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h5">
                            {prop.titleBlog}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            component="p"
                        >
                            {prop.abstractBlog}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        variant="outlined"
                        onClick={ViewBtnHandler}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
