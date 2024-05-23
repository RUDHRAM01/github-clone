import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {
  @Input() isLoading = false;
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 1;
  @Input() repositories: any;
  @Output("PageChange") PageChange: EventEmitter<any> = new EventEmitter();

  constructor() {}
  changePage(page: number) {
    this.currentPage = page;
    this.PageChange.emit(page);
  }

}
