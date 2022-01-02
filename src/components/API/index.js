import axios from "axios";

export const getCity=async(city)=>{
  
  var link = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=b8bd04883bfc1ee2e662b28a6e82f1f9"
 
  const {data}=await axios.get(link)
  console.log(data)
  return(data)

}



export const travelFunc = async(type,viewport)=>{
    try {
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,{
          method: 'GET',         
          params: {
            latitude: viewport.latitude,
            longitude: viewport.longitude,
            limit: '30',
            currency: 'USD',
            distance: '2',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key':process.env.REACT_APP_RAPID_API_KEY
          }
        });
        return data
        
    } catch (error) {
        console.log(error)
    }
   
}