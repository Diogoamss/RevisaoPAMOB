import { styles } from "../styles/styles";
import { View, TouchableOpacity, Text, ScrollView, TextInput, Image} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { MotiView } from "moti";

export default function AcessoScreen({ navigation }) {
    const aviso = () => {
        if (email === "Admin" && senha === "Admin123" && check) {
            alert('Acesso Permitido! Bem Vindo Admin! :)');
        } else {
            alert('Acesso Negado! Tente Novamente! :(');
        }
    }

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [check, setChecked] = useState(false);

    return(
        <ScrollView style={styles.container}>
            <MotiView
                from={{ opacity: 0, translateY: -30 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'timing', duration: 400 }}
            >
            
            <View style={styles.AcessTitle}>

                <Text style={styles.RegisterH1}>acesse</Text>
                <Text style={styles.RegisterH2}>Login field</Text>
            </View>
            </MotiView>

            <MotiView
                from={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }} // corrigido
                transition={{ type: 'spring', delay: 400, damping: 10 } }
            >
                <View style={styles.AcessFormEmail}>
                    <Text style={styles.Email}>Email</Text>
                    <TextInput
                        style={styles.sndEmail}
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={setEmail}
                    ></TextInput>
                </View>
            </MotiView>

            <MotiView
                from={{ opacity: 0, translateX: -30 }}
                animate={{ opacity: 1, translateX: 0}}
                transition={{ delay: 600, type: 'timing', duration: 400 }}
            >
                <View style={styles.AcessFormPassword}>
                    <Text style={styles.Password}>Senha:</Text>

                    <View style={styles.PasswordInput}>
                        <TextInput style={styles.sndPassword}
                            placeholder="Digite sua senha"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={true}
                        ></TextInput>
                        <TouchableOpacity style={styles.eyeButton}>
                            <Image source={require('../assets/eye.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </MotiView>
            <MotiView
                from={{ opacity: 0, translateY: -30 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 700, type: 'timing', duration: 400 }}
            >
                <View style={styles.AcessFormCheckbox}>
                <Checkbox
                    value={check}
                    onValueChange={setChecked}
                    color={check ? '#30eb30ff' : undefined}
                />
                <Text style={styles.CheckboxText}>Lembrar-me</Text>
                </View>
            </MotiView>

            <MotiView
                from={{ opacity: 0, rotateX: "-90deg" }}
                animate={{ opacity: 1, rotateX: "0deg" }}
                transition={{ delay: 800, type: 'timing', duration: 400 }}
            >
                <View style={styles.AcessFormButton}>
                    <TouchableOpacity style={styles.Button} onPress={aviso}>
                        <Text style={styles.ButtonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonRegister} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.ButtonRegisterText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </MotiView>   
            
            <MotiView
                from={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 900, type: 'spring', damping: 12 }}
            >
                <View style={styles.AcessFormFooter}>
                    <Text style={styles.AcessFormFooter}>Footer Text</Text>
                    <Text> & </Text>
                    <View style={styles.AcessFormFooter}>
                    </View>
                </View>
            </MotiView>

            <MotiView
                from={{ opacity: 0, translateY: 30 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 1000, type: 'timing', duration: 400 }}
            >
                <View style={styles.AcessFooter}>
                    <TouchableOpacity style={styles.Google}>
                        <Image source={require('../assets/google.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Facebook}>
                        <Image source={require('../assets/facebook.png')} />
                    </TouchableOpacity>

                </View>
            </MotiView>
        </ScrollView>
    );

}