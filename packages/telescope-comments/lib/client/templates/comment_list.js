Template.comment_list.helpers({
  child_comments: function(){
      var post = this;
      var unmappedComments;
      if (post.isAdmin) {
          unmappedComments = Comments.find({ postId: post._id, parentCommentId: null, author: Meteor.user() }, { sort: { upvotes: -1, postedAt: -1 } });
      }
      else {
          unmappedComments = Comments.find({ postId: post._id, parentCommentId: null }, { sort: { upvotes: -1, postedAt: -1 } });
      }
      var comments = unmappedComments.map(function (comment, index) {
      if (index == 0) {
        comment.first = true;
      } else {
        comment.first = false;
      }
      return comment;
    });
    return comments;
  }
});

Template.comment_list.rendered = function(){
  // once all comments have been rendered, activate comment queuing for future real-time comments
  window.queueComments = true;
};
