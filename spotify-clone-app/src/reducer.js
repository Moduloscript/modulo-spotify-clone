export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token:  "👽👽👽 BQAAVN2Ee0auUJQce3lsW0BQ_gkx0gmCVEknyV8dcnQNpmsoRzDh5c06CJcofvuGLUUwfW4Qe9bY4dxZmnxDvEE4udSmy8BUhSjwF8yx1EUbFDAWH08Q3P-vBa-O8q1KfmcSOBtSRkC8VgDHypR-SS290qm2iMvXiD06jYQ2hDJTbeOo",
  

};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;

    }
}


export default reducer;