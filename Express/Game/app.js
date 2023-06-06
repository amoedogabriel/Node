import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import routes from './routes/about.js';

// Importando os estilos do Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';


const app = express();

// Configuração do middleware Morgan para gerar logs
app.use(morgan('combined'));


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use('/', routes);
app.use(express.static('public'));


const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
