const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
    page_number: Number
});

module.exports = mongoose.model("Page", PageSchema);