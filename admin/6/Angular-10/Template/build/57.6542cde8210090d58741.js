(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"9I/G":function(e,t,n){"use strict";n.r(t),n.d(t,"InvoiceSummaryModule",(function(){return h}));var a=n("ofXK"),l=n("tyNb");let r=(()=>{class e{}return e.bar1CAC={chart:{height:350,type:"bar"},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},colors:["#0e9e4a","#4680ff","#ff5252"],stroke:{show:!0,width:2,colors:["transparent"]},series:[{name:"Net Profit",data:[44,55,57,56,61,58,63]},{name:"Revenue",data:[76,85,101,98,87,105,91]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52]}],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:e=>"$ "+e+" thousands"}}},e})();var d=n("fXoL"),s=n("/n7v"),m=n("cclQ"),o=n("xJfa"),i=n("WlQZ");m.o(i.a);let p=(()=>{class e{constructor(e){this.zone=e}ngOnInit(){}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{const e=m.j("traffic-sale-chart",o.m);e.hiddenState.properties.opacity=0,e.data=[{date:"2018-01-01",steps:4561},{date:"2018-01-02",steps:5687},{date:"2018-01-03",steps:6348},{date:"2018-01-04",steps:4878},{date:"2018-01-05",steps:9867},{date:"2018-01-06",steps:7561},{date:"2018-01-07",steps:1287},{date:"2018-01-08",steps:3298},{date:"2018-01-09",steps:5697},{date:"2018-01-10",steps:4878},{date:"2018-01-11",steps:8788},{date:"2018-01-12",steps:9560},{date:"2018-01-13",steps:11687},{date:"2018-01-14",steps:5878},{date:"2018-01-15",steps:9789},{date:"2018-01-16",steps:3987},{date:"2018-01-17",steps:5898},{date:"2018-01-18",steps:9878},{date:"2018-01-19",steps:13687},{date:"2018-01-20",steps:6789},{date:"2018-01-21",steps:4531},{date:"2018-01-22",steps:5856},{date:"2018-01-23",steps:5737},{date:"2018-01-24",steps:9987},{date:"2018-01-25",steps:16457},{date:"2018-01-26",steps:7878},{date:"2018-01-27",steps:6845},{date:"2018-01-28",steps:4659},{date:"2018-01-29",steps:7892},{date:"2018-01-30",steps:7362},{date:"2018-01-31",steps:3268}],e.dateFormatter.inputDateFormat="YYYY-MM-dd",e.zoomOutButton.disabled=!0;const t=e.xAxes.push(new o.e);t.renderer.grid.template.strokeOpacity=0,t.renderer.minGridDistance=10,t.dateFormats.setKey("day","d"),t.tooltip.hiddenState.properties.opacity=1,t.tooltip.hiddenState.properties.visible=!0;const n=e.yAxes.push(new o.l);n.renderer.inside=!0,n.renderer.labels.template.fillOpacity=.3,n.renderer.grid.template.strokeOpacity=0,n.min=0;const a=n.axisRanges.create();a.value=6e3,a.grid.strokeOpacity=.1,a.label.text="Session",a.label.align="right",a.label.verticalCenter="bottom",a.label.fillOpacity=.8,n.renderer.gridContainer.zIndex=1;const l=n.axisRanges.create();l.value=12e3,l.grid.strokeOpacity=.1,l.label.text="2x Session",l.label.align="right",l.label.verticalCenter="bottom",l.label.fillOpacity=.8;const r=e.series.push(new o.d);r.dataFields.valueY="steps",r.dataFields.dateX="date",r.tooltipText="{valueY.value}";const d=r.columns.template;d.width=m.m(50),d.strokeOpacity=0,d.adapter.add("fill",(function(e,t){return m.i(t.dataItem.valueY>6e3?"#2196f3":"#7759de")}));const s=new o.n;s.behavior="panX",e.cursor=s,setTimeout(()=>{e.events.on("datavalidated",(function(){t.zoomToDates(new Date(2018,0,11),new Date(2018,0,24),!1,!0)}))},1500),e.scrollbarX=new m.g,e.scrollbarX.parent=e.bottomAxesContainer,this.chart=e})}ngOnDestroy(){this.zone.runOutsideAngular(()=>{this.chart&&this.chart.dispose()})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](d.NgZone))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-traffic-sale-chart"]],decls:1,vars:0,consts:[["id","traffic-sale-chart",2,"height","300px"]],template:function(e,t){1&e&&d["\u0275\u0275element"](0,"div",0)},encapsulation:2}),e})();const c=[{path:"",component:(()=>{class e{constructor(){this.chartDB=r}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-invoice-summary"]],decls:117,vars:3,consts:[[1,"row"],[1,"col-xl-6"],["cardTitle","Sales and Expenses",3,"options"],["cardTitle","Sales, Receipt and Dues","blockClass","table-border-style",3,"options"],[1,"table-responsive"],[1,"table","table-lg","table-hover","m-0"],["scope","row"],[1,"col-xl-12"],["cardTitle","Recent Orders","blockClass","table-border-style invoice-summary",3,"options"],[1,"table","table-lg","table-styling"],[1,"label","label-md","label-danger"],[1,"label","label-md","label-success"],[1,"label","label-md","label-warning"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"app-card",2),d["\u0275\u0275element"](3,"app-traffic-sale-chart"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"div",1),d["\u0275\u0275elementStart"](5,"app-card",3),d["\u0275\u0275elementStart"](6,"div",4),d["\u0275\u0275elementStart"](7,"table",5),d["\u0275\u0275elementStart"](8,"thead"),d["\u0275\u0275elementStart"](9,"tr"),d["\u0275\u0275elementStart"](10,"th"),d["\u0275\u0275text"](11,"#"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"th"),d["\u0275\u0275text"](13,"Sales"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"th"),d["\u0275\u0275text"](15,"Receipt"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"th"),d["\u0275\u0275text"](17,"Dues"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"tbody"),d["\u0275\u0275elementStart"](19,"tr"),d["\u0275\u0275elementStart"](20,"th",6),d["\u0275\u0275text"](21,"Today"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"td"),d["\u0275\u0275text"](23,"$250.00"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"td"),d["\u0275\u0275text"](25,"Otto"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](26,"td"),d["\u0275\u0275text"](27,"@mdo"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"tr"),d["\u0275\u0275elementStart"](29,"th",6),d["\u0275\u0275text"](30,"This Week"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](31,"td"),d["\u0275\u0275text"](32,"$380.00"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](33,"td"),d["\u0275\u0275text"](34,"Thornton"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](35,"td"),d["\u0275\u0275text"](36,"@fat"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](37,"tr"),d["\u0275\u0275elementStart"](38,"th",6),d["\u0275\u0275text"](39,"This Month"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](40,"td"),d["\u0275\u0275text"](41,"$450.00"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](42,"td"),d["\u0275\u0275text"](43,"the Bird"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](44,"td"),d["\u0275\u0275text"](45,"@twitter"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](46,"tr"),d["\u0275\u0275elementStart"](47,"th",6),d["\u0275\u0275text"](48,"This Year"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](49,"td"),d["\u0275\u0275text"](50,"$600.00"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](51,"td"),d["\u0275\u0275text"](52,"the Bird"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](53,"td"),d["\u0275\u0275text"](54,"@facebook"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](55,"tr"),d["\u0275\u0275elementStart"](56,"th",6),d["\u0275\u0275text"](57,"Total"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](58,"td"),d["\u0275\u0275text"](59,"$600.00"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](60,"td"),d["\u0275\u0275text"](61,"the Bird"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](62,"td"),d["\u0275\u0275text"](63,"@google"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](64,"div",7),d["\u0275\u0275elementStart"](65,"app-card",8),d["\u0275\u0275elementStart"](66,"div",4),d["\u0275\u0275elementStart"](67,"table",9),d["\u0275\u0275elementStart"](68,"thead"),d["\u0275\u0275elementStart"](69,"tr"),d["\u0275\u0275elementStart"](70,"th"),d["\u0275\u0275text"](71,"#"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](72,"th"),d["\u0275\u0275text"](73,"Order No."),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](74,"th"),d["\u0275\u0275text"](75,"Product Name"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](76,"th"),d["\u0275\u0275text"](77,"Quantity"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](78,"th"),d["\u0275\u0275text"](79,"Price"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](80,"tbody"),d["\u0275\u0275elementStart"](81,"tr"),d["\u0275\u0275elementStart"](82,"th",6),d["\u0275\u0275text"](83,"1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](84,"td"),d["\u0275\u0275text"](85,"54822"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](86,"td"),d["\u0275\u0275text"](87,"Product 1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](88,"td"),d["\u0275\u0275text"](89,"2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](90,"td"),d["\u0275\u0275elementStart"](91,"label",10),d["\u0275\u0275text"](92,"$99.00"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](93,"tr"),d["\u0275\u0275elementStart"](94,"th",6),d["\u0275\u0275text"](95,"2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](96,"td"),d["\u0275\u0275text"](97,"54823"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](98,"td"),d["\u0275\u0275text"](99,"Product 2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](100,"td"),d["\u0275\u0275text"](101,"1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](102,"td"),d["\u0275\u0275elementStart"](103,"label",11),d["\u0275\u0275text"](104,"$29.00"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](105,"tr"),d["\u0275\u0275elementStart"](106,"th",6),d["\u0275\u0275text"](107,"3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](108,"td"),d["\u0275\u0275text"](109,"54824"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](110,"td"),d["\u0275\u0275text"](111,"Product 3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](112,"td"),d["\u0275\u0275text"](113,"3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](114,"td"),d["\u0275\u0275elementStart"](115,"label",12),d["\u0275\u0275text"](116,"$109.00"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("options",!1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("options",!1),d["\u0275\u0275advance"](60),d["\u0275\u0275property"]("options",!1))},directives:[s.a,p],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.i.forChild(c)],l.i]}),e})();var E=n("ebz3");let h=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,S,E.a]]}),e})()}}]);