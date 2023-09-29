import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Header: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  name: {
    fontSize: 17,
    marginLeft: 15,
    color: 'black',
  },
  textInput: {
    borderBottomWidth: 1,
    marginLeft: 15,
    fontSize: 15,
    marginBottom: 15,
  },
  photoContainer: {
    flexDirection: 'column',
  },
  cameraButton: {
    marginTop: 10,
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    margin: '10%',
    color: 'black',
    textAlign: 'center',
  },
  galleryButton: {
    marginTop: 10,
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    margin: '10%',
    textAlign: 'center',
    color: 'black',
  },
  registerBtn: {
    marginTop: 1,
    fontSize: 22,
    textAlign: 'center',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#89023E',
    color: 'white',
  },
  loginBtn: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 14,
  },
  imagesUpload: {
    height: 100,
    width: 100,
    marginLeft: '35%',
  },
  cameraBtn: {
    marginRight: 0,
  },
  names: {
    marginBottom: 16,
    fontSize: 17,
    marginLeft: 15,
    color: 'black',
  },
  ok: {
    fontSize: 15,
    marginTop: 20,
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    textAlign: 'center',
    color: 'black',
    marginLeft: '30%',
    marginRight: '30%',
  },
  demo: {
    backgroundColor: 'black',
  },
});

export default styles;
