const Author = require("../models/Author");

// GET BY ID
const AuthorCtrl = {
  getAuthor: async (req, res) => {
    try {
      const { id } = req.params;
      let author = await Author.findById(id);
      if (!author) {
        return res.status(404).send({
          success: false,
          message: " Author not found ",
        });
      }
      return res.status(200).send({
        success: true,
        message: "Author found",
        author,
      });
    } catch (error) {
      return res.status(405).send({
        success: false,
        message: "Author not found",
      });
    }
  },
  //  GET ALL AUTHORS
  getAuthors: async (req, res) => {
    let autohrs = await Author.find({});
    return res.status(200).send({
      success: true,
      autohrs,
    });
  },
  // postAuthor
  createAuthor: async (req, res) => {
    try {
      const { name, surname, age } = req.body;
      let author = new Author({
        name,
        surname,
        age,
      });
      author.save();

      return res.status(200).send({
        success: true,
        message: "Author created",
        author,
      });
    } catch (error) {
      return res.status(405).send({
        success: false,
        message: "Author not found",
      });
    }
  },

  // UPDATE AUTHOR
  updateAuthor: async (req, res) => {
    try {
      const { id } = req.params;
      const { age, name } = req.body;
      let author = await Author.findOneAndUpdate(
        { _id: id },
        { age, name },
        { new: true }
      );

      if (!author) {
        return res.status(404).send({
          success: false,
          message: "Author not found",
        });
      }

      res.status(200).send({
        success: true,
        message: "Author was modified successfully",
        author,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        message: "An error occurred while updating the author",
      });
    }
  },
    // // DELETE AUTHOR
    // deleteAuthor: async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         let author = await Author.findByIdAndDelete(id)
    //         return res.status(200).send({
    //             success: true,
    //             message: 'Author deleted succsesfully',
                
    //         })
    //     } catch (error) {
    //         res.status(500).send({
    //            success: false,
    //            message: error.message
    //         })
    //     }
    // }

    // DELETE AUTHOR
deleteAuthor: async (req, res) => {
    try {
        const { id } = req.params;
        // Obtén la información del autor antes de eliminarlo
        let author = await Author.findById(id);

        if (!author) {
            return res.status(404).send({
                success: false,
                message: 'Author not found',
            });
        }

        // Guarda el nombre del autor antes de eliminarlo
        const authorName = author.name; // Ajusta esto al campo correcto que contiene el nombre
        const authorSurname = author.surname;
        // Elimina el autor
        await Author.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: `Author "${authorName} ${authorSurname}" has been deleted successfully.`,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
        });
    }
}

};

module.exports = AuthorCtrl;
