Meteor.methods({
    'createAccount': function(params){
      Accounts.createUser({
        email:    params.email,
        password: params.password,
        username: params.username
      });

    },
    'anonymeUpdate': function(params){
      var user = Meteor.userId();
      Meteor.users.update(user, {
        $set:{
          'profile.name':null,
          'profile.picture':null,
          'telescope.displayName':null,
          'services.facebook.name':null,
          'services.facebook.first_name':null,
          'services.facebook.last_name':null,
        }
      });
    }
});
// testing purpose;
Meteor.publish("allUsers", function () {
   return Meteor.users.find();
 });
