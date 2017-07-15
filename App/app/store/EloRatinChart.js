/*
 * File: app/store/EloRatinChart.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

/*
    We don't know how many players we have -> we need to create models dynamically for the store
*/
Ext.define('Enif.store.EloRatinChart', {
    extend: 'Ext.data.Store',

    requires: [
        'Enif.model.ChartsData',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'EloRatinChart',
            autoLoad: true,
            model: 'Enif.model.ChartsData',
            proxy: {
                type: 'ajax',
                url: 'http://chess.pagep.net:8181/chartGames',
                actionMethods: {
                    create: 'PUT',
                    read: 'GET',
                    update: 'POST',
                    destroy: 'DELETE'
                },
                reader: {
                    type: 'json'
                }
            },
            listeners: {
                beforeload: {
                    fn: me.onJsonstoreBeforeLoad
                },
                load: {
                    fn: me.onJsonstoreLoad
                }
            }
        }, cfg)]);
    },

    onJsonstoreBeforeLoad: function(store, operation, eOpts) {
        let noPlayers = Ext.getStore("PlayerData").getData().length;
        let customFields = [{
        	name: 'timestamp',
        	type: 'int'
        }];

        for(let i= 0; i< noPlayers; i++){
        	customFields.push({
        		name: 'player' + i + 'Name',
        		type: 'string'
         	}, {
                name: 'player' + i + 'Rating',
                type: 'int'
            });
        }

        store.getModel().addFields(customFields);
    },

    onJsonstoreLoad: function(store, records, successful, operation, eOpts) {
        // Performance, we have too many points in the chart, we should try to remove the duplicates in here
    }

});