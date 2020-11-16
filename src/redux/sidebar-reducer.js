let initialState =  {
    friendsData: [
        {id: 1, name: "Oleg", image:"http://pictar.ru/data/media/71/besplatnue_avatarki__1290_.jpg"},
        {id: 2, name: "Kolya", image:"http://pictar.ru/data/media/71/besplatnue_avatarki__1294_.jpg"},
        {id: 3, name: "Olya", image:"http://pictar.ru/data/media/71/besplatnue_avatarki__1293_.jpg"},
        {id: 4, name: "Popa", image:"http://pictar.ru/data/media/71/besplatnue_avatarki__1292_.jpg"},
        {id: 5, name: "Roman", image:"http://pictar.ru/data/media/71/besplatnue_avatarki__1291_.jpg"}
    ]
}

const sidebarReducer = (state = initialState, action='') => {
    return state;
}

export default sidebarReducer;