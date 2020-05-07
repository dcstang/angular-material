import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-angular';

  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'assets/final_onething.mp3';   
  msaapDisplayVolumeControls = true;

  msbapDisplayTitle = false;  

}
