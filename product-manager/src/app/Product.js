class Product {
  constructor(id, name, desc, price, stock) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.stock = stock;
  }

  set Price(value) {
    if (value < 0) {
      throw new Error("price cannot be negative");
    }
    this.price = value;
  }

  get Price() {
    return `${this.price} USD`;
  }

  set Stock(value) {
    if (value < 0) {
      throw new Error("Stock cannot be negative");
    }
    this.stock = value;
  }

  get Srice() {
    return `${this.stock} Units`;
  }

  set Name(value) {
    if (value.length < 3 || value.length > 30) {
      throw new Error("Name must be between 3 and 30 characters");
    }
    this.name = value;
  }

  get Name() {
    return this.name;
  }

  set Desc(value) {
    this.desc = value;
  }

  get Desc() {
    return this.desc;
  }
}

export default Product;
