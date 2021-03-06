// custom vuelidate validator to ensure input is Japanese
// inspired by https://stackoverflow.com/questions/15033196/using-javascript-to-check-whether-a-string-contains-japanese-characters-includi
const japanese = (value) => {
  const jaRegex = /^[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]*$/;

  return jaRegex.test(value);
};

export default japanese;
