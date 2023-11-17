import React from "react";
import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

// 주식 리스트 클릭 시에 차트 컴포넌트
const StockChart = ({ data }) => {
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    fillShadowGradient: "#FFBE00", 
    strokeWidth: 2,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    formatYLabel: (value) => value.toFixed(0),
  };

  const chartData = [
    {
      data: data.map((item) => parseInt(item.price)),
    },
  ];

  return (
    <View>
      <Text style={{ 
        textAlign: "center", 
        marginTop: 20, 
        padding: 10, 
        color: '#74736C', 
        fontWeight: 'bold',}}>차트</Text>
      <LineChart
        data={{ datasets: chartData }}
        width={310}
        height={280}
        chartConfig={chartConfig}
        withDots={false} 
        bezier
      />
    </View>
  );
};

export default StockChart;
