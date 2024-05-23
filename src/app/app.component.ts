import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fyle-frontend-challenge';
  user: any;
  repositories: any;
  isLoading = false;
  userLoading = false;
  totalPages: number = 0;
  currentPage: number = 1;
  userName: string = '';
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.handleSearch('johnpapa');
  }

  handleSearch(username: any) {
    this.isLoading = true;
    this.userLoading = true;
    this.apiService.getUser(username).subscribe({
      next: (data) => {
        this.userName = username;
        this.user = data;
        this.totalPages = Math.floor((data.public_repos + 7) / 8);
        this.userLoading = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.handleSearch('johnpapa');
      },
    });
    this.apiService.getRepos(username, this.currentPage).subscribe({
      next: (data) => {
        this.repositories = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.handleSearch('johnpapa');
      },
    });
  }

  handlePageChange(page: any) {
    this.isLoading = true;
    this.apiService.getRepos(this.userName, page).subscribe({
      next: (data) => {
        console.log(this.totalPages);
        this.repositories = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.handleSearch('johnpapa');
      },
    });
  }
}
