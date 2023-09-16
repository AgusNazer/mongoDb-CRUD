const Book = require('../models/Book');


const BookCtrl = {
    // books by id
    getBookById: async (req, res) => {
        try {
            const { id } = req.params;
            let book = await Book.findById(id).populate({path: 'author', select:'name surname'})
        
            if(!book){
                return res.status(404).send({
                    success: false,
                    message: 'Book not found'
                })
            }
        
            return res.status(200).send({
                success: true,
                message: 'Book found',
                book
            })
        
           } catch (error) {
            return res.status(400).send({
                success:false,
                message: 'We cant found the book'
            })
           }
    },
     // all books
    getBooks: async (req, res) => {
        try {
            let books = await Book.find({});
            return res.status(200).send({
                success: true,
                books
            })
        } catch (error) {
            
        }
    },

    createBook: async (req, res) => {
        try {
            const { title, description, authorId} = req.body;
            if(!title || !description || !authorId ){
                return res.status(400).send({
                   success:false,
                   message: 'Faltan completar datos'
                })
             }
    
             let book = new Book ({
                title,
                description,
                author: authorId
            })
            await book.save()
            return res.status(200).send({
                success: true,
                message: 'Book created succesfully',
                book,
            })
    
        } catch (error) {
            return res.status(500).send({
                success:false,
                message: error.message
            });
        }
    }
}

module.exports = BookCtrl;