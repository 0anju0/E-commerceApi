const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://anjubhakta2426:12345@cluster0.xgy09rx.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
