import React from "react";
import { View, StyleSheet } from "react-native";
//Components
import { Button, Image } from "react-native-elements";
import image from "../assets/3388270.png";

export default function Home({ navigation }) {
  const goTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageViewContainer}>
        <Image source={image} style={styles.image} />
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          title="Nuevo Turno"
          type="solid"
          onPress={() => goTo("Turn")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#202020",
  },
  imageViewContainer: {
    marginTop: 100,
    flex: 1,
  },

  text: {
    color: "#939196",
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#3e2f5b",
  },
  buttonTitle: {
    color: "#D0CDD7",
  },
  image: {
    width: 300,
    height: 300,
  },
});
