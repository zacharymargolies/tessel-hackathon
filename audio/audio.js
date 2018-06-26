var path = require('path');
var av = require('tessel-av');
var mp3 = path.join(__dirname, '440.mp3');
var alarm = path.join(__dirname, 'Alarm_Clock.mp3');
var sound = new av.Player(mp3);
var alarmSound = new av.Player(alarm);

var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);


// sound.play();

// sound.on('ended', function(seconds) {
//   sound.play();
// });

accel.on('ready', function () {
  // Stream accelerometer data
  // sound.play();
  accel.on('data', function (xyz) {
     console.log(
       'x:', xyz[0].toFixed(2)
      // 'y:', xyz[1].toFixed(2),
      // 'z:', xyz[2].toFixed(2));
     );

    if(xyz[0] > 0) {
      alarmSound.stop();
      sound.play();
    }
    else if (xyz[0] < 0) {
      sound.stop();
      alarmSound.play();
    }


  });


  });

  accel.on('error', function(err){
    console.log('Error:', err);
  });
