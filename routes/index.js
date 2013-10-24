
/*
 * GET home page.
 */

exports.index = function(req, res){
	// Extract the "About Me" blurb.
    res.render('index', { title: 'Greg\'s Portfolio'});
};

// GET figure that out later
exports.getProjects = function(req, res){
	console.log('testing');
    res.render('This is a test.');
}