import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {
  gets: any;
  stockData: any;
  token = sessionStorage.getItem('token') || '';
  stockDataColumns: string[] = ['Code', 'Name','HighestPrice', 'LowestPrice','OpeningPrice', 'ClosingPrice', 'Change', 'TradeVolume','TradeValue']; 
  stockControlUrl = "/stock"; 

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
      this.httpService.getRq(this.token, this.stockControlUrl + '/search/public/getStockData').subscribe(
        (response) => {
          this.gets = response;
          const data: Map<string, any> = new Map(Object.entries(response.data));
          this.stockData = data.get('stockDataLists');
          // console.log(data.get('stockDataLists'));
        }
      )
    }

}
