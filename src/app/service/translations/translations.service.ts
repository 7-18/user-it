import { Injectable } from '@angular/core';

interface Translations {
  [lang: string]: {
    [section: string]: {
      [key: string]: string;
    };
  };
}

@Injectable({
  providedIn: 'root'
})

export class TranslationsService {
  // An object containing all the translations for the application (English and Spanish).
  private translations: Translations = {
    en: {
      login: {
        header: 'Welcome to ',
        email: 'Email address',
        email_placeholder: 'Enter your email address',
        password: 'Password',
        password_placeholder: '******',
        forgot_password: 'Forgot password?',
        submit: 'Sign In',
        logout: 'Sign Out'
      },
      alert: {
        title_error: 'Error',
        message_error: 'Incorrect email or password. Please try again.'
      },
      language: {
        en: 'English (US)',
        es: 'Spanish'
      },
      filter: {
        title: 'Filter by gender',
        male: 'Male',
        female: 'Female',
        all: 'All'
      },
      datatable: {
        name: 'Name',
        age: 'Age',
        gender: 'Gender',
        email: 'Email',
        university: 'University',
        details: 'details',
        show_more: 'Load more',
        no_data: 'No more data'
      },
      details: {
        username: 'Username',
        age: 'Age',
        gender: 'Gender',
        university: 'University',
        phone: 'Phone',
        birthDate: 'Birth date',
        bloodGroup: 'Blood group',
        height: 'Height',
        weight: 'Weight',
        eyeColor: 'Eye color',
        hairColor: 'Hair color',
        hairType: 'Hair type',
        address: 'Address',
        company: 'Company',
        back: 'Back',
      },
      footer: {
        copyright: 'All rights reserved.'
      }
    },
    es: {
      login: {
        header: 'Bienvenido a ',
        email: 'Correo electrónico',
        email_placeholder: 'Introduzca su correo electrónico',
        password: 'Contraseña',
        password_placeholder: '******',
        forgot_password: '¿Olvidaste tu contraseña?',
        submit: 'Iniciar sesión',
        logout: 'Cerrar sesión'
      },
      alert: {
        title_error: 'Error',
        message_error: 'Correo electrónico o contraseña incorrectos. Inténtalo de nuevo.'
      },
      language: {
        en: 'Inglés (ES)',
        es: 'Español'
      },
      filter: {
        title: 'Filtrar por género',
        male: 'Masculino',
        female: 'Femenino',
        all: 'Todos'
      },
      datatable: {
        name: 'Nombre',
        age: 'Edad',
        gender: 'Género',
        email: 'Correo electrónico',
        university: 'Universidad',
        details: 'detalles',
        show_more: 'Cargar más',
        no_data: 'No hay datos'
      },
      details: {
        username: 'Nombre de usuario',
        age: 'Edad',
        gender: 'Género',
        university: 'Universidad',
        phone: 'Teléfono',
        birthDate: 'Fecha de nacimiento',
        bloodGroup: 'Grupo sanguíneo',
        height: 'Altura',
        weight: 'Peso',
        eyeColor: 'Color de ojos',
        hairColor: 'Color de pelo',
        hairType: 'Tipo de pelo',
        address: 'Dirección',
        company: 'Empresa',
        back: 'Volver'
      },
      footer: {
        copyright: 'Todos los derechos reservados.'
      }
    }
  };

  private currentLang = '';

  constructor() {
    this.setCurrentLang(localStorage.getItem('lang') || 'en');
  }

  // Set the current language.
  setCurrentLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.currentLang = lang;
  }

  // Get the translation for the given key ('en' or 'es').
  getTranslation(key: string): string {
    const translationKeys = key.split('.');
    let translatedText: any = this.translations[this.currentLang];

    for (const translationKey of translationKeys) {
      translatedText = translatedText[translationKey];

      if (!translatedText) {
        break;
      }
    }

    return translatedText || '';
  }
}
