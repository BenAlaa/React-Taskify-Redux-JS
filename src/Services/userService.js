import http from './httpService';


export async function getUser(email){
    const users = await http.get('data.json')
    .then((res) => res.data.users)
    .catch((err) => console.log('something wromg happen while getting data:',err));

    const user = users.find((user) => user.email === email);
    if(!user) return "400 bad request";

    return user;
    
}

export async function getUsers(){
    const users = await http.get('data.json')
        .then((res) => res.data.users)
        .catch((err) => console.log('something wromg happen while getting data:', err));
    return users;
}