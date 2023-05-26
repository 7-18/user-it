import { Component } from '@angular/core';
import { TranslationsService } from '../service/translations/translations.service';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LOGIN_VECTOR = 'assets/09.webp';
  isEmailHovered = false;
  isPasswordHovered = false;
  emailValue = '';
  passwordValue = '';
  isFormValid = false;
  showErrorAlert = false;

  constructor(public translationService: TranslationsService, private authService: AuthService, private router: Router) {}

  onInputChange() {
    this.isFormValid = this.emailValue.trim() !== '' && this.passwordValue.trim() !== '';
  }

  closeAlert() {
    this.showErrorAlert = false;
  }

  onSubmit() {
    if (this.isFormValid) {
      const isLoggedIn = this.authService.login(this.emailValue, this.passwordValue);
      if (!isLoggedIn) {
        this.showErrorAlert = true;
      } else {
        this.router.navigate(['/home'], { replaceUrl: true });
      }
    } else {
      this.isFormValid = false;
    }
  }
}
