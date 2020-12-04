import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarlistPage } from './editarlist.page';

describe('CriarlistPage', () => {
  let component: EditarlistPage;
  let fixture: ComponentFixture<EditarlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
