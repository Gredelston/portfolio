
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
    res.end('This is a test.');
}

/*

Given req string (projectname.ext),
return the appropriate blurb.

*/