Accounts.onCreateUser(function(options, user){
  user = Telescope.callbacks.run("onCreateUser", user, options);
  // get facebook profile picture
  if (options.profile) {
        if(user.services.facebook)
        {
          options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
          var result = Meteor.http.get('https://graph.facebook.com/v2.4/' + user.services.facebook.id + '?access_token=' + user.services.facebook.accessToken + '&fields=first_name, last_name, birthday, email, gender, location, link, friends');
          //console.log(result.data.birthday);
          if(result.data.birthday)
            user.telescope.birthday = result.data.birthday;
          if(user.services.facebook.gender)
            user.telescope.gender = user.services.facebook.gender;
          if(user.telescope)
              user.telescope.email = user.services.facebook.email;
        }

        user.profile = options.profile;
    }

  return user;
});
