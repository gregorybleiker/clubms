/*global Ember*/
var PagesRoute = Ember.Route.extend({

    model: function () {
        var theModel = this.store.find('page');
        theModel.get('attachments');
        return theModel;
    }
});

export default PagesRoute;