import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NewsComponent } from "./components/news/news.component";
import { ProductComponent } from "./components/product/product.component";
import { ContentComponent } from "./components/content/content.component";
import { CategoryComponent } from "./components/category/category.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "news", component: NewsComponent },
  // 嵌套路由
  {
    path: "product", component: ProductComponent,
    children: [
      { path: "category", component: CategoryComponent }
    ]
  },

  { path: "content", component: ContentComponent },
  // 动态路由
  { path: "contents/:cid", component: ContentComponent },

  // 默认路由，加载组件或重定向
  // { path: "**", component: HomeComponent },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
