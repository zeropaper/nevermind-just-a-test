export default function hello(whom = 'World') {
  const string = `Hello ${whom}!`;
  console.info(string);
  return string;
}

if (typeof window !== 'undefined') window.hello = hello;
