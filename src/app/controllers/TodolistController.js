class TodolistController {
    //! [GET] /register
    index(req, res, next) {
        res.send('todolist');
    }
}
export default new TodolistController();
