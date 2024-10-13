import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/Components/UI/title/title.component";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat-with-your-book',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './chat-with-your-book.component.html',
  styleUrl: './chat-with-your-book.component.css'
})
export class ChatWithYourBookComponent {
  title: string = "Chat with your Book";
  desc: string = "Ask about a specific book of your choice";


  uploadForm: FormGroup;
  file!: any;
  responseList: any = [];

  constructor(private _formBuilder: FormBuilder) {
    this.uploadForm = this._formBuilder.group({
      file: [null]
    });
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.uploadForm.patchValue({
        file: this.file
      });
      this.onSubmit();
    }
  }

  onSubmit() {
    console.log('onSubmit', this.uploadForm);

    if (this.uploadForm.valid) {
      const formData = new FormData();
      formData.append('file', this.uploadForm.get('file')?.value);

      //API Call
    }
  }


}
