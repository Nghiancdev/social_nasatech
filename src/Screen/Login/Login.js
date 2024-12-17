import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Profile');
    } else {
      alert('Vui lòng điền đầy đủ thông tin');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Đăng nhập tài khoản</Text>

        <Text>Email, số điện thoại</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text>Mật khẩu</Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword} // Thay đổi giá trị secureTextEntry dựa trên trạng thái showPassword
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'} // Thay đổi biểu tượng mắt tùy thuộc vào trạng thái showPassword
              size={25}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'} // Thay đổi biểu tượng mắt tùy thuộc vào trạng thái showPassword
              size={25}
              color="#aaa"
            />
          </TouchableOpacity> */}

        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
            <Text style={styles.rememberText}>
              {rememberMe ? '☑ Ghi nhớ mật khẩu' : '☐ Ghi nhớ mật khẩu'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>

        {/* Thanh chắn với chữ "Hoặc" */}
        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.orText}>Hoặc</Text>
          <View style={styles.separator} />
        </View>

        {/* Dòng chữ Đăng ký */}
        <TouchableOpacity>
          <Text style={styles.signupText}>
            Bạn đã có tài khoản? <Text style={{color: '#007BFF'}}>Đăng ký</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  loginContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 35,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  passwordContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Để biểu tượng mắt nằm ở bên phải
  },
  iconContainer: {
    position: 'absolute',
    top: 5,
    right: 15, // Vị trí của icon bên phải
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberText: {
    fontSize: 18,
    color: '#555',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separator: {
    height: 1,
    flex: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#555',
  },
  signupText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Login;
