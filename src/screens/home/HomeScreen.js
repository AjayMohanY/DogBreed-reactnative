import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import database from '@react-native-firebase/database';
import {useRoute} from '@react-navigation/native';

const HomeScreen = () => {
  const [image, setImage] = useState([]);
  const [path, setPath] = useState([]);
  const route = useRoute();
  const id = route.params.id;

  const dataloading = async () => {
    await database()
      .ref('/users/')
      .child('/register/' + id)
      .once('value')
      .then(snapshot => {
        const images = snapshot.val().json();
        setImage(images);
        console.log('image', image);
        setPath('id', id);
      });
  };
  useEffect(() => {
    dataloading();
  }, []);

  return (
    <View>
      {/* {image.map(item => {
        return (
          <View>
            {console.log(item)}
            <Image />
          </View>
        );
      })} */}
      <TouchableOpacity style={styles.filterTouch}>
        <Text style={styles.filter}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
