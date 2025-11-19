import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { styles } from './style';

interface ButtonProps {
    title: string;
    onPress: () => void;
    type?: 'primary' | 'secondary';
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const CustomButton: React.FC<ButtonProps> = ({ title, onPress, type = 'primary', style, textStyle }) => {
    const buttonTypeStyle = type === 'primary' ? styles.primary : styles.secondary;

    return (
        <TouchableOpacity
            style={[styles.button, buttonTypeStyle, style]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[styles.buttonText, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;