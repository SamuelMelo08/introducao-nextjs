'use client';

import { useEffect, useState } from "react"


type Post = {
    id: number;
    title: string;
    body: string;
}


export default function PostsPage() {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {

        const fetchPosts = async () => {

            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            const data = await res.json();
            setPosts(data)

        }
        fetchPosts();

    }, [])

    return (

        <div className="bg-gray-150 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center" >Últimos Posts</h1>
            
            {posts.map((post, index) => (
                <div key={index} className="m-6 bg-gray-300 p-2 rounded-2xl shadow shadow">
                    <h2 className="text-xl font-semibold mb-2" >{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}

        </div>

    )

}