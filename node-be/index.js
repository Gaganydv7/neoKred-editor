const express = require('express');
const app = express();
const port = 1000;
const { marked } = require('marked');
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.post('/', (req, res) => {
    let requestTxt = req.body.normalTxt;
    console.log('requested Text ----', requestTxt);
    let txtConvertedToHtml = marked(requestTxt);
    res.json({ txtConvertedToHtml: txtConvertedToHtml })
})

app.listen(port, () => console.log('server started on port ' + port))