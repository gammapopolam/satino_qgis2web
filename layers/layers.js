var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_contours_basic_1 = new ol.format.GeoJSON();
var features_contours_basic_1 = format_contours_basic_1.readFeatures(json_contours_basic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contours_basic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contours_basic_1.addFeatures(features_contours_basic_1);
var lyr_contours_basic_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_contours_basic_1, 
                style: style_contours_basic_1,
                interactive: false,
                title: '<img src="styles/legend/contours_basic_1.png" /> contours_basic'
            });
var format_contours_add_2 = new ol.format.GeoJSON();
var features_contours_add_2 = format_contours_add_2.readFeatures(json_contours_add_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contours_add_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contours_add_2.addFeatures(features_contours_add_2);
var lyr_contours_add_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_contours_add_2, 
                style: style_contours_add_2,
                interactive: false,
                title: '<img src="styles/legend/contours_add_2.png" /> contours_add'
            });
var format_water_polygon_3 = new ol.format.GeoJSON();
var features_water_polygon_3 = format_water_polygon_3.readFeatures(json_water_polygon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_polygon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_polygon_3.addFeatures(features_water_polygon_3);
var lyr_water_polygon_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_polygon_3, 
                style: style_water_polygon_3,
                interactive: true,
                title: '<img src="styles/legend/water_polygon_3.png" /> water_polygon'
            });
var format_water_line_4 = new ol.format.GeoJSON();
var features_water_line_4 = format_water_line_4.readFeatures(json_water_line_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_line_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_line_4.addFeatures(features_water_line_4);
var lyr_water_line_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_line_4, 
                style: style_water_line_4,
                interactive: true,
                title: '<img src="styles/legend/water_line_4.png" /> water_line'
            });
var format_roads_5 = new ol.format.GeoJSON();
var features_roads_5 = format_roads_5.readFeatures(json_roads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_5.addFeatures(features_roads_5);
var lyr_roads_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_5, 
                style: style_roads_5,
                interactive: false,
                title: '<img src="styles/legend/roads_5.png" /> roads'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_contours_basic_1.setVisible(true);lyr_contours_add_2.setVisible(true);lyr_water_polygon_3.setVisible(true);lyr_water_line_4.setVisible(true);lyr_roads_5.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_contours_basic_1,lyr_contours_add_2,lyr_water_polygon_3,lyr_water_line_4,lyr_roads_5];
lyr_contours_basic_1.set('fieldAliases', {'gid': 'gid', 'fid': 'fid', 'value': 'value', 'width': 'width', });
lyr_contours_add_2.set('fieldAliases', {'gid': 'gid', 'fid': 'fid', 'value': 'value', 'type': 'type', });
lyr_water_polygon_3.set('fieldAliases', {'gid': 'gid', 'fid': 'fid', 'rivername': 'rivername', 'height': 'height', 'type': 'type', 'typetxt': 'typetxt', });
lyr_water_line_4.set('fieldAliases', {'gid': 'gid', 'fid': 'fid', 'rivername': 'rivername', 'type': 'type', 'typetxt': 'typetxt', });
lyr_roads_5.set('fieldAliases', {'gid': 'gid', 'fid': 'fid', 'type': 'type', });
lyr_contours_basic_1.set('fieldImages', {'gid': 'TextEdit', 'fid': 'TextEdit', 'value': 'TextEdit', 'width': 'TextEdit', });
lyr_contours_add_2.set('fieldImages', {'gid': 'TextEdit', 'fid': 'TextEdit', 'value': 'TextEdit', 'type': 'TextEdit', });
lyr_water_polygon_3.set('fieldImages', {'gid': 'TextEdit', 'fid': 'TextEdit', 'rivername': 'TextEdit', 'height': 'TextEdit', 'type': 'TextEdit', 'typetxt': 'TextEdit', });
lyr_water_line_4.set('fieldImages', {'gid': 'TextEdit', 'fid': 'TextEdit', 'rivername': 'TextEdit', 'type': 'TextEdit', 'typetxt': 'TextEdit', });
lyr_roads_5.set('fieldImages', {'gid': 'TextEdit', 'fid': 'TextEdit', 'type': 'TextEdit', });
lyr_contours_basic_1.set('fieldLabels', {'gid': 'no label', 'fid': 'no label', 'value': 'no label', 'width': 'no label', });
lyr_contours_add_2.set('fieldLabels', {'gid': 'no label', 'fid': 'no label', 'value': 'no label', 'type': 'no label', });
lyr_water_polygon_3.set('fieldLabels', {'gid': 'no label', 'fid': 'no label', 'rivername': 'header label', 'height': 'inline label', 'type': 'inline label', 'typetxt': 'inline label', });
lyr_water_line_4.set('fieldLabels', {'gid': 'no label', 'fid': 'no label', 'rivername': 'header label', 'type': 'inline label', 'typetxt': 'inline label', });
lyr_roads_5.set('fieldLabels', {'gid': 'no label', 'fid': 'no label', 'type': 'no label', });
lyr_roads_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});