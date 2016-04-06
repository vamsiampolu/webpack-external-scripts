import $script from 'scriptjs';
require('exports?FileLoader=FileLoader!imports?toGeoJSON=togeojson&shp=shpjs!./leaflet-fileloader-shimmed/leaflet.filelayer');
require('expose?gapiCallback!./google-client-code');
require('expose?gmapsCallback!./google-maps-code');

$script('https://maps.googleapis.com/maps/api/js?onload=window.gapiCallback','google-maps');
$script('https://apis.google.com/js/client.js?callback=window.gmapsCallback','google-api');
