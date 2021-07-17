// Inspired by: https://github.com/jeanverster/react-native-styled-toast
import React from 'react';
import { createContext, useContext, useState } from 'react';
import { LayoutAnimation, SafeAreaView, StyleSheet, LayoutAnimationConfig, UIManager } from 'react-native';

// Components
import Toast, { ToastConfig, ToastInternalConfig, Positions } from '../components/Toast';

// Utils
import { uuid } from '../utils/uuid';

type ToastContextType = {
    toast: (options: ToastConfig) => void;
    position?: Positions;
    offset?: number;
    maxToasts?: number;
};

export const ToastContext = createContext<ToastContextType>({
    toast: () => null,
});

export const useToast = () => useContext(ToastContext);

UIManager && UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export type FullToastConfig = ToastConfig & ToastInternalConfig;

const CustomLayoutConfig: LayoutAnimationConfig = {
    duration: 300,
    create: {
        delay: 150,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
    },
    update: {
        type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
    },
};

const ToastProvider: React.FC<Omit<ToastContextType, 'toast'>> = ({ children, position, offset: offsetProp, maxToasts }) => {
    const [toasts, setToasts] = useState<FullToastConfig[]>([]);

    const toast = (newToast: ToastConfig) => {
        LayoutAnimation.configureNext(CustomLayoutConfig);
        setToasts((prevToasts) => {
            const toasts =
                position === Positions.BOTTOM
                    ? [...prevToasts, { index: prevToasts.length, id: uuid(), ...newToast }]
                    : [{ index: prevToasts.length, id: uuid(), ...newToast }, ...prevToasts];
            if (maxToasts && prevToasts.length === maxToasts) {
                position === Positions.BOTTOM ? toasts.shift() : toasts.pop();
                return toasts;
            } else {
                return toasts;
            }
        });
    };

    const hideToast = (id: string) => {
        LayoutAnimation.configureNext(CustomLayoutConfig);
        setToasts((prevToasts) => prevToasts.filter((el) => el.id !== id));
    };

    const offset = offsetProp ? offsetProp : 0;

    const canvasStartTop = {
        top: 0,
        paddingTop: offset,
        paddingBottom: 0,
    };

    const canvasStartBottom = {
        bottom: 0,
        paddingTop: 0,
        paddingBottom: offset,
    };

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <SafeAreaView
                style={[styles.canvas, position === Positions.BOTTOM ? canvasStartBottom : canvasStartTop]}
                pointerEvents="box-none"
            >
                {toasts.map((config) => (
                    <Toast key={config.id} onClose={(id) => hideToast(id)} {...config} />
                ))}
            </SafeAreaView>
        </ToastContext.Provider>
    );
};

export { ToastProvider };

const styles = StyleSheet.create({
    canvas: {
        position: 'absolute',
        left: 0,
        right: 0,
    },
});
