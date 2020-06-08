import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import { en } from './en';

i18n.translations = {
  en: en,
};

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

// When a value is missing from a language and fallback doesn't work, it'll present the last word for the past key.
i18n.missingTranslation = key => {
  const values = key.split('.');
  const value = values[values.length - 1];

  return value.replace('_', ' ');
};