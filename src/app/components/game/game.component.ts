import {Component, OnInit} from '@angular/core';
import {CurrencyClientService, RootObject} from '../../services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  // @ts-ignore
  messageForUser: string;
  // @ts-ignore
  rootObject: RootObject;
  // @ts-ignore
  result: string;

  constructor(private currencyClientService: CurrencyClientService) {
  }

  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe(value => {
      this.rootObject = value;
    });
  }

  sayHello(value: string) {
    this.messageForUser = 'cześć ' + value;
  }

  check(value: string) {
    // @ts-ignore
    if (value > this.rootObject.rates.PLN) {
      this.result = 'podales wartość za dużą';
    } else {
      // @ts-ignore
      if (value < this.rootObject.rates.PLN) {
            this.result = 'podales wartość za małą';
          } else {
            this.result = 'udało się, gratulacje!';
          }
    }
  }
}
