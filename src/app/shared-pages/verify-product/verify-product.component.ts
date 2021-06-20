import { EthcontractService } from './../../service/ethcontract.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-product',
  templateUrl: './verify-product.component.html',
  styleUrls: ['./verify-product.component.css']
})
export class VerifyProductComponent implements OnInit {
  verifyProductForm: FormGroup;
  fake: Boolean;
  afterClicked: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private ethcontractService: EthcontractService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.verifyProductForm = this.formBuilder.group({
      id: ['', Validators.required],
      qrcode: ['']
    });
  }

  get form() {
    return this.verifyProductForm.controls;
  }

  onVerify() {
    this.getProduct(this.form.id.value);
    this.afterClicked = true;
  }

  getProduct(id: number) {
    const value: any = {
      transferAddress: '',
      amount: '2'
    }

    this.ethcontractService.getProduct(id)
      .subscribe(data =>{
        console.log(data);
        this.fake = false;
      }, e => {
        this.fake = true;
        console.log(e);
      })
  }

}
