/*global Ember*/
/*global $*/
var MenuBarView = Ember.View.extend({

    initMenu: function () {
        $("#jMenu").jMenu({
            ulWidth: 'auto',
            effects: {
                effectSpeedOpen: 300,
                effectTypeClose: 'slide'
            },
            animatedText: false
        });

    }.on('didInsertElement')
});

export
default MenuBarView;