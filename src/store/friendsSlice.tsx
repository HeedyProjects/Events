import {createSlice} from '@reduxjs/toolkit';

const DATA = [
  {
    photo: require('../../assets/profileIcons/minerva.jpg'),
    name: 'Анна Ерёмина',
    commonEvents: 1,
  },
  {
    photo: require('../../assets/profileIcons/minerva.jpg'),
    name: 'Елена Давыдова',
    commonEvents: 2,
  },
  {
    photo: require('../../assets/profileIcons/minerva.jpg'),
    name: 'Анна Ерёмина',
    commonEvents: 1,
  },
  {
    photo: require('../../assets/profileIcons/minerva.jpg'),
    name: 'Елена Давыдова',
    commonEvents: 2,
  },
];

const friendSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: DATA,
  },
  reducers: {
    addFriend(state, action) {
      console.log(state);
      console.log(action);
      state.friends.push({
        photo: require('../../assets/profileIcons/minerva.jpg'),
        name: 'Ольга Тихонова',
        commonEvents: 4,
      });
    },
  },
});

export const {addFriend} = friendSlice.actions;
export default friendSlice.reducer;
