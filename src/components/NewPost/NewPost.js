import { Component } from 'react'
import axios from 'axios'
import './NewPost.css'

class NewPost extends Component {

    state = {
        title: '',
        body: '',
        author: 'Max'
    }

    postDataHandler = () => {
        const data = {
            title : this.state.title,
            body: this.state.body,
            author: this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response => {
            console.log(response.data);
        });
        //this.addPost(); to do
    }

    addPost = ()=> {
        const newPost = {title:this.state.title, body: this.state.body, author: this.state.author}
        this.props.addNewPost(newPost);
        this.setState({title: '', body: '', author: 'Max'})
    }

    render () {

        return(
            <div className="NewPost">
                <h1>Add a <label>Title</label>
                Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title}
                    onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.body}
                    onChange={(event) => this.setState({body: event.target.value})} />
                <label>Author</label>
                <select defaultValue={this.state.author}
                    onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>

                <button /*onClick={this.addPost}*/ onClick={this.postDataHandler}>
                    Add New Post
                </button>
            </div>
            
        );
    }

}

export default NewPost;