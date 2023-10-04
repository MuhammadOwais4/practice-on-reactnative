import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from "../styles/style";

function Intro1({ navigation }: any) {
  const [isLoading, setIsLoading] = useState(false);

  // Function to simulate loading
  const startLoading = () => {
    setIsLoading(true);

    // Simulate some asynchronous task
    setTimeout(() => {
      setIsLoading(false);
      // Add your code here to navigate to the next screen or perform other actions
      navigation.navigate('Intro2');
    }, 2000); // Change the duration as needed
  };

  return (
    <>
      <View style={[styles.bgWhite, styles.p3, styles.h60, { borderTopRightRadius: 50, borderTopLeftRadius: 50 }]}>
        <TextInput style={[styles.ms2, styles.my4, styles.p1, styles.border1, { width: '89%', borderRadius: 16, borderColor: "lightgrey", fontSize: 17, color: "black" }]} placeholder="Search" placeholderTextColor="grey" />
        <View>
          <TouchableOpacity onPress={startLoading} style={[styles.shadowEx, styles.bgPrimary, styles.w100, styles.my2, styles.justifyContentCenter, { borderRadius: 20, shadowOpacity: 1, shadowColor: '#6f6aee', height: 50 }]}>
            <Text style={[styles.textCenter, styles.textBold, styles.fs4, styles.textWhite]}>Scanner</Text>
          </TouchableOpacity>
        </View>
        {isLoading && (
          <ActivityIndicator size="large" color="#FFFFFF" />
        )}
      </View>
    </>
  );
}

export default Intro1;
