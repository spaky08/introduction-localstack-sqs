import  { SQS,msgParams} from '../loaders/sqs';
import { EventEmitter } from 'events';

export class SqsHelper extends EventEmitter{
    
    public  async  listAll(listParams:any)  {
        return new Promise<any>((resolve, reject) => {
            SQS.listQueues(listParams,(err,data)=>{
                if (err) {
                    reject(err);
                } else {
                    return resolve(data);
                }
            });
        })   
    }
    public  async receiveMessage(params:any){
        SQS.receiveMessage(params, (err, data)=>{
            if (err) {
                console.log("Error", err);
            } else {
                this.emit('messageReceived',data);
            }
        });
        
        
    }
    public  async deleteMessage(deleteParams:any){
        SQS.deleteMessage(deleteParams, function(err, data) {
            if (err) {
                console.log("Delete Error", err);
            } else {
                console.log("Message Deleted", data);
            }
        });
    }
    public async sendMessage(params:msgParams){
        return new Promise<any>((resolve, reject) =>{
            SQS.sendMessage(params, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }
    public  async   createSqsQueue (createParams:any){
        return new Promise<any>((resolve, reject) =>{
            SQS.createQueue(createParams, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
        
    }
}