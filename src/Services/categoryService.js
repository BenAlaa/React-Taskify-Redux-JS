import http from './httpService';


export async function getCategories(){
    let categories = await http.get('data.json')
    .then((res) => res.data.categories)
    .catch((err) => console.log('something wromg happen while getting categories data:',err));
    
    return categories;
}