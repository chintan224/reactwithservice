import { Component } from "react";
import Post from "../../components/Post/Post";
import NewPost from "../../components/NewPost/NewPost";
import FullPost from "../../components/FullPost/FullPost";
import axios from 'axios';


import './Blog.css';

class Blog extends Component {
    
    state = {
        posts: [],
        selectedPost: {title: 'title', author: 'author', content: 'content'},
        selectedPostId: null
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

    addNewPost = (post) =>{
        console.log('In addNewPost: ' + post.title + ' ' + post.body +  ' ' + post.author);
        const revisedPosts = this.state.posts.slice(0,3);
        revisedPosts.unshift(post);    
        this.setState({posts: revisedPosts})
    }

    showPost(index) {
        console.log ('passed index in showPost' + index);
        this.setState({selectedPost: this.state.posts[index]});
        console.log ('selected post' + this.state.posts[index]);
    }

    postSelectHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {

        const posts = this.state.posts.map((p,index) => {
            return <Post selectedPost={p} myClick={ ()=> this.showPost(index)}
                    clicked = {() => this.postSelectHandler(p.id)}/>
        }
        );

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost selectedPost={this.state.selectedPost} id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost addNewPost={this.addNewPost}/>
                </section>
            </div>
        );
    }
}

export default Blog