import { useEffect, useState } from 'react';
import * as Updates from 'expo-updates';

import { Intents } from '../components/Toast';

// Hooks
import { useToast } from '../contexts/ToastContext';

export default function UpdateChecker() {
    const { toast } = useToast();
    const [timer, setTimer] = useState<NodeJS.Timeout | undefined>();

    useEffect(() => {
        onTick().finally();

        if (timer) {
            clearInterval(timer);
            setTimer(undefined);
        }

        const timerId = setInterval(onTick, 3600000 / 1000);
        setTimer(timerId);

        return () => {
            if (timer) {
                clearInterval(timer);
                setTimer(undefined);
            }
        };
    }, []);

    async function onTick() {
        const updatesAvailable = await Updates.checkForUpdateAsync();
        if (updatesAvailable.isAvailable) {
            const newBundle = await Updates.fetchUpdateAsync();

            if (newBundle.isNew) {
                toast({
                    duration: 10000,
                    intent: Intents.INFO,
                    onPress: async () => await reloadApp(),
                    message: 'Ny version af appen tilgængelig',
                });
            }
        }
    }

    async function reloadApp() {
        await Updates.reloadAsync();
    }

    return null;
}
