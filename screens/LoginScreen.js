import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Image, Alert, KeyboardAvoidingView, Platform
} from 'react-native';
import { supabase } from './services/supabase';

export default function LoginScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
  if (!nome || !senha) {
    Alert.alert('Erro de login', 'Preencha nome e senha!');
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: nome,
    password: senha,
  });

  if (error) {
    Alert.alert('Erro de login', error.message);
  } else {
    // Pega os dados do usuário
    const { data: userData, error: userError } = await supabase
      .from('usuarios') // Nome da sua tabela
      .select('*')
      .eq('email', nome)
      .single();

    if (userError) {
      Alert.alert('Erro ao buscar dados', userError.message);
      return;
    }

    // Passa os dados do usuário pra MainTabs
    navigation.replace('MainTabs', { user: userData });
  }
};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>LOGIN</Text>

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={nome}
        onChangeText={setNome}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.linkRow}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Esqueci a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: '100%',
    marginVertical: 8,
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  linkText: {
    fontSize: 14,
    color: '#0000cd',
  },
  button: {
    backgroundColor: '#00bfff',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
