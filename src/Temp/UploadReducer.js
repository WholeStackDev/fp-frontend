import * as actionTypes from "../Actions";

const initialState = {
  tracks: [],
  selectedTrackIndex: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRACK:
      return {
        ...state,
        tracks: state.tracks.concat(action.trackToAdd)
      };
    case actionTypes.CLEAR_TRACKS:
      return {
        ...state,
        tracks: []
      };
    case actionTypes.SET_SELECTED_TRACK_INDEX:
      return {
        ...state,
        selectedTrackIndex: action.selectedTrack
      };
    case actionTypes.EDIT_TRACK:
      return {
        ...state,
        tracks: state.tracks.map(track => {
          if (track.id === action.track.id) {
            return {
              ...action.track
            };
          } else {
            return track;
          }
        })
      };
    default:
      return state;
  }
};

export default reducer;
