import { StyleSheet } from "react-native";

//스타일 코드
const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 5,
    },
    subtitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "black",
      marginTop: 10,
      marginLeft: 5,
    },
    analysisText: {
      color: "gray",
      marginVertical: 10,
      marginLeft: 5,
    },
    stockItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    stockImage: {
      width: 50,
      height: 50,
      borderRadius: 25, // 반지름이 이미지의 절반 크기
      marginRight: 10,
    },
    stockInfo: {
      flex: 1,
    },
    stockName: {
      fontSize: 16,
      fontWeight: "bold",
      alignItems: "center",
    },
    priceChangeContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    stockPrice: {
      fontSize: 15,
      marginTop: 5,
    },
    stockChange: {
      fontSize: 13,
      marginLeft: 150,
    },
  });

  export default styles;