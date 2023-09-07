<template>
    <v-footer class="bg-pink-lighten-1 text-center d-flex flex-column">
        <!-- <v-card style="background-color: green;"> -->
            <v-row cols="12">
                <v-col cols="6">
                    <v-row class="padd">
                        <v-icon>mdi-facebook</v-icon> <a href="https://www.facebook.com/energy.forest.9/">Facebook</a>
                    </v-row>

                    <v-row class="padd">
                        <v-icon>mdi-whatsapp</v-icon><a
                            href="https://api.whatsapp.com/send?phone=2077474616&text= [ສະບາຍດີ.] ">whatsapp</a>
                    </v-row>
                    <v-row class="padd">
                        <v-icon>mdi-phone</v-icon><a>call: 02077474616</a>
                    </v-row>
                    <v-row class="padd">
                        <v-icon>mdi-email</v-icon><a>Email: vasengchuoyee@gmail.com</a>
                    </v-row>
                    <v-row class="padd">
                        <v-icon>mdi-map-marker</v-icon><a
                            href="https://www.google.com/maps/place/%E0%BA%A1%E0%BA%B0%E0%BA%AB%E0%BA%B2%E0%BA%A7%E0%BA%B4%E0%BA%97%E0%BA%B0%E0%BA%8D%E0%BA%B2%E0%BB%84%E0%BA%A5%E0%BA%AA%E0%BA%B8%E0%BA%9E%E0%BA%B2%E0%BA%99%E0%BA%B8%E0%BA%A7%E0%BA%BB%E0%BA%87/@19.8931704,101.7727633,10.25z/data=!4m10!1m2!2m1!1ssuophanuvong+university!3m6!1s0x312ed63d67736b31:0x7c260ec78a32d98b!8m2!3d19.9218398!4d102.1869784!15sChdzdW9waGFudXZvbmcgdW5pdmVyc2l0eZIBBnNjaG9vbOABAA!16s%2Fm%2F0h3lx_r?entry=ttu">Location</a>
                    </v-row>
                </v-col>

                <v-col cols="6">
                    <div class="pt-0">
                        ຮ້ານ vuejs_onlineshop ຂອງພວກເຮົາຕັ້ງຢູ່ ບ້ານ ພູເຫຼັກຈະເລີນ, ຮ່ອມ8, ຕິດກັບທາງຂ້າງສູນພາສາຈີນ ລ້ານຊ້າງ
                    </div>

                    <v-divider></v-divider>
                    <div>
                        {{ new Date() }}
                    </div>

                    <div>
                        {{ new Date().getFullYear() }} — <strong>@VASENG CHUOYEE</strong>
                    </div>
                </v-col>
            </v-row>
            <div class="text-center">
                <v-rating v-model="rating" hover half-increments></v-rating>
                <pre>{{ rating }}</pre>
            </div>
        <!-- </v-card> -->
    </v-footer>
</template>

<script>
export default {

    data: () => ({
        rating: 2.5,
    }),
}


</script>

<style scoped>
.pt-0 {
    font-family: 'Noto Sans Lao', sans-serif;
}

.padd {
    padding: 10px;
}
</style>