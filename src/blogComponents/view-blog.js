import React from "react";
import "./view-blog.css";

export default class ViewBlog extends React.Component {
    render() {
        return (
            <div className="WholeBody">
                <div className="TitleInfo">
                    <h1>Imaginary Time</h1>
                </div>

                <div className="DateInfo">
                    <p> April 20, 2021</p>
                </div>

                <div className="AbstractInfo">
                    <p>
                        Imaginary time is a concept derived from quantum
                        mechanics and is essential in connecting quantum
                        mechanics with statistical mechanics.
                    </p>
                </div>

                <div className="ContentInfo">
                    <p>
                        Imaginary time can be difficult to visualize. If we
                        imagine "regular time" as a horizontal line running
                        between "past" in one direction and "future" in the
                        other, then imaginary time would run perpendicular to
                        this line as the imaginary numbers run perpendicular to
                        the real numbers in the complex plane. Imaginary time is
                        not imaginary in the sense that it is unreal or made-up
                        — it simply runs in a direction different from the type
                        of time we experience. In essence, imaginary time is a
                        way of looking at the time dimension as if it were a
                        dimension of space: you can move forward and backward
                        along imaginary time, just like you can move right and
                        left in space.
                    </p>
                </div>

                <div className="AuthorInfo">
                    <blockquote>
                        <p>Created by</p>
                        <p className="AuthorName"> - John River </p>
                    </blockquote>
                </div>
            </div>
        );
    }
}

// import ViewBlog from './view-blog.js';
