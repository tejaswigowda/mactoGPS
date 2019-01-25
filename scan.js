var wifiLocation = require('wifi_location')

wifiLocation.wifiTowers(function(err, val) {
    console.log(err, val)
})

/*
wifiLocation.location(function(err, val) {
    console.log(err, val)
})
*/
