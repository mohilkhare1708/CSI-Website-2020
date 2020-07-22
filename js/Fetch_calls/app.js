const http = new slHTTP;
http.get('http://random6.xyz/StudentCouncil/getwebinar.php')
//.then(data => console.log(data.webinars[0].wname))
.then(data => console.log(data))
.catch(err => console.error(err));
