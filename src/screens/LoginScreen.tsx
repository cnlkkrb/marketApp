import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const apiUrl = 'https://apiv5.akilliticaretim.com/api/v5/sf/auth/login';
    const headers = {
      'GUID': '24BE-DB0E-D75E-4060',
      'Content-Type': 'application/json',
    };
    const loginData = {
      username: username,
      password: password,
    };
    fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(loginData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Login response:', data);
        if (data.status) {
            console.log('helllo')
          navigation.navigate('Home');
        } else {
          console.error('Login failed:', data.error);
        }
      })
      .catch(error => console.error('Error during login:', error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Giriş Ekranı</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 10
  },
  button: {
    width: '70%',
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    padding: 10,
    fontSize: 15
  }
});

export default LoginScreen;
