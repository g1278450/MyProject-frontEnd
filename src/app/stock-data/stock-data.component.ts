import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import {stockData} from '../stock-data/stockData.model';

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

  // x_axis: string[] = [];
  // y_axis: number[] = [];
  // config: ZingchartAngular.graphset = {};

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
      this.httpService.getRq(this.token, this.stockControlUrl + '/search/public/getStockData').subscribe(
        (response) => {
          this.gets = response;
          const data: Map<string, any> = new Map(Object.entries(response.data));
          this.stockData = data.get('stockDataLists');
          console.log(data.get('stockDataLists'));

          // let tmp_dailyTranctionStockDatas = this.stockData.splice(0, 9);
          // console.log(tmp_dailyTranctionStockDatas);
          // tmp_dailyTranctionStockDatas.forEach(element => this.y_axis.push(element.TradeValue));
          // tmp_dailyTranctionStockDatas.forEach(element => this.x_axis.push(element.Name));
				  // this.config = {
          //     type: 'bar',
          //     title: {
          //       'text': '證卷每日交易'
          //     },
          //     series: [
          //       {
          //         values: this.y_axis
          //       }
          //     ],
          //     scaleX: {
          //       values: this.x_axis
          //     }
          //   };
          
        }
      )
    }

}
