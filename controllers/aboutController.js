
/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const aboutController = {

    /*
        executed when the client sends an HTTP GET request `/profile/:idNum`
        as defined in `../routes/routes.js`
    */
    getAbout: async function (req, res) {
            res.render("about", {active: 'about'});
    }
}

/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = aboutController;
