import { bookModel } from "../model/booksModel.js";

export const addBooks =  (req, res) => {
  try {
    const name = req.body.name;
    const img = req.body.img;
    const summary = req.body.summary;

    const book = new bookModel({
      name: name,
      img: img,
      summary: summary,
    });

    book.save().then((bookSaved) => {
        res.status(201).json({
          message: "Book created successfully!",
          post: bookSaved,
        });
      })
  
  }
  
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

};

export const getAllBooks =   (req, res) => {
   
    bookModel.find().then((results) => {
    res.status(200).json({
      books: results,
    });
  });
};

export const getBookById = (req, res) => {
  const id = req.params.id;

  bookModel.findById(id).then((results) => {
    res.status(200).json({
      books: results,
    });
  });
};

export const updateBook = (req, res) => {
    const id = req.params.id;
    
    const updatedData = req.body;
    const options = { new: true };
  
    bookModel.findByIdAndUpdate(id, updatedData,options).then((results) => {
      res.send({
        books: results,
        message:"Book updated successfully"
      });
    });
  };

  
  export const deleteBook = (req, res) => {
    const id = req.params.id;
  
    bookModel.findByIdAndDelete(id).then((results) => {
      res.status(200).json({
        message:"Book deleted successfully"
      });
    });
  };
  