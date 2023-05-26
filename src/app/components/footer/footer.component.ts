import { Component } from '@angular/core';
import { TranslationService } from 'src/app/service/translation/translation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year: number;

  constructor(public translationService: TranslationService) {
    this.year = new Date().getFullYear();
  }
}
