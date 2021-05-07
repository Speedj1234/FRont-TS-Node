import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsContainerComponent } from './actors-container.component';

describe('ActorsContainerComponent', () => {
  let component: ActorsContainerComponent;
  let fixture: ComponentFixture<ActorsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
