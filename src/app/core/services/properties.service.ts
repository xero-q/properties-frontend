import { inject, Injectable } from '@angular/core';
import environment from '../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pagination, Property } from '../../shared/interfaces/property.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  private apiUrl = environment.API_URL;
  private httpClient = inject(HttpClient);

  getPaginated(pageSize = 10,pageNumber = 1,filterByName?:string,filterByLocation?:string,status?:number,hostId?:number):Observable<Pagination<Property>>{
    let params = new HttpParams()
      .set('pageSize', pageSize)
      .set('pageNumber', pageNumber);

    if (filterByName) {
      params = params.set('filterByName', filterByName);
    }
    if (filterByLocation) {
      params = params.set('filterByLocation', filterByLocation);
    }
    if (status !== undefined && status !== null) {
      params = params.set('status', status);
    }
    if (hostId !== undefined && hostId !== null) {
      params = params.set('hostId', hostId);
    }

    return this.httpClient.get<Pagination<Property>>(`${this.apiUrl}/properties`, { params });
  }
  
}
