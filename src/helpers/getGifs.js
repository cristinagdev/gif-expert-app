export const getGifs = async (category)=>{

  const url=`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=12&api_key=e2c01pHCkKCVOoBMnGRwAepl7bebUuGL` ;
  const response= await fetch(url);
  const {data}= await response.json();

  const gifs= data.map(img=>{
    return{
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs;

}