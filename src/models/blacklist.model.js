const mongoose = require("mongoose");
const blackListSchema = mongoose.Schema({
    accessToken: {type: String, require: true}
})
const BlackListModel = mongoose.model("blacklistUser", blackListSchema)
module.exports = BlackListModel;