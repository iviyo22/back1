class Product {
    constructor(products = []) {
      this.products = products;
    }
  
    addProduct(product) {
      const { title, description, price, thumbnail, code, stock } = product;
  
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error("All fields are required");
      }
  
  
      const existingProduct = this.products.find((p) => p.code === code);
      if (existingProduct) {
        throw new Error("Product with the same code already exists");
      }
  
      const id = this.products.length + 1;
      this.products.push({ ...product, id });
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        throw new Error("Not found");
      }
      return product;
    }
  }
  const products = new Product();
  
  try {
    products.addProduct({
      title: "Product 1",
      description: "Description 1",
      price: 10,
      thumbnail: "thumbnail1.jpg",
      code: "ABC123",
      stock: 100,
    });
  
    products.addProduct({
      title: "Product 2",
      description: "Description 2",
      price: 20,
      thumbnail: "thumbnail2.jpg",
      code: "DEF456",
      stock: 50,
    });
  
    const allProducts = products.getProducts();
    console.log(allProducts);
  
    const productById = products.getProductById(1);
    console.log(productById);
  } catch (error) {
    console.error(error.message);
  }
  