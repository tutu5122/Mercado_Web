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


app.get('/', (req, res) => {
    res.render('home', {
        layout:'main',
        producto : ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
    });
});



app.listen( PUERTO, () => console.log(`Servidor listo ${PUERTO}`))
