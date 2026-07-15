import { Component, inject, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';
import { Resume } from '../models/resume';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  private ResumeService = inject(ResumeDataService)
  resumeData: Resume | null = null;
  isDarkMode = true;

  ngOnInit(): void {
    this.ResumeService.getResumeData().subscribe(data => {
      this.resumeData = data
    })
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light')
  }

}
