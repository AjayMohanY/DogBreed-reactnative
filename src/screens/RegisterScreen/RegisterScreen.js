import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Alert,
  StatusBar,
  Platform,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';

const RegisterScreen = ({navigation}) => {
  const [userid, setUserId] = useState(null);
  const [name, setName] = useState(null);
  const [MobileNumber, setMobileNumber] = useState(null);
  const [dogBreed, setdogBreed] = useState(null);
  const [dogName, setdogName] = useState(null);
  const [dogColor, setdogColor] = useState(null);
  const [dogGender, setdogGender] = useState(null);
  const [image, setImage] = useState(null);
  const [imagedata, setImageData] = useState(null);

  const [imageUpload, setImageUpload] = useState(false);

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(images => {
      const imageUri =
        Platform.OS === 'android' ? images.sourceURL : images.path;
      setImage(imageUri);
    });
  };

  const takeFromGallery = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 700,
      cropping: true,
    }).then(images => {
      const imageUri =
        Platform.OS === 'android' ? images.sourceURL : images.path;
      setImage(imageUri);
      setImageData(images.path);
    });
  };

  const submitImage = async () => {
    const uploadUri = imagedata;
    const filename = uploadUri.substring(uploadUri);
    setImageUpload(true);
    try {
      await storage().ref(filename).putFile(uploadUri);
      setImageUpload(false);
      Alert.alert('Image Uploaded Succesfully');
    } catch (err) {
      console.log(err);
    }
  };

  const handleDatabase = async () => {
    try {
      const response = await database().ref('/users/register').push({
        name: name,
        mobilenumber: MobileNumber,
        dogbreed: dogBreed,
        dogname: dogName,
        dogcolor: dogColor,
        doggender: dogGender,
        imagePath: imagedata,
      });
      const data = response.key;

      setName('');
      setMobileNumber('');
      setdogBreed('');
      setdogName('');
      setdogColor('');
      setdogGender('');
      setImageData(' ');
      navigation.navigate('HomeScreen', {id: data});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <StatusBar hidden={true} />
      <View>
        <Text style={styles.Header}>REGISTER</Text>
        <View>
          <Text style={styles.name}>Name:</Text>
          <TextInput
            value={name}
            onChangeText={value => setName(value)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.name}>Mobile Number:</Text>
          <TextInput
            style={styles.textInput}
            value={MobileNumber}
            onChangeText={value => setMobileNumber(value)}
          />
        </View>
        <View>
          <Text style={styles.name}>Dog Breed</Text>
          <TextInput
            name="dogBreed"
            style={styles.textInput}
            value={dogBreed}
            onChangeText={value => setdogBreed(value)}
          />
        </View>
        <View>
          <Text style={styles.name}>Dog Name</Text>
          <TextInput
            name="dogName"
            style={styles.textInput}
            value={dogName}
            onChangeText={value => setdogName(value)}
          />
        </View>
        <View>
          <Text style={styles.name}>Dog Color</Text>
          <TextInput
            name="dogColor"
            style={styles.textInput}
            value={dogColor}
            onChangeText={value => setdogColor(value)}
          />
        </View>
        <View>
          <Text style={styles.name}>Dog Gender</Text>
          <TextInput
            name="dogGender"
            style={styles.textInput}
            value={dogGender}
            onChangeText={value => setdogGender(value)}
          />
        </View>
        <View>
          <Text style={styles.names}>Dog Photo:</Text>
          <View style={styles.photoContainer}>
            <View>
              <TouchableOpacity
                onPress={() => takePhoto()}
                style={styles.cameraBtn}>
                <Text style={styles.cameraButton}>Camera</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => takeFromGallery()}>
                <Text style={styles.galleryButton}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {imagedata !== null ? (
              <Image source={{uri: imagedata}} style={styles.imagesUpload} />
            ) : null}
          </View>
          <View style={styles.photoContainer}>
            <View>
              <TouchableOpacity onPress={() => submitImage()}>
                <Text style={styles.ok}>Ok</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => setImageData(null)}>
                <Text style={styles.ok}>cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.name}>Dog location:</Text>
        </View>
        <View style={styles.demo}>
          <TouchableOpacity onPress={() => handleDatabase()}>
            <Text style={styles.registerBtn}>Register</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.loginBtn}>
              Already registered User! Login Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
