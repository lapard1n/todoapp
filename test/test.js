let str = `

asd


`

function splitSpace(str) {
  str = str.split(' ').join('');
  return str ? true : false;
}

// console.log(splitSpace(str));
let regExpSpaceCheker = /\S/;
console.log(regExpSpaceCheker.test(str));
