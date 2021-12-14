const router = require('express').Router();
const { getFormByFormType, getFormByPageNumber, getFormById, getAllForms } = require('../controllers/getForm');
const Form = require('../models/formSchema');

//http://localhost:5000/form

//Get all forms
router.get('/', async (req, res) => {
    const allForm = await getAllForms();
    try {
        return res.json(allForm);
    } catch (error) {
        console.log(error);
    }
})

//Get form by Id
router.get('/formid', async (req, res) => {

    const _id = req.query.id;
    const formGet = await getFormById(_id);
    try {
        return res.json({ form: formGet });
    } catch (error) {
        console.log(error);
    }
});

//Get form by form_type
router.get('/type', async (req, res) => {

    try {
        const formType = req.body.form_type
        const result = await getFormByFormType(formType)
        res.json({ status: "success", message: "form geted by type! ", result });

    } catch (error) {
        res.status(407).json({ message: error.message })
        console.log(error);
    }
});

//Get forms by page_number
router.get('/pagenumber', async (req, res) => {

    try {
        const page_number = req.query.page_number
        console.log("pageNumber", page_number)
        const result = await getFormByPageNumber(page_number)
        console.log("ppresult", result)
        res.json({ status: "success", message: "form geted by page number! ", result });

    } catch (error) {
        res.status(407).json({ message: error.message })
        console.log(error);
    }
});

router.post('/addform', async (req, res) => {

    const nForm = new Form({
        page_id: req.body.page_id,
        page_number: req.body.page_number,
        form_type: req.body.form_type,
        form_label: req.body.form_label, 
        input: req.body.input
    });

    try {
        await nForm.save();
        res.json({ status: "success", message: "new Form created", nForm });

    } catch (error) {
        res.status(409).json({ message: error.message })

    }
});

router.put('/updateform', async (req, res) => {

    try {
        const updateForm = await Form.updateOne({ _id: req.query.id},
            {
                $set: { 
                    input: req.body.input
                }
            })
        
        res.json({ status: "success", message: "Form updated", updateForm });

    } catch (error) {
        res.status(409).json({ message: error.message })

    }
});





module.exports = router;
