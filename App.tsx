import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';

export default function App() {

  const myText = ['Lorem', 'Ipsum', 'Dolore'];
  console.log(`${myText[0].repeat(3)} `);

  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList 
        data={myMovieData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
            return(
                <Text style={{color: 'red'}}>{item.title}</Text>
            )
        }}
      />  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
