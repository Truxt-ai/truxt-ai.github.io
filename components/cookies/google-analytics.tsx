'use client';

import { useEffect, useState } from 'react';
import { canLoadGoogleAnalytics } from '@/utils/cookies-consent';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function GoogleAnalyticsWrapper() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        setShouldLoad(canLoadGoogleAnalytics());
    }, []);

    if (!shouldLoad) return null;

    return <GoogleAnalytics gaId='G-QGPK6CL4RC' />;
}

