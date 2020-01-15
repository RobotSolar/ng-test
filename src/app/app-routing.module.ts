import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: '**', component:  NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
