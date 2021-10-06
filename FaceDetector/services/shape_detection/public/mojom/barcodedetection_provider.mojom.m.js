// services/shape_detection/public/mojom/barcodedetection_provider.mojom.m.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import {mojo} from '../../../../mojo/public/js/bindings.js';

import {
  BarcodeFormat as shapeDetection_mojom_BarcodeFormat,
  BarcodeFormatSpec as shapeDetection_mojom_BarcodeFormatSpec,
  BarcodeDetectionRemote as shapeDetection_mojom_BarcodeDetectionRemote,
  BarcodeDetectionPendingReceiver as shapeDetection_mojom_BarcodeDetectionPendingReceiver
} from './barcodedetection.mojom.m.js';




/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
export class BarcodeDetectionProviderPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'shape_detection.mojom.BarcodeDetectionProvider', scope);
  }
}

/** @interface */
export class BarcodeDetectionProviderInterface {
  
  /**
   * @param { !shapeDetection_mojom_BarcodeDetectionPendingReceiver } receiver
   * @param { !BarcodeDetectorOptions } options
   */

  createBarcodeDetection(receiver, options) {}
  
  /**
   * @return {!Promise<{
        supportedFormats: !Array<number>,
   *  }>}
   */

  enumerateSupportedFormats() {}
}

/**
 * @implements { BarcodeDetectionProviderInterface }
 */
export class BarcodeDetectionProviderRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!BarcodeDetectionProviderPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          BarcodeDetectionProviderPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!BarcodeDetectionProviderPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !shapeDetection_mojom_BarcodeDetectionPendingReceiver } receiver
   * @param { !BarcodeDetectorOptions } options
   */

  createBarcodeDetection(
      receiver,
      options) {
    this.proxy.sendMessage(
        0,
        BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec.$,
        null,
        [
          receiver,
          options
        ]);
  }

  
  /**
   * @return {!Promise<{
        supportedFormats: !Array<number>,
   *  }>}
   */

  enumerateSupportedFormats() {
    return this.proxy.sendMessage(
        1,
        BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec.$,
        BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec.$,
        [
        ]);
  }
}

/**
 * An object which receives request messages for the BarcodeDetectionProvider
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export class BarcodeDetectionProviderReceiver {
  /**
   * @param {!BarcodeDetectionProviderInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!BarcodeDetectionProviderRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        BarcodeDetectionProviderRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!BarcodeDetectionProviderRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec.$,
        null,
        impl.createBarcodeDetection.bind(impl));
    this.helper_internal_.registerHandler(
        1,
        BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec.$,
        BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec.$,
        impl.enumerateSupportedFormats.bind(impl));
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

export class BarcodeDetectionProvider {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "shape_detection.mojom.BarcodeDetectionProvider";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!BarcodeDetectionProviderRemote}
   */
  static getRemote() {
    let remote = new BarcodeDetectionProviderRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the BarcodeDetectionProvider
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export class BarcodeDetectionProviderCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      BarcodeDetectionProviderRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!BarcodeDetectionProviderRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.createBarcodeDetection =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec.$,
        null,
        this.createBarcodeDetection.createReceiverHandler(false /* expectsResponse */));
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.enumerateSupportedFormats =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        1,
        BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec.$,
        BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec.$,
        this.enumerateSupportedFormats.createReceiverHandler(true /* expectsResponse */));
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const BarcodeDetectorOptionsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    BarcodeDetectorOptionsSpec.$,
    'BarcodeDetectorOptions',
    [
      mojo.internal.StructField(
        'formats', 0,
        0,
        mojo.internal.Array(shapeDetection_mojom_BarcodeFormatSpec.$, false),
        null,
        false /* nullable */,
        0),
    ],
    [[0, 16],]);



/**
 * @record
 */
export class BarcodeDetectorOptions {
  constructor() {
    /** @type { !Array<!shapeDetection_mojom_BarcodeFormat> } */
    this.formats;
  }
}



mojo.internal.Struct(
    BarcodeDetectionProvider_CreateBarcodeDetection_ParamsSpec.$,
    'BarcodeDetectionProvider_CreateBarcodeDetection_Params',
    [
      mojo.internal.StructField(
        'receiver', 0,
        0,
        mojo.internal.InterfaceRequest(shapeDetection_mojom_BarcodeDetectionPendingReceiver),
        null,
        false /* nullable */,
        0),
      mojo.internal.StructField(
        'options', 8,
        0,
        BarcodeDetectorOptionsSpec.$,
        null,
        false /* nullable */,
        0),
    ],
    [[0, 24],]);



/**
 * @record
 */
export class BarcodeDetectionProvider_CreateBarcodeDetection_Params {
  constructor() {
    /** @type { !shapeDetection_mojom_BarcodeDetectionPendingReceiver } */
    this.receiver;
    /** @type { !BarcodeDetectorOptions } */
    this.options;
  }
}



mojo.internal.Struct(
    BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsSpec.$,
    'BarcodeDetectionProvider_EnumerateSupportedFormats_Params',
    [
    ],
    [[0, 8],]);



/**
 * @record
 */
export class BarcodeDetectionProvider_EnumerateSupportedFormats_Params {
  constructor() {
  }
}



mojo.internal.Struct(
    BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsSpec.$,
    'BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams',
    [
      mojo.internal.StructField(
        'supportedFormats', 0,
        0,
        mojo.internal.Array(shapeDetection_mojom_BarcodeFormatSpec.$, false),
        null,
        false /* nullable */,
        0),
    ],
    [[0, 16],]);



/**
 * @record
 */
export class BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams {
  constructor() {
    /** @type { !Array<!shapeDetection_mojom_BarcodeFormat> } */
    this.supportedFormats;
  }
}
