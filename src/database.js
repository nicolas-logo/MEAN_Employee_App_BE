const mongoose = require('mongoose');
console.log("Connecting to ",process.env.MONGODB_URI_LOCAL)
mongoose.connect(process.env.MONGODB_URI)
    .then(db => console.log("Db is connected"))
    .catch(err => console.error(err))