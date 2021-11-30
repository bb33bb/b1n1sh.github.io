// third_party/blink/public/mojom/drag/drag.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/drag/drag.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var big_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/big_buffer.mojom', '../../../../../mojo/public/mojom/base/big_buffer.mojom.js');
  }
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var referrer_policy$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/referrer_policy.mojom', '../../../../../services/network/public/mojom/referrer_policy.mojom.js');
  }
  var drag_drop_types$ =
      mojo.internal.exposeNamespace('ui.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/base/dragdrop/mojom/drag_drop_types.mojom', '../../../../../ui/base/dragdrop/mojom/drag_drop_types.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }
  var data_transfer$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/data_transfer/data_transfer.mojom', '../data_transfer/data_transfer.mojom.js');
  }



  function AllowedDragOperations(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AllowedDragOperations.prototype.initDefaults_ = function() {
    this.allowCopy = false;
    this.allowLink = false;
    this.allowMove = false;
  };
  AllowedDragOperations.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AllowedDragOperations.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  AllowedDragOperations.encodedSize = codec.kStructHeaderSize + 8;

  AllowedDragOperations.decode = function(decoder) {
    var packed;
    var val = new AllowedDragOperations();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.allowCopy = (packed >> 0) & 1 ? true : false;
    val.allowLink = (packed >> 1) & 1 ? true : false;
    val.allowMove = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AllowedDragOperations.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AllowedDragOperations.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.allowCopy & 1) << 0
    packed |= (val.allowLink & 1) << 1
    packed |= (val.allowMove & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DragItemString(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DragItemString.prototype.initDefaults_ = function() {
    this.stringType = null;
    this.stringData = null;
    this.title = null;
    this.baseUrl = null;
  };
  DragItemString.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DragItemString.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragItemString.stringType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragItemString.stringData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.BigString16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragItemString.title
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragItemString.baseUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DragItemString.encodedSize = codec.kStructHeaderSize + 32;

  DragItemString.decode = function(decoder) {
    var packed;
    var val = new DragItemString();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.stringType =
        decoder.decodeStruct(codec.String);
    val.stringData =
        decoder.decodeStructPointer(string16$.BigString16);
    val.title =
        decoder.decodeStructPointer(string16$.String16);
    val.baseUrl =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  DragItemString.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DragItemString.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.stringType);
    encoder.encodeStructPointer(string16$.BigString16, val.stringData);
    encoder.encodeStructPointer(string16$.String16, val.title);
    encoder.encodeStructPointer(url$.Url, val.baseUrl);
  };
  function DragItemBinary(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DragItemBinary.prototype.initDefaults_ = function() {
    this.data = null;
    this.sourceUrl = null;
    this.filenameExtension = null;
    this.contentDisposition = null;
  };
  DragItemBinary.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DragItemBinary.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragItemBinary.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragItemBinary.sourceUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragItemBinary.filenameExtension
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragItemBinary.contentDisposition
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DragItemBinary.encodedSize = codec.kStructHeaderSize + 40;

  DragItemBinary.decode = function(decoder) {
    var packed;
    var val = new DragItemBinary();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    val.sourceUrl =
        decoder.decodeStructPointer(url$.Url);
    val.filenameExtension =
        decoder.decodeStructPointer(file_path$.FilePath);
    val.contentDisposition =
        decoder.decodeStruct(codec.NullableString);
    return val;
  };

  DragItemBinary.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DragItemBinary.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
    encoder.encodeStructPointer(url$.Url, val.sourceUrl);
    encoder.encodeStructPointer(file_path$.FilePath, val.filenameExtension);
    encoder.encodeStruct(codec.NullableString, val.contentDisposition);
  };
  function DragItemFileSystemFile(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DragItemFileSystemFile.prototype.initDefaults_ = function() {
    this.url = null;
    this.size = 0;
    this.fileSystemId = null;
  };
  DragItemFileSystemFile.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DragItemFileSystemFile.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragItemFileSystemFile.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DragItemFileSystemFile.fileSystemId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DragItemFileSystemFile.encodedSize = codec.kStructHeaderSize + 24;

  DragItemFileSystemFile.decode = function(decoder) {
    var packed;
    var val = new DragItemFileSystemFile();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.size =
        decoder.decodeStruct(codec.Int64);
    val.fileSystemId =
        decoder.decodeStruct(codec.NullableString);
    return val;
  };

  DragItemFileSystemFile.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DragItemFileSystemFile.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Int64, val.size);
    encoder.encodeStruct(codec.NullableString, val.fileSystemId);
  };
  function DragData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DragData.prototype.initDefaults_ = function() {
    this.items = null;
    this.fileSystemId = null;
    this.referrerPolicy = referrer_policy$.ReferrerPolicy.kDefault;
  };
  DragData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DragData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragData.items
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 16, DragItem, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragData.fileSystemId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragData.referrerPolicy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, referrer_policy$.ReferrerPolicy);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DragData.encodedSize = codec.kStructHeaderSize + 24;

  DragData.decode = function(decoder) {
    var packed;
    var val = new DragData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.items =
        decoder.decodeArrayPointer(DragItem);
    val.fileSystemId =
        decoder.decodeStruct(codec.NullableString);
    val.referrerPolicy =
        decoder.decodeStruct(new codec.Enum(referrer_policy$.ReferrerPolicy));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DragData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DragData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(DragItem, val.items);
    encoder.encodeStruct(codec.NullableString, val.fileSystemId);
    encoder.encodeStruct(codec.Int32, val.referrerPolicy);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DragEventSourceInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DragEventSourceInfo.prototype.initDefaults_ = function() {
    this.location = null;
    this.source = 0;
  };
  DragEventSourceInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DragEventSourceInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragEventSourceInfo.location
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Point, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DragEventSourceInfo.source
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, drag_drop_types$.DragEventSource);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DragEventSourceInfo.encodedSize = codec.kStructHeaderSize + 16;

  DragEventSourceInfo.decode = function(decoder) {
    var packed;
    var val = new DragEventSourceInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.location =
        decoder.decodeStructPointer(geometry$.Point);
    val.source =
        decoder.decodeStruct(new codec.Enum(drag_drop_types$.DragEventSource));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DragEventSourceInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DragEventSourceInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Point, val.location);
    encoder.encodeStruct(codec.Int32, val.source);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function DragItem(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  DragItem.Tags = {
    string: 0,
    file: 1,
    binary: 2,
    fileSystemFile: 3,
  };

  DragItem.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  DragItem.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "string",
        "file",
        "binary",
        "fileSystemFile",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a DragItem member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(DragItem.prototype, "string", {
    get: function() {
      if (this.$tag != DragItem.Tags.string) {
        throw new ReferenceError(
            "DragItem.string is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DragItem.Tags.string;
      this.$data = value;
    }
  });
  Object.defineProperty(DragItem.prototype, "file", {
    get: function() {
      if (this.$tag != DragItem.Tags.file) {
        throw new ReferenceError(
            "DragItem.file is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DragItem.Tags.file;
      this.$data = value;
    }
  });
  Object.defineProperty(DragItem.prototype, "binary", {
    get: function() {
      if (this.$tag != DragItem.Tags.binary) {
        throw new ReferenceError(
            "DragItem.binary is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DragItem.Tags.binary;
      this.$data = value;
    }
  });
  Object.defineProperty(DragItem.prototype, "fileSystemFile", {
    get: function() {
      if (this.$tag != DragItem.Tags.fileSystemFile) {
        throw new ReferenceError(
            "DragItem.fileSystemFile is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DragItem.Tags.fileSystemFile;
      this.$data = value;
    }
  });


    DragItem.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case DragItem.Tags.string:
          encoder.encodeStructPointer(DragItemString, val.string);
          break;
        case DragItem.Tags.file:
          encoder.encodeStructPointer(data_transfer$.DataTransferFile, val.file);
          break;
        case DragItem.Tags.binary:
          encoder.encodeStructPointer(DragItemBinary, val.binary);
          break;
        case DragItem.Tags.fileSystemFile:
          encoder.encodeStructPointer(DragItemFileSystemFile, val.fileSystemFile);
          break;
      }
      encoder.align();
    };


    DragItem.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new DragItem();
      var tag = decoder.readUint32();
      switch (tag) {
        case DragItem.Tags.string:
          result.string = decoder.decodeStructPointer(DragItemString);
          break;
        case DragItem.Tags.file:
          result.file = decoder.decodeStructPointer(data_transfer$.DataTransferFile);
          break;
        case DragItem.Tags.binary:
          result.binary = decoder.decodeStructPointer(DragItemBinary);
          break;
        case DragItem.Tags.fileSystemFile:
          result.fileSystemFile = decoder.decodeStructPointer(DragItemFileSystemFile);
          break;
      }
      decoder.align();

      return result;
    };


    DragItem.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case DragItem.Tags.string:
          

    // validate DragItem.string
    err = messageValidator.validateStructPointer(data_offset, DragItemString, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DragItem.Tags.file:
          

    // validate DragItem.file
    err = messageValidator.validateStructPointer(data_offset, data_transfer$.DataTransferFile, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DragItem.Tags.binary:
          

    // validate DragItem.binary
    err = messageValidator.validateStructPointer(data_offset, DragItemBinary, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DragItem.Tags.fileSystemFile:
          

    // validate DragItem.fileSystemFile
    err = messageValidator.validateStructPointer(data_offset, DragItemFileSystemFile, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  DragItem.encodedSize = 16;
  exports.AllowedDragOperations = AllowedDragOperations;
  exports.DragItemString = DragItemString;
  exports.DragItemBinary = DragItemBinary;
  exports.DragItemFileSystemFile = DragItemFileSystemFile;
  exports.DragData = DragData;
  exports.DragEventSourceInfo = DragEventSourceInfo;
  exports.DragItem = DragItem;
})();