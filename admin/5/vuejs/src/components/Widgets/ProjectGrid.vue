<template>
   <div class="app-card-content pt-0">
      <div class="desc-wrap">   
         <h6>Description :</h6>
         <p>
            {{ newManagementData.description }}
         </p>
      </div>   
      <div class="mb-4 project-team">
         <h6>Team Members :</h6>
         <div>
            <img class="img-circle thumb-gap rounded-circle" width="30px" height="30px" 
               v-for="(img,index) in newManagementData.teamImage" :key="index"
               :src="img"/>            
         </div>
      </div>   
      <div class="deadline-info mb-4">
         <h6>Deadline :</h6>
         <p>{{ newManagementData.deadline }}</p>
      </div>   
      <div class="progress-bar mb-5">
         <h6 class="v-input__prepend-outer mb-5">
            Progress : {{ newManagementData.progressValue }} %
         </h6>
         <div class="d-flex justify-space-between text-center pa-0">
            <v-progress-linear v-if="newManagementData" v-model="newManagementData.progressValue" color="primary" height="7"></v-progress-linear>
         </div>
      </div>   
      <div class="button-wrap text-right"> 
         <v-btn color="primary" medium 
            :to="`/${getCurrentAppLayoutHandler() + '/crm/projectDetails/'+ newManagementData.id}`">
            Learn More
         </v-btn>
      </div>            
   </div>
</template>
<script>
// import api from "Api";
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
   props:['managementData'],
   data: function () {
        return {
            newManagementData: this.managementData
        }
    },   
   methods: {
      getCurrentAppLayoutHandler() {
         return getCurrentAppLayout(this.$router);
      }
   }
};
</script>