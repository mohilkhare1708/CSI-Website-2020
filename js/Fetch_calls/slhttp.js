class slHTTP{
    //Makes a GET Request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => {
                if(!res.ok)
                    throw new Error(res.status);
                return res.json();
            })
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }
}