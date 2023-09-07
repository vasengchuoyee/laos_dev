<template>
    <v-app-bar color="teal-darken-4"
        image="https://static.vecteezy.com/system/resources/previews/002/412/377/original/coffee-cup-logo-coffee-shop-icon-design-free-vector.jpg"
        width="100" height="80">
        <template v-slot:image>
            <v-img gradient="to top right, rgba(19,84,122,.8), rgba(133,299,199,.8)"></v-img>
        </template>

        <template v-slot:prepend>
            <div class="text-center">
                <v-menu open-on-hover>
                    <template v-slot:activator="{ props }">
                        <v-btn color="blark" v-bind="props">
                            <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-col>
                            <v-col>
                                <v-icon>mdi-account</v-icon><a href="/admins">Admins</a>
                            </v-col>
                            <v-col>
                                <v-icon>mdi-email</v-icon><a href="/logins">Logins</a>
                            </v-col>                           
                        </v-col>
                                            
                    </v-list>
                </v-menu>
            </div>
        </template>

        <v-app-bar-title style="color:  red; font-weight: 600; font-size: 200%;">VUETIFY ONLINESHOP</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-row>
            <v-card-text>
                <v-text-field :loading="loading" density="compact" variant="solo" label="Search products"
                    append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"></v-text-field>
            </v-card-text>
        </v-row>
    </v-app-bar>
</template>

<script>

export default {
    data: () => ({
        
      
    }),
}




</script>

<style></style>