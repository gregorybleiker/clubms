import Ember from 'ember';

export
default Ember.Component.extend({
    action: "addAttachment",

    didInsertElement: function () {

        var self = this;

        this.$().fileupload({
            dataType: 'json',
            done: function (e, data) {
                self.$().each(data.result.files, function (index, file) {
                    self.$('<p/>').text(file.name).appendTo(document.body);
                });
            },
            add: function (e, data) {
                self.sendAction('action', data.files);
            }
        });
    }
});