import { Component } from '@angular/core';
import * as Editor from './ckeditor5/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CKEditorTest';
  public Editor = Editor;

  editorConfig = {
    toolbar: {
      items: [
        'heading', '|',
        'fontfamily', 'fontsize', 'alignment', 'fontColor', 'fontBackgroundColor', 'highlight', 'removeFormat', '|',
        'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
        'link', '|',
        'outdent', 'indent', '|',
        'bulletedList', 'numberedList', 'todoList', '|',
        'code', 'codeBlock', '|',
        'insertTable', '|',
        'imageUpload', 'mediaEmbed', 'blockQuote', '|',
        'todoList', '|',
        'pageBreak', '|',
        'horizontalLine', 'findAndReplace', '|', 
        'undo', 'redo', '|', 
        'sourceEditing', 'specialCharacters', 'restrictedEditingException', '|',
        'textPartLanguage'
      ],
      shouldNotGroupWhenFull: true,

    },
    image: {
      // Configure the available styles.
      styles: [
        'alignLeft', 'alignCenter', 'alignRight'
      ],

      // Configure the available image resize options.
      resizeOptions: [
        {
          name: 'resizeImage:original',
          label: 'Original',
          value: null
        },
        {
          name: 'resizeImage:50',
          label: '25%',
          value: '25'
        },
        {
          name: 'resizeImage:50',
          label: '50%',
          value: '50'
        },
        {
          name: 'resizeImage:75',
          label: '75%',
          value: '75'
        }
      ],

      // You need to configure the image toolbar, too, so it shows the new style
      // buttons as well as the resize buttons.
      toolbar: [
        'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
        '|',
        'ImageResize',
        '|',
        'imageTextAlternative'
      ]
    },
    simpleUpload: {
        // The URL that the images are uploaded to.
        uploadUrl: 'http://example.com',

        // Enable the XMLHttpRequest.withCredentials property.
        withCredentials: true,

        // Headers sent along with the XMLHttpRequest to the upload server.
        headers: {
            'X-CSRF-TOKEN': 'CSRF-Token',
            Authorization: 'Bearer <JSON Web Token>'
        }
    },

    language: 'en'
  };

  

  onReady(editor: any) {
    if (editor.model.schema.isRegistered('image')) {
      editor.model.schema.extend('image', { allowAttributes: 'blockIndent' });
    }
  }
}
