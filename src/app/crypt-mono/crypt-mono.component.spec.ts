import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptMonoComponent } from './crypt-mono.component';

describe('CryptMonoComponent', () => {
  let component: CryptMonoComponent;
  let fixture: ComponentFixture<CryptMonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptMonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptMonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
