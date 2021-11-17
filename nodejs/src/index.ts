import console = require('console');
import {SqsHelper} from './helpers/SqsHelper';
import  { msgParams} from './loaders/sqs';
let sqsManager= new SqsHelper();
//Listar Las Colas
const listAll= ()=>{
    sqsManager.listAll({}).then(docs=>{
        console.log(`List Queues:`,docs);
    });    
}
const createSqsQueue= ()=>{
    const createParams = {
        QueueName: 'chapter-example',
        Attributes: {
          'DelaySeconds': '0',
          'MessageRetentionPeriod': '86400',
          'ReceiveMessageWaitTimeSeconds': '20',
    
        }
    };
    sqsManager.createSqsQueue(createParams).then(docs=>{
        console.log(`Create Sqs Queue`);
        console.log(docs);
    }).catch(e=>{
        console.error(e);
    });
}
const queueURL:string ='http://localhost:4566/000000000000/chapter-example';
let sendMessage = ()=>{
    const message={
        name:"Manuel",title:"Backend Enginier",
    };
    let params:msgParams={
        QueueUrl:queueURL,
        DelaySeconds:1,
        MessageBody:JSON.stringify(message)
    };
    sqsManager.sendMessage(params).then(message=>{
        console.log('Send Message successfully:',message);
    }).catch(e=>{
        console.log(' Send Message error:',e);
    });
}
let receiveMessage= ()=>{
    sqsManager.on('messageReceived',(data)=>{
        console.log('Message event:',data);
        data?.Messages?.forEach((element:any) => {
            console.log(`Message Body:`, JSON.parse(element?.Body));
            sqsManager.deleteMessage({
                QueueUrl:queueURL,
                ReceiptHandle:element.ReceiptHandle
            }).catch(e=>{
    
            });
        });
    });
    sqsManager.receiveMessage({
        QueueUrl: queueURL,
        WaitTimeSeconds: 1,
        MaxNumberOfMessages: 10,
    });
    
}

receiveMessage();