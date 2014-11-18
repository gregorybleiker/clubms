/*global Ember*/
var PageMdl = {
    name: "PageModel",
    initialize: function (container, application) {
        var PageModel  = Ember.Object.extend();
        application.register('model:page', PageModel);
        application.inject('container', 'clubms', 'page:model');
    }
};

export
default PageMdl;