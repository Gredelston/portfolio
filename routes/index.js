
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Greg\'s Portfolio'});
};

exports.getProjects = function(req, res){
    res.render('This is a test.');
}