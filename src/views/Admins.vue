 <template>
    <v-container>
       
                <v-navigation-drawer expand-on-hover rail>
                    <v-list>
                        <v-list-item
                            prepend-avatar="https://cdn5.vectorstock.com/i/1000x1000/88/54/happy-family-logo-or-icon-created-with-three-vector-31228854.jpg"
                            title="Forest Family" subtitle="energyforest@gmailcom"></v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list density="compact" nav>
                        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
                        <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me"
                            value="shared"></v-list-item>
                        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
                    </v-list>
                </v-navigation-drawer>
           

        <v-img class="container" src="/mypicture.jpg" style="width: 30%;
    height: 20%"></v-img>
        <br>
        <h4 class="textt">Name and last name: VASENG CHUOYEE </h4>
        <br>
        <h4>Stadies in Souphanouvong University</h4>
        <h4>at faculty of engyneering, computer engyneering in years 3.</h4>
        <br>
        <h3>contect Me:</h3>

        <v-list>
            <v-list-item append-icon="mdi-message-text" prepend-icon="mdi-phone" title="+856 2077474616"></v-list-item>

            <v-divider inset></v-divider>

            <v-list-item append-icon="mdi-message-text" prepend-icon="mdi-phone" title="+856 2091780353"></v-list-item>

            <v-divider inset></v-divider>

            <v-list-item prepend-icon="mdi-facebook"><a
                    href="https://www.facebook.com/energy.forest.9/">Facebook</a></v-list-item>

            <v-divider inset></v-divider>

            <v-list-item prepend-icon="mdi-whatsapp"><a
                    href="https://api.whatsapp.com/send?phone=2077474616&text= [ສະບາຍດີ.] ">whatsapp</a></v-list-item>


            <v-divider inset></v-divider>

            <v-list-item prepend-icon="mdi-email" title="vasengchuoyee@gmail.com"></v-list-item>

            <v-divider inset></v-divider>

            <v-list-item prepend-icon="mdi-map-marker"><a href="https://www.google.com/maps/place/%E0%BA%A1%E0%BA%B0%E0%BA%AB%E0%BA%B2%E0%BA%A7%E0%BA%B4%E0%BA%97%E0%BA%B0%E0%BA%8D%E0%BA%B2%E0%BB%84%E0%BA%A5%E0%BA%AA%E0%BA%B8%E0%BA%9E%E0%BA%B2%E0%BA%99%E0%BA%B8%E0%BA%A7%E0%BA%BB%E0%BA%87/@19.8931704,101.7727633,10.25z/data=!4m10!1m2!2m1!1ssuophanuvong+university!3m6!1s0x312ed63d67736b31:0x7c260ec78a32d98b!8m2!3d19.9218398!4d102.1869784!15sChdzdW9waGFudXZvbmcgdW5pdmVyc2l0eZIBBnNjaG9vbOABAA!16s%2Fm%2F0h3lx_r?entry=ttu">Location</a></v-list-item>
        </v-list>

    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    margin-top: 10px;


}

.textt {
    color: #000;
}
</style> 



