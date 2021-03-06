/*
 * File: app/view/grid/GamesGrid.js
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

Ext.define('MyApp.view.grid.GamesGrid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.grid.gamesgrid',

    requires: [
        'Ext.grid.column.Number',
        'Ext.grid.column.Boolean'
    ],

    height: '100%',
    name: 'grid.GamesGrid',
    width: '100%',
    store: 'GamesData',

    columns: [
        {
            xtype: 'numbercolumn',
            dataIndex: 'timestamp',
            text: 'Timestamp',
            format: '00'
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'playerWhiteRating',
            text: 'Player White Rating',
            format: '00'
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'playerWhite',
            text: 'Player White',
            format: '00'
        },
        {
            xtype: 'numbercolumn',
            align: 'center',
            dataIndex: 'playerBlack',
            text: 'Player Black',
            format: '00'
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'playerBlackRating',
            text: 'Player Black Rating',
            format: '00'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'result',
            text: 'Result'
        },
        {
            xtype: 'booleancolumn',
            dataIndex: 'timeout',
            text: 'Timeout'
        }
    ]

});