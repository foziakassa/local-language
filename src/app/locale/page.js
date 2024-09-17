'use client'

// import Link from 'next/link';
// import styles from './page.module.scss';
import { useTranslations } from 'next-intl';


export default function Hoo({ params: { locale } }) {
  const t = useTranslations('default');

  return (
    <div className=''>
      <h1>{t('header')}</h1>
      ...
    </div>
  );
}