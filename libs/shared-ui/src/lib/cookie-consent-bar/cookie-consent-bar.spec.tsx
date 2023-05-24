import { render } from '@testing-library/react';

import CookieConsentBar from './cookie-consent-bar';

describe('CookieConsentBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CookieConsentBar />);
    expect(baseElement).toBeTruthy();
  });
});
