Meteor.methods({
    'createAccount': function(params){

      if(Meteor.isServer) {
          if(!Meteor.users.findOne()) {
            console.log('fasjdkhfkjasdhjfklahkjh');
            Accounts.createUser({
              email:    params.email,
              password: params.password,
              username: params.username
            });


          }
      }


    },
    'anonymeUpdate': function(params){
      var user = Meteor.userId();
      var email = Meteor.user().services.facebook.email;
      Meteor.users.update(user, {
        $set:{
          /*'profile.name':null,
          'profile.picture':null,
          'telescope.displayName':null,
          'telescope.birthday':null,
          'telescope.gender':null,
          'services.facebook.gender':null,
          'services.facebook.name':null,
          'services.facebook.first_name':null,
          'services.facebook.last_name':null,
          'services.facebook.link':null,*/
          'profile.anonymous': true

        }
      });
      /*Meteor.users.update(user, {
        $set:{
          'telescope.email': email
        }
      });*/


    },
    // Fonction permit update email of telescope after facebook register
    'updateEmail': function(params){
      var user = Meteor.userId();
      var email = Meteor.user().services.facebook.email;
      Meteor.users.update(user, {
        $set:{
          'profile.anonymous': false
        }
      });
    }
});
// testing purpose;
Meteor.publish("allUsers", function () {
   return Meteor.users.find();
 });
