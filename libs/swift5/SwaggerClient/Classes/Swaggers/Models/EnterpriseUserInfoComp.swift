//
// EnterpriseUserInfoComp.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct EnterpriseUserInfoComp: Codable {

    /** Unique enteprise account identifier */
    public var _id: Int?
    /** Name of user&#39;s account */
    public var username: String?
    /** Email associated with this enterprise account. */
    public var email: String?
    /** User&#39;s first (Given) name */
    public var firstName: String?
    /** User&#39;s middle name */
    public var middleName: String?
    /** User&#39;s last (Family) name */
    public var lastName: String?
    /** Date since epoch (in milliseconds) when account was added to the entperprise */
    public var enterpriseJoinDate: Int64?
    /** Indicates if this profile has Administrative BlueJeans privileges within its enterprise. */
    public var isEnterpriseAdmin: Bool?
    /** Internal enterprise profile URI for referencing BlueJeans resources. */
    public var uri: String?

    public init(_id: Int?, username: String?, email: String?, firstName: String?, middleName: String?, lastName: String?, enterpriseJoinDate: Int64?, isEnterpriseAdmin: Bool?, uri: String?) {
        self._id = _id
        self.username = username
        self.email = email
        self.firstName = firstName
        self.middleName = middleName
        self.lastName = lastName
        self.enterpriseJoinDate = enterpriseJoinDate
        self.isEnterpriseAdmin = isEnterpriseAdmin
        self.uri = uri
    }

    public enum CodingKeys: String, CodingKey { 
        case _id = "id"
        case username
        case email
        case firstName
        case middleName
        case lastName
        case enterpriseJoinDate
        case isEnterpriseAdmin
        case uri
    }


}

