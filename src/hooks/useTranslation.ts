import { useCallback } from 'react';
import { useRouter } from 'next/router';

type Translations = {
  [key: string]: string | Translations;
};

export function useTranslation() {
  const { locale } = useRouter();

  const t = useCallback(
    (key: string, params?: Record<string, string>) => {
      let translation: string;

      try {
        translation = key.split('.').reduce(
          (obj, k) => obj[k],
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require(`../../public/locales/${locale}/common.json`) as Translations
        ) as string;
      } catch (error) {
        console.warn(`Translation key "${key}" not found.`);
        return key;
      }

      if (params) {
        Object.keys(params).forEach((param) => {
          translation = translation.replace(`{{${param}}}`, params[param]);
        });
      }

      return translation;
    },
    [locale]
  );

  return { t };
}
