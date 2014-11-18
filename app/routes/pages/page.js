/*global Ember*/
var PageRoute = Ember.Route.extend({
    actions: {
        addAttachment: function (files) {
            var theModel = this.controller.model;
            var count = 0;
            var file = files[count];
            var attachmentId = "%@/%@".fmt(theModel.id, file.name);

            var params = {
                doc_id: theModel.id,
                model_name: Clubms.PageModel,
                rev: theModel._data.rev,
                id: attachmentId,
                file: file,
                content_type: file.type,
                length: file.size,
                file_name: file.name
            };

            var attachment = this.get('store').createRecord('attachment', params);
            attachment.save().then(function () {
                model.get('attachments').pushObject(attachment);
                model.reload();
                //                    count = count + 1;
                //                    if (count < size) {
                //                        self._actions._addAttachment(count, files, size, model, self);
                //                    }


            });
        }
    }
});

export
default PageRoute;