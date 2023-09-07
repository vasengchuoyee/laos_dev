<template>
    <v-card> 
      <v-card class="mx-auto" max-width="500" title="ຂໍ້ມູນທີ່ສຳຄັນຂອງລູກຄ້າ">
        <v-container class="fontss">
          <v-text-field v-model="text" color="primary" label="ຊື່ ແລະ ນາມສະກຸນ" variant="underlined"></v-text-field>
  
          <v-text-field v-model="text" color="primary" label="ເບີໂທ" variant="underlined"></v-text-field>
  
          <v-text-field v-model="text" color="primary" label="ເບີວອດແອບ" variant="underlined"></v-text-field>
  
          <v-text-field v-model="text" color="primary" label="ຊື່ບໍລິສັດຂົນສົ່ງ" variant="underlined"></v-text-field>
  
  
          <v-text-field v-model="text" color="primary" label="ສາຂາ-ປາຍທາງ" variant="underlined"></v-text-field>
          <br>
          <h4>ຂໍອານຸຍາດສຳລະຄ່າສິ້ນຄ້າ</h4>
          <!-- <h4>the total price: {{ formatPrice(product.total) }}</h4> -->
          <v-img src="qrcode.png" style="width:160px; height:160px;"></v-img>
  
  
  
          <v-checkbox v-model="terms" color="succeses" label="ກາລຸນາກວດສອບໃຫ້ແນ່ໃຈວ່າຂໍ້ມູນທີ່ສົ່ງຖືກຕ້ອງ"></v-checkbox>
        </v-container>
  
        <div class="button">
          <v-btn color="green">order</v-btn>
  
        <v-icon icon="mdi-chevron-right" end></v-icon>
        </div>
      </v-card>
      <br>
    
    </v-card>
  </template>
   
  <script>

  
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Homeview',
    components: {
     
    },
    data: () => ({
      first: null,
      last: null,
      email: null,
      password: null,
      terms: false,
    }),
  
  })
  </script>
  
  <style scoped>
   .mx-auto {
     background-color: rgb(198, 185, 245);
     font-family: 'Noto Sans Lao', sans-serif;
   }
  
   .button {
    margin-left:70%;
    padding:2px;
   }

  .fontss {
    font-family: 'Noto Sans Lao', sans-serif; 
   }
  </style>