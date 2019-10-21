import { Component } from '@angular/core';
import { IProduct } from './productInterface';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
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
  listFilter: string = '';
  products: IProduct[] = [  // any[] defines that
   // we are expecting any kind of data types... // changed to IProduct[] after we create interface
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 9.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png'
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png'
    }
  ];

  // this is the method that the event binding will call when user clicks on 'show
  // image' button in the template. The method has no return type so we specify the return type as void
  toggleImage(): void {

    // this method simply toggles the state of the showImage property from true to false
    this.showImage = !this.showImage
  }
}
