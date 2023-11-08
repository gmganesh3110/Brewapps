// Import Todo module
const Books = require("../models/bookModel.js")
// Import mongoose default function
const { findAll, findOneByid, updateOne, deleteOne, createOne } = require("./factoryHandler.js");

const createBook = createOne(Books)// function to create Book
const getBooks = findAll(Books)// function to get all Books 
const getBook = findOneByid(Books)// function get Book by id
const updateBook = updateOne(Books)// function to udpate Book
const deleteBook = deleteOne(Books)//function to delete id

//exporting all functions

module.exports = { createBook, getBooks, getBook, updateBook, deleteBook } 