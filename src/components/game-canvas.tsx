import { Rect, Canvas, useImage, Image, rect } from "@shopify/react-native-skia";
import { useState } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

interface GameCanvasProps {
    className?: string;
}

export const GameCanvas = () => {
    const backgroundImage = useImage(require('../../assets/dollars.webp'))
    const { width, height } = useWindowDimensions()
    const [lifeCount, setLifeCount] = useState<number>(3);

    return (
        backgroundImage
            ? <View style={styles.wrapper} >
                <Canvas style={styles.canvas}>
                    <Image image={backgroundImage} rect={rect(0, 0, width, height)} fit='cover' />
                    <Rect x={0} y={0} width={width} height={35} color='black' />
                    <Rect x={0} y={0} width={width / 4 * lifeCount} height={35} color='red' />
                </Canvas>
            </View>
            : <Spinner
                visible={Boolean(backgroundImage)}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%'
    },
    canvas: {
        width: '100%',
        height: '100%',
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
})
