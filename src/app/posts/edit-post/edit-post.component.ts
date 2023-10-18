import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectPostById } from '../state/posts.selector';
import { Post } from 'src/app/models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post!: Post;
  postForm!: FormGroup;
  postSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) { // Check if id is not null
        this.postSubscription = this.store
          .select(selectPostById(id))
          .subscribe((data) => {
            if (data) { // Check if data is not undefined
              this.post = data;
              this.createForm();
            }
          });
      }
    });
  }


  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title || '', [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post?.description || '', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
