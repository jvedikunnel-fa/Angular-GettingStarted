import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from '../product-guard.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { WelcomeComponent } from '../../home/welcome/welcome.component';
import { StarComponent } from '../../shared/star/star.component';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        ProductListComponent,
        ProductDetailComponent,
        ConvertToSpacesPipe,
        StarComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
          { path: 'products', component: ProductListComponent },
          {
            path: 'products/:id',
            canActivate: [ProductGuardService],
            component: ProductDetailComponent
          },
          { path: 'welcome', component: WelcomeComponent },
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
          { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ], { useHash: true })
      ],
      providers: [ProductService, ProductGuardService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
