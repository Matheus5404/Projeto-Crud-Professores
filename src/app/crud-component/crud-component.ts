import { Component, OnInit } from '@angular/core';
import { Crud } from '../crud';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../crud-service';

@Component({
  selector: 'app-crud-component',
  standalone: false,
  templateUrl: './crud-component.html',
  styleUrl: './crud-component.css'
})
export class CrudComponent implements OnInit {

  cruds: Crud[] = [];
  formGroupCrud: FormGroup;
  isEditing: boolean = false;


  constructor(private formBuilder: FormBuilder, private service: CrudService) {

    this.formGroupCrud = formBuilder.group({
      id: [null],
      name: [''],
      cpf: [''],
      email: [''],
      discipline: [''],
      phone: ['']
    });
  }

  ngOnInit(): void {
    this.service.getAllProfessores().subscribe(
      {
        next: json => this.cruds = json
      }
    );
  }

  save() {
    this.service.save(this.formGroupCrud.value).subscribe(
      {
        next: json => {
          this.cruds.push(json);
          this.formGroupCrud.reset();
        }
      }
    )

    this.cruds.push(this.formGroupCrud.value);
    this.formGroupCrud.reset();
  }

  onClickDelete(professor: Crud) {
    this.service.delete(professor).subscribe(
      {
        next: () => {
          this.cruds = this.cruds.filter(p => p.id != professor.id);
        }
      }
    )
  }

  onClickUpdate(professor: Crud) {
    this.formGroupCrud.setValue(professor);
    this.isEditing = true;
  }

  update() {
    this.service.update(this.formGroupCrud.value).subscribe(
      {
        next: json => {
          let index = this.cruds.findIndex(p => p.id == json.id);
          this.cruds[index] = json;
          this.isEditing = false;
          this.formGroupCrud.reset();
        }
      }
    )
  }
}