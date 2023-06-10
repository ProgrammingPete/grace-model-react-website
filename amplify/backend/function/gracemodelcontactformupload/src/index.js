/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_GRACEMODELBACKEND_GRAPHQLAPIIDOUTPUT
	API_GRACEMODELBACKEND_GRAPHQLAPIENDPOINTOUTPUT
	API_GRACEMODELBACKEND_GRAPHQLAPIKEYOUTPUT
	API_GRACEMODELBACKEND_EMAILMESSAGETABLE_NAME
	API_GRACEMODELBACKEND_EMAILMESSAGETABLE_ARN
	SES_EMAIL
	SES_EMAIL_DEV
Amplify Params - DO NOT EDIT */

const { SESClient, SendEmailCommand } =  require("@aws-sdk/client-ses");
const client = new SESClient({ region: process.env.REGION });

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const contactName = streamedItem.dynamodb.NewImage.name.S;
      const contactEmail = streamedItem.dynamodb.NewImage.email.S;
      const contactMessage = streamedItem.dynamodb.NewImage.message.S;
      console.log(process.env.SES_EMAIL_DEV);
      console.log(process.env.SES_EMAIL);
      console.log(contactName);
      console.log(contactEmail);
      console.log(contactMessage);
      const input = { // SendEmailRequest
        Source: process.env.SES_EMAIL_DEV, // required
        Destination: { // Destination
          ToAddresses: [ // AddressList
            process.env.SES_EMAIL, process.env.SES_EMAIL_DEV
          ],
        },
        Message: { // Message
          Subject: { // Content
            Data: 'Website Contact Request'
          },
          Body: { // Body
            Text: { Data: `Email: ${contactEmail},\n Name: ${contactName},\n Message: ${contactMessage}` },
          },
        }
      };
      const command = new SendEmailCommand(input);
      const response = await client.send(command);
      console.log(`response: ${JSON.stringify(response)}`);
    }
  }
  return { status: 'done' };
};
