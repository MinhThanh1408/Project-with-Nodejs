class RegisterController {
    //! [GET] /register
    index(req, res, next) {
        res.render('register', { layout: false });
    }
}
export default new RegisterController();
