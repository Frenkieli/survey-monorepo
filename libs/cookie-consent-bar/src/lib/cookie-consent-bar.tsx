import styles from './cookie-consent-bar.module.scss';

/* eslint-disable-next-line */
export interface CookieConsentBarProps {}

export function CookieConsentBar(props: CookieConsentBarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CookieConsentBar!</h1>
    </div>
  );
}

export default CookieConsentBar;
