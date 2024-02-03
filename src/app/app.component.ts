import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../../environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'currency-converter-client';

  httpClient = inject(HttpClient);

  currencies: any[] = [];

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get(`${environment.base_url}/currencies`)
      .subscribe((data: any) => {
        console.log(data);
        this.currencies = data;
      });
  }
}
