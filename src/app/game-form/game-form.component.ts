import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PostService } from '../post.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  form;
  data: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
      this.form = new FormGroup({

      projectId : new FormControl('', Validators.compose([
            Validators.required,
            Validators.maxLength(10)
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      emailId: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')
      ])),
      location: new FormControl(''),
      gitUrl: new FormControl('', Validators.required),
      // gitUrl: new FormControl('', Validators.required),

    });
  }

  onSubmit= function(user){
      this.data =  JSON.stringify(user);
      console.log(user['userdata']);
      console.log('onsubl:');
      console.log(this.data);
      this.add(this.data);
  };

  add(userdata: any): void {
    console.log(userdata);
    // userdata = userdata.trim();
    if (!userdata) {
      return; }
    this.postService.create(userdata);
    console.log(userdata);
  }
}
