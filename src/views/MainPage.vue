<template>
  <div class = 'main-page'>
    <SelectLanguage />

    <div class = 'main-page__wrapper-buttons'>
      <BtnCartridges @click = 'onGoCartridges' />

      <BtnDevices @click = 'onGoDevices' />
    </div>
  </div>
</template>

<script>
import BtnCartridges from '@/components/MainPage/BtnCartridges.vue';
import BtnDevices from '@/components/MainPage/BtnDevices.vue';
import SelectLanguage from '@/components/Common/SelectLanguage.vue';

export default {
  name: 'MainPage',
  components: {
    SelectLanguage,
    BtnCartridges,
    BtnDevices
  },
  methods: {
    onGoCartridges() {
      this.$router.push({ name: 'cartridges' });
    },
    onGoDevices() {
      this.$router.push({ name: 'devices' });
    }
  }
};
</script>

<style scoped>
.main-page {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.main-page__wrapper-buttons {
  max-width: 20rem;
}
</style>
