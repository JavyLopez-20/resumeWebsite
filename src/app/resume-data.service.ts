import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from './models/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  private http = inject(HttpClient)

  getResumeData() {
    return this.http.get<Resume>('data/resume.json')
  }
}