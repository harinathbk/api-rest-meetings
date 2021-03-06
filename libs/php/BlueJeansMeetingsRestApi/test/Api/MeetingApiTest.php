<?php
/**
 * MeetingApiTest
 * PHP version 5
 *
 * @category Class
 * @package  BlueJeansMeetingsRestApi
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * BlueJeans Meetings REST API
 *
 * ## Video That Works Where You Do. <p>This site provides developers access to APIs from BlueJean's Meetings meeting service.  From here you can see and try actual API calls to manage User Accounts, Meetings, and Recordings, pull Analytical Data and Current State information.</p>    <nosdk> <hr> <div> <div class=\"key\">     <a href=\"./basics.html\" target=\"_\"><img class=\"keyimg\" src=\"./img/bjnmeeting.png\"/></a> </div> <div class=\"keybox\"> Basic instructions about What is a BlueJeans Meeting, and Getting Started Using API's, are <a href=\"./basics.html\" target=\"_blank\">available here <i class=\"glyphicon glyphicon-new-window\"></i></a>. </div> </div> <hr> <alert>2/21/2019</alert> Change response of Change layout and Endpoint API's to 204<br/> 12/03/2018 Add API for setting user profile photograph.<br/> 10/17/2018 Updated API field definitions for time variables to be 64-bit .<br/> 7/23/2018 Corrected errors in API definition file.<br/> 7/10/2018 Deprecated some Command Center API's.  Exposed API's that Summarize usage.<br/> 7/06/2018 Added API for changing ownership of recordings.<br/> 6/28/2018 Restored Create Enterprise Account, added Enterprise and User Profile Tag API's.<br/> 6/01/2018 Clarified Access Token requirements for meeting endpoint API's.<br/> 5/21/2018 Corrected return model for meeting history call.<br/> </nosdk> <hr>
 *
 * OpenAPI spec version: 1.0.4402212019
 * Contact: glenn@bluejeans.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Please update the test case below to test the endpoint.
 */

namespace BlueJeansMeetingsRestApi;

use \BlueJeansMeetingsRestApi\Configuration;
use \BlueJeansMeetingsRestApi\ApiException;
use \BlueJeansMeetingsRestApi\ObjectSerializer;

/**
 * MeetingApiTest Class Doc Comment
 *
 * @category Class
 * @package  BlueJeansMeetingsRestApi
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class MeetingApiTest extends \PHPUnit_Framework_TestCase
{

    /**
     * Setup before running any test cases
     */
    public static function setUpBeforeClass()
    {
    }

    /**
     * Setup before running each test case
     */
    public function setUp()
    {
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown()
    {
    }

    /**
     * Clean up after running all test cases
     */
    public static function tearDownAfterClass()
    {
    }

    /**
     * Test case for cancelMeeting
     *
     * Cancel Meeting.
     *
     */
    public function testCancelMeeting()
    {
    }

    /**
     * Test case for createMeeting
     *
     * Create Meeting.
     *
     */
    public function testCreateMeeting()
    {
    }

    /**
     * Test case for dialoutPstn
     *
     * Dialout via PSTN.
     *
     */
    public function testDialoutPstn()
    {
    }

    /**
     * Test case for generatePairingCodePstn
     *
     * Generate Pairing Code (PSTN).
     *
     */
    public function testGeneratePairingCodePstn()
    {
    }

    /**
     * Test case for generatePairingCodeSip
     *
     * Generate Pairing Code (SIP).
     *
     */
    public function testGeneratePairingCodeSip()
    {
    }

    /**
     * Test case for generatePairingCodeWebRtc
     *
     * Generate Pairing Code (WebRTC).
     *
     */
    public function testGeneratePairingCodeWebRtc()
    {
    }

    /**
     * Test case for getEndpointLayout
     *
     * Get Endpoint Layout.
     *
     */
    public function testGetEndpointLayout()
    {
    }

    /**
     * Test case for getMeeting
     *
     * Get Meeting.
     *
     */
    public function testGetMeeting()
    {
    }

    /**
     * Test case for getMeetingEmails
     *
     * Get Meeting Email.
     *
     */
    public function testGetMeetingEmails()
    {
    }

    /**
     * Test case for getMeetingEndpoint
     *
     * Get Endpoint Information.
     *
     */
    public function testGetMeetingEndpoint()
    {
    }

    /**
     * Test case for getMeetingEndpoints
     *
     * List Meeting Endpoints.
     *
     */
    public function testGetMeetingEndpoints()
    {
    }

    /**
     * Test case for getMeetingNumbers
     *
     * Get Meeting Join Info.
     *
     */
    public function testGetMeetingNumbers()
    {
    }

    /**
     * Test case for getMeetingState
     *
     * Get Meeting State.
     *
     */
    public function testGetMeetingState()
    {
    }

    /**
     * Test case for listMeetings
     *
     * List Meetings.
     *
     */
    public function testListMeetings()
    {
    }

    /**
     * Test case for sendMeetingInvite
     *
     * Send Email Invite.
     *
     */
    public function testSendMeetingInvite()
    {
    }

    /**
     * Test case for updateEndpointLayout
     *
     * Update Endpoint Layout.
     *
     */
    public function testUpdateEndpointLayout()
    {
    }

    /**
     * Test case for updateMeeting
     *
     * Update Meeting.
     *
     */
    public function testUpdateMeeting()
    {
    }

    /**
     * Test case for updateMeetingEndpoint
     *
     * Update Endpoint Video/Audio State.
     *
     */
    public function testUpdateMeetingEndpoint()
    {
    }

    /**
     * Test case for updateMeetingEndpoints
     *
     * Update Meeting Endpoints State.
     *
     */
    public function testUpdateMeetingEndpoints()
    {
    }

    /**
     * Test case for updateMeetingState
     *
     * Update Meeting State.
     *
     */
    public function testUpdateMeetingState()
    {
    }
}
