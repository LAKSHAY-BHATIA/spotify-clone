export const initialState={
user: null,
playlists:[],
playing:false,
item: null,
// token: "BQB4bwcPE4vffer9S1fvB0WHcNXeAwksCLSrnkPmuWY2Ic6QnJV6SbbVkKYjMCbDsLb3URd-Dmfhv9cbQllZRxht5TUeBxAZxKGXsqqky15yAUQ5TR-fqWVSrUvBY9TFY0buELfwWWcgx7whL-ScOrIKIubMrIFNHLrddCNXVpa_5FM8AqJ1"

}


const reducer = (state,action)=>{
switch(action.type){
    case 'SET_USER': return{
        ...state,
        user: action.user
    }
    case 'SET_TOKEN': return {
        ...state,
        token: action.token
    }
    case 'SET_PLAYLISTS': return{
        ...state,
        playlists: action.playlists
    }

    case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly
        }
    default: 
    return state
}
}

export default reducer;