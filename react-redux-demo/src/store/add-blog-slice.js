import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const addBlogSlice = createSlice({
    name: 'add-blog',
    initialState: { blogs : [{name: "blog 1 800", id: "1"}, {name: "blog 2", id: "2"}] },
    reducers: {
        addBlog(state, action) {
            return {blogs : [...state.blogs, action.payload]}
        }
    }
});

export const addBlogActions = addBlogSlice.actions;
export default addBlogSlice;