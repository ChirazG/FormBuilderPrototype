const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new mongoose.Schema({
    page_id: {
        type: Schema.Types.ObjectId,
        ref: 'page'
    },

    page_number: Number,
     
    form_type: String
    ,
    form_label:
        String
    , 
    input: 
        String
    

},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model("Form", FormSchema);