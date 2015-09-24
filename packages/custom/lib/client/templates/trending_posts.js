Template.trending_posts.helpers({
  trending_posts: function () {
    return Posts.find({awesomeMessage:true});
  }
});
