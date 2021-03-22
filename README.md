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



