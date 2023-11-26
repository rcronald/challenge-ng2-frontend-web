import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ResourceTable} from './resourceTable/resourceTable.component';
import {ResourceDetails} from './resourceDetails/resourceDetails.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;
  let resourceList;
  let resourceDetails;

  const getByTestId = (id, parentNode?) => {
    if (!parentNode) {
      parentNode = compiled;
    }
    return parentNode.querySelector(`[data-test-id="${id}"]`);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        ResourceTable,
        ResourceDetails
      ],
      providers: [],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges(true);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    await fixture.detectChanges();
    await fixture.whenStable();

    resourceList = getByTestId('resource-list');
    resourceDetails = getByTestId('resource-details');
  });

  it('Initial resource list is rendered as expected', async() => {
    expect(resourceList.children.length).toEqual(5);

    expect(resourceList.children[0].children[0].textContent.trim()).toEqual('GPU');
    expect(resourceList.children[0].children[1].textContent.trim()).toEqual('USA');

    expect(resourceList.children[1].children[0].textContent.trim()).toEqual('Disk');
    expect(resourceList.children[1].children[1].textContent.trim()).toEqual('Australia');

    expect(resourceList.children[2].children[0].textContent.trim()).toEqual('CPU');
    expect(resourceList.children[2].children[1].textContent.trim()).toEqual('USA');

    expect(resourceList.children[3].children[0].textContent.trim()).toEqual('Core');
    expect(resourceList.children[3].children[1].textContent.trim()).toEqual('USA');

    expect(resourceList.children[4].children[0].textContent.trim()).toEqual('RAM');
    expect(resourceList.children[4].children[1].textContent.trim()).toEqual('Australia');
  });

  it('Resource Details section is not rendered initially', async() => {
    expect(resourceDetails).toBeFalsy();
  });

  it('View details button works correctly', async() => {
    const firstResourceDetailsRow = resourceList.children[0];
    const firstResourceDetailsButton = getByTestId('view-details-button', firstResourceDetailsRow);

    await firstResourceDetailsButton.click();

    resourceDetails = getByTestId('resource-details');
    expect(resourceDetails).toBeTruthy();
    expect(resourceDetails.children.length).toEqual(1);
    expect(resourceDetails.children[0].children[0].textContent.trim()).toEqual('GPU');
    expect(resourceDetails.children[0].children[1].textContent.trim()).toEqual('USA');
    expect(resourceDetails.children[0].children[2].textContent.trim()).toEqual('Los Angeles');
    expect(resourceDetails.children[0].children[3].textContent.trim()).toEqual('CA');
    expect(resourceDetails.children[0].children[4].textContent.trim()).toEqual('3123');
    expect(resourceDetails.children[0].children[5].textContent.trim()).toEqual('100');
    expect(resourceDetails.children[0].children[6].textContent.trim()).toEqual('20');
  });

  it('Perform series of actions', async() => {
    const secondResourceDetailsRow = resourceList.children[1];
    const secondResourceDetailsButton = getByTestId('view-details-button', secondResourceDetailsRow);

    await secondResourceDetailsButton.click();

    resourceDetails = getByTestId('resource-details');
    expect(resourceDetails).toBeTruthy();
    expect(resourceDetails.children.length).toEqual(1);
    expect(resourceDetails.children[0].children[0].textContent.trim()).toEqual('Disk');
    expect(resourceDetails.children[0].children[1].textContent.trim()).toEqual('Australia');
    expect(resourceDetails.children[0].children[2].textContent.trim()).toEqual('Sydney');
    expect(resourceDetails.children[0].children[3].textContent.trim()).toEqual('NSW');
    expect(resourceDetails.children[0].children[4].textContent.trim()).toEqual('2000');
    expect(resourceDetails.children[0].children[5].textContent.trim()).toEqual('500');
    expect(resourceDetails.children[0].children[6].textContent.trim()).toEqual('250');

    const fifthResourceDetailsRow = resourceList.children[4];
    const fifthResourceDetailsButton = getByTestId('view-details-button', fifthResourceDetailsRow);

    await fifthResourceDetailsButton.click();

    resourceDetails = getByTestId('resource-details');
    expect(resourceDetails).toBeTruthy();
    expect(resourceDetails.children.length).toEqual(1);
    expect(resourceDetails.children[0].children[0].textContent.trim()).toEqual('RAM');
    expect(resourceDetails.children[0].children[1].textContent.trim()).toEqual('Australia');
    expect(resourceDetails.children[0].children[2].textContent.trim()).toEqual('Melbourne');
    expect(resourceDetails.children[0].children[3].textContent.trim()).toEqual('VIC');
    expect(resourceDetails.children[0].children[4].textContent.trim()).toEqual('3051');
    expect(resourceDetails.children[0].children[5].textContent.trim()).toEqual('1000');
    expect(resourceDetails.children[0].children[6].textContent.trim()).toEqual('700');

    const thirdResourceDetailsRow = resourceList.children[2];
    const thirdResourceDetailsButton = getByTestId('view-details-button', thirdResourceDetailsRow);

    await thirdResourceDetailsButton.click();

    resourceDetails = getByTestId('resource-details');
    expect(resourceDetails).toBeTruthy();
    expect(resourceDetails.children.length).toEqual(1);
    expect(resourceDetails.children[0].children[0].textContent.trim()).toEqual('CPU');
    expect(resourceDetails.children[0].children[1].textContent.trim()).toEqual('USA');
    expect(resourceDetails.children[0].children[2].textContent.trim()).toEqual('Seattle');
    expect(resourceDetails.children[0].children[3].textContent.trim()).toEqual('WA');
    expect(resourceDetails.children[0].children[4].textContent.trim()).toEqual('3176');
    expect(resourceDetails.children[0].children[5].textContent.trim()).toEqual('200');
    expect(resourceDetails.children[0].children[6].textContent.trim()).toEqual('180');
  });
});
