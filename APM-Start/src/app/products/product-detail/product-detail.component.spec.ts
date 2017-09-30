import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductGuardService } from '../product-guard.service';
import { WelcomeComponent } from '../../home/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../../shared/convert-to-spaces.pipe';
import { StarComponent } from '../../shared/star/star.component';
import { ProductService } from '../product.service';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductDetailComponent,
        WelcomeComponent,
        ProductListComponent,
        ConvertToSpacesPipe,
        StarComponent
      ],
      imports: [
        FormsModule,
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
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
