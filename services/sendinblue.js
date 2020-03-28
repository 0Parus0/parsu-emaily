// const SibApiV3Sdk = require('sib-api-v3-sdk');
// const { sendInBlueKey, secondKey } = require('../config/keys');
// // # Include the SendinBlue library

// const defaultClient = SibApiV3Sdk.ApiClient.instance;

// // Configure API key authorization: api-key
// const apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = sendInBlueKey;
// // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// // apiKey.apiKeyPrefix['api-key'] = "Token"

// // Configure API key authorization: partner-key
// const partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = secondKey;
// // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// // partnerKey.apiKeyPrefix['partner-key'] = "Token"

// const emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign(); // CreateEmailCampaign | Values to create a campaign

// class Mailer extends emailCampaigns {
//   constructor({ subject, recipients }, content) {
//     super();
//     this.sender = 'no-reply@parus-emaily.com';
//     this.subject = subject;
//     this.htmlContent = content;
//     this.recipients = this.formatAddresses(recipients);
//   }

//   // eslint-disable-next-line class-methods-use-this
//   formatAddresses(recipients) {
//     return recipients.map(({ id }) => id);
//   }
// }

// module.exports = Mailer;

// const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
// apiInstance.createEmailCampaign(emailCampaigns).then(
//   function(data) {
//     console.log(`API called successfully. Returned data: ${data}`);
//   },
//   function(error) {
//     console.error(error);
//   }
// );
