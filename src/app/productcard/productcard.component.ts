import { Component, OnInit } from '@angular/core';
import { TransferService } from '../service/transfer.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {

  to_address:any="0x44c9baa2C1609f346606DcdA182D6A38F4bD8144"; //address

  prop_title:string="title "+Math.random;
  price:string="5"; //eth

  constructor(private transferService:TransferService) { }


  ngOnInit(): void {
  }


  sendPayment(){

    // this.transferService.addProperty(this.prop_title,this.price)

    this.transferService.sayhi()


    // this.transferService.getPropretyByTitle("title1")

    // this.transferService.transferEth()
  }


  getProps(){

    this.transferService.getAllProps()


  }



}
