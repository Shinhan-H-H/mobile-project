// ContentSwitcher.js

import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import StockBox from "./StockBox";
import korea from "../../assets/image/korea.png";
import us from "../../assets/image/us.png";
import china from "../../assets/image/china.png";
import styles from "./styled";

const ContentSwitcher = () => {
  const [selectedButton, setSelectedButton] = useState("국내");
  const dataPoints1 = [10, 30, 40, 25, 40, 20, 35];
  const dataPoints2 = [10, 20, 30, 40, 35, 25, 30];
  const dataPoints3 = [10, 40, 20, 30, 45, 15, 30];
  const dataPoints4 = [10, 45, 25, 40, 50, 40, 40];

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "국내" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("국내")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "국내" && styles.selectedButtonText,
            ]}
          >
            국내
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "해외" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("해외")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "해외" && styles.selectedButtonText,
            ]}
          >
            해외
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {selectedButton === "국내" ? (
          <View style={styles.stockBoxContainer}>
            <StockBox
              title="코스피"
              indexValue="2,405.91"
              imgSrc={korea}
              chart={dataPoints1}
            />
            <StockBox
              title="코스닥"
              indexValue="777.47"
              imgSrc={korea}
              chart={dataPoints2}
            />
          </View>
        ) : (
          <View style={styles.stockBoxContainer}>
            <StockBox
              title="나스닥"
              indexValue="15,713.33"
              imgSrc={us}
              chart={dataPoints3}
            />
            <StockBox
              title="상해종합"
              indexValue="3,560.14"
              imgSrc={china}
              chart={dataPoints4}
            />
          </View>
        )}
      </View>
    </View>
  );
};



export default ContentSwitcher;
