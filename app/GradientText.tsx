import React from 'react';
import { View } from 'react-native';
import Svg, { Text, Defs, LinearGradient, Stop } from 'react-native-svg';

export default function GradientText({ text, fontSize = 32, startColor, endColor }) {
  return (
    <View>
      <Svg height={fontSize + 10} width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0%" stopColor={startColor} stopOpacity="1" />
            <Stop offset="100%" stopColor={endColor} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Text
          fill="url(#grad)"
          fontSize={fontSize}
          fontWeight="bold"
          x="50%"
          y={fontSize}
          textAnchor="middle"
        >
          {text}
        </Text>
      </Svg>
    </View>
  );
}

