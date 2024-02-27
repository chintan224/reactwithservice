import { Component } from 'react'

import './NewPost.css'

class NewPost extends Component {

    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    render () {

        return(
            <div className="NewPost">
                <h1>Add a <label>Title</label>
                Post</h1>
                <label>Title</label>
                <input type="text" defaultValue={this.state.title}
                    onChange={(event) => this.setState({ttile: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" defaultValue={this.state.content}
                    onChange={(event) => this.setState({ttile: event.target.value})} />
                <label>Author</label>
                <select defaultValue={this.state.author}
                    onChange={(event) => this.setState({ttile: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
            </div>
        );
    }

}

export default NewPost;