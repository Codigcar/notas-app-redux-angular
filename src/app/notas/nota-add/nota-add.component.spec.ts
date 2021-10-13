import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaAddComponent } from './nota-add.component';

describe('NotaAddComponent', () => {
  let component: NotaAddComponent;
  let fixture: ComponentFixture<NotaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
