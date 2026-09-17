const errorCodes = {
  invalidPhoneNumber: 1001,
  phoneAlreadyExists: 1002,
  otpExpired: 1003,
  otpIncorrect: 1004,
  otpMaxAttempts: 1005,
  kycDocUnreadable: 1101,
  kycDocExpired: 1102,
  kycFaceMismatch: 1103,
  kycDocsLinkInvalid: 1104,
  projectNotFound: 2001,
  projectGoalInvalid: 2002,
  internalServerError: 9000,
};

export default errorCodes;
