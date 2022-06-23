import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.scss']
})
export class PokemonCreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void{
    this.form = this.fb.group({
      nombre: ['',[Validators.required]],
      nivel: ['',[Validators.required]],
      especie:['']
    });
  }

  public onSubmit(): void {

    if(this.form.invalid){
      alert('Faltan campos');
      return;
    }

    alert('entro submit');
  }
}
