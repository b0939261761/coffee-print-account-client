<template>
  <PageCustom>
    <PageBodyMain>
      <template #body>
        <WrapperForm>
          <DatePicker
            :key = '`${$store.state.app.locale}dateFrom`'
            v-model = 'dateFromddd'
            :label = 'dateFromText'
            :max-date = 'dateBy'
          />
          <DatePicker
            :key = '`${$store.state.app.locale}dateBy`'
            v-model = 'dateBy'
            :label = 'dateByText'
            :min-date = 'dateFrom'
          />
          <BtnDownload
            :disabled = '!dateFrom || !dateBy'
            @click = 'onDownload'
          />
        </WrapperForm>
      </template>

      <template #footer>
        <BtnBack @click = '$router.push({ name: "mainPage" })' />
      </template>
    </PageBodyMain>
  </PageCustom>
</template>

<script>
import PageCustom from '@/components/Common/Page/PageCustom.vue';
import PageBodyMain from '@/components/Common/Page/PageBodyMain.vue';
import WrapperForm from '@/components/Common/WrapperForm.vue';
import BtnBack from '@/components/Common/BtnBack.vue';
import DatePicker from '@/components/Base/DatePicker.vue';
import BtnDownload from '@/components/Report/BtnDownload.vue';

export default {
  name: 'Report',
  components: {
    PageCustom,
    PageBodyMain,
    WrapperForm,
    BtnBack,
    DatePicker,
    BtnDownload
  },
  data: () => ({
    dateFrom: null,
    dateBy: null
  }),
  computed: {
    dateFromText() {
      return this.$t('dateFrom');
    },
    dateByText() {
      return this.$t('dateBy');
    }
  },
  methods: {
    onDownload() {
      this.dateStart = '12.12.2019';
    }
  }
};
</script>
