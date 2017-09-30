import { TestBed, inject } from '@angular/core/testing';

import { ProductGuardService } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomeComponent } from '../home/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star/star.component';

describe('ProductGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductDetailComponent,
        WelcomeComponent,
        ProductListComponent,
        ConvertToSpacesPipe,
        StarComponent
      ],
      providers: [ProductGuardService],
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
      ]
    });
  });

  it('should be created', inject([ProductGuardService], (service: ProductGuardService) => {
    expect(service).toBeTruthy();
  }));
});
