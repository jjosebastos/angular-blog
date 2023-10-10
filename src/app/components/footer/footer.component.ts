import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  linkLinkedin: string = "https://www.linkedin.com/in/jjosebastos/";
  constructor() { }

 
  ngOnInit(): void {
  }

}
