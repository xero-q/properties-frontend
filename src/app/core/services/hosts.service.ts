import { inject, Injectable } from '@angular/core';
import environment from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Host } from '../../shared/interfaces/host.interface';

@Injectable({
  providedIn: 'root'
})
export class HostsService {
  private apiUrl = environment.API_URL;
  private httpClient = inject(HttpClient);

  getAll():Observable<Host[]>{
    return this.httpClient.get<Host[]>(`${this.apiUrl}/hosts`);
  }
}
