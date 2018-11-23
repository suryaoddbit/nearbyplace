(function () {
    "use strict";

    var assert = require("assert");

    var NearBySearch = require("googleplaces/lib/NearBySearch");
    var config = require("./config.js");

    var nearBySearch = new NearBySearch(config.apiKey, config.outputFormat);

    var parameters = {
        location: [-8.6863826, 115.2316578],
        keyword: "indomaret"
    };

    nearBySearch(parameters, function (error, response) {
        console.log(response)
        if (error) throw error;
        assert.notEqual(response.results.length, 0, "Place search must not return 0 results");
    });

})();