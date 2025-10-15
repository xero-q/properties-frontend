export interface DomainEvent {
    id:number;
    propertyId:number;
    eventType:string;
    payloadJSON:string;
    createdAt:Date;
  
}