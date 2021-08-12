import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(protected http: HttpClient) { }

  getReads() {
    return this.http.get('http://localhost:81/smartgarage/devices.php');
  }

}
