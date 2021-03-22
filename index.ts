import { l10n } from './modules/l10n';

const _l10n = new l10n();

console.log(_l10n.setLanguage('en'));

console.log(_l10n._translation);
console.log(_l10n.getTranslationStr('HELLO'))

export {
    l10n
}