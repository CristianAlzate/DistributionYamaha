import { Component, OnInit } from '@angular/core';
import { CustomerModel } from './models/customer.model';
import { BikeModel } from './models/bike.model';
import { OrderModel, OrderDetail } from './models/order.model';
import { TruckModel } from './models/truck.model';
import { ShipmentModel, TruckDistribution, TruckDistributionFloor } from './models/shipment.model';
import { not } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DistributionApp';
  customers:CustomerModel[] = [];
  bikes: BikeModel[] = [];
  orders: OrderModel[] = [];
  trucks: TruckModel[] = [];
  shipment: ShipmentModel = new ShipmentModel();
  _selectedCustomer:CustomerModel;
  _selectedBike:BikeModel;
  _selectedQuantity:number;
  newOrder:OrderModel = new OrderModel();
  newOrderDetails:OrderDetail[] = [];
  _showAlert:Boolean = false;
  _selectedTruck:TruckModel;
  _selectedTruckDistribution:TruckDistribution;
  _showAlertDistribute:boolean = false;
  _messsageDistribute:String;
  ngOnInit(){
    this.initialData();
  }

  addNeworder(){
    this.newOrder = new OrderModel();
    this.newOrder.OrderId = Math.round(Math.random() * 10000 + 10000);
  }

  addBikes(){
    if(this._selectedBike && this._selectedQuantity){
      this.newOrder.Details.push({Bike: this._selectedBike,Quantity:this._selectedQuantity,OrderId:this.newOrder.OrderId});
      this._showAlert = false;
    }
    else{
      this._showAlert = true;
    }

  }

  addTruck(){
    let newDistributionTruck = new TruckDistribution();
    newDistributionTruck.Truck = this._selectedTruck;
    let newTruckDistSecondF = new TruckDistributionFloor();
    newTruckDistSecondF.Floor = 2;
    newTruckDistSecondF.LeftSideSpace = this._selectedTruck.Length;
    newTruckDistSecondF.RightSidePositionSlots = this._selectedTruck.Length;
    let newTruckDistFirstF = new TruckDistributionFloor();
    newTruckDistFirstF.Floor = 1;
    newTruckDistFirstF.LeftSideSpace = this._selectedTruck.Length;
    newDistributionTruck.TruckFloor.push(newTruckDistSecondF);
    newDistributionTruck.TruckFloor.push(newTruckDistFirstF);
    newDistributionTruck.TruckDistributionId = this.shipment.Trucks.length + 1;
    this.shipment.Trucks.push(newDistributionTruck);
  }

  cleanDistribution (){
    this.shipment = new ShipmentModel();
    this._selectedTruckDistribution = null;
    this.orders.forEach(element => {
      element.Sent = false;
    });
  }

  distribute(){
    this._showAlertDistribute = false;
    let i = 0;
    let truckChange = false;
    let detailChange = false;
    let orderChange = false;
    let floorChange = false;
    debugger;
    if(this.shipment.Orders.length > 0 && this.shipment.Trucks.length> 0){
      this.shipment.Trucks.forEach(truckDist => {
        truckDist.TruckFloor.forEach(floor => {
          floorChange = false;
          this.shipment.Orders.forEach(ord => {
            //if(!truckChange && !detailChange && !floorChange && !orderChange){
              ord.Details.forEach(orderDetail => {
                let cont = orderDetail.Quantity - orderDetail.QuantityLeft;
                orderDetail.Quantity = orderDetail.QuantityLeft;
                if(!floorChange){
                  for (let j = 0; j < orderDetail.Quantity; j++) {
                    if(orderDetail.Bike.Width < floor.LeftSideSpace){
                      let bike = Object.assign({}, orderDetail.Bike);
                      bike.Color = ord.Customer.Color;
                      bike.Position = cont + 1;
                      orderDetail.QuantityLeft = orderDetail.QuantityLeft - 1;
                      floor.LeftSideSpace = floor.LeftSideSpace - bike.Width;
                      floor.BikesLeft.push(bike);
                      cont++;
                    }
                    else{
                      if(200 < floor.RightSidePositionSlots){
                        let bike = Object.assign({}, orderDetail.Bike);
                        bike.Color = ord.Customer.Color;
                        bike.Position = cont + 1;
                        orderDetail.QuantityLeft = orderDetail.QuantityLeft - 1;
                        floor.RightSidePositionSlots = floor.RightSidePositionSlots - 200;
                        floor.BikesRight.push(bike);
                        cont++;
                      }
                      else{
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
    else{
      this._messsageDistribute = "Debe asignar camiones y ordenes para la distribucion";
      this._showAlertDistribute = true;
    }
  }

  saveNewOrder(){
    if(this.newOrder.Customer && this.newOrder.Details.length > 0){
      this.orders.push(this.newOrder);
      document.getElementById("closeModal").click();
    }
    else{
      this._showAlert = true;
    }
    
  }

  viewDetail(order:OrderModel){
    order.ViewDetail = !order.ViewDetail;
  }

  addOrderToDistribute(order:OrderModel){
    order.Sent =  true;
    let cloneOrder = JSON.parse( JSON.stringify( order ) );
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
    this.shipment.Orders = this.shipment.Orders.sort((n1,n2) => {
      if(n1.Customer.Distance < n2.Customer.Distance){
        return 1;
      }
      if(n1.Customer.Distance > n2.Customer.Distance){
        return -1;
      }
      return 0;
    });
  }
  clone( obj ) {
    if ( obj === null || typeof obj  !== 'object' ) {
        return obj;
    }
 
    var temp = obj.constructor();
    for ( var key in obj ) {
        temp[ key ] = this.clone( obj[ key ] );
    }
 
    return temp;
  }

  initialData(){
    let customer1 = new CustomerModel();
    customer1 = {
      Address:"Av.33 # 65-50, Medellín, Antioquia",
      CustomerId:1,
      CustomerName:"Yamaha Sports la 33",
      Color:"aquamarine",
      Distance:40,
      Lat:"6.2395911",
      Lng:"-75.6186616"
    };
    let customer2 = new CustomerModel();
    customer2 = {
      Address:"Cl.10 #10-58, Cartago, Valle del Cauca",
      CustomerId:2,
      CustomerName:"Yamaha Cartago",
      Color:"#a9e860",
      Distance:450,
      Lat:"4.7439443",
      Lng:"-75.9462825"
    };
    let customer3 = new CustomerModel();
    customer3 = {
      Address:"Cl.21 # 19-16, Armenia, Quindío",
      CustomerId:3,
      CustomerName:"Yamaha Disyamotos",
      Color:"#ec9d97",
      Distance:360,
      Lat:"4.4149579",
      Lng:"-76.4902864"
    };
    this.customers.push(customer1);
    this.customers.push(customer2);
    this.customers.push(customer3);

    let bike1 = new BikeModel();
    bike1 = {
      BikeId:1,
      BikeReference:"BWS",
      Width:43.7
    };
    let bike2 = new BikeModel();
    bike2 = {
      BikeId:2,
      BikeReference:"NMAX",
      Width:47.1
    };
    let bike3 = new BikeModel();
    bike3 = {
      BikeId:3,
      BikeReference:"FZ15",
      Width:38.3
    };
    let bike4 = new BikeModel();
    bike4 = {
      BikeId:4,
      BikeReference:"XTZ125",
      Width:37.2
    };
    this.bikes.push(bike1);
    this.bikes.push(bike2);
    this.bikes.push(bike3);
    this.bikes.push(bike4);

    let truck1 = new TruckModel();
    truck1 = {
      TruckId:1,
      TruckReference:"Sencillo",
      Length:670
    };
    let truck2 = new TruckModel();
    truck2 = {
      TruckId:2,
      TruckReference:"Dobletroque",
      Length:730
    };
    let truck3 = new TruckModel();
    truck3 = {
      TruckId:3,
      TruckReference:"Camioneta",
      Length:520
    };
    let truck4 = new TruckModel();
    truck4 = {
      TruckId:4,
      TruckReference:"Mini Mula",
      Length:1180
    };
    this.trucks.push(truck1);
    this.trucks.push(truck2);
    this.trucks.push(truck3);
    this.trucks.push(truck4);

    let order1 = new OrderModel();
    order1.Customer = this.customers[0];
    order1.OrderId = 10056;
    order1.Details = [{Bike: this.bikes[1], OrderId:10056, Quantity:8},
                      {Bike: this.bikes[3], OrderId:10056, Quantity:5}]
    this.orders.push(order1);
  }
}
