/*global Ember*/
Ember.ObjectController.extend({
    actions: {
        addAttachment: function (files) {
            //    alert(files[0].name.toString());
            var fa = comp.store.createRecord('attachment', {
                content_type: files[0].content_type,
                length: files[0].length,
                file_name: files[0].name
            });
            var mod = this.get('page');
            mod.addObject(fa);
            fa.save();
            mod.save();
        }
    }
});
export
default Ember.ObjectController.extend({});