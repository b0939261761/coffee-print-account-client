<template>
  <PageTable>
    <template #header>
      <InputText
        v-model = 'code'
        placeholder = 'XXXXXXXXX'
        :label = 'codeText'
        inputmode = 'number'
      />
    </template>
    <template #body>
      <TableWithAdditional
        :items = 'itemsFiltered'
        :columns = '$options.columns'
        @edit = 'activeDeviceId = $event'
      />
    </template>

    <template #footer>
      <BtnBack @click = '$router.push({ name: "mainPage" })' />
    </template>

    <template #modal>
      <FormModalEditDevice
        v-if = 'activeDeviceId !== null'
        :device-id = 'activeDeviceId'
        @success = 'onEdit'
        @cancel = 'activeDeviceId = null'
      />
    </template>
  </PageTable>
</template>

<script>
import PageTable from '@/components/Common/Page/PageTable.vue';
import InputText from '@/components/Base/InputText.vue';
import BtnBack from '@/components/Common/BtnBack.vue';
import TableWithAdditional from '@/components/Main/TableWithAdditional.vue';
import FormModalEditDevice from '@/components/Devices/FormModalEditDevice.vue';

import { versionCodeToName } from '@/utils/tools';
import { numToFormatDateTime } from '@/utils/date';

import { getDevices, updateDevice } from '@/utils/http';

export default {
  name: 'Devices',
  components: {
    PageTable,
    InputText,
    BtnBack,
    TableWithAdditional,
    FormModalEditDevice
  },
  data: () => ({
    items: [],
    code: '',
    activeDeviceId: null
  }),
  computed: {
    codeText() {
      return this.$t('code');
    },
    itemsFiltered() {
      return this.code
        ? this.items.filter(el => el.code.includes(this.code))
        : this.items;
    }
  },
  async created() {
    this.$options.columns = {
      main: [
        { title: this.$t('code'), width: '5rem', value: 'code' },
        { title: this.$t('owner'), width: null, value: 'userEmail' },
        { title: this.$t('quantityPrinted'), width: '5rem', value: 'quantityPrinted' }
      ],
      additional: [
        { title: this.$t('appVersion'), width: '5rem', value: 'appVersionName' },
        { title: this.$t('city'), width: null, value: 'city' },
        { title: this.$t('description'), width: null, value: 'description' }
      ],
      children: [
        { title: this.$t('serialNumber'), width: null, value: 'code' },
        { title: this.$t('quantityResource'), width: '4rem', value: 'quantityResource' },
        { title: this.$t('quantityPrinted'), width: '4rem', value: 'quantityPrinted' },
        { title: this.$t('quantityBalance'), width: '4rem', value: 'quantityBalance' },
        { title: this.$t('lastActive'), width: '6rem', value: 'lastActive' }
      ]
    };

    try {
      const { data = [] } = await getDevices();

      this.items = data.map(this.transformItem);
    } catch {}
  },
  methods: {
    transformItem(item) {
      return {
        ...item,
        appVersionName: versionCodeToName(item.appVersionCode),
        children: item.cartridges.map(elChild => ({
          ...elChild,
          lastActive: numToFormatDateTime(elChild.lastActive),
          quantityBalance: elChild.quantityResource - elChild.quantityPrinted
        }))
      };
    },
    async onEdit(obj) {
      try {
        const { data: device } = await updateDevice(obj);
        const index = this.items.findIndex(el => el.id === this.activeDeviceId);
        if (index !== -1) this.$set(this.items, index, this.transformItem(device));
      } catch {}

      this.activeDeviceId = null;
    }
  }
};
</script>
