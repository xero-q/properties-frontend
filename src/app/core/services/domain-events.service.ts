import { inject, Injectable } from '@angular/core';
import environment from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { DomainEvent } from '../../shared/interfaces/domain-event.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainEventsService {
  private apiUrl = environment.API_URL;
  private httpClient = inject(HttpClient);

  createDomainEvent(propertyId:number,eventType:string,payloadJSON:string):Observable<DomainEvent>{
    const payload = {
      propertyId,
      eventType,
      payloadJSON   
    };
    
    return this.httpClient.post<DomainEvent>(`${this.apiUrl}/domainevents`,payload);
  }  
}
