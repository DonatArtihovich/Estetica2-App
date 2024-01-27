import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import RNSecureStorage, { ACCESSIBLE } from "rn-secure-storage";
import { USER_NAME_KEY } from "../utils/const";
import { OpacityButton } from "./items/opacity-button";

interface UserNameFormProps {
    setName: (s: string | null) => void;
}

export const UserNameForm = ({ setName }: UserNameFormProps) => {
    const [value, setValue] = useState<string>('')

    const submitName = () => {
        if (value) {
            RNSecureStorage.setItem(USER_NAME_KEY, value, { accessible: ACCESSIBLE.WHEN_UNLOCKED }).then((res: string | null) => {
                setName(res)
            })
        }
    }

    return (
        <>
            <Image
                style={styles.backgroundImage}
                source={require('../../assets/stepan.jpg')}
            />
            <View
                style={[styles.wrapper]}
            >
                <View style={styles.formWrapper} >
                    <Text style={styles.label}>Enter your name:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setValue}
                        value={value}
                        onSubmitEditing={submitName}
                        placeholder="Rudick"
                    />
                    <OpacityButton onPress={submitName} title='Enter' />
                </View>
            </View >
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: '100%',
        paddingTop: 250
    },
    focusedWrapper: {
        paddingTop: 150
    },
    formWrapper: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        gap: 10
    },
    backgroundImage: {
        position: 'absolute',
        marginLeft: -400
    },
    input: {
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingLeft: 20
    },
    label: {
        color: 'white',
        fontSize: 40
    },
})