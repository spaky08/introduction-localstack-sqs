// Load the AWS SDK for Node.js
import * as AWS from "aws-sdk";
// Set the region 
AWS.config.update({region: 'us-east-1'});

const config = {
    endpoint: new AWS.Endpoint('http://localhost:4566'),
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1'
}
export interface msgParams{
  DelaySeconds?: number;
  MessageAttributes?:any;
  MessageBody:string;
  QueueUrl:string;
  // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
  // MessageGroupId: "Group1",  // Required for FIFO queues
}
// Create an SQS service object
export const SQS = new AWS.SQS(config);