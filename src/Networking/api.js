export const Api=async(skip=0,limit=10)=>{
    try{
        const response = await fetch
        // ("https://dummyjson.com/products?limit=10&skip=0")
        (`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        const data = await response.json()
        return (data);
    }
    catch(error){
        console.log('Error while fetching the data');
        return {products:[]};
    }
}