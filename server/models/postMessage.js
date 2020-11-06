import mongoose from 'mongoose';

const postSchems = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String
});