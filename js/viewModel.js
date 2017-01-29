function Dish(image,cost,name,energy) {
    var self = this;
    self.image=image;
    self.cost=cost;
    self.name=name;
    self.energyValue=energy;
    self.quantity = ko.observable(0);
}
ko.bindingHandlers.size = {
    update: function(element, valueAccessor) {
        var value = ko.unwrap(valueAccessor());
        var size = value+"px";
        element.style.width=size;
        element.style.height=size;
    }
}

models =[
    new Dish('img/1.jpg',12,'Metawearing',350),
    new Dish('img/2.jpg',6,'neoluck',660),
    new Dish('img/3.jpg',3,'supercould',129),
    new Dish('img/4.jpg',11,'supergrofuaq',640),
    new Dish('img/5.jpg',9,'antimany',235),
    new Dish('http://icon-icons.com/icons2/236/PNG/256/IceCream_Cone_26367.png',1,'superitsshowtimena',785),
    new Dish('img/6.jpg',2,'neoveileddesires',345),
    new Dish('img/7.jpg',14,'teralozseex',109),
    new Dish('img/8.jpg',4,'gorodstill',274),
    new Dish('img/9.jpg',16,'duewvfjnfslb',130),
    new Dish('img/10.jpg',7,'microup',239),
    new Dish('img/11.jpg',33,'unidid',189),
    new Dish('img/12.jpg',5,'reamp',689),
    new Dish('img/13.jpg',32,'suhamina',984),
    new Dish('img/14.jpg',8,'reconference',30)
];
function DishViewModel(models) {
    var self = this;
    self.models = models;
    self.selected =ko.observableArray();
    self.imgSize = ko.observable(30);

    self.totalCost = ko.computed(function () {
        var total = 0;
        $.each(self.selected(), function(index,value) {total += parseInt(value.cost)*parseInt(value.quantity()); });
        return total;
    });
    self.addDish = function (dish) {
        dish.quantity(dish.quantity()+1);
        if(dish.quantity()==1)
            self.selected.push(dish);
    };
    self.removeDish=function (dish) {
            dish.quantity(dish.quantity()-1);
        if(dish.quantity()==0){
            self.selected.remove(dish);
        }
    };
    self.removeAllDishes =function () {
        $.each(self.selected(), function(index,value) {value.quantity(0) });
        self.selected.removeAll();
    };

}



ko.applyBindings(new DishViewModel(models));
