import { l10n } from './modules/l10n';

const ttt = new l10n();
const ddd = new l10n();
// console.log(ttt.log());
ttt.setLanguage('fr')
ddd.setLanguage('en');
console.log(ttt._translation);
console.log(ddd._translation);
console.log(ttt.getTranslationStr('HELLO'))

// export default localization;
// export { getTranslationStr, l10n, setLanguage, setManualL10n };

export {
    l10n
}