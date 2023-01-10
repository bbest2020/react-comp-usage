import React from "react";
import { nanoid } from "nanoid";

import { useDispatch } from "react-redux";
import { addBlogActions } from "./store/add-blog-slice";

export default function AddBlog() {
    const dispatch = useDispatch();
    function getBlog() {
        let id = nanoid();
        id = `Blog ${id}`;
        return {name: id, id: nanoid()};
    }
    return(
        <div>
            Add blog Page <br></br>
            <button onClick={() => dispatch(addBlogActions.addBlog(getBlog()))}>Add Blog</button>
        </div>
    )
}