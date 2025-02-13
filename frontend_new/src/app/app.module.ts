import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCampPlaceComponent } from './Components/campPlace/add-camp-place/add-camp-place.component';
import { CampPlaceCardComponent } from './Components/campPlace/camp-place-card/camp-place-card.component';
import { CampPlaceDetailsComponent } from './Components/campPlace/camp-place-details/camp-place-details.component';
import { CampPlaceListComponent } from './Components/campPlace/camp-place-list/camp-place-list.component';
import { CampPlaceTableComponent } from './Components/campPlace/camp-place-table/camp-place-table.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AddProductComponent } from './Components/product/add-product/add-product.component';
import { ListProductComponent } from './Components/product/list-product/list-product.component';
import { ProductCardComponent } from './Components/product/product-card/product-card.component';
import { ProductDetailsComponent } from './Components/product/product-details/product-details.component';
import { ProductTableComponent } from './Components/product/product-table/product-table.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from './Shared/header/header.component';
import { NotificationService } from './Services/notification.service';
import { PagingHeaderComponent } from './Shared/paging-header/paging-header.component';
import { NotificationModule } from './notification.module';
import { EventListComponent } from './Components/event/eventlist/eventlist.component';
import { AddEventComponent } from './Components/event/add-event/add-event.component';
import { EventCardComponent } from './Components/event/event-card/event-card.component';
import { EventDetailsComponent } from './Components/event/event-details/event-details.component';
import { EventTableComponent } from './Components/event/event-table/event-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCampPlaceComponent,
    CampPlaceCardComponent,
    CampPlaceDetailsComponent,
    CampPlaceListComponent,
    CampPlaceTableComponent,
    HomeComponent,
    NotFoundComponent,
    AddProductComponent,
    ListProductComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductTableComponent,
    FooterComponent,
    HeaderComponent,
    PagingHeaderComponent,
    EventListComponent,
    AddEventComponent,
    EventCardComponent,
    EventDetailsComponent,
    EventTableComponent,
    AddProductComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NgxPaginationModule,
    NgbModule,
    MatTableModule,
    NotificationModule,
    ReactiveFormsModule,
  
    ToastrModule.forRoot(),
  ],
  providers: [
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
