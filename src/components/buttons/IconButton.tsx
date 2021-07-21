import React from 'react';

// UI & Styles
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './buttonStyles';

export type Props = {
    icon: string;
    label: string;
    size?: number;
    onPress?: () => void;
    style?: object;
};

export default function IconButton(props: Props) {
    return (
        <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
            <Icon name={props.icon} type="ionicon" size={props.size} />
            <Text style={styles.labelText}>{props.label}</Text>
        </TouchableOpacity>
    );
}
