import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMonitorComponent } from './vendor-monitor.component';

describe('VendorMonitorComponent', () => {
  let component: VendorMonitorComponent;
  let fixture: ComponentFixture<VendorMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorMonitorComponent]
    });
    fixture = TestBed.createComponent(VendorMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
