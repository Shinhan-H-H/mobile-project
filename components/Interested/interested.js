// Interested.js
import React from "react";
import styles from "./styled.js";
import { View, Text, Image, StyleSheet } from "react-native";

// 관심 주식 컴포넌트
const StockItem = ({ imageSource, name, price, change }) => (
  <View style={styles.stockItem}>
    <Image source={imageSource} style={styles.stockImage} />
    <View style={styles.stockInfo}>
      <Text style={styles.stockName}>{name}</Text>
      <View style={styles.priceChangeContainer}>
        <Text style={styles.stockPrice}>{price}</Text>
        <Text
          style={[
            styles.stockChange,
            { color: change.includes("+") ? "red" : "blue" },
          ]}
        >
          {change}
        </Text>
      </View>
    </View>
  </View>
);

const Interested = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>이알파님이 관심있어할</Text>
      <Text style={styles.subtitle}>우량주</Text>
      <Text style={styles.analysisText}>최근 찾아 본 주식을 분석했어요</Text>

      {/* 주식 목록 */}
      <StockItem
        imageSource={require("../../assets/image/samsung.png")}
        name="삼성전자"
        price="70,400원"
        change="   -3.10%"
      />
      <StockItem
        imageSource={require("../../assets/image/apple.png")}
        name="애플"
        price="244,353원"
        change="+2.44%"
      />
      <StockItem
        imageSource={require("../../assets/image/tesla.png")}
        name="테슬라"
        price="283,222원"
        change="-4.40%"
      />
    </View>
  );
};


export default Interested;
