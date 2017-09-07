import { FCM } from '@ionic-native/fcm';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { MyApp } from './app.component';

//Common side
import { CurrentJobsPage } from './../pages/common/current-jobs-page/current-jobs-page';
import { LoginPage } from '../pages/common/login-page/login-page'
import { UIDecider } from '../pages/common/ui-decider/ui-decider'
import { MessagePage } from '../pages/common/message-page/message-page'
import { JobDetailsPage } from '../pages/common/job-details-page/job-details-page'
import { FollowUpPage } from '../pages/common/follow-up-page/follow-up-page'
import { MessageBoardPage } from './../pages/common/message-board-page/message-board-page';
import { FeedbackPage } from '../pages/feedback/feedback-page/feedback-page';
import { Historypage } from './../pages/common/history/history';

//Manager Side
import { NewUserRequest } from '../pages/manager/new-user-request/new-user-request'
import { ManagerTabs } from '../pages/manager/manager-tabs/manager-tabs'
import { InvoicePage } from '../pages/manager/invoice-page/invoice-page'
import { NewServicePage } from './../pages/manager/new-service-page/new-service-page';
import { ServiceListPage } from './../pages/manager/service-list-page/service-list-page';

//Client Side
import { ClientTabs } from '../pages/client/client-tabs/client-tabs'
import { NewOrderPage } from '../pages/client/new-order-page/new-order-page'

//SuperUser Side
import { SuperUserTabs } from './../pages/superUser/superUser-tabs/superUser-tabs';

//Engineer Side
import { EngineerTabs } from './../pages/engineer/engineer-tabs/engineer-tabs';

//Tradesperson Side
import { TradesPersonTabs } from '../pages/tradesperson/trades-person-tabs/trades-person-tabs';

//Native api request
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Camera } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';

import { AngularFireModule } from 'angularfire2';
//Firebase setting
// var firebaseConfig = {
//     apiKey: "AIzaSyByoy4jwSFBahLuxoUD1Y0zotrxGbxa81Q",
//     authDomain: "aegis-c197c.firebaseapp.com",
//     databaseURL: "https://aegis-c197c.firebaseio.com",
//     projectId: "aegis-c197c",
//     storageBucket: "aegis-c197c.appspot.com",
//     messagingSenderId: "922210177619"
// };
var firebaseConfig = {
  apiKey: "AIzaSyBz5UXAk9S8M5gEmMDtW59TBhXTqxjOIxg",
  authDomain: "questmanagement-a67c5.firebaseapp.com",
  databaseURL: "https://questmanagement-a67c5.firebaseio.com",
  projectId: "questmanagement-a67c5",
  storageBucket: "questmanagement-a67c5.appspot.com",
  messagingSenderId: "817112257581"
};

@NgModule({
  declarations: [
    MyApp, UIDecider,
    LoginPage, MessagePage, JobDetailsPage, FollowUpPage,
    NewUserRequest, ManagerTabs, EngineerTabs, CurrentJobsPage, InvoicePage,
    ClientTabs, NewOrderPage,
    TradesPersonTabs, SuperUserTabs, NewServicePage,
    ServiceListPage, MessageBoardPage, FeedbackPage,Historypage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, UIDecider,
    LoginPage, MessagePage, JobDetailsPage, FollowUpPage,
    ManagerTabs, NewUserRequest, EngineerTabs, CurrentJobsPage, InvoicePage,
    ClientTabs, NewOrderPage, 
    TradesPersonTabs, SuperUserTabs, NewServicePage,
    ServiceListPage, MessageBoardPage, FeedbackPage,Historypage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera, PhotoViewer, EmailComposer, FCM, BackgroundMode, LocalNotifications,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
