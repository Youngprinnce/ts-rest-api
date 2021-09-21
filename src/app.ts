import express, {Application, Request, Response, NextFunction} from "express";

import * as bookController from './controller/book.controller'

const app: Application = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello')
});

app.get('/books', bookController.allBooks);
app.get('/book/:id', bookController.getBook);
app.post('/book', bookController.addBook);
app.delete('/book/:id', bookController.deleteBook);
app.put('/book/:id', bookController.updateBook);

app.listen(5000, () => console.log('Server running'));