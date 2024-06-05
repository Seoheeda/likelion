export const SWITCH = "THEME/SWITCH";
export const changeTheme = (theme) => ({ type: SWITCH, theme });

const colorTheme = {
  darkmode: true,
};

const theme = (state = colorTheme, action) => {
  switch (action.type) {
    case SWITCH:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    // default를 쓰지 않으면 맨처음 state에 count값이 undefined가 나옵니다.
    default:
      return state;
  }
};
export default theme;
