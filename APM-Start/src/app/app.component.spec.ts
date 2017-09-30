import { async, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductService } from './products/product.service';
import { ProductGuardService } from './products/product-guard.service';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WelcomeComponent,
        ProductListComponent,
        ProductDetailComponent,
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Acme Product Management'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pageTitle).toEqual('Acme Product Management');
  }));

  it('should render title in a a tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.navbar-brand').textContent).toContain('Acme Product Management');
  }));
});
