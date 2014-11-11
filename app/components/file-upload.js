import Ember from 'ember';

export default Ember.FileField.extend({
  url: '',
    filesDidChange: (function() {
    var uploadUrl = this.get('url');
    var files = this.get('files');

    var uploader = Ember.Uploader.create({
      url: uploadUrl,
      type: 'POST',
      contentType: 'image/jpeg'
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]);
    }
  }).observes('files')
});