import axios from 'axios';

const result = await axios.get("https://httpbin.org/get");
console.log(result);
