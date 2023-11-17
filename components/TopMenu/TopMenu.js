import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import styles from "./styled";

const CategoriesContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("주식");

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  // useEffect를 사용하여 초기에 "주식"이 선택되게 설정하기
  useEffect(() => {
    handleCategoryPress("주식");
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.item,
          selectedCategory === "주식" && styles.selectedItem,
        ]}
        onPress={() => handleCategoryPress("주식")}
      >
        <Text
          style={[
            styles.text,
            selectedCategory === "주식" && styles.selectedText,
          ]}
        >
          주식
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.item,
          selectedCategory === "자산" && styles.selectedItem,
        ]}
        onPress={() => handleCategoryPress("자산")}
      >
        <Text
          style={[
            styles.text,
            selectedCategory === "자산" && styles.selectedText,
          ]}
        >
          자산
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.item,
          selectedCategory === "펀드" && styles.selectedItem,
        ]}
        onPress={() => handleCategoryPress("펀드")}
      >
        <Text
          style={[
            styles.text,
            selectedCategory === "펀드" && styles.selectedText,
          ]}
        >
          펀드
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default CategoriesContainer;
