import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../styles/style"

function Splash({ navigation }: any) {
    return (
        <>
                <View style={[styles.bgWhite, styles.p3, styles.h60, { borderTopRightRadius: 50, borderTopLeftRadius: 50 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Intro1')} style={[styles.shadowEx, styles.bgPrimary, styles.w100, styles.my2, styles.justifyContentCenter, { borderRadius: 20, shadowOpacity: 1, shadowColor: '#6f6aee', height: 50 }]}>
                        <Text style={[styles.textCenter, styles.textBold, styles.fs4, styles.textWhite]}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            
        </>
    )
}
export default Splash