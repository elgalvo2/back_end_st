const mongoose = require('mongoose');
const URI = 'mongodb://localhost/proyecto';

mongoose.connect(URI,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false 
 })
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
