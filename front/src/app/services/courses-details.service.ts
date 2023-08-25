
import { Injectable } from '@angular/core';
import { CoursesDetail } from '../core/interface/courses-detail.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesDetailsService {

  coursesDetail: any = {}

  private endpointDetail = 'http://localhost:4001/coursesDetail' 

  constructor(private http: HttpClient) {} 

  getCoursesDetail(id: number):Observable<CoursesDetail[]> { 

    const url = `${this.endpointDetail}/${id}`

    return this.http.get<CoursesDetail[]>(url)

  }


}


