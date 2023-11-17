import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 10,
      width: "98%",
      height: 250,
      justifyContent: "center",
    },
    buttonContainer: {
      flexDirection: "row",
    },
    button: {
      padding: 10,
      borderRadius: 5,
    },
    selectedButton: {
      backgroundColor: "rgba(5, 3, 0, 0.54)",
    },
    buttonText: {
      color: "black",
    },
    selectedButtonText: {
      color: "white",
    },
    contentContainer: {
      height: "80%",
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "center", 
      alignItems: "center",
    },
    stockBoxContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center", 
    },
  });

  export default styles;