import { useLang } from '../i18n';

export default function LanguageSwitcher() {
  const { lang, switchLanguage } = useLang();

  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => switchLanguage('pl')}
        className={`px-2 py-1 rounded ${lang === 'pl' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        🇵🇱 PL
      </button>
    </div>
  );
}
