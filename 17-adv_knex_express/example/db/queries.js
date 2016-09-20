var knex = require('./knex');

function Users() {
    return knex('users');
}

function Posts() {
    return knex('posts');
}

function Comments() {
    return knex('comments');
}

module.exports = {
    getAllUsers: function() {
        return Users();
    },
    getAllPosts: function() {
        return Posts();
    },
    getAllComments: function() {
        return Comments();
    },
    getSinglePost: function(id) {
        return Posts().where('id', id);
    },
    getNumberOfPosts: function() {
        return knex.raw(SELECT COUNT(*) FROM posts);
    },
    getAllUserInteraction: function(id) {
        return Users().where('id', id)
        .then(function(userData) {
            userData = userData[0];
            return Posts().where('user_id', id)
            .then(function(postData) {
                userData.posts = postData;
                return Comments().where('user_id', id)
                .then(function(commentData){
                    userData.comments = commentData;
                    return userData;
                })
            })
        })
    }
};
