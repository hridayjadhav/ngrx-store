import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    });
  }

  onAddPost(){
    if(!this.postForm.valid){
      return;
    }

    console.log(this.postForm.value);
    
    
  }

  showTitleErrors() {
  const titleForm = this.postForm.get('title');
  if (titleForm?.touched && !titleForm.valid) {
    if (titleForm.errors?.['required && minlength'] !== null) {
      return 'Title is required. And should be 6 characters';
    }
  }
  return '';
}
showDescriptionErrors() {
  const titleForm = this.postForm.get('description');
  if (titleForm?.touched && !titleForm.valid) {
    if (titleForm.errors?.['required && minlength'] !== null) {
      return 'Description is required. And should be 10 characters';
    } 
  }
  return '';
}

}
