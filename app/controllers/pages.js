/*global Ember*/
export
default Ember.ArrayController.extend({
 
        saveModel: function () {
            this.get('model').save();
        }
    
});