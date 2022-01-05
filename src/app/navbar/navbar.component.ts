import { Component, OnInit } from '@angular/core';
import { TransferService } from '../service/transfer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user:any;

  constructor(private transferService:TransferService) { }

  ngOnInit(): void {}

  connectWallet(){
    this.transferService.LoginWithMetaMask() //lgin metamask
  }

  loadContract(){
    
    this.transferService.loadContract()

    console.log("__________GETTING BALANCE___________")
    this.transferService.getCurrentAccountBalance().then(console.log)

  }







}
