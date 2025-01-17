'use strict';

// execution
// enable rest in raptor.conf 'rest=1' (be sure to disable after)
// node ./raptoreum-utils/blkconverter1.js

// convert block json from raptoreumd format to rtmcore format

// get ./raptoreum-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.hex | xxd -r -p > ./raptoreum-utils/inputs/blk1.dat

// get ./raptoreum-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.json > ./raptoreum-utils/inputs/blk1.json

// get ./raptoreum-utils/inputs/blk1.js by manually edit the file

// Manually check if blk1-rtmcore.json match with blk1.json

var rtmcore = require('..');
var Block = rtmcore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('raptoreum-utils/inputs/blk1.dat');

var rtmcoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(rtmcoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('raptoreum-utils/outputs/blk1-rtmcore.dat', rtmcoreFormatBlockBuffer);
fs.writeFileSync('raptoreum-utils/outputs/blk1-rtmcore.json', blkJSONStr);
