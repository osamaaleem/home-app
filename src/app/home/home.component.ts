import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
  }

  ngOnInit(){
    this.myNewMethod();
  }

  public btnClicked() {
    var testVar = 1;
    console.log(testVar);
    testVar = testVar+10;
    testVar= 10*5;
    console.log(testVar);
  }

  public myNewMethod(): boolean {
    return false;
  }
}
