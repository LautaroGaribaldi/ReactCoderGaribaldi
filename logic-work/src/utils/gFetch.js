let productos = [
    {id: "1" ,categoria: "placaDeVideo" ,nombre: "Asus GeForce GTX 1650 TUF GAMING 4Gb GDDR6" ,descripcion: "ASUS NVIDIA GeForce GTX 1650 TUF GAMING 4Gb GDDR6" ,precio: 200 ,imagen:"https://s3-sa-east-1.amazonaws.com/saasargentina/eZG8mm2FjImE530IA0bC/imagen"},
    {id: "2" ,categoria: "placaDeVideo" ,nombre: "Asus Geforce Rtx 3050 Phoenix 8gb Ddr6" ,descripcion: "ASUS Phoenix GeForce RTX™ 3050 8GB GDDR6" ,precio: 300 ,imagen:"https://hard-digital.com.ar/files/Placa%20De%20Video%20Asus%20Geforce%20Rtx%203050%20Phoenix%208gb%20Ddr6%20Pci%204.0/1.jpg"},
    {id: "3" ,categoria: "procesador" ,nombre: "Procesador Intel Core I7 8700k 8gen" ,descripcion: "Intel Core I7 8700k 4.7ghz (3.7ghz) 12mb 6core 1151/300 8va" ,precio: 240 ,imagen:"https://www.profesionalreview.com/wp-content/uploads/2018/09/Procesadores-Intel-Core-i7-6.jpg"},
    {id: "4" ,categoria: "procesador" ,nombre: "Procesador Intel Core I7 12700f 12gen" ,descripcion: "Procesador Intel Core i7-12700F de 12 núcleos y 4.9GHz de frecuencia" ,precio: 180 ,imagen:"https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-7243790.jpg"}
]

export const gFetch = () =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res( productos)
        },1500)
    })
}


