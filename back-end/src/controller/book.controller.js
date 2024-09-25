import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
        console.log("book is ready to show");
        
    } catch (error) {
        console.log("Books Page Error: ", error);
        res.status(500).json(error);
    }
};