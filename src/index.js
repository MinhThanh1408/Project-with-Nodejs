//! Imports libraries
import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

//! Config Path, __dirname, everything
import path from 'path';
import route from './routes/index.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

//! Template engine
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
        defaultLayout: path.join(
            __dirname,
            '/resources/views/layouts/layout1.hbs',
        ),
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

//!Config static files
app.use(express.static(path.join(__dirname, 'public')));

//!Config body parser
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//! Routes init
route(app);

//! HTTP logging (Gửi logging mỗi lần client gửi request)
app.use(morgan('tiny'));

app.get('/login', function (req, res) {
    res.render('login', { layout: false });
});
app.get('/register', function (req, res) {
    res.render('register', { layout: false });
});
app.get('/', function (req, res) {
    res.render('home', { layout: false });
});

//! Console.log Link to Port
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
