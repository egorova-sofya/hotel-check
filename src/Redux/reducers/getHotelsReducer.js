export const GET_HOTELS = "GET_HOTELS";

const UPDATE_LOCATION = "UPDATE_LOCATION",
  UPDATE_DATE = "UPDATE_DATE",
  SAVE_HOTELS = "SAVE_HOTELS",
  UPDATE_NUMBERS_OF_DAYS = "UPDATE_NUMBERS_OF_DAYS";

const defaultState = {
  location: "",
  checkIn: "",
  numberOfDays: "1",
  hotelsArr: [],
};

export const getHotelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    case UPDATE_DATE:
      return {
        ...state,
        checkIn: action.payload,
      };

    case UPDATE_NUMBERS_OF_DAYS:
      return {
        ...state,
        numberOfDays: action.payload,
      };

    case SAVE_HOTELS:
      return {
        ...state,
        hotelsArr: action.payload,
      };

    default:
      return state;
  }
};

export const getHotels = () => ({
  type: GET_HOTELS,
});

export const updateLocation = (payload) => ({
  type: UPDATE_LOCATION,
  payload,
});

export const updateDate = (payload) => ({
  type: UPDATE_DATE,
  payload,
});

export const updateNumberOfDays = (payload) => ({
  type: UPDATE_NUMBERS_OF_DAYS,
  payload,
});

export const saveHotels = (payload) => ({
  type: SAVE_HOTELS,
  payload,
});
