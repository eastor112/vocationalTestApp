const initialState = {
  users: [],
  activeUser: {},
  totalPages: 0,
  page: 1,
  totalUsers: 0,
  countries: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
      };

    case 'SET_USERS':
      return {
        ...state,
        users: action.payload.results,
        totalPages: action.payload.totalPages,
        page: action.payload.currentPage,
        totalUsers: action.payload.totalDocs,
      };

    case 'SET_ACTIVE_USER':
      return {
        ...state,
        activeUser: { ...action.payload },
      };

    case 'UPDATE_ACTIVE_USER':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.uid === action.payload.uid) {
            return { ...action.payload };
          }
          return user;
        }),
        activeUser: { ...action.payload },
      };

    case 'SET_PAGE_USERS':
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};
