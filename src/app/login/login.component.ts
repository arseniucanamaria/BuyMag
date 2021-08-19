import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  user?: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
   try {
    this.authService.login(this.username, this.password).subscribe((user: User) => { 
      this.user = user;
      if(this.user.admin === false)
        this.router.navigate(['/home-page']);
      else
        this.router.navigate(['/admin-page']);
    });
     
   }
   catch(error){

   }
  
  }
}
