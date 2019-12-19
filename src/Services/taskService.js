import http from './httpService';

export async function getUserTasks(userId){
    let tasks = await http.get('data.json')
    .then((res) => res.data.todoItems)
    .catch((err) => console.log('something wromg happen while getting tasks data:',err));

    const  filterdtasks=tasks.filter((t) => t.userId === userId);

    return filterdtasks;
}