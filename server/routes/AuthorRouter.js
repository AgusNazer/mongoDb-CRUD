const AuthorRouter = require('express').Router();
const AuthorCtrl = require('../controller/Authoctrl')


AuthorRouter.get('/author', AuthorCtrl.getAuthor)
AuthorRouter.get('/authors', AuthorCtrl.getAuthors)

AuthorRouter.post('/newAuthor', AuthorCtrl.createAuthor)

AuthorRouter.put('/update/:id', AuthorCtrl.updateAuthor)

AuthorRouter.delete('/delete/:id', AuthorCtrl.deleteAuthor)

module.exports = AuthorRouter;