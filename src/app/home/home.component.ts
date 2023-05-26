import { Component } from '@angular/core';
import { User } from '../types/User';
import { ApiService } from '../service/api/api.service';
import { TranslationsService } from '../service/translations/translations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  showingUsers = 5;
  filterGender = '';
  filteredUsers: User[] = [];
  data: User[] = [];
  loading = true;
  sortBy = '';
  sortOrder = '';

  constructor(private api: ApiService, public translationService: TranslationsService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.api.getUsers().subscribe(
      data => {
        this.filteredUsers = data.users;
        this.data = data.users;
        this.loading = false;
      }
    )
  }

  handleShowMore(): void {
    this.showingUsers += 5;
  }

  setFilterGender(event: any): void {
    const gender = event.target.value;
    this.filterGender = gender;
    this.filterUsers();
  }

  // Filter users by gender.
  filterUsers(): void {
    this.filteredUsers = this.filterGender !== '' ? this.data.filter(user => user.gender === this.filterGender) : this.data;
  }

  // Sort users by age.
  handleSort(): void {
    const usersToSort = this.filteredUsers.slice();
    if (this.sortBy === 'age') {
      usersToSort.sort((a: User, b: User) => a.age - b.age);
      this.sortOrder = 'desc';
    } else {
      usersToSort.sort((a: User, b: User) => b.age - a.age);
      this.sortOrder = 'asc';
    }
    this.sortBy = this.sortBy ? '' : 'age';
    this.filteredUsers = usersToSort;
  }

  sortOrderIcon(): string {
    return this.sortOrder === 'asc' ? '<i class="fa-solid fa-arrow-up"></i>' : '<i class="fa-solid fa-arrow-up fa-rotate-180"></i>';
  }
}
