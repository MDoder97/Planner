import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../_Model/Project';

@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.css']
})
export class ProjectCreationComponent implements OnInit {

  project: Project = new Project();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClick() {
    this.http.post('http://localhost:5000/api/projects/post', this.project).subscribe();
  }
}
