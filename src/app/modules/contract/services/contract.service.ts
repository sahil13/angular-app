import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contract } from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private URL = 'http://localhost/oShop/contract.php';
  constructor(private http: HttpClient) {}
  saveContract(data: Contract) {
    this.http
      .post(this.URL, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .subscribe(data1 => {
        console.log(data1);
      });
  }
}
