/*global Ember*/
var ConditionalView = Ember.View.extend({
    toggleEdit: function () {
        this.set('isEditing', ~ (this.get('isEditing')));
    },
    isEditing: true
});

export
default ConditionalView;