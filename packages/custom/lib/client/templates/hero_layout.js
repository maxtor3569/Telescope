// Custom layout template for full width hero
Meteor.startup(function() {
  Template.hero_layout.replaces('layout');

  Template.layout.events({
      'click #submit_message_modal': function(e)
      {
        Modal.show('submit_message_modal');
      }
  });
});

