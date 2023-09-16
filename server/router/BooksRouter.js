// const express = require('express');
// const Book = require('../models/Book');
// const BookRouter = express.Router();


// // READ
// BookRouter.get('/', async (req, res) =>{
//     let books = await Book.find({})
//     return res.status(200).send({
//         success: true,
//         message: 'Book found succsefully',
//         books,
//     })
// })

// //GET BY ID
// BookRouter.get('/find/:id', async (req, res) =>{
//    try {
//     const { id } = req.params;
//     let book = await Book.findById(id).populate({path: 'author', select:'name surname'})

//     if(!book){
//         return res.status(404).send({
//             success: false,
//             message: 'Book not found'
//         })
//     }

//     return res.status(200).send({
//         success: true,
//         message: 'Book found',
//         book
//     })

//    } catch (error) {
//     return res.status(400).send({
//         success:false,
//         message: 'We cant found the book'
//     })
//    }
// })


// // CREATE
// BookRouter.post('/book', async (req, res) => {
    // try {
    //     const { title, description, authorId} = req.body;
    //     if(!title || !description || !authorId ){
    //         return res.status(400).send({
    //            success:false,
    //            message: 'Faltan completar datos'
    //         })
    //      }

    //      let book = new Book ({
    //         title,
    //         description,
    //         author: authorId
    //     })
    //     await book.save()
    //     return res.status(200).send({
    //         success: true,
    //         message: 'Book created succesfully',
    //         book,
    //     })

    // } catch (error) {
    //     return res.status(500).send({
    //         success:false,
    //         message: error.message
    //     })
    // }
// })

// module.exports = BookRouter;