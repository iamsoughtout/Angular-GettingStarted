import { Component } from '@angular/core';

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
  products: any[] = [  // any[] defines that we are expecting any kind of data types
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
}
