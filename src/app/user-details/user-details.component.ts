import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api/api.service';
import { User } from '../types/User';
import { TranslationsService } from '../service/translations/translations.service';
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

  constructor(private route: ActivatedRoute, private api: ApiService, public translationService: TranslationsService, private location: Location) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || null;
    this.getData();
  }

  getData(): void {
    this.api.getOneUser(this.userId).subscribe(
      data => {
        this.user = data;
        this.loading = false;
      }
    )
  }

  back(): void {
    this.location.back();
  }
}
