import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TranslationsService } from 'src/app/service/translations/translations.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  ES = '/assets/es.png';
  EN = '/assets/en.png';
  showDropdown = false;
  showMenu = false;
  currentLanguage = 'en';
  currentUser: { firstName: string, lastName: string, image: string, email: string } | null = null;

  constructor(public translationService: TranslationsService, private authService: AuthService, private router: Router) { }

  // Initializes component variables and subscribes to auth and language events.
  ngOnInit(): void {
    this.authService.logoutEvent.subscribe(() => {
      this.currentUser = null;
    });

    this.authService.loginEvent.subscribe(() => {
      this.currentUser = this.getUser();
    });

    this.currentUser = this.getUser();

    const localLang = localStorage.getItem('lang');
    if (localLang) {
      this.currentLanguage = localLang;
    } else {
      localStorage.setItem('lang', this.currentLanguage);
    }

    this.translationService.setCurrentLang(this.currentLanguage);
  }

  getUser(): { firstName: string, lastName: string, image: string, email: string } | null {
    if (this.authService.isAuthenticated()) {
      return this.authService.getCurrentUser();
    }
    return null;
  }

  // Changes the language of the application and saves it to local storage.
  changeLanguage(language: string) {
    this.currentLanguage = language;
    localStorage.setItem('lang', language);
    this.translationService.setCurrentLang(this.currentLanguage);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
