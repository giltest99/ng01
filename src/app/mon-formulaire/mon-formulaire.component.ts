import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mon-formulaire',
  templateUrl: './mon-formulaire.component.html',
  styleUrls: ['./mon-formulaire.component.css'],
})
export class MonFormulaireComponent implements OnInit {
  form!: FormGroup;
  @ViewChild('textarea')
  textarea!: ElementRef;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      textarea: '',
    });
  }
  onSubmit() {
    const ta = this.form.value.textarea;
    if (!ta) {
      this.textarea.nativeElement.focus();
      return;
    }
    console.log(ta);
  }
  resetTextarea() {
    this.form.controls['textarea'].setValue('');
    this.textarea.nativeElement.focus();
  }
}
