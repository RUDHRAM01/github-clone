import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  searchValue: string = '';
  @Input() user: any;
  @Input() usreName: any;
  @Output("Search") Search: EventEmitter<any> = new EventEmitter();
  tabs: any = [
    {
      name: 'Overview',
      link: 'assets/book.svg',
    },
    {
      name: 'Repositories',
      link: 'assets/repo.svg',
      count: 'repo',
    },
    {
      name: 'Projects',
      link: 'assets/project.svg',
    },
    {
      name: 'Packages',
      link: 'assets/packages.svg',
    },
    {
      name: 'Stars',
      link: 'assets/star.svg',
    },
  ];

  constructor() {}

  searchUser() {
    this.Search.emit(this.searchValue);
  }
}
