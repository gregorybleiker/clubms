/*global DS*/
var PageModel = DS.Model.extend({
    title: DS.attr('string'),
    theText: DS.attr('string'),
    uploadURL: function() {
        return "http://localhost:5984/clubmspages/"+this.get('id');
    }.property('id'),
     attachments: DS.hasMany('attachment', {async: true})
});

PageModel.reopenClass({
  FIXTURES: [
    {
        id: 1,
        title: 'Titel ABC',
        theText: 'Etwas Text'
    },
        {
        id: 2,
        title: 'Titel DEF',
        theText: 'Anderer Text'
    },
        {
        id: 3,
        title: 'Titel XYZ',
        theText: 'letzter Text'
    }]
});
    
export default PageModel;

