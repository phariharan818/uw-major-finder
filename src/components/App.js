import React from 'react';
import { NavBar } from './NavBar';
import { Post } from './Post';
import { CreatePost } from './CreatePost';
import { FilterButton, FilterPost } from './FilterPost';
import { Footer } from './Footer';

export default function App(props) {

    const navList = ['homepage', 'major', 'post'];

    //what content should my App look like?
    return (
        
        <div className='post-page'>
            <NavBar />
            <div className="container-fluid d-flex flex-column">
                <CreatePost />
                <FilterPost />
                <Post />
                <Post />
            </div>
            <Footer />
        </div>
    );
}