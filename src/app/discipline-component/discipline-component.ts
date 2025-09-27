import { Component, OnInit } from '@angular/core';
import { Discipline } from '../discipline';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DisciplineService } from '../discipline-service';

@Component({
  selector: 'app-discipline-component',
  standalone: false,
  templateUrl: './discipline-component.html',
  styleUrl: './discipline-component.css',
})
export class DisciplineComponent implements OnInit {
  disciplines: Discipline[] = [];
  formGroupDiscipline: FormGroup;
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: DisciplineService
  ) {
    this.formGroupDiscipline = formBuilder.group({
      id: [''],
      name: [''],
      code: [''],
      workload: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.service.getAllDisciplines().subscribe({
      next: (json) => (this.disciplines = json),
    });
  }

  save() {
    this.service.save(this.formGroupDiscipline.value).subscribe({
      next: (json) => {
        this.disciplines.push(json);
        this.formGroupDiscipline.reset();
      },
    });
  }

   OnClickDelete(discipline: Discipline) {
    this.service.delete(discipline).subscribe(
      {
        next: () => {
          this.disciplines = this.disciplines.filter(d => d.id != discipline.id);
        }
      }
    )
  }

  onClickUpdate(discipline: Discipline) {
    this.formGroupDiscipline.setValue(discipline);
    this.isEditing = true;
  }

    update() {
     this.service.update(this.formGroupDiscipline.value).subscribe(
        {
          next: json => {
            let index = this.disciplines.findIndex(d => d.id == json.id);
            this.disciplines[index] = json;
            this.isEditing = false;
            this.formGroupDiscipline.reset();
          }
        }
      )
  }
}
