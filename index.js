var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDw8Gupgo_C4ut_LVuzG8cX1Pqk8RsaPF4'
  });

  googleMapsClient.placesNearby({
    keyword: 'indomaret',
    location: {latitude: -8.6863826, longitude: 115.2316578},
    radius: 1500
  }, function(err, response) {
    if (!err) {
      console.log(response.json);
    }
  });