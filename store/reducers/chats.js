import CHATS from "../../data/dummy-data";

// Define Initial State
const initialState = {
  availableChats: CHATS,
  favoriteChats: CHATS.filter((chat) => chat.favorite === true),
};

export default (state = initialState, action) => {
  return state;
};
