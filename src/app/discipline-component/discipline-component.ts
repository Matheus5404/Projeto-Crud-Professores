import { Component } from '@angular/core';
import { Discipline } from '../discipline';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-discipline-component',
  standalone: false,
  templateUrl: './discipline-component.html',
  styleUrl: './discipline-component.css'
})
export class DisciplineComponent {


  disciplines: Discipline[] = [];
  formGroupDiscipline: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formGroupDiscipline = formBuilder.group({
      id: [''],
      name: [''],
      code: [''],
      workload: [''],
      description: ['']
    });

  }

  save() {
    alert(this.formGroupDiscipline.value);
    this.formGroupDiscipline.reset();
  }
}
