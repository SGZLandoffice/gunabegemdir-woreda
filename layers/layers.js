ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:20137").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1 = new ol.format.GeoJSON();
var features_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1 = format_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1.readFeatures(json_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20137'});
var jsonSource_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1.addFeatures(features_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1);
var lyr_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1, 
                style: style_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1,
                popuplayertitle: "GUNA BEGEMIDIR_AMJAYEE_PARCEL_Certification",
                interactive: true,
                title: '<img src="styles/legend/GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1.png" /> GUNA BEGEMIDIR_AMJAYEE_PARCEL_Certification'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1];
lyr_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1.set('fieldAliases', {'HoldParcel': 'Holding/Parcel ID', 'Area(ha)': 'Area (ha)', 'CentroidE': 'Centroid East', 'CentroidN': 'Centroid North', 'Rownumber': 'Row number', 'EditNotes': 'Editing notes', 'FieldMNo': 'FieldMNo', 'PDNO': 'PDNO', 'Status': 'Status', });
lyr_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1.set('fieldImages', {'HoldParcel': 'TextEdit', 'Area(ha)': 'TextEdit', 'CentroidE': 'TextEdit', 'CentroidN': 'TextEdit', 'Rownumber': 'TextEdit', 'EditNotes': 'TextEdit', 'FieldMNo': 'TextEdit', 'PDNO': 'TextEdit', 'Status': 'TextEdit', });
lyr_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1.set('fieldLabels', {'HoldParcel': 'inline label - always visible', 'Area(ha)': 'inline label - always visible', 'CentroidE': 'inline label - always visible', 'CentroidN': 'inline label - always visible', 'Rownumber': 'hidden field', 'EditNotes': 'hidden field', 'FieldMNo': 'hidden field', 'PDNO': 'hidden field', 'Status': 'hidden field', });
lyr_GUNABEGEMIDIR_AMJAYEE_PARCEL_Certification_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});