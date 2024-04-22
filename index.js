// importamos express
import express from 'express';
import { create } from 'express-Handlebars';

const app = express();
const PUERTO = 3000;

app.use(express.static('public'));
app.use('/bootstrap', express.static( "node_modules/bootstrap/dist/css"));
app.use('/jquery',express.static( "node_modules/jquery/dist"));

const hbs = create({
    partialsDir:[
        "views"
    ]
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const producto =  ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"]
const productoCarro = []

app.get('/', (req, res) => {
    res.render('home', {
        layout:'main',
        producto : producto,
        productoCarro: productoCarro,
    });
});

app.get('/add-cart/:fruit', (req, res) => {
    const producto = req.params.fruit;
    
    productoCarro.push(producto);
    res.redirect('/')
});

app.listen( PUERTO, () => console.log(`Servidor listo ${PUERTO}`))
