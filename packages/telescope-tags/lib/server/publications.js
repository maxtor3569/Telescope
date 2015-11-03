Categories._ensureIndex({"postId": 1});

Meteor.publish('categories', function() {
  if(Users.can.viewById(this.userId)){
    return Categories.find();
  }
  return [categories];
});
