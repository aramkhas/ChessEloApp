/*
 * File: app/view/charts/Ladder.js
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

Ext.define('Enif.view.charts.Ladder', {
    extend: 'Ext.Panel',
    alias: 'widget.charts.ladder',

    requires: [
        'Enif.view.charts.LadderViewModel',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category3D',
        'Ext.chart.axis.Numeric3D',
        'Ext.chart.series.Bar3D',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.grid.VerticalGrid3D',
        'Ext.chart.grid.HorizontalGrid3D'
    ],

    viewModel: {
        type: 'charts.ladder'
    },

    items: [
        {
            xtype: 'cartesian',
            height: '100%',
            width: '100%',
            store: 'PlayerData',
            axes: [
                {
                    type: 'category3d',
                    fields: [
                        'name'
                    ],
                    grid: true,
                    label: {
                        rotate: {
                            degrees: -60
                        }
                    },
                    position: 'bottom',
                    title: 'Players'
                },
                {
                    type: 'numeric3d',
                    fields: [
                        'rating'
                    ],
                    grid: {
                        odd: {
                            fillStyle: 'rgba(255, 255, 255, 0.06)'
                        },
                        even: {
                            fillStyle: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    minimum: 950,
                    position: 'left',
                    title: 'Rating'
                }
            ],
            series: [
                {
                    type: 'bar3d',
                    renderer: function(sprite, config, rendererData, index) {
                        return {
                            fillStyle: this.config.colors[index],
                            strokeStyle: index % 2 ? 'none' : 'black',
                        };
                    },
                    colors: [
                        '#115fa6',
                        '#94ae0a',
                        '#a61120',
                        '#ff8809',
                        '#ffd13e',
                        '#a61187',
                        '#24ad9a',
                        '#7c7474',
                        '#a66111'
                    ],
                    highlight: {
                        fillStyle: 'rgba(43, 130, 186, 1.0)',
                        strokeStyle: 'rgba(0, 0, 0, .2)',
                        showStroke: true,
                        lineWidth: 2
                    },
                    label: {
                        field: 'rating',
                        display: 'over',
                        renderer: function(text){
                            return ''+Math.round(text);
                        }
                    },
                    xField: 'name',
                    yField: [
                        'rating'
                    ]
                }
            ],
            interactions: [
                {
                    type: 'itemhighlight'
                }
            ]
        }
    ]

});