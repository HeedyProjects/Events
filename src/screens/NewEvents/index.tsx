import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Head from '../../screens/NewEvents/components/Head';
import Button1 from '../../screens/NewEvents/components/Button';
import New from '../../screens/NewEvents/components/New';
import Adds from '../../screens/NewEvents/components/Adds';

export default function NewEvents() {
  return (
    <View style={styles.container}>
      <Head />
      <View>
        <Text style={styles.newevs}>Новые события</Text>
      </View>
      <View
        style={{
          borderColor: 'lightgrey',
          borderRadius: 8,
          borderWidth: 1,
          marginLeft: 12,
          marginRight: 12,
        }}>
        <New />

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            margin: 10,
          }}>
          <Button1 text="Не пойду" accent={true} onPress={undefined} />
          <Button1 text="Пойду" accent={undefined} onPress={undefined} />
        </View>
      </View>
      <View>
        <Text style={styles.newevs}>Заявки друзей</Text>
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          borderColor: 'lightgrey',
          borderRadius: 8,
          borderWidth: 1,
          marginLeft: 12,
          marginRight: 12,
        }}>
        <Adds />

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            margin: 10,
          }}>
          <Button1 text="Не пойду" accent={true} onPress={undefined} />
          <Button1 text="Пойду" accent={undefined} onPress={undefined} />
        </View>
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          borderColor: 'lightgrey',
          borderRadius: 8,
          margin: 10,
          borderWidth: 1,
          marginLeft: 12,
          marginRight: 12,
        }}>
        <Adds />

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            margin: 10,
          }}>
          <Button1 text="Не пойду" accent={true} onPress={undefined} />
          <Button1 text="Пойду" accent={undefined} onPress={undefined} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  newevs: {
    fontWeight: 'bold',
    fontSize: 17,
    margin: 10,
    marginTop: 30,
  },
});
