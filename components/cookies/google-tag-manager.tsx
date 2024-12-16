'use client';

import { useEffect, useState } from 'react';
import { canLoadGoogleTagManager } from '@/utils/cookies-consent';
import { GoogleTagManager } from '@next/third-parties/google';

export default function GoogleTagManagerWrapper() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        setShouldLoad(canLoadGoogleTagManager());
    }, []);

    if (!shouldLoad) return null;

    return <GoogleTagManager gtmId='GTM-536FWR9L' />;
}

