import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  data = ["Auto-entrepreneur", "Freelancer", "Développeur WEB", "Mobile", "Desktop", "créative", "curieux", "autonome"]
  constructor() { }

  ngOnInit() {
  }

}
