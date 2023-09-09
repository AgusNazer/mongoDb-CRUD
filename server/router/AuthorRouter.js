// const express = require('express');
// const Author = require('../models/Author')
// const AuthorRouter = express.Router()


// //  READ
// AuthorRouter.get('/', async (req, res)=>{
//     let autohrs = await Author.find({})
//     return res.status(200).send({
//      success: true,
//      autohrs,
//     })
// })
// // CREATE
// AuthorRouter.post('/author', async (req, res) =>{
//     try {
//            const {name, surname, age} = req.body
//            if(!name || !surname || !age ){
//            return res.status(400).send({
//               success:false,
//               message: 'Faltan completar datos'
//            })
//         }

//         let author = new Author ({
//             name,
//             surname,
//             age
//         })
//         await author.save()
//         return res.status(200).send({
//             success: true,
//             message: 'Autor created succesfully',
//             author,
//         })
//     }catch(error) {
//          return res.status(500).send({
//             success:false,
//             message: error.message
//         })
//     }
// })


// // UPDATE

// AuthorRouter.put('/update/:id', async (req, res) => {
//     const { id } = req.params;
//     const { age } = req.body;

//     try {
//         let author = await Author.findOneAndUpdate({ _id: id }, { age }, { new: true });

//         if (!author) {
//             return res.status(404).send({
//                 success: false,
//                 message: 'Author not found'
//             });
//         }

//         res.status(200).send({
//             success: true,
//             message: 'Author was modified successfully',
//             author
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({
//             success: false,
//             message: 'An error occurred while updating the author'
//         });
//     }
// });



// // DELETE 
// AuthorRouter.delete('/delete/:id', async (req, res) =>{

//     try {
//         const {id} = req.params;
//         await Author.findByIdAndDelete(id)
//         res.status(200).send({
//             success:true,
//             message: 'Author deleted succsefully'
//         })
        
//     } catch (error) {
//         res.status(500).send({
//             success: false,
//             message: error.message
//         })
//     }
   
   
// })

// module.exports = AuthorRouter;