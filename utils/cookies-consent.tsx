export function getCookieConsent() {
    if (typeof window === 'undefined') {
        return 'unknown';
    }
    return localStorage.getItem('cookieChoice') || 'unknown';
}

export function canLoadGoogleTagManager() {
    const consent = getCookieConsent();
    return consent === 'all' || consent === 'necessary';
}

export function canLoadGoogleAnalytics() {
    const consent = getCookieConsent();
    return consent === 'all' || consent === 'necessary';
}
