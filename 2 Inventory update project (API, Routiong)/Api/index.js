const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const cors = require("cors");

var data = [{ "id": 1, "title": "Excursion", "photo": "http://dummyimage.com/250x250.png/5fa2dd/ffffff", "price": "249.28" },
    { "id": 2, "title": "Ram 1500", "photo": "http://dummyimage.com/250x250.png/dddddd/000000", "price": "407.77" },
    { "id": 3, "title": "Escalade ESV", "photo": "http://dummyimage.com/250x250.png/dddddd/000000", "price": "376.67" },
    { "id": 4, "title": "C-Class", "photo": "http://dummyimage.com/250x250.png/ff4444/ffffff", "price": "357.99" },
    { "id": 5, "title": "6000", "photo": "http://dummyimage.com/250x250.png/cc0000/ffffff", "price": "390.35" },
    { "id": 6, "title": "Town & Country", "photo": "http://dummyimage.com/250x250.bmp/5fa2dd/ffffff", "price": "494.86" },
    { "id": 7, "title": "Continental Flying Spur", "photo": "http://dummyimage.com/250x250.jpg/ff4444/ffffff", "price": "103.17" },
    { "id": 8, "title": "Sequoia", "photo": "http://dummyimage.com/250x250.png/dddddd/000000", "price": "465.44" },
    { "id": 9, "title": "Silverado", "photo": "http://dummyimage.com/250x250.bmp/ff4444/ffffff", "price": "448.56" },
    { "id": 10, "title": "SJ", "photo": "http://dummyimage.com/250x250.bmp/5fa2dd/ffffff", "price": "465.20" },
    { "id": 11, "title": "Contour", "photo": "http://dummyimage.com/250x250.bmp/cc0000/ffffff", "price": "337.29" },
    { "id": 12, "title": "Grand Prix", "photo": "http://dummyimage.com/250x250.png/dddddd/000000", "price": "408.22" },
    { "id": 13, "title": "4Runner", "photo": "http://dummyimage.com/250x250.png/ff4444/ffffff", "price": "240.38" },
    { "id": 14, "title": "Camaro", "photo": "http://dummyimage.com/250x250.png/dddddd/000000", "price": "277.85" },
    { "id": 15, "title": "E-Class", "photo": "http://dummyimage.com/250x250.jpg/cc0000/ffffff", "price": "433.15" },
    { "id": 16, "title": "S4", "photo": "http://dummyimage.com/250x250.jpg/ff4444/ffffff", "price": "216.04" },
    { "id": 17, "title": "Express 3500", "photo": "http://dummyimage.com/250x250.bmp/dddddd/000000", "price": "369.59" },
    { "id": 18, "title": "Odyssey", "photo": "http://dummyimage.com/250x250.jpg/cc0000/ffffff", "price": "294.94" },
    { "id": 19, "title": "Voyager", "photo": "http://dummyimage.com/250x250.png/cc0000/ffffff", "price": "291.45" },
    { "id": 20, "title": "LeMans", "photo": "http://dummyimage.com/250x250.jpg/cc0000/ffffff", "price": "414.10" },
    { "id": 21, "title": "Vandura 3500", "photo": "http://dummyimage.com/250x250.png/dddddd/000000", "price": "113.76" },
    { "id": 22, "title": "600", "photo": "http://dummyimage.com/250x250.bmp/ff4444/ffffff", "price": "368.60" },
    { "id": 23, "title": "E350", "photo": "http://dummyimage.com/250x250.jpg/ff4444/ffffff", "price": "403.45" },
    { "id": 24, "title": "Montero", "photo": "http://dummyimage.com/250x250.bmp/5fa2dd/ffffff", "price": "199.15" },
    { "id": 25, "title": "Passport", "photo": "http://dummyimage.com/250x250.bmp/ff4444/ffffff", "price": "341.11" },
    { "id": 26, "title": "Raider", "photo": "http://dummyimage.com/250x250.png/dddddd/000000", "price": "352.40" },
    { "id": 27, "title": "Sequoia", "photo": "http://dummyimage.com/250x250.jpg/cc0000/ffffff", "price": "317.57" },
    { "id": 28, "title": "Taurus X", "photo": "http://dummyimage.com/250x250.jpg/dddddd/000000", "price": "455.12" },
    { "id": 29, "title": "9-5", "photo": "http://dummyimage.com/250x250.bmp/5fa2dd/ffffff", "price": "297.99" },
    { "id": 30, "title": "C-Class", "photo": "http://dummyimage.com/250x250.jpg/dddddd/000000", "price": "184.28" }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("run");
})

app.get("/Data", (req, res) => {
    res.send(data);
})

app.get("/DataById", (req, res) => {
    var result = {};
    var id = req.query.id;
    for (item of data) {
        if (item.id == id) {
            result = item;
            break;
        }
    }
    return res.send(result);
})

app.get("/DataSearch", (req, res) => {
    var search = req.query.search;

    var result = data.filter(item => {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return res.send(result);
})



app.listen(port, () => {
    console.log(`App running port ${port}`);
});