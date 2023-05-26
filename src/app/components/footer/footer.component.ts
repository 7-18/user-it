import { Component } from '@angular/core';
import { TranslationsService } from 'src/app/service/translations/translations.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year: number;

  constructor(public translationService: TranslationsService) {
    this.year = new Date().getFullYear();
  }
}
