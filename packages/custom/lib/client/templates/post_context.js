Template.post_context.helpers({
    wrappedContext: function () {
        if (this.context) {
            return "Back story: " + this.context + "";
        }
    }
});