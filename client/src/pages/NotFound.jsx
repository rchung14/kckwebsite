import { Link } from 'react-router';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import '../styles/Legal.css';

const copy = {
  en: {
    h1: 'Page not found',
    body: (p) => (
      <>
        The page you’re looking for doesn’t exist or has moved. You can return to the{' '}
        <Link to={p('/')} className="text-link">
          homepage
        </Link>
        , browse our{' '}
        <Link to={p('/services')} className="text-link">
          services
        </Link>
        , or{' '}
        <Link to={p('/contact')} className="text-link">
          contact us
        </Link>{' '}
        directly.
      </>
    ),
  },
  ko: {
    h1: '페이지를 찾을 수 없습니다',
    body: (p) => (
      <>
        찾으시는 페이지가 존재하지 않거나 이동되었습니다.{' '}
        <Link to={p('/')} className="text-link">
          홈으로
        </Link>{' '}
        돌아가시거나,{' '}
        <Link to={p('/services')} className="text-link">
          업무 분야
        </Link>
        를 둘러보시거나,{' '}
        <Link to={p('/contact')} className="text-link">
          직접 문의
        </Link>
        해 주세요.
      </>
    ),
  },
};

export default function NotFound() {
  const locale = useLocale();
  const c = copy[locale] || copy.ko;
  const p = (path) => localePath(locale, path);

  return (
    <section className="legal-page not-found">
      <div className="container container-narrow">
        <h1 className="page-title">{c.h1}</h1>
        <p>{c.body(p)}</p>
      </div>
    </section>
  );
}
