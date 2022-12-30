class ProjectController {
    //! [GET] /project
    index(req, res, next) {
        res.render('project');
    }
}
module.exports = new ProjectController();
