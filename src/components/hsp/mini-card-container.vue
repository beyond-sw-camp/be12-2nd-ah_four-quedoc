<template>
<v-divider class="svc-divide" />

                <div class="service-list-area" style="margin-top: 3rem;">
                    <v-row>
                            <hspMiniCard :keySet="keySet" :hsp-info="item" />
                    </v-row>
                </div>
</template>
<script setup>
import hspMiniCard from './hsp-mini-card.vue';
</script>  
<style scoped>
.v-row {
    margin-bottom: 12px;
}
</style>            