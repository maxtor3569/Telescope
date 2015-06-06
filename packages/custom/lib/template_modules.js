// add template module to the hero zone
Telescope.modules.add("hero", {
  template: 'hello',
  order: 1
});

//Telescope.modules.add("commentThreadBottom", {
//    template: 'post_subscribe_facebook',
//    order: 10
//});

//Telescope.modules.add("commentThreadBottom", {
//    template: 'post_subscribe_facebookscript',
//    order: 9
//});

Telescope.modules.add("commentThreadBottom", {
    template: 'post_share',
    order: 11
});
