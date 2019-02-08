import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'
import { Post } from '../models/post.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  newpPost: Post
  constructor(private postService: PostService) {
  this.newpPost = new Post("","","","","")
   }
    
  ngOnInit() {
  }
  guardarNewPost(){
  this.postService.agregarPost(this.newpPost)
  
  console.log(this.newpPost)
  }
}
