import mongoose from "mongoose";
import Post from "../../client/src/components/Posts/Post/Post.js";
import Posts from "../model/Posts.js"


export const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find();

        res.status(200).json(posts);
    } catch (err) {
        res.status(406).json({ message: err.message });
    }
}


// export const getPostBySearch = async (req, res) => {
//     const { searchQuery } = req.query;


//     try {
//         const title = new RegExp(searchQuery, 'i');
//         const posts = await Post.find({ title });
//         res.json({ posts });

//     } catch (err) {
//         res.status(404).json({ message: err.message })
//     }
// }


export const createPost = async (req, res) => {
    const { headline, description, selectedfile, primaryText, CTA } = req.body;

    const newPostMessage = new Posts({ headline, description, selectedfile, primaryText, CTA })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { headline, description, primaryText, selectedfile, CTA } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { headline, primaryText, description, CTA, selectedfile, _id: id };

    await Posts.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Posts.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully" });
}