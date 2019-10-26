import { Component, OnInit } from '@angular/core';
import { IProduct } from './productInterface';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styles: ['.filterWrap h4{font-size: 34px; color: blue}', 'th{ text-transform: uppercase; color: green}'],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Amount: string = 'AMOUNT';
  pageTitle: string = 'PRODUCT LIST';
  imageWidth: number = 70;
  imageMargin: number =  20;
  imageBorder: string = '2px solid #ddd';
  imagePadding: number = 4;
  imageBorderRadius: number = 5;
  filterMarginTop: string = '1px solid red';
  showImage: boolean = true; // this property checks whether the images are
  // currently displayed or not. By setting it to False, the images wont be displayed when the page is first loaded
  errorMessage: string; // error message for when there is an error

  // we need a way to  know when the user changes his filter params.
  // we do this by changing the list filtered property into a getter and setter

  // when the data binding needs the value, it will call the getter and gets the value.
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  // every time the user modifies the value, the data binding calls the setter, parsing in the changed value
  set listFilter(value: string) {
    this._listFilter = value;

  // adding logic for every time the value changes...
  // setting the filteredProducts array to the filtered list of products.
  // using the JS conditional operator to provide for when the filter string is empty, null or undefined.
  // If string is available, it fires the this.perfromFilter object to filter the list.
  // If not available, it fires this.products - showing all the product list
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  // this is a property for filtered list of products that we can bind to
  filteredProducts: IProduct[];
  products: IProduct[] = [ ];
  /* any[] defines that
    we are expecting any kind of data types... This was changed to IProduct[] after we create interface

    ---------------------------------------------

  this is the method that the event binding will call when user clicks on 'show
  image' button in the template. The method has no return type so we specify the return type as void */

  toggleImage(): void {

    // this method simply toggles the state of the showImage property from true to false
    this.showImage = !this.showImage;
  }

  // setting default value for both the filtered list and the listFilter properties.
  // the constructor() is the function that gets executed when the component is first initialized
  constructor(private productService: ProductService) { }

performFilter(filterBy: string): IProduct[] {

    // convert the filter value to lowercase
    filterBy = filterBy.toLocaleLowerCase();

    // ***returning the filtered lists of products
    // using the array filter method to create a new array with elements that pass the test defined in the provided function.
    // using the ES2015 arrow syntax to define that filter function
    // for each product in the list, the productName is converted to lowercase and indexOf is used ...
    // to determine if the filtered text is found in the productName, if so, the element is added to the filtered list
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  onNotify(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  // ngOnInit() life cycle hook handles all component initialization and is also a great place to handle fetching of data from the server.
  ngOnInit(): void {
    // this is the code to call the service. Always call the service from ngOnInit()

    /*We set the products property to the products returned from our serivice, i.e. the
    // productService server instance. put a dot (.) and call the getProduct method */
    this.productService.getProducts().subscribe({

      /*when the observable emits the data, we set our product property to the returned array of products*/
      // NOTE: the below code can also be written as:
      // next(next)
      next: products => {
        this.products = products,
        this.filteredProducts = this.products;
      },
      // throw out an error, which has already been defined as a string
      error: err => this.errorMessage = err
    });
  }
}
