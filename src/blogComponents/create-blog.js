import React from 'react';
import './create-blog.css'

export default class CreateBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleOfBlog: '',
            abstractOfBlog: '',
            contentOfBlog: '',
        };
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting \"" + this.state.titleOfBlog + "\" ");
    }
    
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    
    render() {
        return (
            <div className='container'>
            <form onSubmit={this.mySubmitHandler}>
                
                <div class="row">
                    <div class="col-25">
                        <label>Title:</label>
                    </div>
                    <div class="col-75">
                        <input
                            type='text'
                            name='titleOfBlog'
                            onChange={this.myChangeHandler}
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label>Abstract:</label>
                    </div>
                    <div class="col-75">
                        <textarea name='abstractOfBlog' value={this.state.abstractOfBlog} onChange={this.myChangeHandler} />
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label>Content:</label> 
                    </div>
                    <div class="col-75">
                        <textarea name='contentOfBlog' value={this.state.contentOfBlog} onChange={this.myChangeHandler} style={{height:'300px'}}/>
                    </div>
                </div>

                <div class="row">
                    <input type="submit" value="SUBMIT"/>
                </div>

            </form>
            </div>
        );
    }
}