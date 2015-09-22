Template.submit_message_modal.helpers({
  categories: function () {
    return Categories.find({});
  },

});

Template.submit_message_modal.events({
  'click input#catBox': function (){
    var arrayOfBoxes = document.querySelectorAll(".radio-inline");
    var empty = [];
    empty.forEach.call(arrayOfBoxes, function (arrayOfBoxes){
      arrayOfBoxes.id ="" ;
    })
    event.path[1].setAttribute("id", "chosen")
  },
  'click button' : function (){

  }


});


Template.submit_message_modal.helpers({
  postFields: function () {
    return Posts.simpleSchema().getEditableFields(Meteor.user());
  }
});

AutoForm.hooks({
  submitPostForm: {

    before: {
      method: function(doc) {

        var post = doc;

        this.template.$('button[type=submit]').addClass('loading');

        // ------------------------------ Checks ------------------------------ //

        if (!Meteor.user()) {
          Messages.flash(i18n.t('you_must_be_logged_in'), 'error');
          return false;
        }

        // ------------------------------ Callbacks ------------------------------ //

        // run all post submit client callbacks on properties object successively
        post = Telescope.callbacks.run("postSubmitClient", post);

        return post;
      }
    },

    onSuccess: function(operation, post) {
      this.template.$('button[type=submit]').removeClass('loading');
      Events.track("new post", {'postId': post._id});
      Router.go('post_page', {_id: post._id});
      Modal.hide('submit_message_modal');
    },

    onError: function(operation, error) {
      this.template.$('button[type=submit]').removeClass('loading');
      // Messages.flash(error.message.split('|')[0], 'error'); // workaround because error.details returns undefined
      Messages.clearSeen();
      // $(e.target).removeClass('disabled');
      if (error.error === 603) {
        var dupePostId = error.reason.split('|')[1];
        Router.go('post_page', {_id: dupePostId});
      }
      // Modal.hide('submit_message_modal');
    }

  }
});