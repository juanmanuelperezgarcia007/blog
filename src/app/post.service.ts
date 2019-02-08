import { Injectable } from '@angular/core';
import { Post } from './models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  arrPost : Post[]
    
  constructor() {
    this.arrPost= JSON.parse(localStorage.getItem('posts')) ||[]
  
       
   }
   agregarPost(pPost:Post){

    this.arrPost.push(pPost)
    localStorage.setItem('posts',JSON.stringify(this.arrPost))
  }
    getAllPost(){
      return this.arrPost
    }
   

}
