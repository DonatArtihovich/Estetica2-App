import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

interface OpacityButtonProps {
    onPress: () => void;
    title: string;
    extraStyles?: StyleSheet.NamedStyles<any>
}

export const OpacityButton = ({ onPress, title, extraStyles }: OpacityButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, extraStyles && extraStyles.button]}
        >
            <View style={{ alignItems: 'center' }}>
                <View>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '80%',
        backgroundColor: '#fa8128',
        padding: 10,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 20,
    },
})