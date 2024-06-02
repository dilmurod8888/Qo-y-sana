let qoy = +prompt("Qo'ylar sonini kiriting")

while (isNaN(qoy) || qoy / 1 === 0) {
    qoy = +prompt("Qo'lar sonini kiriting !!!")
}
let arr = ''
for (let i = 1; i <= qoy; i++) {
    arr = arr + i + " qo'ylar...  "
}
console.log(arr);