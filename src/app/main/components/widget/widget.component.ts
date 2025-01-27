// declare var require: any
import { Component, OnInit } from '@angular/core';
// import * as cloudinary from 'cloudinary-core';
import { WidgetService } from './widget.service';
import { Photos } from 'src/app/models/photos';
// import { CLOUDNAME, PRESET } from 'config';




@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
photos: Photos[];
  
constructor(public widgetService: WidgetService) { }
  // Input() cloudinary: any;
  //this about passing this down to get rid of the cloudinary TS errors
  ngOnInit() {//test
  this.getPhotos();
  }
<<<<<<< HEAD
  myClick(): any {
=======
  
  myClick() {
>>>>>>> 9c2a8ef67013a990408b45e7fbcb82d0fddd222f

    let myWidget = cloudinary.createUploadWidget({
      cloudName: 'sc0ttiee',
      uploadPreset: 'atiwd1dv' }, async (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          const photoObject = await this.widgetService.savePhoto(result.info);
        }
      }
    )
    
    document.getElementById("upload_widget").addEventListener("click", function(){
        myWidget.open();
      }, false);//test
    
  }

  getPhotos(): void {
    this.widgetService.getPhotos()
      .subscribe(photos => {
        console.log('getting photos', photos);
        this.photos = photos;
      });
  }
  
}
