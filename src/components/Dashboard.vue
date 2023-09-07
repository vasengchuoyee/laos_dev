<template>
    <v-container>

        <v-row class="col-md-12">
            <v-col class="styles" v-for="item in products" :key="item.id">
                <v-img class="align-end text-white" height="40%" width="60%" :src="item.image" cover>
                    <v-card-title>{{ item.title }}</v-card-title>
                </v-img>
                <v-card-subtitle class="pt-4">
                    <h3> {{ item.name }}</h3>
                </v-card-subtitle>
                <v-card-text>
                    <div>
                        <hp><b>{{ formatPrice(item.price) }} ₭</b></hp>
                    </div>
                    <div>Fresh Drinks From Laos</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn icon style="color:red;">
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn class="ma-2" variant="text" icon="mdi-thumb-up" color="blue-lighten-2"></v-btn>
                    <!-- <v-btn color="orange">
                        see more
                    </v-btn> -->
                    <!-- <button @click="addCart(item)">
                        add
                    </button> -->
                </v-card-actions>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Dashboard',
    components: {
    },
    data() {
        return {
            x: 0,
            message: "",
            carts: [],
            coffee: 0,
            tea: 0,
            orange: 0,
            coffees1: 0,
            coffees2: 0,
            coffees3: 0,
            coffees4: 0,
            coffees5: 0,
            coffees6: 0,
            coffees7: 0,
            coffees8: 0,
            coffees9: 0,

            products: [
                {
                    id: 1,
                    title: "Laos",
                    name: "Coffee",
                    price: 30000,
                    image: "https://cdn.pixabay.com/photo/2015/05/07/13/46/cappuccino-756490_960_720.jpg",
                    active: false,
                },
                {
                    id: 2,
                    title: "Laos",
                    name: "Green coffee",
                    price: 40000,
                    image: "https://cdn.pixabay.com/photo/2016/08/10/15/10/green-tea-1583546__340.jpg",
                    active: false,
                },
                {
                    id: 3,
                    title: "Laos",
                    name: "Orangejuie",
                    price: 25000,
                    image: "https://media.istockphoto.com/id/152971676/photo/glass-of-orange-juice-and-fresh-oranges.jpg?b=1&s=170667a&w=0&k=20&c=683otTsEcPbv7ME8LGGDA2VlrF2J80rrtQ0ISWOsAqY=",
                    active: false,
                },
                {
                    id: 4,
                    title: "Laos",
                    name: "Coconut",
                    price: 20000,
                    image: "https://media.istockphoto.com/id/503893920/photo/coconut-milk-drink.jpg?s=612x612&w=0&k=20&c=WiJXi5W6tanQ6awnKRtJ22ZsSIgUtgHCuS_bXzeCJ_g=",
                    active: false,
                },
                {
                    id: 5,
                    title: "Laos",
                    name: "Watermelon",
                    price: 45000,
                    image: "https://media.istockphoto.com/id/1451140794/photo/watermelon-smoothie-in-a-jar-with-mint-and-lemon.jpg?s=1024x1024&w=is&k=20&c=zP0lBu1TlUmx7a6VLCOK88wRBl4WpW-BK9cHZdx6IkI=",
                    active: false,
                },
                {
                    id: 6,
                    title: "Laos",
                    name: "lemon",
                    price: 35000,
                    image: "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_960_720.jpg",
                    active: false,
                },
                {
                    id: 7,
                    title: "Laos",
                    name: "lemon glass",
                    price: 30000,
                    image: "https://cdn.pixabay.com/photo/2018/04/17/11/03/cocktail-3327242__340.jpg",
                    active: false,
                },
                {
                    id: 8,
                    title: "Laos",
                    name: "Pineapp",
                    price: 50000,
                    image: "https://media.istockphoto.com/id/176851361/photo/pineapple-juice.jpg?s=1024x1024&w=is&k=20&c=KgYRU5VuhImRVT611Eze_dodbNrmbv9W6lnQlNY2GVo=",
                    active: false,
                },
                {
                    id: 9,
                    title: "Laos",
                    name: "Banana",
                    price: 45000,
                    image: "https://media.istockphoto.com/id/932148590/photo/banana-milk-smoothie-on-white-background.jpg?s=1024x1024&w=is&k=20&c=bQHfXqF9vb3Eip3bQ-jUjA1Ok5L5X2OqwxuQKHcIgO8=",
                    active: false,
                },
                {
                    id: 10,
                    title: "Laos",
                    name: "Mango",
                    price: 38000,
                    image: "https://media.istockphoto.com/id/1256123008/photo/glass-of-mango-juice-smoothie-mango-juice-with-mango-slice-and-mango-slice-on-glass-isolated.jpg?s=1024x1024&w=is&k=20&c=vlUIAHh6Ow7tNJ98cr2BN8N6j3pQE8dHQ2Pdb1_8npI=",
                    active: false,
                },
                {
                    id: 11,
                    title: "Laos",
                    name: "Water",
                    price: 10000,
                    image: "https://cdn.pixabay.com/photo/2017/10/21/16/07/glass-2875091__340.jpg",
                    active: false,
                },
                {
                    id: 12,
                    title: "Laos",
                    name: "Coconut",
                    price: 20000,
                    image: "https://media.istockphoto.com/id/503893920/photo/coconut-milk-drink.jpg?s=612x612&w=0&k=20&c=WiJXi5W6tanQ6awnKRtJ22ZsSIgUtgHCuS_bXzeCJ_g=",
                    active: false,
                },
            ]
        }
    },
    methods: {
        addCart: function (item) {
            if (item.id == 1) {
                //bye coffee
                this.coffee += 1;
                if (this.coffee <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var found = this.findIndex(item);
                    this.carts[found].qty += 1;
                    this.carts[found].total = this.carts[found].qty * this.carts[found].price;
                }
            }
            if (item.id == 2) {
                //bye others
                this.tea += 1;
                if (this.tea <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds = this.findIndex(item);
                    this.carts[founds].qty += 1;
                    this.carts[founds].total = this.carts[founds].qty * this.carts[founds].price;
                }
            }
            if (item.id == 3) {
                //bye others
                this.orange += 1;
                if (this.orange <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds1 = this.findIndex(item);
                    this.carts[founds1].qty += 1;
                    this.carts[founds1].total = this.carts[founds1].qty * this.carts[founds1].price;
                }
            }
            if (item.id == 4) {
                //bye others
                this.coffees1 += 1;
                if (this.coffees1 <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds2 = this.findIndex(item);
                    this.carts[founds2].qty += 1;
                    this.carts[founds2].total = this.carts[founds2].qty * this.carts[founds2].price;
                }
            }
            if (item.id == 5) {
                //bye others
                this.coffees2 += 1;
                if (this.coffees2 <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds3 = this.findIndex(item);
                    this.carts[founds3].qty += 1;
                    this.carts[founds3].total = this.carts[founds3].qty * this.carts[founds3].price;
                }
            }
            if (item.id == 6) {
                //bye others
                this.coffees3 += 1;
                if (this.coffees3 <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds4 = this.findIndex(item);
                    this.carts[founds4].qty += 1;
                    this.carts[founds4].total = this.carts[founds4].qty * this.carts[founds4].price;
                }
            }
            if (item.id == 7) {
                //bye others
                this.coffees4 += 1;
                if (this.coffees4 <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds5 = this.findIndex(item);
                    this.carts[founds5].qty += 1;
                    this.carts[founds5].total = this.carts[founds5].qty * this.carts[founds5].price;
                }
            }
            if (item.id == 8) {
                //bye others
                this.coffees5 += 1;
                if (this.coffees5 <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds6 = this.findIndex(item);
                    this.carts[founds6].qty += 1;
                    this.carts[founds6].total = this.carts[founds6].qty * this.carts[founds6].price;
                }
            }
            if (item.id == 9) {
                //bye others
                this.coffees6 += 1;
                if (this.coffees6 <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds7 = this.findIndex(item);
                    this.carts[founds7].qty += 1;
                    this.carts[founds7].total = this.carts[founds7].qty * this.carts[founds7].price;
                }
            }
            if (item.id == 10) {
                //bye others
                this.coffees7 += 1;
                if (this.coffees7 <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds8 = this.findIndex(item);
                    this.carts[founds8].qty += 1;
                    this.carts[founds8].total = this.carts[founds8].qty * this.carts[founds8].price;
                }
            }
            if (item.id == 11) {
                //bye others
                this.coffees8 += 1;
                if (this.coffees8 <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds9 = this.findIndex(item);
                    this.carts[founds9].qty += 1;
                    this.carts[founds9].total = this.carts[founds9].qty * this.carts[founds9].price;
                }
            }
            if (item.id == 12) {
                //bye others
                this.coffees9 += 1;
                if (this.coffees9 <= 1) {
                    //one time in one
                    this.pushData(item)
                } else {
                    //bye the same
                    var founds10 = this.findIndex(item);
                    this.carts[founds10].qty += 1;
                    this.carts[founds10].total = this.carts[founds10].qty * this.carts[founds10].price;
                }
            }
        },
        pushData(item) {
            this.carts.push({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                qty: 1,
                total: item.price
            })
        },
        findIndex: function (item) {
            for (var i = 0; i < this.carts.length; i++) {
                if (this.carts[i].id == item.id) {
                    return i; // find the id
                }
            }
            return -1;
        },
        minusQty: function (product) {
            product.qty -= 1;
            if (product.qty <= 1) {
                product.qty = 1
            }
            product.total = product.price * product.qty;
        },
        plusQty: function (product) {
            product.qty += 1;
            product.total = product.price * product.qty;
        },
        removeProduct(product) {
            if (confirm("Do you sure you want to delete.?")) {
                var index = this.carts.indexOf(product);
                this.carts.splice(index, 1);
                if (product.id == 1) {
                    this.coffee = 0;
                } else {
                    this.tea = 0;
                }
            }
        },
        total: function () {
            var sum = 0;
            this.carts.forEach(function (item) {
                sum += item.total;
            })
            return sum;
        },

        formatPrice(item) {
            let val = (item / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        onMousemove(e) {
            this.x = e.clientX
        },
        computed: {
            filteredproducts() {
                return this.products.filter(PostViews => PostViews.name.toLowerCase().includes(this.search.toLowerCase()));
            }
        }
    }
}
</script>

<style scoped>
.styles {
    width: 100%;
    height: auto;
    border-radius: 4%;
    background-color: rgb(247, 231, 239);
    padding: 2%;
    box-shadow: rgb(7, 117, 44);

}
</style>