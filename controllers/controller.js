
const controller = {
    redirectIndex: function (req, res) {
        res.redirect('login');
    },
    getIndex: function (req, res) {
        res.redirect('login');
    }
}
module.exports = controller;
