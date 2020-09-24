import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
//Components
import { Picker } from "@react-native-community/picker";

export default function TurnPickerprops(props) {
  const { setDay, day, setTime, time } = props;

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={day}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setDay(itemValue)}
        itemStyle={styles.itemStyle}
      >
        <Picker.Item label="Martes" value="Martes" />
        <Picker.Item label="Miercoles" value="Miercoles" />
        <Picker.Item label="Jueves" value="Jueves" />
        <Picker.Item label="Viernes" value="Viernes" />
        <Picker.Item label="Sabado" value="Sabado" />
        <Picker.Item label="Domingo" value="Domingo" />
      </Picker>
      <Picker
        selectedValue={time}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
      >
        <Picker.Item label="8:00" value="8:00" />
        <Picker.Item label="9:00" value="9:00" />
        <Picker.Item label="10:00" value="10:00" />
        <Picker.Item label="11:00" value="11:00" />
        <Picker.Item label="12:00" value="12:00" />
        <Picker.Item label="15:00" value="15:00" />
        <Picker.Item label="16:00" value="16:00" />
        <Picker.Item label="17:00" value="17:00" />
        <Picker.Item label="18:00" value="18:00" />
        <Picker.Item label="19:00" value="19:00" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  picker: {
    backgroundColor: "#0F0E0E",
    borderRadius: 10,
    marginLeft: 5,
    height: 50,
    color: "white",
    fontSize: 18,
    opacity: 0.8,
    width: 100,
    borderColor: "#3e2f5b",
  },
});
