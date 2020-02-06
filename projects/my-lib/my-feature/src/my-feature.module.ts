import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {
  MyComponent
} from './my-component/my.component';

@NgModule({
  declarations: [MyComponent],
  imports: [
    CommonModule
  ],
  exports: [MyComponent]
})
export class MyFeatureModule {
}
