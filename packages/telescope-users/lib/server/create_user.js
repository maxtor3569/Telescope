Accounts.onCreateUser(function(options, user){
  user = Telescope.callbacks.run("onCreateUser", user, options);
  // get facebook profile picture
  //console.log(options);
  if (options.profile && options.anonyme != true  ) {
        if(user.services.facebook)
        {
          options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
          var result = Meteor.http.get('https://graph.facebook.com/v2.4/' + user.services.facebook.id + '?access_token=' + user.services.facebook.accessToken + '&fields=first_name, last_name, birthday, email, gender, location, link, friends');
          if(result.data.birthday)
            user.telescope.birthday = result.data.birthday;
          if(user.services.facebook.gender)
            user.telescope.gender = user.services.facebook.gender;
        }

        user.profile = options.profile;
    }
  return user;
});
