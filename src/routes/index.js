import loginRouter from './login.js';
import registerRouter from './register.js';
import todolistRouter from './todolist.js';

export default function route(app) {
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/todolist', todolistRouter);

    // app.get('/login', function(req, res) {
    //     res.render('login', { layout: false });
    // });
    // app.get('/register', function(req, res) {
    //     res.render('register', { layout: false });
    // });
    // app.get('/', function(req, res) {
    //     res.render('home', { layout: false });
    // });
}
