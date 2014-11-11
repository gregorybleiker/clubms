//export default DS.FixtureAdapter.extend();
//import EmberCouchDBKit from "appkit/vendors/
/*global EmberCouchDBKit*/
export
default EmberCouchDBKit.DocumentAdapter.extend({
    db: 'clubmspages',
    host: "http://localhost:5984"
});