let express= require('express');
let router= express.Router();


//connect to out Book Model
let Book= require('../models/book');

//Get Route for the book list - Read Operation
router.get('/',(req,res,next)=>{
    Book.find((err,bookList) => {
        if(err){
            return console.log(err);
        }
        else
        {
            res.render('book/list', {title:'Book List', BookList: bookList})
        }
    })
})
module.exports= router;

/* Get Route for the Book Add page - Create Operation */
router.get('/add',(req,res,next)=>{
  res.render('book/add', {title:'Add Book'})
});
/* Post Route for the Book Add page - Create Operation */
router.post('/add',(req,res,next)=>{
    let newBook= Book({
        "name": req.body.name,
        "author": req.body.author,
        "published":req.body.published,
        "description": req.body.description,
        "price":req.body.price
    });
    Book.create(newBook, (err,Book)=>
    {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/book-list');
        }
    })
});

/* Get Route for the Book Edit page - Update Operation */
router.get('/edit/:id',(req,res,next)=>{
let id= req.params.id;
Book.findById(id,(err,bookToEdit)=>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{
        res.render('book/edit',{title: 'Edit Book', book: bookToEdit});
    }
})
});
/* Post Route for the Book Edit page - Create Operation */
router.post('/edit/:id',(req,res,next)=>{
    let id=req.params.id;
    let updateBook=Book({
        "_id":id,
        "name":req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "description":req.body.description,
        "price":req.body.price
    })
});

/* Get Route for deletion - Delete Operation */
router.get('/delete/:id',(req,res,next)=>{
   let id=req.params.id;

   Book.remove({ _id: id}, (err)=>{
       if(err)
       {console.log(err);
            res.end(err);
   }

   else{
        res.redirect('/book-list');
   }})
});