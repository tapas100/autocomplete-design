import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface StateGroup {
  category: string;
  items: Object[];
}

export const _filter = (opt: Object[], value: string): any => {
  console.log(opt,value);
  const filterValue = value.toLowerCase();
  return opt.filter(item => item['name'].toLowerCase().indexOf(filterValue) >= 0);
};



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [
    {
      category: 'HUMANS',
      items: [
        { name: 'Obasey Chidey', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg', location:'San Fransisco' },
        { name: 'Homabaseo Shakibaii', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg', location:'Melbourne' },
        { name: 'Niek Base', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg' ,location:'Abu Dhabi' }
      ]
    }, {
      category: 'ANIMALS',
      items: [
        { name: 'German Shepherd', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',location:'Madison' },
        { name: 'Golden Ritriever', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',location:'Cincinati' },
        { name: 'Siberian Husky', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg', location:'Dallas'}
      ]
    }];

  stateGroupOptions: Observable<StateGroup[]>;
  highlight_string='';
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    // this.stateGroupOptions.subscribe(val=>{
    //    console.log(val);
    // })  
  }

  private _filterGroup(value: string): StateGroup[] {
    this.highlight_string = value;
    if (value) {
      return this.stateGroups
        .map(group => ({ category: group.category, items: _filter(group.items, value) }))
        .filter(group => group.items.length >= 0);
    }
    return this.stateGroups;
  }
}

