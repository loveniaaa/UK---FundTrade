import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Category = (
  {label, backgroundColor = '#5E2590', textColor = '#ffffff', onPress},
) => {
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor)}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    borderRadius: 25,
    backgroundColor: backgroundColor,
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginRight: 10,
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: textColor,
  }),
});
