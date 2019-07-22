import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Country } from '../dash.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  imgSrc: string

  countries: Array<Country> = [
    { name: 'India', flag: 'https://images-na.ssl-images-amazon.com/images/I/61hy5zBeYQL._SX425_.jpg' },
    { name: 'Japan', flag: 'https://images-na.ssl-images-amazon.com/images/I/41kvlM0bELL._SX466_.jpg' },
    { name: 'Sri-lanka', flag: 'https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/s/r/sri-lanka-flag-211-p_1.png' },
    { name: 'US', flag: 'https://www.gettysburgflag.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/m/american-flag-heavy-duty.jpg' },
    { name: 'UK', flag: 'https://images-na.ssl-images-amazon.com/images/I/71HUxAHwmZL._SX425_.jpg' }
  ]

  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.queryParams.subscribe(
      prm => {
        this.imgSrc = this.countries[this.countries.findIndex(el => el.name == prm['cnt'])].flag
        console.log(this.imgSrc)
      }
    )
  }
}
