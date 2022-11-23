import { Directive, ElementRef, OnInit } from '@angular/core';
import { Cesium3DTileset, IonResource,CesiumTerrainProvider, Viewer } from 'cesium';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const terrainprovider = new CesiumTerrainProvider({url: IonResource.fromAssetId(0)});
    const viewer = new Viewer(this.el.nativeElement, {homeButton: false, timeline: false});
    const tileset = new Cesium3DTileset({url: IonResource.fromAssetId(1346501)});
    viewer.scene.primitives.add(tileset);
    viewer.terrainProvider = terrainprovider;    
    viewer.zoomTo(tileset);
  }

}
