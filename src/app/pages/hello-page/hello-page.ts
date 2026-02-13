import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hello-page',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './hello-page.html',
  styleUrl: './hello-page.scss',
})
export class HelloPage {

}
