// post.Controller.js
function index(req, res) {
    const posts = "Post lines";
    res.send(posts);
}

module.exports = {
    index: index
};
