if (Meteor.isClient) {
    // This code only runs on the client
    Template.post_subscribe_facebook.helpers({
        currentPage: window.location.href
    });
}