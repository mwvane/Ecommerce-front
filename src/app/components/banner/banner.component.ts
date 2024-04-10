import { Component, Input } from '@angular/core';
import { IBanner } from 'src/app/models/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() data: IBanner = {categoryName: "", title: ""}
}
