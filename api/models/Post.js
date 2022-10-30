const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: false
    },
    desc:{
        type: String,
        required: true,
    },
    photo: String,
    categories: {
        type: Array,
        required: false
    }
},
    {timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema);