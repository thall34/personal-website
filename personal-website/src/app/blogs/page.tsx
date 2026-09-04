'use client'

import { useState, useEffect } from 'react';
import { BlogObject } from '../types/types';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import Header from './components/Header';
import blogPosts from './data/blogPosts';

function Blogs(): React.JSX.Element {
    const [page, setPage] = useState<number>(0);
    const [posts, setPosts] = useState<BlogObject[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const cld = new Cloudinary({
        cloud: {
            cloudName: `${process.env.NEXT_PUBLIC_CLOUD_NAME}`
        }
    });

    function handlePageAdd() {
        setPage(prevPage => prevPage + 1);
    };

    function handlePageSubtract() {
        setPage(prevPage => prevPage - 1)
    };

    useEffect(() => {
        let currentPosts = []
        for (let i = 0; i < 5; i++) {
            if (blogPosts[i] !== undefined) {
                currentPosts.push(blogPosts[i])
            };
        };
        setPosts(currentPosts)
        setLoading(false)
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Blogs</h1>
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
        <>
            <Header />
            <div className='blog-container'>
                <h1>Blogs</h1>
                {posts.length > 0 ? (
                    posts.map((post) => (
                    <div key={post.id} className='blog-card'>
                        <h2>{post.name}</h2>
                        <p>{post.text}</p>
                        <p>Published on {new Date(post.publishDate).toLocaleString('en-CA', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
                        <div className='blog-images'>
                            {post.images.map((image, index) => (
                                <div key={index} className='blog-image-container'>
                                    <AdvancedImage 
                                        cldImg={cld.image(image.imageSrc).quality('auto').format('auto')} 
                                        alt={image.altText} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))
                ) : (
                    <div>
                        <h2>No Blog Posts yet</h2>
                    </div>
                )}
                <div className='button-container'>
                    {posts[0].id === 0 ? (
                        <button disabled className='blog-button disabled'>Previous</button>
                    ) : (
                        <button className='blog-button'>Previous</button>
                    )}
                    {posts.length < 5 || posts[4].id === blogPosts[blogPosts.length - 1].id ? (
                        <button disabled className='blog-button disabled'>Next</button>
                    ) : (
                        <button className='blog-button'>Next</button>
                    )}
                </div>
            </div>
        </>
    )
};

export default Blogs;