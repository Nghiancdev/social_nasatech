// HorizontalButtonScroll.js

import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Hoặc bất kỳ thư viện icon nào bạn thích

const HorizontalButtonScroll = ({buttons, onPress}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onPress(button.label)}>
            <Icon
              name={button.icon}
              size={20}
              color={button.iconColor || '#fff'}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  button: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 600,
  },
});

export default HorizontalButtonScroll;
