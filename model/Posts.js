import mongoose from 'mongoose';


const postsSchema = new mongoose.Schema({
    headline: String,
    description: String,
    primaryText: String,
    CTA: String,
    selectedfile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }

});
const Posts = new mongoose.model('posts', postsSchema);

export default Posts;