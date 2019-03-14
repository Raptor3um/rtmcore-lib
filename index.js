'use strict';

var rtmcore = module.exports;

// module information
rtmcore.version = 'v' + require('./package.json').version;
rtmcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of rtmcore-lib found. ' +
      'Please make sure to require rtmcore-lib and check that submodules do' +
      ' not also include their own rtmcore-lib dependency.';
    throw new Error(message);
  }
};
rtmcore.versionGuard(global._rtmcore);
global._rtmcore = rtmcore.version;

// crypto
rtmcore.crypto = {};
rtmcore.crypto.BN = require('./lib/crypto/bn');
rtmcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
rtmcore.crypto.Hash = require('./lib/crypto/hash');
rtmcore.crypto.Random = require('./lib/crypto/random');
rtmcore.crypto.Point = require('./lib/crypto/point');
rtmcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
rtmcore.encoding = {};
rtmcore.encoding.Base58 = require('./lib/encoding/base58');
rtmcore.encoding.Base58Check = require('./lib/encoding/base58check');
rtmcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
rtmcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
rtmcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
rtmcore.util = {};
rtmcore.util.buffer = require('./lib/util/buffer');
rtmcore.util.js = require('./lib/util/js');
rtmcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
rtmcore.errors = require('./lib/errors');

// main raptoreum library
rtmcore.Address = require('./lib/address');
rtmcore.Block = require('./lib/block');
rtmcore.MerkleBlock = require('./lib/block/merkleblock');
rtmcore.BlockHeader = require('./lib/block/blockheader');
rtmcore.HDPrivateKey = require('./lib/hdprivatekey.js');
rtmcore.HDPublicKey = require('./lib/hdpublickey.js');
rtmcore.Networks = require('./lib/networks');
rtmcore.Opcode = require('./lib/opcode');
rtmcore.PrivateKey = require('./lib/privatekey');
rtmcore.PublicKey = require('./lib/publickey');
rtmcore.Script = require('./lib/script');
rtmcore.Transaction = require('./lib/transaction');
rtmcore.URI = require('./lib/uri');
rtmcore.Unit = require('./lib/unit');

// dependencies, subject to change
rtmcore.deps = {};
rtmcore.deps.bnjs = require('bn.js');
rtmcore.deps.bs58 = require('bs58');
rtmcore.deps.Buffer = Buffer;
rtmcore.deps.elliptic = require('elliptic');
rtmcore.deps.nodeX16r = require('node-x16r');
rtmcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
rtmcore.Transaction.sighash = require('./lib/transaction/sighash');
