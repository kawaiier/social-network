const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // {id: 9, followed: true, photoUrl: 'http://avatarmaker.ru/img/11/1044/104306.png', fullName:'Zaza', status:'married', location: {city:'Balashikha', country:'Russia'}},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
                ;
        case UNFOLLOW:
          return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, followed: false}
                }
                return u;
            })
        }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }

}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;