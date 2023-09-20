// -----  CLASS EXTENSIONS   --------- //


class Product{
    constructor(title, price, inSale, salePercentage, image, quantity){
        this.title = title;
        this.price = price;
        this.inSale = inSale;
        this.salePercentage = salePercentage;
        this.image = image;
        this.quantity = quantity;
        this.priceAfterSale = this.calculatelPrice()
    }
    calculatelPrice(){
        if(!this.inSale){
            return this.price 
        }
        else{
            return this.price*(1 - this.salePercentage)
        }
    }

    getTotalPrice() {
        if(this.inSale){
            return this.quantity * this.priceAfterSale
        }
    }
}

const airJordan = new Product("Air Jordan", 300, true, 0.5, "https://img.buzzfeed.com/buzzfeed-static/static/2023-08/3/15/campaign_images/00558956fddb/red-cement-air-jordan-4-releases-in-september-3-577-1691077893-6_16x9.jpg", 1)

console.log(airJordan.getTotalPrice())