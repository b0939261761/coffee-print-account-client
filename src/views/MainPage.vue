<template>
  <PageCustom>
    <SelectLanguage />

    <div class = 'main-page__wrapper-buttons'>
      <BtnCartridges @click = '$router.push({ name: "cartridges" })' />
      <BtnDevices @click = '$router.push({ name: "devices" })' />
      <BtnUsers @click = '$router.push({ name: "users" })' />
      <BtnSignOut @click = 'onSignOut' />
    </div>
  </PageCustom>
</template>

<script>
import PageCustom from '@/components/Common/Page/PageCustom.vue';
import SelectLanguage from '@/components/Common/SelectLanguage.vue';
import BtnCartridges from '@/components/MainPage/BtnCartridges.vue';
import BtnDevices from '@/components/MainPage/BtnDevices.vue';
import BtnUsers from '@/components/MainPage/BtnUsers.vue';
import BtnSignOut from '@/components/MainPage/BtnSignOut.vue';

import { authLogout } from '@/utils/http';

export default {
  name: 'MainPage',
  components: {
    PageCustom,
    SelectLanguage,
    BtnCartridges,
    BtnDevices,
    BtnUsers,
    BtnSignOut
  },
  methods: {
    async onSignOut() {
      try {
        await authLogout();
      } catch (err) {
        if (err.message === 'REFRESH_TOKEN_INVALID') return;
      }
      this.$store.dispatch('auth/removeTokens');
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
.main-page__wrapper-buttons {
  max-width: 20rem;
}
</style>
