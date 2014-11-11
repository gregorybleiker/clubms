/*global CKEDITOR*/
/*global Ember*/

export
default Ember.Component.extend({
    attributeBindings: ['isEditable:contenteditable'],
    isEditable: "true",
    hasEditor: function () {
        "use strict";
        var editor = this.get('editor');
//         if (editor) {
//             editor.on('focus', this.updateContent.bind(this));
             editor.on('blur', this.updateContent.bind(this));
//             editor.on('key', this.updateContent.bind(this));
//         }
    }.observes('editor'),
    updateContent: function () {
        "use strict";
        var editor = this.get('editor');
        var innerCompText = editor.getData();
        this.set('innerCompText', innerCompText);
    },
    connectEditor: function () {
        "use strict";
        //CKEDITOR.disableAutoInline = true;
        this.set('editor', CKEDITOR.inline(this.elementId));
        var editor = this.get('editor');
        editor.setData(this.get('innerCompText'));
        //editor = this.get('editor');
        //editor.setReadOnly(false);

    }.on('didInsertElement'),
    doUpdate: function () {
        var editor = this.get('editor');
        editor.setData(this.get('innerCompText'));
    }.observes('innerCompText')

});