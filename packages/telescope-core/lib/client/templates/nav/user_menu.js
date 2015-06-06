Template.user_menu.helpers({
  menuLabel: function () {
    return Users.getDisplayName(Meteor.user());
  },
  menuItems: function () {
    return Telescope.menuItems.get("userMenu");
  },
  menuMode: function () {
    if (!!this.mobile) {
      return 'list';
    } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {
      return 'dropdown';
    } else {
      return 'accordion';
    }
  }
});

// Add click handler for the sign-in-as-guest link in the navbar.
//Template.user_menu.events({
    //'click #sign-in-as-guest': function(e)
    //{ 
      //Meteor.loginWithPassword("guest@textie.co", "guestguest");
    //}
//});
