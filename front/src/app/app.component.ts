import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  user: {username: string, password: string} = {username: '', password: ''};
  constructor(private auth: AuthService) {}
  login() {
    this.auth.login(this.user).subscribe(response => {
      console.log(response);
    });
  }
}
