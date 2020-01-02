<template>
  <PageCustom>
    <PageBodyMain>
      <template #body>
        <SelectLanguage />

        <WrapperForm>
          <BtnCartridges @click = '$router.push({ name: "cartridges" })' />
          <BtnDevices @click = '$router.push({ name: "devices" })' />
          <BtnUsers @click = '$router.push({ name: "users" })' />
          <BtnReport @click = '$router.push({ name: "report" })' />
        </WrapperForm>
      </template>

      <template #footer>
        <BtnSignOut @click = 'onSignOut' />
      </template>
    </PageBodyMain>
  </PageCustom>
</template>

<script>
import PageCustom from '@/components/Common/Page/PageCustom.vue';
import PageBodyMain from '@/components/Common/Page/PageBodyMain.vue';
import WrapperForm from '@/components/Common/WrapperForm.vue';
import SelectLanguage from '@/components/Common/SelectLanguage.vue';
import BtnCartridges from '@/components/MainPage/BtnCartridges.vue';
import BtnDevices from '@/components/MainPage/BtnDevices.vue';
import BtnUsers from '@/components/MainPage/BtnUsers.vue';
import BtnReport from '@/components/MainPage/BtnReport.vue';
import BtnSignOut from '@/components/MainPage/BtnSignOut.vue';

import { authLogout } from '@/utils/http';

export default {
  name: 'MainPage',
  components: {
    PageCustom,
    PageBodyMain,
    WrapperForm,
    SelectLanguage,
    BtnCartridges,
    BtnDevices,
    BtnUsers,
    BtnReport,
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
