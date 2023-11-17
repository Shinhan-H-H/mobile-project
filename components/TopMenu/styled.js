import { StyleSheet } from "react-native";

//스타일 코드
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      height: "7%",
      paddingVertical: 10,
    },
    item: {
      padding: 10,
      borderRadius: 5,
    },
    text: {
      fontSize: 18,
      color: "grey", // 기본 글자색
    },
    selectedText: {
      fontWeight: "bold", // 선택된 항목의 글자를 진하게 만듭니다.
      color: "black", // 선택된 항목의 글자색
    },
    selectedItem: {
      // 선택된 항목의 추가적인 스타일
    },
  });

  export default styles;