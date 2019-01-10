import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  private subscription: Subscription;
  private response: any;

  constructor(http: HttpClient) {
    this.subscription = http.post('http://localhost:3000/login', {})
      .subscribe(response => this.response = response);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
