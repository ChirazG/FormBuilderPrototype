const router = require('express').Router();
const {getAllPages, getPageById, getPageByNumber } = require('../controllers/getpage');
const Page = require('../models/pageSchema');


//http://localhost:5000/

//Get all pages
router.get('/', async (req, res) => {
    const allPages = await getAllPages();
    try {
        return res.json(allPages);
    } catch (error) {
        console.log(error);
    }
});

//Get page by Id
router.get('/pageid', async (req, res) => {

    const _id = req.query.id;
    const pageGet = await getPageById(_id);
    try {
        return res.json({ page: pageGet });
    } catch (error) {
        console.log(error);
    }
});

//Get pages by page_number
router.get('/pagenumber', async (req, res) => {

    try {
        const pageNumber = req.body.page_number
        const result = await getPageByNumber(pageNumber)
        res.json({ status: "success", message: "page geted by page number! ", result });

    } catch (error) {
        res.status(407).json({ message: error.message })
        console.log(error);
    }
});

router.post('/addpage', async (req, res) => {

    const nPage = new Page({
        page_number: req.body.page_number
    });

    try {
        await nPage.save();
        res.json({ status: "success", message: "new Page created", nPage });

    } catch (error) {
        res.status(409).json({ message: error.message })

    }
});

module.exports = router;