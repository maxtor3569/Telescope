Accounts.onCreateUser(function(options, user){
  user = Telescope.callbacks.run("onCreateUser", user, options);
  // get facebook profile picture
  console.log(options);
  if (options.profile && options.anonyme != true  ) {
        if(user.services.facebook)
          options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    }
  return user;
});
