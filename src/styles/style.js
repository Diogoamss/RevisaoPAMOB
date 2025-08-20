import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  // Telas principais
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  // LoginScreen
  dogImage: {
    height: windowWidth * 0.82,
    marginTop: windowWidth * 0.01,
    marginBottom: windowWidth * 0.1,
    resizeMode: "contain",
    alignSelf: "center",
  },
  H1: {
    color: "#32404d",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  H2: {
    color: "#32404d",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#13b666",
    alignItems: "center",
    borderRadius: 10,
    width: windowWidth * 0.9,
    height: windowWidth * 0.17,
    marginLeft: windowWidth * 0.05,
    marginTop: windowWidth * 0.1,
    marginBottom: windowWidth * 0.05,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#f2f2f2",
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
  },
  Google: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2FAFA",
    borderColor: "#13b666",
    borderWidth: 2,
    borderRadius: 10,
    width: windowWidth * 0.9,
    height: windowWidth * 0.17,
    marginLeft: windowWidth * 0.05,
    marginBottom: windowWidth * 0.2,
  },
  buttonText2: {
    color: "#32404d",
    fontSize: 15,
    fontWeight: "bold",
  },

  // RegisterScreen
  RegisterTitle: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: "center",
  },
  RegisterH1: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#2e3e4b",
  },
  RegisterH2: {
    fontSize: 16,
    color: "#757e86",
    marginBottom: 8,
  },
  RegisterFormEmail: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  Email: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#757e86",
  },
  sndEmail: {
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#ebecee",
    height: windowWidth * 0.13,
  },
  RegisterFormPassword: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  Password: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#757e86",
  },
  sndPassword: {
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#ebecee",
    height: windowWidth * 0.13,
    flex: 1,
  },
  PasswordInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeButton: {
    marginLeft: 10,
    width: 24,
    height: 24,
    tintColor: "#555",
  },
  ConfirmPassword: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  ConfirmPasswordInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  RegisterFormFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
    paddingHorizontal: 20,
  },
  RegisterFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  GoogleIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  FacebookIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  // AcessScreen
  AcessTitle: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: "center",
  },
  AcessFormEmail: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  AcessFormPassword: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  AcessFormCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  CheckboxText: {
    marginLeft: 10,
    color: "#757e86",
    fontSize: 16,
  },
  AcessFormButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 30,
    width: windowWidth,
    paddingHorizontal: 20,
  },
  Button: {
    width: "40%",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#13b666",
    height: windowWidth * 0.13,
    justifyContent: "center",
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  ButtonRegister: {
    width: "40%",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "#13b666",
    height: windowWidth * 0.13,
    justifyContent: "center",
  },
  ButtonRegisterText: {
    color: "#32404d",
    fontSize: 16,
    fontWeight: "bold",
  },
  AcessFormFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
    paddingHorizontal: 20,
  },
  AcessFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  // Social buttons
  Google: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 99,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  Facebook: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 99,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
