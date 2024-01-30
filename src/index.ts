import axios from 'axios';

export function sayHelloWorld(world: string) {
  return `Hello ${world}`;
}

axios.get("https://httpbin.org/get");
