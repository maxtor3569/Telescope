Template.register_modal.events({
  'submit #form-register': function(e)
  {
    e.preventDefault();
    // Get back infos
    var email = e.target.email.value,
    password = e.target.password.value,
    username = e.target.username.value
    ;
    var params = {
      email : email,
      password : password,
      username : username,

    };
    Meteor.call('createAccount', params, function (err) {
      if (err) {
        console.log(err);
        jQuery('#errors-login').html(err.reason);
      }
      else {
        Meteor.loginWithPassword(email, password, function(err) {
          Modal.hide('register_modal');
        });
      }
    });

  },
  'click .btn-facebook': function(e)
  {
    e.preventDefault;
    Meteor.loginWithFacebook({
      requestPermissions :
      ['user_likes',
      'user_birthday',
      'email',
      'user_location',
      'user_work_history',
      'user_location',
      'user_groups']
    },function (err){
      if(err){
        console.log("error when login with facebook " + err);
      } else {
        Modal.hide('register_modal');
        // update field for anynmous case..
        if( $('input:radio[name=choice]:checked').val() == 'anonyme' ){
          Meteor.call('anonymeUpdate');
        }
        else {
          Meteor.call('updateEmail');
        }
      }
    });
  },
  'click #forgetPassword': function(e)
  {
    Modal.hide('register_modal');
  }
});
