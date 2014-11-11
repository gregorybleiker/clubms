import Ember from 'ember';

export
default Ember.Component.extend({
    didInsertElement: function () {

        var self = this;

        this.$().fileupload({
            //        this.$().find('#fileupload').fileupload({
            dataType: 'json',
            done: function (e, data) {
                self.$().each(data.result.files, function (index, file) {
                    self.$('<p/>').text(file.name).appendTo(document.body);
                });
            },
            add: function (e, data) {
                this.sendAction();
//                self.get('controller').send("addAttachment", data );
                //var doc= self.get('store').get('pages');
                //var fa = self.get('store').createRecord('attachment', {
                //    content_type: data.files[0].type,
                //    length: data.files[0].length,
                //    file_name: "test"//data.files[0].name
                //});
                //fa.content_type=data.files[0].type;
                //c.get('attachments').addObject(fa);
                //fa.save();
                //c.save();

            }
        });

    }
    //.on('didInsertElement')
});

//        this.$().find('#fileupload').bind('fileuploadadd', function () {
//        alert("hello");
//        }
//        );