import React, { useState } from "react";
import { View, StyleSheet, Linking } from "react-native";
//Components
import { Button, Input, Image } from "react-native-elements";
import TurnPicker from "../components/TurnPicker";
import image from "../assets/3388270.png";

export default function Turn() {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [errorName, seterrorName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [day, setDay] = useState("Tuesday");
  const [time, setTime] = useState("8:00");

  const nameErrorMessage = "Debes ingresar tu nombre.";
  const lastNameErrorMessage = "Debes ingresar tu apellido.";

  //Input common properties
  const inputProps = {
    maxLength: 20,
    placeholderTextColor: "#909090",
    selectionColor: "#3e2f5b",
    textContentType: "name",
    style: styles.input,
    inputContainerStyle: styles.inputContainerStyle,
    errorStyle: styles.errorStyle,
  };

  const onChangeTextName = (name) => {
    if (name != "") {
      seterrorName("");
      setName(name);
    } else {
      seterrorName(nameErrorMessage);
    }
  };

  const sendMessage = () => {
    let msg =
      `Hola! Soy ` +
      name +
      ` ` +
      lastName +
      `. Quiero pedir un turno el día ` +
      day +
      ` a las ` +
      time +
      `, está disponible?`;
    let mobile = "3518054591";
    if (mobile) {
      if (msg) {
        let url = "whatsapp://send?text=" + msg + "&phone=+549" + mobile;
        Linking.openURL(url)
          .then((data) => {
            console.log("WhatsApp Opened successfully " + data);
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please enter message to send");
      }
    } else {
      alert("Please enter mobile no");
    }
  };

  const onChangeLastName = (lastName) => {
    if (lastName != "") {
      setErrorLastName("");
      setlastName(lastName);
    } else {
      setErrorLastName(lastNameErrorMessage);
    }
  };

  return (
    <View style={styles.content}>
      <View style={styles.formContainer}>
        <Image source={image} style={styles.image} />
        <Input
          placeholder="Nombre"
          errorMessage={errorName}
          {...inputProps}
          onChangeText={onChangeTextName}
        />
        <Input
          placeholder="Apellido"
          errorMessage={errorLastName}
          {...inputProps}
          onChangeText={onChangeLastName}
        />
        <TurnPicker setDay={setDay} setTime={setTime} day={day} time={time} />
        <Button
          title="Solicitar Turno"
          buttonStyle={styles.button}
          onPress={() => sendMessage()}
        />
      </View>
    </View>
  );
}

const defaultTurnDate = {
  day: "Tuesday",
  time: "8:00",
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#202020",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#3e2f5b",
    marginTop: 50,
  },
  input: {
    backgroundColor: "#272727",
    color: "#909090",
  },
  inputContainerStyle: {
    color: "white",
    borderColor: "#3e2f5b",
    borderBottomWidth: 3,
    width: 250,
  },
  errorStyle: {
    color: "red",
    opacity: 0.7,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
