import { Component } from "react";
import Post from "../../components/Post/Post";
import NewPost from "../../components/NewPost/NewPost";
import FullPost from "../../components/FullPost/FullPost";
import axios from 'axios';


import './Blog.css';

class Blog extends Component {
    
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(pst => {
                return {
                    ...pst,
                    author: 'Chintan'
                }
            })
        
            this.setState({posts:updatedPosts});
            
        })
    }

    render () {

        const posts = this.state.posts.map(post => {
            return <Post title={post.title} author={post.author}/>
        }
        );

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog