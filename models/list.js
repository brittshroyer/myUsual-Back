const mongoose = require('mongoose');

var listSchema = {
  listOwner: String,
  sharedOwners: [{type: String, ref: 'User'}],
  listName: String,
  foods: [{type:mongoose.Schema.Types.ObjectId, ref : 'Food'}]
};

var List = mongoose.model('List', listSchema);
module.exports = List;
