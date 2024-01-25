import { Component, OnInit } from '@angular/core';
import OSM from 'ol/source/OSM';
import BingMaps from 'ol/source/BingMaps.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import { fromLonLat } from 'ol/proj';
import View from 'ol/View.js';
import VectorLayer from 'ol/layer/Vector';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorSource from 'ol/source/Vector';

@Component({
  selector: 'app-map-section',
  templateUrl: './map-section.component.html',
  styleUrls: ['./map-section.component.scss']
})
export class MapSectionComponent implements OnInit{

  private markerSource: VectorSource = new VectorSource();
  private map!: Map;

  selectedStyle: string = 'RoadOnDemand';
  layers: any[] = [];
  styles: string[] = [
    'RoadOnDemand',
    'CanvasDark',
    'AerialWithLabelsOnDemand',
    'Aerial',
  ];

  ngOnInit() {

    let i, ii;
    for (i = 0, ii = this.styles.length; i < ii; ++i) {
      this.layers.push(
        new TileLayer({
          visible: false,
          preload: Infinity,
          source: new BingMaps({
            key: 'As-2eZN9iaLH4CyVYQtez8K4KrWD7TGtGsRIHwefTklBhWE-aUSBxgNdeiaegd2L',
            imagerySet: this.styles[i],
            // placeholderTiles: false, // Optional. Prevents showing of BingMaps placeholder tiles
          }),
        })
      );
    }
    this.layers[0].setVisible(this.styles[0] === this.selectedStyle)

    const markerlayer = new VectorLayer({
      source: this.markerSource
    })

    this.map = new Map({
      layers: [...this.layers, markerlayer],
      target: 'map',
      view: new View({
        center: fromLonLat([-116.6016498706668, 31.814127241672196]),
        zoom: 16,
      }),
    });

    const positionMarker = new Feature({
      geometry: new Point(fromLonLat([-116.6016498706668, 31.814127241672196]))
    })

    const positionMarkerStyle = new Style({
      image: new Icon({
        src: '../../../../../assets/image/location_icon.png',
        scale: 0.2,
        anchor: [0.5, 1]
      })
    })

    positionMarker.setStyle(positionMarkerStyle)
    this.markerSource.addFeature(positionMarker)
    
  }

  onChange() {
    for (let i = 0, ii = this.layers.length; i < ii; ++i) {
      this.layers[i].setVisible(this.styles[i] === this.selectedStyle);
    }
  }
}
