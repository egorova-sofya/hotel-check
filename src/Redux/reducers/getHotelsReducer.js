export const GET_HOTELS = "GET_HOTELS";

const UPDATE_LOCATION = "UPDATE_LOCATION",
  UPDATE_DATE = "UPDATE_DATE";

const defaultState = {
  location: "",
  checkIn: "",
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

    default:
      return state;
  }
};

export const getHotels = (payload) => ({
  type: GET_HOTELS,
  payload,
});

export const updateLocation = (payload) => ({
  type: UPDATE_LOCATION,
  payload,
});

export const updateDate = (payload) => ({
  type: UPDATE_DATE,
  payload,
});
