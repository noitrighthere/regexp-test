let str = `
010-1234-5678
thehello@naver.com
https://www.omdbapi.com/?apikey=7035c60c7s=frozen
The quick brown fox jumps over the lazy dog.
aabbcccdds
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`
console.log(
  str.match(/(?=\@)/g)
)