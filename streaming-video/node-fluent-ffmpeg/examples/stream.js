var ffmpeg = require('../index'),
  fs = require('fs');

// create the target stream (can be any WritableStream)
var stream = fs.createWriteStream('converted.flv')

// make sure you set the correct path to your video file
var proc = new ffmpeg({ source: 'sample.avi', nolog: true })
  // use the 'flashvideo' preset (located in /lib/presets/flashvideo.js)
  .usingPreset('flashvideo')
  // save to stream
  .writeToStream(stream, function(retcode, error){
    console.log('file has been converted succesfully');
  });
