/**
 * BlueJeans onVideo REST API
 * _Video That Works Where You Do, from the world's leader in cloud video communication._ # Authentication Each API request that is sent to BlueJeans requires an access token, which is obtained through the BlueJeans Authentication API. There are several methods (grant types) for obtaining an access token, which follow the OAuth2.0 specification. ## Grant Types * Authorization Code Grant – This grant type is used in an authentication flow commonly referred to as \"three-legged OAuth\". The user authenticates via a BlueJeans page, which provides an authorization code. This code, along with a few other elements, can be used to obtain an access code. * Password Credentials Grant – This grant type is used in a two-legged OAuth flow. Username and password are sent to retrieve an access code. * Client Credentials Grant – This grant type is used in a two-legged OAuth flow.  ## Access & Permissions The access level that is associated with each access token is referred to as the scope. There are three basic levels of access that BlueJeans allows, which affect the level of scope.  Three access levels exist within the Blue Jeans service today. * Meeting-level – Authentication takes place using a meeting ID and passcode, and the scope is limited to APIs that relate to the individual meeting. * User-level – Authentication either takes place via three-legged OAuth, or else a direct authorization token request containing a username or password. Access level depends on the requested scope permissions. * App-level – An application is provisioned either by BlueJeans personnel, or within the BlueJeans Enterprise Admin interface. When provisioning an app, a client key and secret are provided, which is then used to obtain an access token, via the BlueJeans Authentication API. The scope that is associated with the token will provide access to an entire enterprise and all of its users.  All endpoints in this document that require Enterprise Admin access will be marked as such. ## Testing In order to make effective use of this page, you will first use one of the authentication methods to obtain an access token. Once the token is given, use the Authenticate button up in the header to store the token. Each BlueJeans API called after that will use the access token provided. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: brandon@bluejeans.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meeting', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Meeting'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.BlueJeansOnVideoRestApi) {
      root.BlueJeansOnVideoRestApi = {};
    }
    root.BlueJeansOnVideoRestApi.CommandCenterApi = factory(root.BlueJeansOnVideoRestApi.ApiClient, root.BlueJeansOnVideoRestApi.Meeting, root.BlueJeansOnVideoRestApi.Error);
  }
}(this, function(ApiClient, Meeting, Error) {
  'use strict';

  /**
   * CommandCenter service.
   * @module api/CommandCenterApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CommandCenterApi. 
   * @alias module:api/CommandCenterApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the v1EnterpriseEnterpriseIdIndigoMeetingsGet operation.
     * @callback module:api/CommandCenterApi~v1EnterpriseEnterpriseIdIndigoMeetingsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meeting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Past Meetings by Enterprise
     * This endpoint lists completed meetings by enterprise.
     * @param {Integer} enterpriseId The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.offset Page Number
     * @param {Integer} opts.limit Per page
     * @param {String} opts.filter URL-encoded JSON string
     * @param {module:api/CommandCenterApi~v1EnterpriseEnterpriseIdIndigoMeetingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meeting}
     */
    this.v1EnterpriseEnterpriseIdIndigoMeetingsGet = function(enterpriseId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'enterpriseId' is set
      if (enterpriseId == undefined || enterpriseId == null) {
        throw "Missing the required parameter 'enterpriseId' when calling v1EnterpriseEnterpriseIdIndigoMeetingsGet";
      }


      var pathParams = {
        'enterprise_id': enterpriseId
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'filter': opts['filter']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Meeting;

      return this.apiClient.callApi(
        '/v1/enterprise/{enterprise_id}/indigo/meetings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EnterpriseEnterpriseIdIndigoMeetingsLiveGet operation.
     * @callback module:api/CommandCenterApi~v1EnterpriseEnterpriseIdIndigoMeetingsLiveGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meeting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Live Meetings Summary by Enterprise
     * This endpoint lists meetings in progress by enterprise.
     * @param {Integer} enterpriseId The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint.
     * @param {module:api/CommandCenterApi~v1EnterpriseEnterpriseIdIndigoMeetingsLiveGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meeting}
     */
    this.v1EnterpriseEnterpriseIdIndigoMeetingsLiveGet = function(enterpriseId, callback) {
      var postBody = null;

      // verify the required parameter 'enterpriseId' is set
      if (enterpriseId == undefined || enterpriseId == null) {
        throw "Missing the required parameter 'enterpriseId' when calling v1EnterpriseEnterpriseIdIndigoMeetingsLiveGet";
      }


      var pathParams = {
        'enterprise_id': enterpriseId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Meeting;

      return this.apiClient.callApi(
        '/v1/enterprise/{enterprise_id}/indigo/meetings/live', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EnterpriseEnterpriseIdIndigoMeetingsLiveMeetingGuidEndpointsGet operation.
     * @callback module:api/CommandCenterApi~v1EnterpriseEnterpriseIdIndigoMeetingsLiveMeetingGuidEndpointsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meeting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Live Meeting Endpoints by Enterprise
     * This endpoint lists endpoints for a given meeting in progress.
     * @param {Integer} enterpriseId The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint.
     * @param {String} meetingGuid The globally unique identifier (GUID) of the meeting of interest. This value is a string which contains the numeric meeting id, followed by a colon, followed by a 128-bit integer number formatted as 5 alphanumeric segments separated by dashes. Since a given numeric meeting ID can have multiple instantiations over time, the GUID helps identify the instance of interest.
     * @param {module:api/CommandCenterApi~v1EnterpriseEnterpriseIdIndigoMeetingsLiveMeetingGuidEndpointsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meeting}
     */
    this.v1EnterpriseEnterpriseIdIndigoMeetingsLiveMeetingGuidEndpointsGet = function(enterpriseId, meetingGuid, callback) {
      var postBody = null;

      // verify the required parameter 'enterpriseId' is set
      if (enterpriseId == undefined || enterpriseId == null) {
        throw "Missing the required parameter 'enterpriseId' when calling v1EnterpriseEnterpriseIdIndigoMeetingsLiveMeetingGuidEndpointsGet";
      }

      // verify the required parameter 'meetingGuid' is set
      if (meetingGuid == undefined || meetingGuid == null) {
        throw "Missing the required parameter 'meetingGuid' when calling v1EnterpriseEnterpriseIdIndigoMeetingsLiveMeetingGuidEndpointsGet";
      }


      var pathParams = {
        'enterprise_id': enterpriseId,
        'meeting_guid': meetingGuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Meeting;

      return this.apiClient.callApi(
        '/v1/enterprise/{enterprise_id}/indigo/meetings/live/{meeting_guid}/endpoints/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EnterpriseEnterpriseIdIndigoMeetingsMeetingGuidGet operation.
     * @callback module:api/CommandCenterApi~v1EnterpriseEnterpriseIdIndigoMeetingsMeetingGuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meeting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Meeting Endpoints &amp; Stats by Enterprise
     * This endpoint lists meeting endpoints for completed meetings by enterprise.
     * @param {Integer} enterpriseId The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint.
     * @param {String} meetingGuid The globally unique identifier (GUID) of the meeting of interest. This value is a string which contains the numeric meeting id, followed by a colon, followed by a 128-bit integer number formatted as 5 alphanumeric segments separated by dashes. Since a given numeric meeting ID can have multiple instantiations over time, the GUID helps identify the instance of interest.
     * @param {module:api/CommandCenterApi~v1EnterpriseEnterpriseIdIndigoMeetingsMeetingGuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meeting}
     */
    this.v1EnterpriseEnterpriseIdIndigoMeetingsMeetingGuidGet = function(enterpriseId, meetingGuid, callback) {
      var postBody = null;

      // verify the required parameter 'enterpriseId' is set
      if (enterpriseId == undefined || enterpriseId == null) {
        throw "Missing the required parameter 'enterpriseId' when calling v1EnterpriseEnterpriseIdIndigoMeetingsMeetingGuidGet";
      }

      // verify the required parameter 'meetingGuid' is set
      if (meetingGuid == undefined || meetingGuid == null) {
        throw "Missing the required parameter 'meetingGuid' when calling v1EnterpriseEnterpriseIdIndigoMeetingsMeetingGuidGet";
      }


      var pathParams = {
        'enterprise_id': enterpriseId,
        'meeting_guid': meetingGuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Meeting;

      return this.apiClient.callApi(
        '/v1/enterprise/{enterprise_id}/indigo/meetings/{meeting_guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1UserUserIdIndigoMeetingsGet operation.
     * @callback module:api/CommandCenterApi~v1UserUserIdIndigoMeetingsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meeting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Past Meetings by User
     * This endpoint lists completed meetings by user.
     * @param {Integer} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {module:api/CommandCenterApi~v1UserUserIdIndigoMeetingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meeting}
     */
    this.v1UserUserIdIndigoMeetingsGet = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling v1UserUserIdIndigoMeetingsGet";
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Meeting;

      return this.apiClient.callApi(
        '/v1/user/{user_id}/indigo/meetings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1UserUserIdIndigoMeetingsMeetingGuidGet operation.
     * @callback module:api/CommandCenterApi~v1UserUserIdIndigoMeetingsMeetingGuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meeting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Meeting Endpoints &amp; Stats by User
     * This endpoint lists meeting endpoints for completed meetings by user.
     * @param {Integer} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {String} meetingGuid The globally unique identifier (GUID) of the meeting of interest. This value is a string which contains the numeric meeting id, followed by a colon, followed by a 128-bit integer number formatted as 5 alphanumeric segments separated by dashes. Since a given numeric meeting ID can have multiple instantiations over time, the GUID helps identify the instance of interest.
     * @param {module:api/CommandCenterApi~v1UserUserIdIndigoMeetingsMeetingGuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meeting}
     */
    this.v1UserUserIdIndigoMeetingsMeetingGuidGet = function(userId, meetingGuid, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling v1UserUserIdIndigoMeetingsMeetingGuidGet";
      }

      // verify the required parameter 'meetingGuid' is set
      if (meetingGuid == undefined || meetingGuid == null) {
        throw "Missing the required parameter 'meetingGuid' when calling v1UserUserIdIndigoMeetingsMeetingGuidGet";
      }


      var pathParams = {
        'user_id': userId,
        'meeting_guid': meetingGuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Meeting;

      return this.apiClient.callApi(
        '/v1/user/{user_id}/indigo/meetings/{meeting_guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));