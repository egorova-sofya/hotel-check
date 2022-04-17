export const GET_HOTELS = "GET_HOTELS";

const UPDATE_LOCATION = "UPDATE_LOCATION",
  UPDATE_DATE = "UPDATE_DATE",
  SAVE_HOTELS = "SAVE_HOTELS",
  UPDATE_NUMBERS_OF_DAYS = "UPDATE_NUMBERS_OF_DAYS",
  UPDATE_EDITED_HOTEL = "UPDATE_EDITED_HOTEL",
  UPDATE_FEATURED_HOTEL = "UPDATE_FEATURED_HOTEL";

const SORT_ARRAY = "SORT_ARRAY";

const defaultState = {
  location: "",
  checkIn: "",
  numberOfDays: "1",
  hotelsArr: [],
  editedArray: [],
  featuredHotelsArr: [],
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

    case UPDATE_EDITED_HOTEL:
      return {
        ...state,
        editedArray: action.hotelsArr.map((item) => {
          if (action.featuredHotelsArr.includes(item)) {
            item.featured = true;
            return item;
          } else {
            item.featured = false;
            return item;
          }
        }),
      };

    case UPDATE_FEATURED_HOTEL:
      return {
        ...state,
        featuredHotelsArr: action.isLiked
          ? [...state.featuredHotelsArr, action.item]
          : state.featuredHotelsArr.filter(
              (item) => item.hotelId !== action.item.hotelId
            ),
      };

    case SORT_ARRAY:
      return {
        ...state,
        featuredHotelsArr:
          action.method === "up"
            ? state.featuredHotelsArr.sort((firstItem, secondItem) => {
                return (
                  secondItem[action.filterKey] - firstItem[action.filterKey]
                );
              })
            : state.featuredHotelsArr.sort((firstItem, secondItem) => {
                return (
                  firstItem[action.filterKey] - secondItem[action.filterKey]
                );
              }),
      };

    default:
      return state;
  }
};

export const sortHotels = (method, filterKey) => ({
  type: SORT_ARRAY,
  method,
  filterKey,
});

export const updateEditedHotel = (hotelsArr, featuredHotelsArr) => ({
  type: UPDATE_EDITED_HOTEL,
  hotelsArr,
  featuredHotelsArr,
});

export const updateFeaturedHotel = (isLiked, item) => ({
  type: UPDATE_FEATURED_HOTEL,
  isLiked,
  item,
});

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
