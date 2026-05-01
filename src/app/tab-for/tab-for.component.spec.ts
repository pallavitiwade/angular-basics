import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabForComponent } from './tab-for.component';

describe('TabForComponent', () => {
  let component: TabForComponent;
  let fixture: ComponentFixture<TabForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
