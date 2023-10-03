import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.page.html',
  styleUrls: ['./story-view.page.scss'],
})
export class StoryViewPage implements OnInit {
  currentIndex = 0;
  interval: any;
  stories:any;

  imageUrls: string[] = ['assets/imgs/story/1.jpeg', 'assets/imgs/story/4.jpeg'];
  currentImageIndex: number = 0;
  currentImage: string = this.imageUrls[this.currentImageIndex];
  progressValue: number = 0;


  constructor(private route: ActivatedRoute, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      this.stories = JSON.parse(params.stories);
    });
    //this.updateProgressBar();
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.startImageSlider();
  }

  ngOnDestroy() {
    this.clearInterval();
  }

  startImageSlider() {
    this.interval = setInterval(() => {
      
      if (this.currentIndex === this.stories.length - 1) {
        console.log('Last image reached');
        this.clearInterval();
        // Close the navigation after the last image is displayed
        this.navCtrl.pop(); // Navigates back to the previous page

      } else {
        this.currentIndex = (this.currentIndex + 1) % this.stories.length;
      }
    }, 10000); // Switch image every 10 seconds
  }

  clearInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateProgressBar() {
    const totalTime = 10000; // 10 seconds in milliseconds
    const interval = 10; // Update interval in milliseconds
    const steps = totalTime / interval;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      if (currentStep < steps) {
        currentStep++;
        this.progressValue = (currentStep / steps) * 1;
      } else {
        currentStep = 0;
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
        this.currentImage = this.imageUrls[this.currentImageIndex];
      }
    }, interval);
  
  }

  goBack(){
    this.navCtrl.back();
  }

  handleImageClick(event: MouseEvent) {
    const imageWidth = event.target['clientWidth'];
    const clickX = event.clientX - event.target['getBoundingClientRect']().left;

    if (clickX <= imageWidth / 2) {
      console.log('Left side clicked'+this.currentIndex);  
      if(this.currentIndex == 0){
        this.navCtrl.back();
      }
      else{
        this.currentIndex = (this.currentIndex - 1 + this.stories.length) % this.stories.length;
      }

    } else {
      console.log('Right side clicked'+this.currentIndex);
      if( (this.currentIndex + 1) == this.stories.length){
        this.navCtrl.back();
      }
      else{
        this.currentIndex = (this.currentIndex + 1) % this.stories.length;
      }

    }
  } 
}
