import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductsbycategorieComponent } from './viewproductsbycategorie.component';

describe('ViewproductsbycategorieComponent', () => {
  let component: ViewproductsbycategorieComponent;
  let fixture: ComponentFixture<ViewproductsbycategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductsbycategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewproductsbycategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
