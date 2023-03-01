import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-site-visitor-chart',
  template: '<div id="site-visitor-chart" style="height: 250px"></div>'
})
export class SiteVisitorChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('site-visitor-chart', am4charts.XYChart);

      chart.hiddenState.properties.opacity = 0;

      chart.padding(0, 0, 0, 0);

      chart.zoomOutButton.disabled = true;

      const data = [];
      let visits = 10;
      let i = 0;

      for (i = 0; i <= 30; i++) {
        visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({
          date: new Date().setSeconds(i - 30),
          value: Math.abs(visits)
        });
      }

      chart.data = data;

      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.minGridDistance = 30;
      dateAxis.dateFormats.setKey('second', 'ss');
      dateAxis.periodChangeDateFormats.setKey('second', '[bold]h:mm a');
      dateAxis.periodChangeDateFormats.setKey('minute', '[bold]h:mm a');
      dateAxis.periodChangeDateFormats.setKey('hour', '[bold]h:mm a');
      dateAxis.renderer.inside = true;
      dateAxis.renderer.axisFills.template.disabled = true;
      dateAxis.renderer.ticks.template.disabled = true;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.interpolationDuration = 500;
      valueAxis.rangeChangeDuration = 500;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.minLabelPosition = 0.05;
      valueAxis.renderer.maxLabelPosition = 0.95;
      valueAxis.renderer.axisFills.template.disabled = true;
      valueAxis.renderer.ticks.template.disabled = true;

      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields['dateX'] = 'date';
      series.dataFields['valueY'] = 'value';
      series.interpolationDuration = 500;
      series.defaultState.transitionDuration = 0;
      series.tensionX = 0.8;
      series.stroke = am4core.color('#f44336');
      series.strokeWidth = 2;

      chart.events.on('datavalidated', function() {
        dateAxis.zoom({
          start: 1 / 15,
          end: 1.2
        }, false, true);
      });

      dateAxis.interpolationDuration = 500;
      dateAxis.rangeChangeDuration = 500;

      document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
          if (interval) {
            clearInterval(interval);
          }
        } else {
          startInterval();
        }
      }, false);

      // add data
      let interval;

      function startInterval() {
        interval = setInterval(function() {
          visits =
            visits + Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
          const lastdataItem = series.dataItems.getIndex(series.dataItems.length - 1);
          chart.addData({
            date: new Date(lastdataItem.dateX.getTime() + 1000),
            value: Math.abs(visits)
          }, 1);
        }, 1000);
      }

      setTimeout(function() {
        startInterval();
      }, 100);

      // all the below is optional, makes some fancy effects
      // gradient fill of the series
      series.fillOpacity = 1;
      const gradient = new am4core.LinearGradient();
      gradient.addColor(am4core.color('#f44336'), 0.2);
      gradient.addColor(am4core.color('#f44336'), 0);
      series.fill = gradient;

      // this makes date axis labels to fade out  f44336
      dateAxis.renderer.labels.template.adapter.add('fillOpacity', function(fillOpacity, target) {
        const dataItem = target.dataItem;
        return dataItem['position'];
      });

      // need to set this, otherwise fillOpacity is not changed and not set
      dateAxis.events.on('datarangechanged', function() {
        am4core.iter.each(dateAxis.renderer.labels.iterator(), function(label) {
          label.fillOpacity = label.fillOpacity;
        });
      });

      // this makes date axis labels which are at equal minutes to be rotated
      dateAxis.renderer.labels.template.adapter.add('rotation', function(rotation, target) {
        const dataItem = target.dataItem;
        const test = new Date(dataItem['date'].getTime());
        if (dataItem['date'] && dataItem['date'].getTime() === am4core.time.round(test, 'minute', 2).getTime()) {
          target.verticalCenter = 'middle';
          target.horizontalCenter = 'left';
          return -90;
        } else {
          target.verticalCenter = 'bottom';
          target.horizontalCenter = 'middle';
          return 0;
        }
      });

      // bullet at the front of the line
      const bullet = series.createChild(am4charts.CircleBullet);
      bullet.circle.radius = 5;
      bullet.fillOpacity = 1;
      bullet.fill = am4core.color('#f44336');
      bullet.isMeasured = false;

      series.events.on('validated', function() {
        bullet.moveTo(series.dataItems.last.point);
        bullet.validatePosition();
      });

      this.chart = chart as any;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}