import {Injectable} from '@angular/core';
@Injectable({
  providedIn:'root',
})
export class PostService{


  postList:Array<any>=[
    {id:1,postTitle:'Post Title1'},
    {id:2,postTitle:'Post Title2'},
    {id:3,postTitle:'Post Title3'},
    {id:4,postTitle:'Post Title4'}
  ]
  addPost(data:any){
this.postList.push(data);
console.log(this.postList);
  }
}
