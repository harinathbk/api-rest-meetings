/**
 * BlueJeans Meetings REST API
 *  ## Video That Works Where You Do. <p>This site provides developers access to APIs from BlueJean's Meetings meeting service.  From here you can see and try actual API calls to manage User Accounts, Meetings, and Recordings, pull Analytical Data and Current State information.</p>    <nosdk> <hr> <div> <div class=\"key\">     <a href=\"./basics.html\" target=\"_\"><img class=\"keyimg\" src=\"./img/bjnmeeting.png\"/></a> </div> <div class=\"keybox\"> Basic instructions about What is a BlueJeans Meeting, and Getting Started Using API's, are <a href=\"./basics.html\" target=\"_blank\">available here <i class=\"glyphicon glyphicon-new-window\"></i></a>. </div> </div> <hr> <alert>2/21/2019</alert> Change response of Change layout and Endpoint API's to 204<br/> 12/03/2018 Add API for setting user profile photograph.<br/> 10/17/2018 Updated API field definitions for time variables to be 64-bit .<br/> 7/23/2018 Corrected errors in API definition file.<br/> 7/10/2018 Deprecated some Command Center API's.  Exposed API's that Summarize usage.<br/> 7/06/2018 Added API for changing ownership of recordings.<br/> 6/28/2018 Restored Create Enterprise Account, added Enterprise and User Profile Tag API's.<br/> 6/01/2018 Clarified Access Token requirements for meeting endpoint API's.<br/> 5/21/2018 Corrected return model for meeting history call.<br/> </nosdk> <hr> 
 *
 * OpenAPI spec version: 1.0.4402212019
 * Contact: glenn@bluejeans.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BlueJeansMeetingsRestApi) {
      root.BlueJeansMeetingsRestApi = {};
    }
    root.BlueJeansMeetingsRestApi.GrantRequestClient = factory(root.BlueJeansMeetingsRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GrantRequestClient model module.
   * @module model/GrantRequestClient
   * @version 1.0.4402212019
   */

  /**
   * Constructs a new <code>GrantRequestClient</code>.
   * @alias module:model/GrantRequestClient
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GrantRequestClient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GrantRequestClient} obj Optional instance to populate.
   * @return {module:model/GrantRequestClient} The populated <code>GrantRequestClient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('grant_type')) {
        obj['grant_type'] = ApiClient.convertToType(data['grant_type'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('client_secret')) {
        obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
      }
    }
    return obj;
  }

  /**
   * The type of access token you are requesting.
   * @member {module:model/GrantRequestClient.GrantTypeEnum} grant_type
   * @default 'client_credentials'
   */
  exports.prototype['grant_type'] = 'client_credentials';
  /**
   * The value given within the BlueJeans Enterprise Administration console.
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * The value given within the BlueJeans Enterprise Administration console.
   * @member {String} client_secret
   */
  exports.prototype['client_secret'] = undefined;


  /**
   * Allowed values for the <code>grant_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GrantTypeEnum = {
    /**
     * value: "client_credentials"
     * @const
     */
    "client_credentials": "client_credentials"  };


  return exports;
}));


