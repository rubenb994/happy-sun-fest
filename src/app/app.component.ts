import { Component } from '@angular/core';
import { stringify } from 'querystring';

export interface Room {
  owner: string;
  hangoutLink: string;
  windowRef: Window;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
