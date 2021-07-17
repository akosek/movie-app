import React, { useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

interface Returns {
    isActive?: boolean;
}

export function useAppState(): Returns {
    const appState = useRef(AppState.currentState);
    const [isActive, setIsActive] = useState<boolean>(true);

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
        if (nextAppState === 'active') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }

        appState.current = nextAppState;
    };

    useEffect(() => {
        AppState.addEventListener('change', handleAppStateChange);

        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);

    return { isActive };
}
