import { styles } from "../styles/style";
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MotiView } from "moti";

export default function RegisterScreen({ navigation }) {
    const aviso = () => {
        if (email !== "" && senha !== "" && check) {
            alert('Cadastro realizado com sucesso! Bem Vindo! :)');
        } else {
            alert('Preencha todos os campos corretamente! :(');
        }
    }

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [check, setChecked] = useState(false);

    return(
        <ScrollView style={styles.background}>
            <MotiView
                from={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'timing', delay: 400, duration: 400 }}
            >
                <View style={styles.RegisterTitle}>
                    <Text style={styles.RegisterH1}>cadastre-se</Text>
                    <Text style={styles.RegisterH2}>Register field</Text>
                </View>
            </MotiView>
            <MotiView
                from={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', delay: 400, damping: 10 }}
            >
                <View style={styles.RegisterFormEmail}>
                    <Text style={styles.Email}>Email:</Text>
                    <TextInput
                        style={styles.sndEmail}
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
            </MotiView>

            <MotiView
                from={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{type: 'spring', delay: 800, damping: 10 }}
            >
                <View style={styles.RegisterFormPassword}>
                    <Text style={styles.Password}>Senha:</Text>
                    <View style={styles.PasswordInput}>
                        <TextInput
                            style={styles.sndPassword}
                            placeholder="Digite sua senha"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.eyeButton}>
                            <Image style={styles.eyeButton} source={require('../assets/eye.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </MotiView>

            <MotiView
                from={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', delay: 1200, damping: 10 }}
            >
                <View style={styles.ConfirmPassword}>
                    <Text style={styles.Password}>confirm your password</Text>
                    <View style={styles.ConfirmPasswordInput}>
                        <TextInput
                            style={styles.sndPassword}
                            placeholder="Digite sua senha novamente"
                            value={senha}
                            onChangeText={setSenha}
                        />
                        <TouchableOpacity style={styles.eyeButton}>
                            <Image style={styles.eyeButton} source={require('../assets/eye.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </MotiView>

            <MotiView
                from={{ opacity: 0, rotateX: "-90deg" }}
                animate={{ opacity: 1, rotateX: "0deg" }}
                transition={{ delay: 1000, type: 'timing', duration: 400 }}
            >
                <View style={styles.RegisterFormFooter}>
                    <View style={styles.RegisterFormFooter}/>
                    <Text> & </Text>
                    <View style={styles.RegisterFormFooter}/>
                </View>
            </MotiView>

            <MotiView
                from={{ opacity: 0, translateY: 30 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 800, type: 'timing', duration: 400 }}
            >
                <View style={styles.RegisterFooter}>
                    <TouchableOpacity style={styles.Google}>
                        <Image style={styles.GoogleIcon} source={require('../assets/Google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Facebook}>
                        <Image style={styles.FacebookIcon} source={require('../assets/Facebook.png')} />
                    </TouchableOpacity>
                </View>
            </MotiView>

        </ScrollView>
    );
}

