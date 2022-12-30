class LoginController {
    //! [GET] /login
    index(req, res, next) {
        res.render('login', { layout: false });
    }
}
export default new LoginController();
