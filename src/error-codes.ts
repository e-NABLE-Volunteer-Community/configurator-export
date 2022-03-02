// Used to uniquely identify error classes so that a localized error
//  message can be displayed to the client
// !IMPORTANT!: Error code values should always be explicit numbers
// Using implicit enum iota could result in codes for errors shifting over time

// Ranges:
//           0: Unknown
//    1 -  999: Authorization, authentication, user data
// 1000 - 1999: Measurement to configuration conversion
// 2000 - 2999: Export service

// This enum will need to change a lot over time, hence being its own component
export enum ErrorCodes {
  Unknown = 0,
  InvalidBom = 2000,
  InvalidBomLocation = 2001,
  DeviceNotFound = 2100,
  PartNotFound = 2101,
  MissingParameter = 2200,
  ExportNotFound = 2300,
  ExportTimedOut = 2301,
}
//noop
