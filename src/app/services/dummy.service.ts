/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  users = [
    {
      img: 'assets/imgs/users/user2.jpg',
      name: 'desperate_enuf'
    },
    {
      img: 'assets/imgs/users/user3.jpg',
      name: 'king_0f_queen'
    },
    {
      img: 'assets/imgs/users/user4.jpg',
      name: 'hugo_balls'
    },
    {
      img: 'assets/imgs/users/user5.jpg',
      name: 'average_student'
    },
    {
      img: 'assets/imgs/users/user6.jpg',
      name: 'tea_baggins'
    },
    {
      img: 'assets/imgs/users/user7.jpg',
      name: 'protect_ya_neck'
    },
    {
      img: 'assets/imgs/users/user8.jpg',
      name: 'in_jail_out_soon'
    },
    {
      img: 'assets/imgs/users/user9.jpg',
      name: 'average_student'
    },
    {
      img: 'assets/imgs/users/user10.jpg',
      name: 'desperate_enuf'
    },
    {
      img: 'assets/imgs/users/user11.jpg',
      name: 'king_0f_queen'
    },
  ];

  /// post for profile page
  public posts = [
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/1.jpg'
    },
    {
      video: 'true',
      name: 'Blazers',
      type: 'photo',
      img: 'assets/imgs/feeds/2.jpg'
    },
    {
      video: 'false',
      type: 'reels',
      img: 'assets/imgs/feeds/3.jpg'
    },
    {
      video: 'false',
      type: 'gallery',
      img: 'assets/imgs/feeds/4.jpg'
    },
    {
      video: 'true',
      type: 'photo',
      img: 'assets/imgs/feeds/5.jpg'
    },
    {
      video: 'false',
      type: 'video',
      img: 'assets/imgs/feeds/6.jpg'
    },
    {
      video: 'false',
      type: 'reels',
      img: 'assets/imgs/feeds/7.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/8.jpg'
    },
    {
      video: 'true',
      type: 'video',
      img: 'assets/imgs/feeds/9.jpg'
    },
    {
      video: 'false',
      type: 'gallery',
      img: 'assets/imgs/feeds/10.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/11.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/12.jpg'
    },
    {
      video: 'false',
      type: 'reels',
      img: 'assets/imgs/feeds/13.jpg'
    },
    {
      video: 'true',
      name: 'Blazers',
      type: 'video',
      img: 'assets/imgs/feeds/14.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/15.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/16.jpg'
    },
    {
      video: 'true',
      type: 'gallery',
      img: 'assets/imgs/feeds/17.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/18.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/19.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/20.jpg'
    },
    {
      video: 'true',
      type: 'reels',
      img: 'assets/imgs/feeds/21.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/22.jpg'
    },
    {
      video: 'false',
      type: 'video',
      img: 'assets/imgs/feeds/23.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/24.jpg'
    },
    {
      video: 'false',
      type: 'photo',
      img: 'assets/imgs/feeds/25.jpg'
    },
    {
      video: 'true',
      type: 'photo',
      img: 'assets/imgs/feeds/26.jpg'
    }
  ];


  demos = [
    {
      "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      "user": "https://mysmartapps.in/clinical/image/pic1.jpg",
      "username": "desperate_enuf",
      "video":"https://mysmartapps.in/clinical/video/sample.mp4"
    },
    {
      "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "user": "https://mysmartapps.in/clinical/image/pic2.jpg",
      "username": "king_0f_queen",
      "video":"https://mysmartapps.in/clinical/video/SampleVideo.mp4"
    },
    {
      "description": "The first Blender Open Movie from 2006",
      "user": "https://mysmartapps.in/clinical/image/pic3.jpg",
      "username": "hugo_balls",
      "video":"https://mysmartapps.in/clinical/video/video1.mp4"
    },
    {
      "description": "The first Blender Open Movie from 2006",
      "user": "https://mysmartapps.in/clinical/image/pic4.jpg",
      "username": "average_student",
      "video":"https://mysmartapps.in/clinical/video/video2.mp4"
    },
    {
      "description": "The first Blender Open Movie from 2006",
      "user": "https://mysmartapps.in/clinical/image/pic5.jpg",
      "username": "hugo_balls",
      "video":"https://mysmartapps.in/clinical/video/video3.mp4"
    },
    {
      "description": "The first Blender Open Movie from 2006",
      "user": "https://mysmartapps.in/clinical/image/pic6.jpg",
      "username": "average_student",
      "video":"https://mysmartapps.in/clinical/video/video4.mp4"
    },
    {
      "description": "The first Blender Open Movie from 2006",
      "user": "https://mysmartapps.in/clinical/image/pic7.jpg",
      "username": "hugo_balls",
      "video":"https://mysmartapps.in/clinical/video/video5.mp4"
    },
    {
      "description": "The first Blender Open Movie from 2006",
      "user": "https://mysmartapps.in/clinical/image/pic8.jpg",
      "username": "average_student",
      "video":"https://mysmartapps.in/clinical/video/video6.mp4"
    },


/*
    {
      "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
      "user": "assets/imgs/users/user5.jpg",
      "username": "tea_baggins"
    },
    {
      "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
      "user": "assets/imgs/users/user6.jpg",
      "username": "protect_ya_neck"
    },
    {
      "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
      "user": "assets/imgs/users/user7.jpg",
      "username": "average_student"
    },
    {
      "description": "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
      "user": "assets/imgs/users/user8.jpg",
      "username": "desperate_enuf"
    }*/
  ];

  constructor() { }
}
