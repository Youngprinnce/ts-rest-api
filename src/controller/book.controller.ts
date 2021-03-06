import {Request, Response} from 'express';
import Book from '../model/book';

export let allBooks = (req: Request, res: Response) => {
    let books = Book.find((err: any, books: any) => {
        if(err){
            res.send(err)
        } else {
            res.send(books)
        }
    })
}

export let getBook = (req: Request, res: Response) =>{
    Book.findById(req.params.id, (err:any, book:any) => {
        if(err){
            res.send(err)
        } else {
            res.send(book)
        }
    })
}

export let addBook = (req: Request, res: Response) =>{
    let book = new Book(req.body)
    book.save((err:any) => {
        if(err){
            res.send(err)
        } else {
            res.send(book)
        }
    })
}

export let deleteBook = (req: Request, res: Response) =>{
    Book.deleteOne({ _id: req.params.id }, (err:any) => {
        if(err){
            res.send(err)
        } else {
            res.send("Succeefully Deleted the book")
        }
    })
}

export let updateBook = (req: Request, res: Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
        if(err){
            res.send(err)
        } else {
            res.send("Succeefully Updated the book")
        }
    })
}
