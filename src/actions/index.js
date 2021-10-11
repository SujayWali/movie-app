// {
//     type:'ADD_MOVIES'
//     movies:[m1,m2,m2]

// }
// {
//     type:'DECREASE_COUNT'
// }

//Action Types
export const ADD_MOVIES = 'ADD_MOVIES';

//Action creators
export function addMovies(movies){
    return{
        type: ADD_MOVIES,
        movies

    }
}