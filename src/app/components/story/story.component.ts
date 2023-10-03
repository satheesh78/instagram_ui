/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {

  avatarSlide = {
    slidesPerView: 3.5,
    zoom: false
  };
  @Input() users: any;

  stories = [
    { imageUrl: 'assets/imgs/story/1.jpeg' }, { imageUrl: 'assets/imgs/story/4.jpeg' }, { imageUrl: 'assets/imgs/story/2.jpg' }
  ];

  constructor(private router: Router, private navCtrl: NavController) {
  }

  ngOnInit() {
    console.log(this.users);

   }
  selectedStory(story, index) {
    console.log(story, index);
    if (index === 0) {
      return false;
    }
    console.log('open fullscreen');
    this.router.navigate(['full-screen-story']);
  }

  openStoryView(index){
    if(index == 0){

    }
    else{
      this.navCtrl.navigateForward('/story-view', {
        queryParams: {
          stories: JSON.stringify(this.stories)
        }
      });
    }
  }


}
