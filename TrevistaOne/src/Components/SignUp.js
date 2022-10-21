/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Arrow from '../images/Arrow.png';
import BackButton from '../images/backButton.png';
import vector from '../images/VectorW.png';

const SignUp = () => {
  return (
    <>
      <Image style={styles.back_button_styles} source={BackButton} />
      <Image style={styles.Vector_styles} source={vector} />
      <View style={styles.main}>
        <View style={styles.card}>
          <Text style={styles.sign_in_styles}>Sign Up</Text>
          <Text style={{color: '#B9B9B9'}}>email Address</Text>
          <TextInput style={{borderBottomWidth: 2}} placeholder="email" />
          <Text style={{color: '#B9B9B9'}}>Password</Text>
          <TextInput style={{borderBottomWidth: 2}} placeholder="Password" />
          <Text style={{color: '#2847FC'}}>Forget Password?</Text>
          <TouchableOpacity>
            <View style={styles.button_View}>
              <Text style={{left: 30, fontSize: 20, color: 'white'}}>
                Sign Up
              </Text>
              <Image
                style={{width: 30, height: 20, right: 30, color: '#FFFFFF'}}
                source={Arrow}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{top: 40, flexDirection: 'row'}}>
          <Text>Already Have An Account? </Text>
          <Text style={{color: '#201C9C'}}>Sign In</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Vector_styles: {
    position: 'absolute',
    left: '31%',
  },

  button_styles: {
    backgroundColor: '#2AC0EF',
    borderRadius: 20,
  },
  back_button_styles: {
    width: 25.39,
    height: 20,
    top: 61,
    left: 25,
  },

  button_View: {
    width: '100%',
    height: 72,
    backgroundColor: '#2AC0EF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 28,
  },

  main: {
    flex: 1,
    marginTop: 260,
    alignItems: 'center',
  },

  card: {
    width: 340,
    height: 400,
    justifyContent: 'space-between',
  },

  sign_in_styles: {
    width: 119,
    height: 34,
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    color: '#3A3A3A',
  },

  email_style: {
    position: 'absolute',
    width: 86,
    height: 17,
    left: '10%',
    top: 380,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#B9B9B9',
  },

  email_textInput_styles: {
    borderBottomWidth: 2,
    width: '100%',
    // marginLeft: '10%',
    // marginRight: '20%',
  },
});

export default SignUp;