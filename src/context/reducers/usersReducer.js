const initialState = {
  users: [],
  activeUser: {},
  totalPages: 0,
  page: 1,
  totalUsers: 0,
  countries: [],
  isEditing: false,
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

    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
        totalUsers: state.totalUsers + 1,
      };

    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.uid !== action.payload),
        totalUsers: state.totalUsers - 1,
      };

    case 'SET_EDITING':
      return {
        ...state,
        isEditing: action.payload,
      };

    default:
      return state;
  }
};
