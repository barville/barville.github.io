var wms_layers = [];


        var lyr_BDortho_0 = new ol.layer.Tile({
            'title': 'BD ortho',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });
var format_Indivision_1 = new ol.format.GeoJSON();
var features_Indivision_1 = format_Indivision_1.readFeatures(json_Indivision_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indivision_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indivision_1.addFeatures(features_Indivision_1);
var lyr_Indivision_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Indivision_1, 
                style: style_Indivision_1,
                interactive: true,
    title: 'Indivision<br />\
    <img src="styles/legend/Indivision_1_0.png" /> Mixte<br />'
        });
var format_Propritaires_2 = new ol.format.GeoJSON();
var features_Propritaires_2 = format_Propritaires_2.readFeatures(json_Propritaires_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Propritaires_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Propritaires_2.addFeatures(features_Propritaires_2);
var lyr_Propritaires_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Propritaires_2, 
                style: style_Propritaires_2,
                interactive: true,
    title: 'Propriétaires<br />\
    <img src="styles/legend/Propritaires_2_0.png" /> Cécilia<br />\
    <img src="styles/legend/Propritaires_2_1.png" /> Francine<br />\
    <img src="styles/legend/Propritaires_2_2.png" /> Guillaume<br />'
        });

lyr_BDortho_0.setVisible(true);lyr_Indivision_1.setVisible(true);lyr_Propritaires_2.setVisible(true);
var layersList = [lyr_BDortho_0,lyr_Indivision_1,lyr_Propritaires_2];
lyr_Indivision_1.set('fieldAliases', {'fid': 'fid', 'Commune': 'Commune', 'Numéro': 'Numéro', 'Propriétaire': 'Propriétaire', 'Section': 'Section', 'Surface (HA)': 'Surface (HA)', });
lyr_Propritaires_2.set('fieldAliases', {'fid': 'fid', 'Commune': 'Commune', 'Section': 'Section', 'Numéro': 'Numéro', 'Propriétaire': 'Propriétaire', 'Surface (HA)': 'Surface (HA)', });
lyr_Indivision_1.set('fieldImages', {'fid': 'TextEdit', 'Commune': 'TextEdit', 'Numéro': 'TextEdit', 'Propriétaire': 'TextEdit', 'Section': 'TextEdit', 'Surface (HA)': 'TextEdit', });
lyr_Propritaires_2.set('fieldImages', {'fid': 'Hidden', 'Commune': 'Range', 'Section': 'TextEdit', 'Numéro': 'Range', 'Propriétaire': 'TextEdit', 'Surface (HA)': 'TextEdit', });
lyr_Indivision_1.set('fieldLabels', {'fid': 'no label', 'Commune': 'inline label', 'Numéro': 'inline label', 'Propriétaire': 'inline label', 'Section': 'inline label', 'Surface (HA)': 'inline label', });
lyr_Propritaires_2.set('fieldLabels', {'Commune': 'inline label', 'Section': 'inline label', 'Numéro': 'inline label', 'Propriétaire': 'inline label', 'Surface (HA)': 'inline label', });
lyr_Propritaires_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});