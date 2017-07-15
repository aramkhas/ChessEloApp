/*
 * File: app/model/PlayerData.js
 *
 * This file was generated by Sencha Architect version 4.2.2.
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

Ext.define('MyApp.model.PlayerData', {
    extend: 'Ext.data.Model',
    alias: 'model.mymodel',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Number'
    ],


    fields: [
        {
            type: 'int',
            name: 'uid'
        },
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'int',
            name: 'games'
        },
        {
            type: 'float',
            name: 'rating'
        },
        {
            type: 'int',
            calculate: function(data) {
                return data.winsWhite + data.winsBlack;
            },
            name: 'wins'
        },
        {
            type: 'int',
            name: 'winsWhite'
        },
        {
            type: 'int',
            name: 'winsBlack'
        },
        {
            type: 'int',
            calculate: function(data) {
                return data.losesWhite + data.losesBlack;
            },
            name: 'loses'
        },
        {
            type: 'int',
            name: 'losesWhite'
        },
        {
            type: 'int',
            name: 'losesBlack'
        },
        {
            type: 'int',
            calculate: function(data) {
                return data.drawWhite + data.drawBlack;
            },
            name: 'draws'
        },
        {
            type: 'int',
            name: 'drawWhite'
        },
        {
            type: 'int',
            name: 'drawBlack'
        }
    ]

});