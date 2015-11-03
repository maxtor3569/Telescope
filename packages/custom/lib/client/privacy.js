Meteor.startup(function () {
    Router.map(function () {
        this.route('privacy', {
            path: '/privacy',
            template: getTemplate('privacyPolicy')
        });
    });
});