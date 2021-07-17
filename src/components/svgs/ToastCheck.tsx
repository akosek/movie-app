import React from 'react';
import Svg, { Path } from 'react-native-svg';

// Config
import Colors from '../../config/colors';

const ToastCheck = ({ color = Colors.BLUE }: { color?: string }) => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path
                d="M6.74997 12.1502L4.12497 9.52523C3.83247 9.23273 3.36747 9.23273 3.07497 9.52523C2.78247 9.81773 2.78247 10.2827 3.07497 10.5752L6.21747 13.7177C6.50997 14.0102 6.98247 14.0102 7.27497 13.7177L15.225 5.77523C15.5175 5.48273 15.5175 5.01773 15.225 4.72523C14.9325 4.43273 14.4675 4.43273 14.175 4.72523L6.74997 12.1502Z"
                fill={color}
            />
        </Svg>
    );
};

export default ToastCheck;
