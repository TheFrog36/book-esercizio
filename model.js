class Publication {
    constructor(title, price, type, copies, publisher, discount, tax){
        this.title = title
        this.price = price
        this.type = type
        this.copies = copies
        this.publisher = publisher
        this.discount = discount
        this.tax = tax
    }
    round_number(number, dec_places){
        return (Math.round(number * (10**dec_places))) / (10 ** dec_places);
    }

    toString(){
        const publication_string ='title: ' + this.title + '\n' +
                                  'type: ' + this.type + '\n' +
                                  'price: ' + this.price + '$\n' +
                                  'public price:' + round_number(this.get_public_price(),2) +'$\n'+
                                  'copies: ' + this.copies + '\n' +
                                  'publisher: ' + this.publisher + '\n' +
                                  'discount: ' + this.discount + '%\n';
        return publication_string
    }
    get_public_price(){
        return this.price + this.price * (0.3 + this.tax) - this.price / 100 * this.discount
    }
}




class Book extends Publication{
    constructor(title,author,type,price,copies,pages,publication_year,publisher,discount){
        super(title, price, type, copies, publisher, discount, 0.1)
        this.author = author
        this.pages = pages
        this.publication_year = publication_year
    }

    //toString()
    toString(){
        const stringBook = super.toString()
        const stringBook2 = "author: " + this.author + "\n" +
                     "pages: " + this.pages + "\n" +
                     "publication_year: " + this.publication_year;
        return stringBook + stringBook2
    
    }
}

