import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  mydetail: any;

  ngOnInit(): void {
    this.authService.getMe().subscribe({
      next: (res) => (this.mydetail = res.data),
      error: (err) => {
        if (err.error.code === 401) this.router.navigate(['/login']);
      },
      complete: () => {
        console.log(this.mydetail);
      },
    });
  }
}
