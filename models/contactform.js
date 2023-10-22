const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const contact = new Schema({
  name: String,
  Email: String,
  subject: String,
  message: String 
});
 
 
// Create a model based on that schema
const Contact = mongoose.model("Contact", contact);
 
 
// export the model
module.exports = Contact; 