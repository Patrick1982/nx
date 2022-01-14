import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'nx-angular-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cruzverde';
  constructor(private user:UsersService) {
    this.user.getData().subscribe(data => {
      console.log(data)
    })
  }
}
