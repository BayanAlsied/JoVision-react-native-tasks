import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task16 = () => {
  const [isNameVisible, setIsNameVisible] = useState(false);

  const toggleNameVisibility = () => {
    setIsNameVisible(!isNameVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleNameVisibility} />
      {isNameVisible && <Text style={styles.nameText}>BayanAlsayed</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  nameText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Task16;
