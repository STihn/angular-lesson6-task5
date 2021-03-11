import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {
  table;
  formreactive:FormGroup;
  constructor(private fb: FormBuilder) {
    this.formreactive = fb.group({
      rows: fb.array([
        fb.group({
          date: fb.control(''),
          theme: fb.control(''),
          homework: fb.control(''),
          note: fb.control('')
        })

      ])
    })
   }

  ngOnInit(): void {
    this.formreactive.setValue(JSON.parse(localStorage.getItem('formreactive')))
    // this.table = JSON.parse(localStorage.getItem('formreactive'))
    // console.log(this.table)
    // this.table.rows.forEach(item => {
    //   console.log(item)
    //   this.rows.setValue(item)
    // });
}

  get rows(): FormArray {
    return this.formreactive.get('rows') as FormArray;
  }

  get date(): FormControl {
    return this.formreactive.get('date') as FormControl;
  }

  get theme(): FormControl {
    return this.formreactive.get('theme') as FormControl;
  }

  get homework(): FormControl {
    return this.formreactive.get('homework') as FormControl;
  }

  get note(): FormControl {
    return this.formreactive.get('note') as FormControl;
  }

  insert(i) {
    this.rows.insert(i, this.fb.group({
      date: this.fb.control(''),
      theme: this.fb.control(''),
      homework: this.fb.control(''),
      note: this.fb.control('')
   }));
   localStorage.setItem('formreactive', JSON.stringify(this.formreactive.value))
  }

  remoute(i) {
   this.rows.removeAt(i);
  }


}
