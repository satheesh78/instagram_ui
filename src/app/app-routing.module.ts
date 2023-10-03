/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'reels',
    loadChildren: () => import('./pages/reels/reels.module').then( m => m.ReelsPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./pages/activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'followers',
    loadChildren: () => import('./pages/followers/followers.module').then( m => m.FollowersPageModule)
  },
  {
    path: 'your-activity',
    loadChildren: () => import('./pages/your-activity/your-activity.module').then( m => m.YourActivityPageModule)
  },
  {
    path: 'saved',
    loadChildren: () => import('./pages/saved/saved.module').then( m => m.SavedPageModule)
  },
  {
    path: 'add-saved',
    loadChildren: () => import('./pages/add-saved/add-saved.module').then( m => m.AddSavedPageModule)
  },
  {
    path: 'all-saved',
    loadChildren: () => import('./pages/all-saved/all-saved.module').then( m => m.AllSavedPageModule)
  },
  {
    path: 'close-friends',
    loadChildren: () => import('./pages/close-friends/close-friends.module').then( m => m.CloseFriendsPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'friend-detail',
    loadChildren: () => import('./pages/friend-detail/friend-detail.module').then( m => m.FriendDetailPageModule)
  },
  {
    path: 'friend-profile',
    loadChildren: () => import('./pages/friend-profile/friend-profile.module').then( m => m.FriendProfilePageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./pages/comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'recent-search',
    loadChildren: () => import('./pages/recent-search/recent-search.module').then( m => m.RecentSearchPageModule)
  },
  {
    path: 'share-modal',
    loadChildren: () => import('./pages/share-modal/share-modal.module').then( m => m.ShareModalPageModule)
  },
  {
    path: 'notification-settings',
    loadChildren: () => import('./pages/notification-settings/notification-settings.module').then( m => m.NotificationSettingsPageModule)
  },
  {
    path: 'message-request',
    loadChildren: () => import('./pages/message-request/message-request.module').then( m => m.MessageRequestPageModule)
  },
  {
    path: 'create-collection',
    loadChildren: () => import('./pages/create-collection/create-collection.module').then( m => m.CreateCollectionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'close-list',
    loadChildren: () => import('./pages/close-list/close-list.module').then( m => m.CloseListPageModule)
  },
  {
    path: 'story-view',
    loadChildren: () => import('./pages/story-view/story-view.module').then( m => m.StoryViewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
