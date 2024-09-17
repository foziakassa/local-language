import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{locale:"en"},{locale:"am"},{locale:"om"},{locale:"so"}];
}

const loadMessages = async locale => {
  const url = `https://api.i18nexus.com/project_resources/translations/${locale}.json?api_key=${process.env.I18NEXUS_API_KEY}`;

  const res = await fetch(url, {
    next: { revalidate: false }
  });

  return res.json();
};

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = await loadMessages(locale);
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}