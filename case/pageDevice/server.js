const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    let page = req.query.page || 1;
    let db = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]
    let data = {
        numbers: db.slice(2 * (page - 1), 2 * page)
    };
    res.render('home', data)
}).listen(3000, () => console.log('Server running in port-3000'));