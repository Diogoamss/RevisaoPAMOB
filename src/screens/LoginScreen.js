import { styles } from "../styles/style";
import { View, Text, TouchableOpacity, Image, ScrollView, } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MotiView } from "moti";

export default function LoginScreen({ navigation }) {
    const Register = () => {
    }

    const Acess = () => {
        navigation.navigate('Acesso');
    }

    return (
        <ScrollView >

            <View style={styles.background}>
                <MotiView
                    from={{ opacity: 0, translateY: -50, scale: 0.9 }}
                    animate={{ scale: 1, opacity: 1, translateY: 0 }}
                    transition={{ stiffness: 120, mass: 0.8, type: 'spring', damping: 12, delay: 200 }}
                >
                    <Image
                        source={require('../assets/casual_dog.png')}
                        style={styles.dogImage}
                    />

                </MotiView>

                <MotiView
                    from={{ opacity: 0, translateY: 20}}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: 'timing', duration: 400, delay: 400 }}
                >
                    <Text style={styles.H1}>Bem-vindo ao App</Text>
                    <Text style={styles.H2}>Acesse sua conta</Text>
                </MotiView>

                <MotiView
                    from={{ opacity: 0, translateY: 30 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: 'timing', duration: 600, delay: 700 }}
                >
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Acess')}> 
                        <Image
                            source={require('../assets/Google.png')}
                            style={styles.Google}
                        />
                        <Text style={styles.buttonText}>Como deseja acessar</Text>
                    </TouchableOpacity>
                </MotiView>

                <MotiView
                    from={{ opacity: 0, translateY: 30 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: 'timing', duration: 600, delay: 700 }}
                >
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.buttonText2}>Registrar</Text>
                    </TouchableOpacity>
                </MotiView>
            </View>
        </ScrollView>
    );
}
