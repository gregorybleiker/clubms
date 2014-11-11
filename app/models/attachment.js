/*global DS*/
var Attachment = DS.Model.extend({
    content_type: DS.attr('string'),
    length: DS.attr('number'),
    file_name: DS.attr('string'),
    db: DS.attr('string')
});
export default Attachment;