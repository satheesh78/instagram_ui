import { Router } from '@angular/router';
import { DummyService } from './../../services/dummy.service';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    posts: any[] = [];
    constructor(private dummy: DummyService, private router: Router) {
        this.posts = this.dummy.posts;
    }

    ngOnInit() {
    }

    goToRecent() {
        this.router.navigate(['/recent-search']);
    }

}
