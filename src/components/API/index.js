import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  method: 'GET',
  params: {
    tr_latitude :19.07609,
    tr_longitude :72.877426,
    bl_latitude :20.91666667, 
    bl_longitude: 79.08333333,
    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    limit: '30',
    currency: 'USD',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '7b2ed8ccefmshdfe1237f6309f39p1bbd12jsnef121317aca8'
  }
};



export const travelFunc = async(type)=>{
    try {
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,options);
        return data
        
    } catch (error) {
        console.log(error)
    }
   
}