import { Injectable } from '@angular/core';
import { IProduct } from './productInterface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  // how to register a service in the root injector. This enables the service be available for all components in the app.
  providedIn: 'root'

  /* if you wish to make the service only availbale to a particular component, then you should...
  register it in the Component decorator of that particular component only, like so (e.g.if it's for LoginComponent):
  @Component({
    selector: 'pm-login',
    providers: [LoginComponent]
  })
  */

})
export class ProductService {
  // This is where you specify the location of the webserver. Although I am calling from a local server, the
  // address can also point to a web server e.g. https://www.server.com/api/users
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  // changing the return type to an observerble of IProduct[]
  getProducts(): Observable<IProduct[]> {
    /*since the response is normally a JSON array, I am passing in my already defined data type from IProduct[]
    //so that the method can automatically map the response to an array */
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      // Tap taps into the observable stream and allows us to look at the enitted
      // values in the stream without transforming the stream. Tap is great for
      // logging and debugging. Here, tap logs in the retrieved data into the console, so we can know that the data has been retrieved
      tap(data => console.log('All ' + JSON.stringify(data))),

      // catchEroor is used for catching errors
      catchError(this.handleError)
    );

    /*THE PRODUCT LIST BELOW IS NO LONGER USEFUL SINCE WE ARE NOW GETTING THEM FROM THE SERVER VIA HTTP REQUEST*/

// return [
//   {
//     productId: 1,
//     productName: 'Leaf Rake',
//     productCode: 'GDN-0011',
//     releaseDate: 'March 19, 2019',
//     description: 'Leaf rake with 48-inch wooden handle.',
//     price: 9.95,
//     starRating: 3.2,
//     imageUrl: 'assets/images/leaf_rake.png'
//   },
//   {
//     productId: 2,
//     productName: 'Garden Cart',
//     productCode: 'GDN-0023',
//     releaseDate: 'March 18, 2019',
//     description: '15 gallon capacity rolling garden cart',
//     price: 32.99,
//     starRating: 4.2,
//     imageUrl: 'assets/images/garden_cart.png'
//   },
//   {
//     productId: 5,
//     productName: 'Hammer',
//     productCode: 'TBX-0048',
//     releaseDate: 'May 21, 2019',
//     description: 'Curved claw steel hammer',
//     price: 8.9,
//     starRating: 4.8,
//     imageUrl: 'assets/images/hammer.png'
//   },
//   {
//     productId: 8,
//     productName: 'Saw',
//     productCode: 'TBX-0022',
//     releaseDate: 'March 15, 2019',
//     description: '15-inch steel blade hand saw price',
//     price: 11.55,
//     starRating: 3.7,
//     imageUrl: 'assets/images/saw.png'
//   },
//   {
//     productId: 10,
//     productName: 'Video Game Controller',
//     productCode: 'GMG-0042',
//     releaseDate: 'October 15, 2018',
//     description: 'Standard two-button video game controller',
//     price: 35.85,
//     starRating: 4.7,
//     imageUrl: 'assets/images/xbox-controller.png'
//   }
// ];
  }
  private handleError(err: HttpErrorResponse) {
    // in a real app, the error can be sent to some remote logging infrastructure
    // instead of just logging to the console;
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // a client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code. The response body may contain
      // some clue as to what went wrong;
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage)
  }
}
