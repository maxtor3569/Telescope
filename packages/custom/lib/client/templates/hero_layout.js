// Custom layout template for full width hero
Meteor.startup(function() {
  Template.hero_layout.replaces('layout');

  Meteor.subscribe('trendingPosts');

  Template.layout.events({
    // 'click ' : function(e){

    // },
      'click #submit_message_modal': function(e)
      {
        if (!Meteor.user()) {
          Messages.flash(i18n.t('you_must_be_logged_in'), 'error');
          console.log('not logged in');
          Router.go('atSignIn');
        } else {
          Modal.show('submit_message_modal');
        }

      }
  });
});

