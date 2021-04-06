import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {
  constructor(private cfr: ComponentFactoryResolver) {}
  async loadComponent(vcr: ViewContainerRef) {
    const { PostComponent } = await import('../post/post.component');
    return vcr.createComponent(this.cfr.resolveComponentFactory(PostComponent));
  }
}
