import { Component, OnInit } from '@angular/core';

import { AboutUsService } from './services/about-us.service';
import { Application } from './shared/applications';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  apps: Application[];

  constructor(private _aboutUsService: AboutUsService) { }

  ngOnInit() {

    this._aboutUsService.getApps().subscribe(
      (apps: Application[]) =>{
        this.apps = apps;
        console.log(apps);
      }
    )
  }

}
