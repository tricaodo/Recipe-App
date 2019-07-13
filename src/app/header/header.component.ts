import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedFeatureEmitter= new EventEmitter<string>();
  selectedFeature(feature: string){
    this.selectedFeatureEmitter.emit(feature);
  }
}
