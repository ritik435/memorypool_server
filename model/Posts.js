import mongoose from 'mongoose';


const postsSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    file: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

});
const Posts = new mongoose.model('posts', postsSchema);

export default Posts;