import { Host } from "./host.interface";

export interface Property {
    id:number;
    hostId:number;
    name:string;
    location:string;
    pricePerNight:number;
    status:0 | 1;
    createdAt:Date;
    host:Host;
}

export interface Pagination<T> {
    currentPage:number;
    pageSize:number;
    totalItems:number;
    totalPages:number;
    result:T[];    
}

