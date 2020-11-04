import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Livestock } from 'src/app/common/livestock';
import { LivestockService } from 'src/app/services/livestock.service';

@Component({
  selector: 'app-employee-livestock-list',
  templateUrl: './employee-livestock-list.component.html',
  styleUrls: ['./employee-livestock-list.component.css']
})
export class EmployeeLivestockListComponent implements OnInit {

  livestockList: Livestock[];

  constructor(private stockService: LivestockService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listLivestock();
  }

  updatedWeight = this.fb.group({
    whatever: ["Update Weight"]
  });


  listLivestock() {
    this.stockService.getLivestockList().subscribe(
      data => {
        this.livestockList = data;
      }    
    )
  }

  changeCowWeight(ls: Livestock){
    let weightVal = this.updatedWeight.get('whatever').value;
    
    ls.weight = weightVal;
    const now = new Date();
    ls.lastChecked = now;
    console.log(ls);
    this.stockService.updateWeight(ls);
  }
}
