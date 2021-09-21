import mongoose from 'mongoose'

const url:string = 'mongodb://127.0.0.1:27017/ts-rest-api';

mongoose.connect(url, (err:any) => {
    if(err){
        console.log(err.message)
    } else {
        console.log("Successfully Connected to MongoDB")
    }
});

export const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const Book = mongoose.model('Book', BookSchema);
export default Book