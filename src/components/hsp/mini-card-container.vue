<template>
<v-divider class="svc-divide" />

                <div class="service-list-area" style="margin-top: 3rem;">
                    <v-row>
                        <v-col cols="12" md="6" >
                            <hspMiniCard :keySet="keySet" :hsp-info="item" />

                        </v-col>
                    </v-row>
                </div>
</template>
<script setup>
import hspMiniCard from './hsp-mini-card.vue';
</script>  
<style scoped>
</style>            