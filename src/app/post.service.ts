import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  arrPost : Post[]
    
  constructor() {
    this.arrPost=[
  
       ]
   }
   agregarPost(pPost:Post){

    this.arrPost.push(pPost)
  }
    getAllPost(){
      return this.arrPost
    }
   

}
