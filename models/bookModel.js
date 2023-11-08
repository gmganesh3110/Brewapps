const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
    },
    author: {
        type: String,
        required: [true, "author is required"],
    },
    summary:{
        type: String,
        required: [true, "title is required"],
    }
}, {
    timestamps: true
});

const Books = mongoose.model("books", booksSchema);

module.exports = Books;