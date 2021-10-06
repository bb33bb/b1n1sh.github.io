// media/learning/mojo/public/mojom/learning_task_controller.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/learning/mojo/public/mojom/learning_task_controller.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.learning.mojom');
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var learning_types$ =
      mojo.internal.exposeNamespace('media.learning.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/learning/mojo/public/mojom/learning_types.mojom', 'learning_types.mojom.js');
  }



  function LearningTaskController_BeginObservation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LearningTaskController_BeginObservation_Params.prototype.initDefaults_ = function() {
    this.id = null;
    this.features = null;
    this.defaultTarget = null;
  };
  LearningTaskController_BeginObservation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LearningTaskController_BeginObservation_Params.validate = function(messageValidator, offset) {
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


    // validate LearningTaskController_BeginObservation_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LearningTaskController_BeginObservation_Params.features
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(learning_types$.FeatureValue), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LearningTaskController_BeginObservation_Params.defaultTarget
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, learning_types$.TargetValue, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LearningTaskController_BeginObservation_Params.encodedSize = codec.kStructHeaderSize + 24;

  LearningTaskController_BeginObservation_Params.decode = function(decoder) {
    var packed;
    var val = new LearningTaskController_BeginObservation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.features =
        decoder.decodeArrayPointer(new codec.PointerTo(learning_types$.FeatureValue));
    val.defaultTarget =
        decoder.decodeStructPointer(learning_types$.TargetValue);
    return val;
  };

  LearningTaskController_BeginObservation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LearningTaskController_BeginObservation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.id);
    encoder.encodeArrayPointer(new codec.PointerTo(learning_types$.FeatureValue), val.features);
    encoder.encodeStructPointer(learning_types$.TargetValue, val.defaultTarget);
  };
  function LearningTaskController_CompleteObservation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LearningTaskController_CompleteObservation_Params.prototype.initDefaults_ = function() {
    this.id = null;
    this.completion = null;
  };
  LearningTaskController_CompleteObservation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LearningTaskController_CompleteObservation_Params.validate = function(messageValidator, offset) {
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


    // validate LearningTaskController_CompleteObservation_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LearningTaskController_CompleteObservation_Params.completion
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, learning_types$.ObservationCompletion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LearningTaskController_CompleteObservation_Params.encodedSize = codec.kStructHeaderSize + 16;

  LearningTaskController_CompleteObservation_Params.decode = function(decoder) {
    var packed;
    var val = new LearningTaskController_CompleteObservation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.completion =
        decoder.decodeStructPointer(learning_types$.ObservationCompletion);
    return val;
  };

  LearningTaskController_CompleteObservation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LearningTaskController_CompleteObservation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.id);
    encoder.encodeStructPointer(learning_types$.ObservationCompletion, val.completion);
  };
  function LearningTaskController_CancelObservation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LearningTaskController_CancelObservation_Params.prototype.initDefaults_ = function() {
    this.id = null;
  };
  LearningTaskController_CancelObservation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LearningTaskController_CancelObservation_Params.validate = function(messageValidator, offset) {
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


    // validate LearningTaskController_CancelObservation_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LearningTaskController_CancelObservation_Params.encodedSize = codec.kStructHeaderSize + 8;

  LearningTaskController_CancelObservation_Params.decode = function(decoder) {
    var packed;
    var val = new LearningTaskController_CancelObservation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  LearningTaskController_CancelObservation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LearningTaskController_CancelObservation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.id);
  };
  function LearningTaskController_UpdateDefaultTarget_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LearningTaskController_UpdateDefaultTarget_Params.prototype.initDefaults_ = function() {
    this.id = null;
    this.defaultTarget = null;
  };
  LearningTaskController_UpdateDefaultTarget_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LearningTaskController_UpdateDefaultTarget_Params.validate = function(messageValidator, offset) {
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


    // validate LearningTaskController_UpdateDefaultTarget_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LearningTaskController_UpdateDefaultTarget_Params.defaultTarget
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, learning_types$.TargetValue, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LearningTaskController_UpdateDefaultTarget_Params.encodedSize = codec.kStructHeaderSize + 16;

  LearningTaskController_UpdateDefaultTarget_Params.decode = function(decoder) {
    var packed;
    var val = new LearningTaskController_UpdateDefaultTarget_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.defaultTarget =
        decoder.decodeStructPointer(learning_types$.TargetValue);
    return val;
  };

  LearningTaskController_UpdateDefaultTarget_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LearningTaskController_UpdateDefaultTarget_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.id);
    encoder.encodeStructPointer(learning_types$.TargetValue, val.defaultTarget);
  };
  function LearningTaskController_PredictDistribution_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LearningTaskController_PredictDistribution_Params.prototype.initDefaults_ = function() {
    this.features = null;
  };
  LearningTaskController_PredictDistribution_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LearningTaskController_PredictDistribution_Params.validate = function(messageValidator, offset) {
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


    // validate LearningTaskController_PredictDistribution_Params.features
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(learning_types$.FeatureValue), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LearningTaskController_PredictDistribution_Params.encodedSize = codec.kStructHeaderSize + 8;

  LearningTaskController_PredictDistribution_Params.decode = function(decoder) {
    var packed;
    var val = new LearningTaskController_PredictDistribution_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.features =
        decoder.decodeArrayPointer(new codec.PointerTo(learning_types$.FeatureValue));
    return val;
  };

  LearningTaskController_PredictDistribution_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LearningTaskController_PredictDistribution_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(learning_types$.FeatureValue), val.features);
  };
  function LearningTaskController_PredictDistribution_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LearningTaskController_PredictDistribution_ResponseParams.prototype.initDefaults_ = function() {
    this.predicted = null;
  };
  LearningTaskController_PredictDistribution_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LearningTaskController_PredictDistribution_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate LearningTaskController_PredictDistribution_ResponseParams.predicted
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, learning_types$.TargetHistogram, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LearningTaskController_PredictDistribution_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  LearningTaskController_PredictDistribution_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new LearningTaskController_PredictDistribution_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.predicted =
        decoder.decodeStructPointer(learning_types$.TargetHistogram);
    return val;
  };

  LearningTaskController_PredictDistribution_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LearningTaskController_PredictDistribution_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(learning_types$.TargetHistogram, val.predicted);
  };
  var kLearningTaskController_BeginObservation_Name = 56109559;
  var kLearningTaskController_CompleteObservation_Name = 1404839761;
  var kLearningTaskController_CancelObservation_Name = 606185603;
  var kLearningTaskController_UpdateDefaultTarget_Name = 717083484;
  var kLearningTaskController_PredictDistribution_Name = 119985857;

  function LearningTaskControllerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(LearningTaskController,
                                                   handleOrPtrInfo);
  }

  function LearningTaskControllerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        LearningTaskController, associatedInterfacePtrInfo);
  }

  LearningTaskControllerAssociatedPtr.prototype =
      Object.create(LearningTaskControllerPtr.prototype);
  LearningTaskControllerAssociatedPtr.prototype.constructor =
      LearningTaskControllerAssociatedPtr;

  function LearningTaskControllerProxy(receiver) {
    this.receiver_ = receiver;
  }
  LearningTaskControllerPtr.prototype.beginObservation = function() {
    return LearningTaskControllerProxy.prototype.beginObservation
        .apply(this.ptr.getProxy(), arguments);
  };

  LearningTaskControllerProxy.prototype.beginObservation = function(id, features, defaultTarget) {
    var params_ = new LearningTaskController_BeginObservation_Params();
    params_.id = id;
    params_.features = features;
    params_.defaultTarget = defaultTarget;
    var builder = new codec.MessageV0Builder(
        kLearningTaskController_BeginObservation_Name,
        codec.align(LearningTaskController_BeginObservation_Params.encodedSize));
    builder.encodeStruct(LearningTaskController_BeginObservation_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LearningTaskControllerPtr.prototype.completeObservation = function() {
    return LearningTaskControllerProxy.prototype.completeObservation
        .apply(this.ptr.getProxy(), arguments);
  };

  LearningTaskControllerProxy.prototype.completeObservation = function(id, completion) {
    var params_ = new LearningTaskController_CompleteObservation_Params();
    params_.id = id;
    params_.completion = completion;
    var builder = new codec.MessageV0Builder(
        kLearningTaskController_CompleteObservation_Name,
        codec.align(LearningTaskController_CompleteObservation_Params.encodedSize));
    builder.encodeStruct(LearningTaskController_CompleteObservation_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LearningTaskControllerPtr.prototype.cancelObservation = function() {
    return LearningTaskControllerProxy.prototype.cancelObservation
        .apply(this.ptr.getProxy(), arguments);
  };

  LearningTaskControllerProxy.prototype.cancelObservation = function(id) {
    var params_ = new LearningTaskController_CancelObservation_Params();
    params_.id = id;
    var builder = new codec.MessageV0Builder(
        kLearningTaskController_CancelObservation_Name,
        codec.align(LearningTaskController_CancelObservation_Params.encodedSize));
    builder.encodeStruct(LearningTaskController_CancelObservation_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LearningTaskControllerPtr.prototype.updateDefaultTarget = function() {
    return LearningTaskControllerProxy.prototype.updateDefaultTarget
        .apply(this.ptr.getProxy(), arguments);
  };

  LearningTaskControllerProxy.prototype.updateDefaultTarget = function(id, defaultTarget) {
    var params_ = new LearningTaskController_UpdateDefaultTarget_Params();
    params_.id = id;
    params_.defaultTarget = defaultTarget;
    var builder = new codec.MessageV0Builder(
        kLearningTaskController_UpdateDefaultTarget_Name,
        codec.align(LearningTaskController_UpdateDefaultTarget_Params.encodedSize));
    builder.encodeStruct(LearningTaskController_UpdateDefaultTarget_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LearningTaskControllerPtr.prototype.predictDistribution = function() {
    return LearningTaskControllerProxy.prototype.predictDistribution
        .apply(this.ptr.getProxy(), arguments);
  };

  LearningTaskControllerProxy.prototype.predictDistribution = function(features) {
    var params_ = new LearningTaskController_PredictDistribution_Params();
    params_.features = features;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kLearningTaskController_PredictDistribution_Name,
          codec.align(LearningTaskController_PredictDistribution_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(LearningTaskController_PredictDistribution_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(LearningTaskController_PredictDistribution_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function LearningTaskControllerStub(delegate) {
    this.delegate_ = delegate;
  }
  LearningTaskControllerStub.prototype.beginObservation = function(id, features, defaultTarget) {
    return this.delegate_ && this.delegate_.beginObservation && this.delegate_.beginObservation(id, features, defaultTarget);
  }
  LearningTaskControllerStub.prototype.completeObservation = function(id, completion) {
    return this.delegate_ && this.delegate_.completeObservation && this.delegate_.completeObservation(id, completion);
  }
  LearningTaskControllerStub.prototype.cancelObservation = function(id) {
    return this.delegate_ && this.delegate_.cancelObservation && this.delegate_.cancelObservation(id);
  }
  LearningTaskControllerStub.prototype.updateDefaultTarget = function(id, defaultTarget) {
    return this.delegate_ && this.delegate_.updateDefaultTarget && this.delegate_.updateDefaultTarget(id, defaultTarget);
  }
  LearningTaskControllerStub.prototype.predictDistribution = function(features) {
    return this.delegate_ && this.delegate_.predictDistribution && this.delegate_.predictDistribution(features);
  }

  LearningTaskControllerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLearningTaskController_BeginObservation_Name:
      var params = reader.decodeStruct(LearningTaskController_BeginObservation_Params);
      this.beginObservation(params.id, params.features, params.defaultTarget);
      return true;
    case kLearningTaskController_CompleteObservation_Name:
      var params = reader.decodeStruct(LearningTaskController_CompleteObservation_Params);
      this.completeObservation(params.id, params.completion);
      return true;
    case kLearningTaskController_CancelObservation_Name:
      var params = reader.decodeStruct(LearningTaskController_CancelObservation_Params);
      this.cancelObservation(params.id);
      return true;
    case kLearningTaskController_UpdateDefaultTarget_Name:
      var params = reader.decodeStruct(LearningTaskController_UpdateDefaultTarget_Params);
      this.updateDefaultTarget(params.id, params.defaultTarget);
      return true;
    default:
      return false;
    }
  };

  LearningTaskControllerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLearningTaskController_PredictDistribution_Name:
      var params = reader.decodeStruct(LearningTaskController_PredictDistribution_Params);
      this.predictDistribution(params.features).then(function(response) {
        var responseParams =
            new LearningTaskController_PredictDistribution_ResponseParams();
        responseParams.predicted = response.predicted;
        var builder = new codec.MessageV1Builder(
            kLearningTaskController_PredictDistribution_Name,
            codec.align(LearningTaskController_PredictDistribution_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(LearningTaskController_PredictDistribution_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateLearningTaskControllerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kLearningTaskController_BeginObservation_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LearningTaskController_BeginObservation_Params;
      break;
      case kLearningTaskController_CompleteObservation_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LearningTaskController_CompleteObservation_Params;
      break;
      case kLearningTaskController_CancelObservation_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LearningTaskController_CancelObservation_Params;
      break;
      case kLearningTaskController_UpdateDefaultTarget_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LearningTaskController_UpdateDefaultTarget_Params;
      break;
      case kLearningTaskController_PredictDistribution_Name:
        if (message.expectsResponse())
          paramsClass = LearningTaskController_PredictDistribution_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateLearningTaskControllerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kLearningTaskController_PredictDistribution_Name:
        if (message.isResponse())
          paramsClass = LearningTaskController_PredictDistribution_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var LearningTaskController = {
    name: 'media.learning.mojom.LearningTaskController',
    kVersion: 0,
    ptrClass: LearningTaskControllerPtr,
    proxyClass: LearningTaskControllerProxy,
    stubClass: LearningTaskControllerStub,
    validateRequest: validateLearningTaskControllerRequest,
    validateResponse: validateLearningTaskControllerResponse,
  };
  LearningTaskControllerStub.prototype.validator = validateLearningTaskControllerRequest;
  LearningTaskControllerProxy.prototype.validator = validateLearningTaskControllerResponse;
  exports.LearningTaskController = LearningTaskController;
  exports.LearningTaskControllerPtr = LearningTaskControllerPtr;
  exports.LearningTaskControllerAssociatedPtr = LearningTaskControllerAssociatedPtr;
})();