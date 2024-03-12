import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiceListComponent } from './mice-list.component';

describe('MiceListComponent', () => {
  let component: MiceListComponent;
  let fixture: ComponentFixture<MiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
