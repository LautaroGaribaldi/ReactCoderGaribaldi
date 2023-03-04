


//Se cambio el metodo de traer los productos. Se creo una collecion en firebase para cargar los porductos y traerlos. Ya no es necesario gFetch. 03/03/2023


/*let productos = [
    {id: "1" ,categoria: "placaDeVideo" ,nombre: "Asus GeForce GTX 1650 TUF GAMING 4Gb" ,descripcion: "ASUS NVIDIA GeForce GTX 1650 TUF GAMING 4Gb GDDR6." ,precio: 200 ,imagen:"https://s3-sa-east-1.amazonaws.com/saasargentina/eZG8mm2FjImE530IA0bC/imagen", stock: 50},
    {id: "2" ,categoria: "placaDeVideo" ,nombre: "Asus Geforce Rtx 3050 Phoenix 8gb" ,descripcion: "ASUS Phoenix GeForce RTX™ 3050 8GB GDDR6" ,precio: 300 ,imagen:"https://hard-digital.com.ar/files/Placa%20De%20Video%20Asus%20Geforce%20Rtx%203050%20Phoenix%208gb%20Ddr6%20Pci%204.0/1.jpg", stock: 32},
    {id: "3" ,categoria: "placaDeVideo" ,nombre: "PNY Geforce Rtx 2060 Super Dual Fan 8gb" ,descripcion: "PNY NVIDIA Geforce Rtx 2060 Super Dual Fan 8gb Ddr6" ,precio: 240 ,imagen:"https://front.dev.malditohard.com.ar/img/migration/PLACA-DE-VIDEO-RTX-2060-SUPER-PNY-DUAL-FAN.webp", stock: 10},
    {id: "4" ,categoria: "placaDeVideo" ,nombre: "MSI AMD Radeon RX 6800 16GB" ,descripcion: "MSI AMD Radeon RX 6800 Gaming x Trio 16GB GDDR6" ,precio: 400 ,imagen:"https://logg.api.cygnus.market/static/logg/Global/Placa%20de%20Video%20MSI%20AMD%20Radeon%20RX%206800%20GAMING%20X%20TRIO%2016GB%20GDDR6%20PCIe%204.0%20RGB%20c/%20Bracket/5f15d5595c9c4cbc9f338c00f6da3f82.webp", stock: 0},
    {id: "5" ,categoria: "placaDeVideo" ,nombre: "ASRock Radeon RX 6900 XT OC Formula 16GB" ,descripcion: "ASRock Radeon RX 6900 XT OC Formula 16GB GDDR6" ,precio: 430 ,imagen:"https://www.deffo.com.ar/wp-content/uploads/2022/09/VG-RX6900XT-OCF-16G-5.webp", stock: 40},
    {id: "6" ,categoria: "placaDeVideo" ,nombre: "Asus Geforce Rtx 3090 Gaming Rog Strix 24GB" ,descripcion: "Asus Nvidia Geforce Rtx 3090 Gaming Rog Strix 24GB GDDR6X" ,precio: 500 ,imagen:"https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-5400681.jpg", stock: 50},
    {id: "7" ,categoria: "procesador" ,nombre: "Procesador Intel Core I7 8700k 8gen" ,descripcion: "Intel Core I7 8700k 4.7ghz (3.7ghz) 12mb 6core 1151/300 8va" ,precio: 250 ,imagen:"https://www.profesionalreview.com/wp-content/uploads/2018/09/Procesadores-Intel-Core-i7-6.jpg", stock: 11},
    {id: "8" ,categoria: "procesador" ,nombre: "Procesador Intel Core I7 12700f 12gen" ,descripcion: "Procesador Intel Core i7-12700F de 12 núcleos y 4.9GHz de frecuencia" ,precio: 330 ,imagen:"https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-7243790.jpg", stock: 23},
    {id: "9" ,categoria: "procesador" ,nombre: "Procesador Intel Core I5 10400 LGA1200" ,descripcion: "Intel® Core™ i5 (2.90 ghz) 10ma Generación de 6 núcleos" ,precio: 200 ,imagen:"https://lellinsumos.com.ar/wp-content/uploads/2021/11/i5-10400.jpg", stock: 2},
    {id: "10" ,categoria: "procesador" ,nombre: "Procesador AMD Ryzen 5 4500U" ,descripcion: "Procesador AMD Ryzen 5 4500U de 6 núcleos y 2.3GHz de frecuencia" ,precio: 180 ,imagen:"https://lellinsumos.com.ar/wp-content/uploads/2021/11/amd-ryzen-5-2400g-39-ghz-raven-ridge-socket-am4-boxed-procesador-001.jpg", stock: 38},
    {id: "11" ,categoria: "procesador" ,nombre: "Procesador AMD Ryzen 7 5700G AM4 " ,descripcion: "Procesador AMD Ryzen 7 5700G de 8 núcleos y 4.6GHz de frecuencia" ,precio: 290 ,imagen:"https://s3-sa-east-1.amazonaws.com/saasargentina/0fzD0uu3OJ7jrxYrBkEf/imagen", stock: 4},
    {id: "12" ,categoria: "procesador" ,nombre: "Procesador Intel Core I9 13900k 13gen" ,descripcion: "Procesador Intel Core I9-13900k de 24 núcleos y 5.80GHz de frecuencia" ,precio: 450 ,imagen:"https://www.qloud.com.ar/SITES/IMG/hypergaming-01-2020/117_02-11-2022-04-11-11-bx8071513900k.png", stock: 17}
]

export const gFetch = (id) =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res( id ? productos.find(producto => producto.id === id) : productos)
        },1500)
    })
}*/


