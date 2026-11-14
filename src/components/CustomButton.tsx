import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ViewStyle,
} from 'react-native';
import { COLORS } from '../theme/colors';

type Props = {
    title: string;
    onPress: () => void;
    outline?: boolean;
    style?: ViewStyle;
};

export default function CustomButton({
    title,
    onPress,
    outline = false,
    style,
}: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[
                styles.button,
                outline && styles.outline,
                style,
            ]}
        >
            <Text style={[
                styles.text,
                outline && styles.outlineText,
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    outline: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    text: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    outlineText: {
        color: COLORS.primary,
    },
});