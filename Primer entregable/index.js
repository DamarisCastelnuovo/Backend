class ProductManager {

    constructor (){
        this.products = [];
    }
        
    getProducts(){
        return this.products;
    }

    addProduct(title, description, price, thumbnail, stock, code){
        let id_product = this.getProducts().length;

        let producto = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            stock: stock,
            id: ++id_product,
            code: code
        }

        
        if (!title || !description || !price || !code || !stock) {
            return console.log(`Todos los campos son obligatorios.`);
            
        }
        
        let codigo = this.products.find((prod) => prod.code == producto.code)

        if(codigo){
            return console.log("El codigo ya existe, ingrese uno nuevo");
        }else{
            this.products.push(producto);
            return this.products;
        }
    }

    getProductById(id_product){

        let producto = this.products.find(producto => producto.id === id_product)

        if(producto){
            return producto;

        }else{
            return console.log("no se encontró");
        }
    }
}


const productos = new ProductManager()
productos.addProduct("Apple Watch Series 6", "Procesador S6 64-bit dual core y 64gb almacenamiento", 400000, "#", 12, 500);
productos.addProduct("Samsung Gear S3 Frontier", "Procesador Exynos 7270 dual core y 4gb de almacenamiento", 25000, "#", 3, 400)
productos.addProduct("Huawei Watch GT 2", "Huawei Kirin A1 con bateria de hasta 455mAh", 6000, "#", 4, 300);


console.log(productos.getProductById(1));
console.log(productos.getProductById(2));
// console.log(productos.getProductById(4));



