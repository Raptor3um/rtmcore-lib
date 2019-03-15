'use strict';

// execution
// enable rest in raptor.conf 'rest=1' (be sure to disable after)
// node ./raptoreum-utils/blkconverter.js

// convert block json from raptoreumd format to rtmcore format

// get ./raptoreum-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.hex | xxd -r -p > ./raptoreum-utils/inputs/blk220909.dat

// get ./raptoreum-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.json > ./raptoreum-utils/inputs/blk220909.json

// get ./raptoreum-utils/inputs/blk220909.js by manually edit the file

// Manually check if blk220909-rtmcore.json match with blk220909.json

var rtmcore = require('..');
var Block = rtmcore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('raptoreum-utils/inputs/blk220909.dat');

var rtmcoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(rtmcoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('raptoreum-utils/outputs/blk220909-rtmcore.dat', rtmcoreFormatBlockBuffer);
fs.writeFileSync('raptoreum-utils/outputs/blk220909-rtmcore.json', blkJSONStr);
