import React, { Component } from 'react'
import './likes.styles.css';

import CustomButton from '../CustomButton/custom-button.component';

export default class Likes extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }

    likeThisPost = () => {
        this.setState({likes: this.state.likes + 1})
    }
    dislikeThisPost = () => {
        this.state.likes > 0 ? this.setState({likes: this.state.likes - 1}) : this.setState({likes: 0})
    }
    
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", width: "100%"}}>
  
                <p style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>Likes: {this.state.likes}</p>
  
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: "10px"}}>
                  
                <CustomButton onClick={this.likeThisPost} name="Like"></CustomButton>
                <CustomButton onClick={this.dislikeThisPost} name="Dislike"></CustomButton>
                  
                </div>
            </div>
        )
    }
}
