(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" > \n  <div class=\"jumbotron text-center\">\n    <h1>Distribución de entregas</h1>\n  </div>\n  <table class=\"table table-striped\" *ngIf=\"orders.length > 0\" >\n    <thead>\n      <tr>\n        <th style=\"width: 5%;padding-left: 35px;\">Detalle</th>\n        <th style=\"width: 12%\">Nro Orden</th>\n        <th style=\"width: 26%;padding-left: 25px;\">Cliente</th>\n        <th style=\"width: 24%\">Direccion</th>\n        <th style=\"width: 9%\">Color</th>\n        <th style=\"width: 19%\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"addNeworder()\" data-toggle=\"modal\" data-target=\"#myModal\" style=\"width:150px;float: right;margin-right: 12px\">Nueva Orden</button>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let order of orders\">\n        <td colspan=\"6\">\n          <table class=\"table table-striped\" style=\"width: 100%\">\n            <tr>\n              <td style=\"width: 5%\">\n                <button type=\"button\" class=\"btn btn-info\" style=\"width:80px\" (click)=\"viewDetail(order)\">Ver</button>\n              </td>\n              <td style=\"width: 12%\">\n                {{order.OrderId}}\n              </td>\n              <td style=\"width: 26%\">\n                {{order.Customer.CustomerName}}\n              </td>\n              <td style=\"width: 26%\">\n                {{order.Customer.Address}}\n              </td>\n              <td style=\"width: 8%\">\n                <div style=\"width:50px;height: 20px;\" [ngStyle]=\"{'background-color': order.Customer.Color}\"></div>\n              </td>\n              <td style=\"width: 20%\">\n                <button type=\"button\" class=\"btn btn-success\" style=\"width:150px;float: right;\" (click)=\"addOrderToDistribute(order)\" *ngIf=\"!order.Sent\">Envio</button>\n              </td>\n            </tr>\n            <tr *ngIf=\"order.ViewDetail\">\n              <td colspan=\"6\">\n                  <table class=\"table table-striped\" style=\"width: 100%\">\n                    <thead>\n                      <th style=\"width: 50%\">\n                        Referencia\n                      </th>\n                      <th style=\"width: 25%\">\n                        Cantidad\n                      </th>\n                      <th style=\"width: 25%\">\n                        Factor Ocupación\n                      </th>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let detail of order.Details\">\n                        <td>{{detail.Bike.BikeReference}}</td>\n                        <td>{{detail.Quantity}}</td>\n                        <td>{{detail.Bike.Width}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"container\">\n  <div class=\"row\" style=\"margin-bottom: 20px\">\n    <div class=\"col-sm-4\">\n        Agrega Camiones:\n        <select [(ngModel)]=\"_selectedTruck\" style=\"width: 100%;height: 30px;\">\n          <option *ngFor=\"let t of trucks\" [ngValue]=\"t\">{{t.TruckReference}}</option>\n        </select>\n    </div>\n    <div class=\"col-sm-2\">\n\n      </div>\n    <div class=\"col-sm-2\">\n        <button type=\"button\" class=\"btn btn-success\" style=\"margin-top: 15px;text-align: end;\" (click)=\"addTruck()\">Agregar</button>\n    </div>\n    <div class=\"col-sm-2\">\n        <button type=\"button\" class=\"btn btn-success\" style=\"margin-top: 15px;text-align: end;\" (click)=\"cleanDistribution()\">Limpiar</button>\n    </div>\n    <div class=\"col-sm-2\">\n        <button type=\"button\" class=\"btn btn-success\" style=\"margin-top: 15px;text-align: end;\" (click)=\"distribute()\">Distribuir</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <table class=\"table\" *ngIf=\"shipment.Orders.length > 0\">\n        <thead>\n          <th>\n            Nro Orden \n          </th>\n          <th>\n            Cliente\n          </th>\n          <th>\n            Color\n          </th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let order of shipment.Orders\">\n            <td>\n              {{order.OrderId}}\n            </td>\n            <td>\n              {{order.Customer.CustomerName}}\n            </td>\n            <td>\n              <div style=\"width:50px;height: 20px;\" [ngStyle]=\"{'background-color': order.Customer.Color}\"></div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col-sm-6\">\n      <div *ngIf=\"shipment.Trucks.length > 0\">\n        Selecciona Vehiculo:\n      </div>\n      <div *ngIf=\"shipment.Trucks.length > 0\">\n          <select [(ngModel)]=\"_selectedTruckDistribution\" style=\"width: 100%;height: 30px;\">\n              <option *ngFor=\"let td of shipment.Trucks\" [ngValue]=\"td\">{{td.TruckDistributionId}} - {{td.Truck.TruckReference}}</option>\n            </select>\n      </div>\n    </div>\n    <div class=\"alert alert-info alert-dismissible col-sm-12\" *ngIf=\"_showAlertDistribute\">\n      <strong>{{_messsageDistribute}}</strong>\n    </div>\n  </div>\n  <div class=\"container box-main\" *ngIf=\"_selectedTruckDistribution\">\n    <div class=\"col-sm-12\" style=\"text-align: center;margin-top: 10px\">\n        Vehiculo: {{_selectedTruckDistribution.Truck.TruckReference}}<br>\n        Largo: {{_selectedTruckDistribution.Truck.Length}} cms\n    </div>\n    <!--Camiones-->\n    <section class=\"row\">\n      <section class=\"col-sm-6 row box-main__ct\" *ngFor=\"let tf of _selectedTruckDistribution.TruckFloor\">\n          <div style=\"width: 100%;text-align: center;margin-bottom:20px\">Piso {{tf.Floor}}</div>\n          <div class=\"row box-main__ct-bk\" [style.height.px]=\"_selectedTruckDistribution.Truck.Length\"  style=\"width: 250px;margin: 0 auto;\">\n              <div style=\"width: 200px\">\n                  <div class=\"box-main__left\" [style.height.px]=\"b.Width\" [style.background-color]=\"b.Color\"   style=\"width: 191px\" *ngFor=\"let b of tf.BikesLeft\">\n                      <p style=\"margin-top: 8px\">{{b.Position}}-{{b.BikeReference}}</p>\n                  </div>\n              </div>\n              \n              <div style=\"width: 50px\">\n                  <div class=\"box-main__right vertical-text\" [style.width.px]=\"br.Width\" [style.background-color]=\"br.Color\" *ngFor=\"let br of tf.BikesRight\">\n                      <p style=\"text-orientation:upright\">{{br.Position}} {{br.BikeReference}}</p>\n                  </div>\n              </div>\n          </div>\n      </section>\n    </section>\n\n  </div>\n</div>\n\n\n\n\n\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n  \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Nueva Orden</h4>\n        </div>\n  \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-5\">\n              Selecciona el cliente:\n            </div>\n            <div class=\"col-sm-7\">\n              <select [(ngModel)]=\"newOrder.Customer\">\n                <option *ngFor=\"let c of customers\" [ngValue]=\"c\">{{c.CustomerName}}</option>\n              </select>\n            </div>\n            <div class=\"col-sm-4\">\n              Agrega Vehiculos:\n              <select [(ngModel)]=\"_selectedBike\" style=\"width: 100%;height: 30px;\">\n                  <option *ngFor=\"let b of bikes\" [ngValue]=\"b\">{{b.BikeReference}}</option>\n                </select>\n            </div>\n            <div class=\"col-sm-4\">\n              Cantidad: <input type=\"number\" style=\"width: 100%\" [(ngModel)]=\"_selectedQuantity\">\n            </div>\n            <div class=\"col-sm-4\">\n              <button type=\"button\" class=\"btn btn-success\" style=\"margin-top: 15px;text-align: end;\" (click)=\"addBikes()\">Agregar</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"container\" *ngIf=\"newOrder.Details\" class=\"col-sm-12\" >\n          <table class=\"table table-striped\">\n            <tbody>\n              <tr *ngFor=\"let detail of newOrder.Details\">\n                <td>\n                  {{detail.Bike.BikeReference}}\n                </td>\n                <td>\n                  {{detail.Quantity}}\n                  </td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n        <div class=\"alert alert-info alert-dismissible\" *ngIf=\"_showAlert\">\n          <strong>¡Requerido!</strong> Debe elegir un cliente y agregar motos a la orden.\n        </div>\n  \n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"saveNewOrder()\">Guardar</button>\n          <button type=\"button\" id=\"closeModal\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancelar</button>\n        </div>\n  \n      </div>\n    </div>\n  </div>\n\n\n<!--<router-outlet></router-outlet>-->\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-main__left{\r\n    background-color: fff;\r\n    border: solid 1px rgba(0,0,0,.5);\r\n    text-align: center;\r\n}\r\n\r\n.box-main__right{\r\n    background-color: fff;\r\n    border: solid 1px rgba(0,0,0,.5);\r\n    height: 200px;\r\n}\r\n\r\n.box-main__ct{\r\n    padding: 20px 40px;\r\n}\r\n\r\n.box-main__ct-bk{\r\n    background-color: rgba(0,0,0,0.1);\r\n    padding: 0px;\r\n}\r\n\r\n.box-main__ct .col-sm-9,\r\n.box-main__ct .col-sm-3{\r\n    padding: 0;\r\n}\r\n\r\n.vertical-text{\r\n    font-size: 13px;\r\n    -webkit-writing-mode: vertical-lr;\r\n        -ms-writing-mode: tb-lr;\r\n            writing-mode: vertical-lr;\r\n    -webkit-text-orientation: upright;\r\n            text-orientation: upright;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQ0FBeUI7UUFBekIsdUJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1tYWluX19sZWZ0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZmZmO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtbWFpbl9fcmlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmZmY7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLC41KTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5ib3gtbWFpbl9fY3R7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbn1cclxuXHJcbi5ib3gtbWFpbl9fY3QtYmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5ib3gtbWFpbl9fY3QgLmNvbC1zbS05LFxyXG4uYm94LW1haW5fX2N0IC5jb2wtc20tM3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_customer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/customer.model */ "./src/app/models/customer.model.ts");
/* harmony import */ var _models_bike_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/bike.model */ "./src/app/models/bike.model.ts");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/order.model */ "./src/app/models/order.model.ts");
/* harmony import */ var _models_truck_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/truck.model */ "./src/app/models/truck.model.ts");
/* harmony import */ var _models_shipment_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/shipment.model */ "./src/app/models/shipment.model.ts");







let AppComponent = class AppComponent {
    constructor() {
        this.title = 'DistributionApp';
        this.customers = [];
        this.bikes = [];
        this.orders = [];
        this.trucks = [];
        this.shipment = new _models_shipment_model__WEBPACK_IMPORTED_MODULE_6__["ShipmentModel"]();
        this.newOrder = new _models_order_model__WEBPACK_IMPORTED_MODULE_4__["OrderModel"]();
        this.newOrderDetails = [];
        this._showAlert = false;
        this._showAlertDistribute = false;
    }
    ngOnInit() {
        this.initialData();
    }
    addNeworder() {
        this.newOrder = new _models_order_model__WEBPACK_IMPORTED_MODULE_4__["OrderModel"]();
        this.newOrder.OrderId = Math.round(Math.random() * 10000 + 10000);
    }
    addBikes() {
        if (this._selectedBike && this._selectedQuantity) {
            this.newOrder.Details.push({ Bike: this._selectedBike, Quantity: this._selectedQuantity, OrderId: this.newOrder.OrderId });
            this._showAlert = false;
        }
        else {
            this._showAlert = true;
        }
    }
    addTruck() {
        let newDistributionTruck = new _models_shipment_model__WEBPACK_IMPORTED_MODULE_6__["TruckDistribution"]();
        newDistributionTruck.Truck = this._selectedTruck;
        let newTruckDistSecondF = new _models_shipment_model__WEBPACK_IMPORTED_MODULE_6__["TruckDistributionFloor"]();
        newTruckDistSecondF.Floor = 2;
        newTruckDistSecondF.LeftSideSpace = this._selectedTruck.Length;
        newTruckDistSecondF.RightSidePositionSlots = this._selectedTruck.Length;
        let newTruckDistFirstF = new _models_shipment_model__WEBPACK_IMPORTED_MODULE_6__["TruckDistributionFloor"]();
        newTruckDistFirstF.Floor = 1;
        newTruckDistFirstF.LeftSideSpace = this._selectedTruck.Length;
        newDistributionTruck.TruckFloor.push(newTruckDistSecondF);
        newDistributionTruck.TruckFloor.push(newTruckDistFirstF);
        newDistributionTruck.TruckDistributionId = this.shipment.Trucks.length + 1;
        this.shipment.Trucks.push(newDistributionTruck);
    }
    cleanDistribution() {
        this.shipment = new _models_shipment_model__WEBPACK_IMPORTED_MODULE_6__["ShipmentModel"]();
        this._selectedTruckDistribution = null;
        this.orders.forEach(element => {
            element.Sent = false;
        });
    }
    distribute() {
        this._showAlertDistribute = false;
        let i = 0;
        let truckChange = false;
        let detailChange = false;
        let orderChange = false;
        let floorChange = false;
        debugger;
        if (this.shipment.Orders.length > 0 && this.shipment.Trucks.length > 0) {
            this.shipment.Trucks.forEach(truckDist => {
                truckDist.TruckFloor.forEach(floor => {
                    floorChange = false;
                    this.shipment.Orders.forEach(ord => {
                        //if(!truckChange && !detailChange && !floorChange && !orderChange){
                        ord.Details.forEach(orderDetail => {
                            let cont = orderDetail.Quantity - orderDetail.QuantityLeft;
                            orderDetail.Quantity = orderDetail.QuantityLeft;
                            if (!floorChange) {
                                for (let j = 0; j < orderDetail.Quantity; j++) {
                                    if (orderDetail.Bike.Width < floor.LeftSideSpace) {
                                        let bike = Object.assign({}, orderDetail.Bike);
                                        bike.Color = ord.Customer.Color;
                                        bike.Position = cont + 1;
                                        orderDetail.QuantityLeft = orderDetail.QuantityLeft - 1;
                                        floor.LeftSideSpace = floor.LeftSideSpace - bike.Width;
                                        floor.BikesLeft.push(bike);
                                        cont++;
                                    }
                                    else {
                                        if (200 < floor.RightSidePositionSlots) {
                                            let bike = Object.assign({}, orderDetail.Bike);
                                            bike.Color = ord.Customer.Color;
                                            bike.Position = cont + 1;
                                            orderDetail.QuantityLeft = orderDetail.QuantityLeft - 1;
                                            floor.RightSidePositionSlots = floor.RightSidePositionSlots - 200;
                                            floor.BikesRight.push(bike);
                                            cont++;
                                        }
                                        else {
                                            floorChange = true;
                                        }
                                    }
                                }
                            }
                        });
                        //}
                    });
                });
            });
        }
        else {
            this._messsageDistribute = "Debe asignar camiones y ordenes para la distribucion";
            this._showAlertDistribute = true;
        }
    }
    saveNewOrder() {
        if (this.newOrder.Customer && this.newOrder.Details.length > 0) {
            this.orders.push(this.newOrder);
            document.getElementById("closeModal").click();
        }
        else {
            this._showAlert = true;
        }
    }
    viewDetail(order) {
        order.ViewDetail = !order.ViewDetail;
    }
    addOrderToDistribute(order) {
        order.Sent = true;
        let cloneOrder = JSON.parse(JSON.stringify(order));
        /*let clone = Object.assign({}, order);
        cloneOrder = {
          Customer: clone.Customer,
          Details: clone.Details,
          OrderId: clone.OrderId,
          Sent: true,
          ViewDetail: clone.ViewDetail
        }*/
        //
        cloneOrder.Details.forEach(element => {
            element.QuantityLeft = element.Quantity;
        });
        this.shipment.Orders.push(cloneOrder);
        this.shipment.Orders = this.shipment.Orders.sort((n1, n2) => {
            if (n1.Customer.Distance < n2.Customer.Distance) {
                return 1;
            }
            if (n1.Customer.Distance > n2.Customer.Distance) {
                return -1;
            }
            return 0;
        });
    }
    clone(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        var temp = obj.constructor();
        for (var key in obj) {
            temp[key] = this.clone(obj[key]);
        }
        return temp;
    }
    initialData() {
        let customer1 = new _models_customer_model__WEBPACK_IMPORTED_MODULE_2__["CustomerModel"]();
        customer1 = {
            Address: "Av.33 # 65-50, Medellín, Antioquia",
            CustomerId: 1,
            CustomerName: "Yamaha Sports la 33",
            Color: "aquamarine",
            Distance: 40,
            Lat: "6.2395911",
            Lng: "-75.6186616"
        };
        let customer2 = new _models_customer_model__WEBPACK_IMPORTED_MODULE_2__["CustomerModel"]();
        customer2 = {
            Address: "Cl.10 #10-58, Cartago, Valle del Cauca",
            CustomerId: 2,
            CustomerName: "Yamaha Cartago",
            Color: "#a9e860",
            Distance: 450,
            Lat: "4.7439443",
            Lng: "-75.9462825"
        };
        let customer3 = new _models_customer_model__WEBPACK_IMPORTED_MODULE_2__["CustomerModel"]();
        customer3 = {
            Address: "Cl.21 # 19-16, Armenia, Quindío",
            CustomerId: 3,
            CustomerName: "Yamaha Disyamotos",
            Color: "#ec9d97",
            Distance: 360,
            Lat: "4.4149579",
            Lng: "-76.4902864"
        };
        this.customers.push(customer1);
        this.customers.push(customer2);
        this.customers.push(customer3);
        let bike1 = new _models_bike_model__WEBPACK_IMPORTED_MODULE_3__["BikeModel"]();
        bike1 = {
            BikeId: 1,
            BikeReference: "BWS",
            Width: 43.7
        };
        let bike2 = new _models_bike_model__WEBPACK_IMPORTED_MODULE_3__["BikeModel"]();
        bike2 = {
            BikeId: 2,
            BikeReference: "NMAX",
            Width: 47.1
        };
        let bike3 = new _models_bike_model__WEBPACK_IMPORTED_MODULE_3__["BikeModel"]();
        bike3 = {
            BikeId: 3,
            BikeReference: "FZ15",
            Width: 38.3
        };
        let bike4 = new _models_bike_model__WEBPACK_IMPORTED_MODULE_3__["BikeModel"]();
        bike4 = {
            BikeId: 4,
            BikeReference: "XTZ125",
            Width: 37.2
        };
        this.bikes.push(bike1);
        this.bikes.push(bike2);
        this.bikes.push(bike3);
        this.bikes.push(bike4);
        let truck1 = new _models_truck_model__WEBPACK_IMPORTED_MODULE_5__["TruckModel"]();
        truck1 = {
            TruckId: 1,
            TruckReference: "Sencillo",
            Length: 670
        };
        let truck2 = new _models_truck_model__WEBPACK_IMPORTED_MODULE_5__["TruckModel"]();
        truck2 = {
            TruckId: 2,
            TruckReference: "Dobletroque",
            Length: 730
        };
        let truck3 = new _models_truck_model__WEBPACK_IMPORTED_MODULE_5__["TruckModel"]();
        truck3 = {
            TruckId: 3,
            TruckReference: "Camioneta",
            Length: 520
        };
        let truck4 = new _models_truck_model__WEBPACK_IMPORTED_MODULE_5__["TruckModel"]();
        truck4 = {
            TruckId: 4,
            TruckReference: "Mini Mula",
            Length: 1180
        };
        this.trucks.push(truck1);
        this.trucks.push(truck2);
        this.trucks.push(truck3);
        this.trucks.push(truck4);
        let order1 = new _models_order_model__WEBPACK_IMPORTED_MODULE_4__["OrderModel"]();
        order1.Customer = this.customers[0];
        order1.OrderId = 10056;
        order1.Details = [{ Bike: this.bikes[1], OrderId: 10056, Quantity: 8 },
            { Bike: this.bikes[3], OrderId: 10056, Quantity: 5 }];
        this.orders.push(order1);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.firebase.config.ts":
/*!****************************************!*\
  !*** ./src/app/app.firebase.config.ts ***!
  \****************************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
const firebaseConfig = {
    apiKey: "AIzaSyBOa1lS0u6VxD5H6SUXTpR_48q-TX091Go",
    authDomain: "yamaha-9cfdf.firebaseapp.com",
    databaseURL: "https://yamaha-9cfdf.firebaseio.com",
    projectId: "yamaha-9cfdf",
    storageBucket: "yamaha-9cfdf.appspot.com",
    messagingSenderId: "1097304532508",
    appId: "1:1097304532508:web:b0d7ccd470aed154"
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _app_firebase_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.firebase.config */ "./src/app/app.firebase.config.ts");







// Firebase Connection


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_app_firebase_config__WEBPACK_IMPORTED_MODULE_8__["firebaseConfig"]),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/models/bike.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/bike.model.ts ***!
  \**************************************/
/*! exports provided: BikeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikeModel", function() { return BikeModel; });
class BikeModel {
}


/***/ }),

/***/ "./src/app/models/customer.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/customer.model.ts ***!
  \******************************************/
/*! exports provided: CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
class CustomerModel {
}


/***/ }),

/***/ "./src/app/models/order.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/order.model.ts ***!
  \***************************************/
/*! exports provided: OrderModel, OrderDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return OrderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetail", function() { return OrderDetail; });
class OrderModel {
    constructor() {
        this.Details = [];
        this.Sent = false;
        this.ViewDetail = false;
    }
}
class OrderDetail {
}


/***/ }),

/***/ "./src/app/models/shipment.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/shipment.model.ts ***!
  \******************************************/
/*! exports provided: ShipmentModel, TruckDistribution, TruckDistributionFloor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentModel", function() { return ShipmentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckDistribution", function() { return TruckDistribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckDistributionFloor", function() { return TruckDistributionFloor; });
class ShipmentModel {
    constructor() {
        this.Orders = [];
        this.Trucks = [];
    }
}
class TruckDistribution {
    constructor() {
        this.TruckFloor = [];
    }
}
class TruckDistributionFloor {
    constructor() {
        this.BikesLeft = [];
        this.BikesRight = [];
        this.RightSidePositionSlots = 3;
    }
}


/***/ }),

/***/ "./src/app/models/truck.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/truck.model.ts ***!
  \***************************************/
/*! exports provided: TruckModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckModel", function() { return TruckModel; });
class TruckModel {
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\U\DistributionYamaha\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map