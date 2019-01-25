var wifiLocation = require('wifi_location')
var ssidPrefix = "CB";

var CronJob = require('cron').CronJob;
var job = new CronJob({
  cronTime: '00 */1 * * * *',
  onTick: function() {
    console.log("cron");
    scanNow();
  },
  start: false,
  timeZone: 'America/Phoenix'
});
job.start();

function scanNow(){
  wifiLocation.wifiTowers(function(err, val) {
    if(!err){
      for(var i = 0; i < val.length;i++){
        if(val[i].ssid.indexOf(ssidPrefix)>=0){
          var data = val[i].ssid.replace(/CB[1-9]-/,"");
          data = JSON.parse(data);
          data.id = val[i].mac_address;
          data.time = new Date().toString();
          console.log(JSON.stringify(data));
        }
      }
    }
  });
}

//for degugging
setInterval(scanNow,1000);
