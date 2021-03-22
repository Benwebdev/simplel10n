A really simple l10n class 

```javascript

//You would have some keys and values
var language = {
  en: {
    HELLO: 'Hello',
  },
  fr: {
    HELLO: 'Bonjour',
  }
}

const currentLang = new l10n();

currentLang.getTranslationStr("HELLO")
currentLang.setLanguage('de');
currentLang.__translation // Contains strings 
```
Class

```javascript 
import { language, DEFAULT_LANGUAGE } from '../mockData';

export class l10n {
    _CURRENTLANGUAGE: any
    DEFAULT_LANGUAGE: any
    _translation: any
    translation: any
    constructor() {
        this.DEFAULT_LANGUAGE = 'en';
        this._translation = {}
    }

    /**
     * getTranslationStr
     */
    public getTranslationStr(key) {
        var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return this._translation[key] || fallback || language[DEFAULT_LANGUAGE][key] || key;
    }
    /**
     * setLanguage
     */
    public setLanguage(lang) {
        this._translation = lang;
        this._CURRENTLANGUAGE = '';

        if (!language[lang]) {
            this._translation = language[DEFAULT_LANGUAGE] || {};
            this._CURRENTLANGUAGE = lang;
        } else {
            this._translation = language[lang];
            this._CURRENTLANGUAGE = lang;
        }
    }
}
```



