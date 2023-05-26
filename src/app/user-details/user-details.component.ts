import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api/api.service';
import { User } from '../types/User';
import { TranslationService } from '../service/translation/translation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  userId: string | null = null;
  user = {} as User;
  loading = true;
  showErrorAlert = false;
  errorStatus = '';

  constructor(private route: ActivatedRoute, private api: ApiService, public translationService: TranslationService, private location: Location) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || null;
    this.getData();
  }

  getData(): void {
    this.api.getOneUser(this.userId).subscribe({
      next: (data) => {
        this.user = data;
        this.loading = false;
      },
      error: (error) => {
        this.showErrorAlert = true;
        this.loading = false;
        this.errorStatus = error.status;
      }
    });
  }

  back(): void {
    this.location.back();
  }
}
