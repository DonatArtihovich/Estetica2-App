import { Button, ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { OpacityButton } from "./items/opacity-button";
import { useState } from "react";
import { GameCanvas } from "./game-canvas";

interface GameProps {
    className?: string;
}

export const Game = () => {
    const [isGame, setIsGame] = useState<boolean>(false)

    const startGame = () => {
        setIsGame(true)
    }

    return (
        isGame
            ? <GameCanvas />
            : <TouchableWithoutFeedback onPress={startGame}>
                <View>
                    <ImageBackground style={styles.background} source={require('../../assets/dancing_cat.png')} />
                    <Text style={styles.label}>Tap to play</Text>
                </View>
            </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    label: {
        position: 'absolute',
        zIndex: 1,
        bottom: '6%',
        left: 0,
        right: 0,
        backgroundColor: 'darkorange',
        padding: 10,
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    }
})