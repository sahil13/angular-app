import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contract } from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private URL = 'http://localhost/oShop/contract.php';

  employeeSubject = new BehaviorSubject<any>(null);
  employeeAction$ = this.employeeSubject.asObservable();

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

  setEmployeeData(employeeData) {
    // this.employeeSubject.next(null);
    this.employeeSubject.next(employeeData);
  }
}
