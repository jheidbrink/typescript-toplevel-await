import axios from 'axios';

export function sayHelloWorld(world: string) {
  return `Hello ${world}`;
}

const result = await axios.get("https://httpbin.org/get");
console.log(result);
