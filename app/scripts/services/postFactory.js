'use strict';

app.factory('Post', function ($firebaseArray,$firebaseObject, FIREBASE_POSTS_URL) {
  var ref = new Firebase(FIREBASE_POSTS_URL);
  var posts = $firebaseArray(ref);

  var Post = {
    all: posts,
    create: function (post) {
      return posts.$add(post);
    },
    get: function (postId) {
      return $firebaseObject(ref.child(postId));
    },
    delete: function (post) {   // delete the object directly ??? no ID ?
      return posts.$remove(post);
    }
  };

  return Post;

});