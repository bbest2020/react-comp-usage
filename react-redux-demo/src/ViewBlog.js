import React from "react";
import { useSelector } from "react-redux";

export default function ViewBlog() {
    const blogs = useSelector((state) => state.addBlogReducer.blogs);
    const blogElements = blogs.map(blog => <li>{blog.name}</li>)
    const counter = useSelector((state) => state.counterReducer.counter);
    return(
        <div>View Blog {counter}
            <ul>
                {blogElements}
            </ul>
        </div>
    )
}