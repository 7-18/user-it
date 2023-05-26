import { Component, Input } from '@angular/core';
import { TranslationService } from 'src/app/service/translation/translation.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() status: string | undefined;
  @Input() showErrorAlert: boolean | undefined;

  constructor(public translationService: TranslationService) { }
}
