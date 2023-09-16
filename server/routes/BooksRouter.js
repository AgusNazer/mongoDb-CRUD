const BooksRouter = require('express').Router();
const BookCtrl = require('../controller/BookCtrl')


BooksRouter.get('/Book/:id', BookCtrl.getBookById)
BooksRouter.get('/Books', BookCtrl.getBooks)

BooksRouter.post('/newBook', BookCtrl.createBook)

// BooksRouter.put('/update/:id', BookCtrl.updateBook)

// BooksRouter.delete('/delete/:id', BookCtrl.deleteBook)

module.exports = BooksRouter;