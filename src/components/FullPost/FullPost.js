import {Component} from 'react';

import './FullPost.css';

class FullPost extends Component {

    state = {
       posts: []
    }

    

    render() {
        let post = <p>Please select a Post !</p>;

        post = (
            <div className="FullPost">
                <h1>{this.props.selectedPost.title}</h1>
                <p>{this.props.selectedPost.body}</p>
                <p>{this.props.selectedPost.author}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>
        );
        return post;
    }
}

export default FullPost;