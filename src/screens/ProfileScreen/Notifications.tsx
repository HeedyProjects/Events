import React, {useState} from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import CustomText from '../../components/CustomText';
const title = 'Уведомления';

export default function Notifications() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 60,
          marginRight: 3,
          marginLeft: 18,
        }}>
        <CustomText textType="SFProDisplayBold" style={styles.title}>
          {title}
        </CustomText>
        <Switch
          style={styles.sw}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
          // ios_backgroundColor="#E1E1E1"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    alignSelf: 'center',
  },
  sw: {
    marginRight: 20,
  },
});
