
// url = www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata



async function main(url) {
    try {
        let res = await fetch(url) 
        
        let data = await res.json();
        // display(data)
        console.log('data:', data)

        return data;
        
    }
    catch (err) {
        // console.log('err:', err)
    }
}
export {main};
