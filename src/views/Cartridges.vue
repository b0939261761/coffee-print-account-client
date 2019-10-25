<template>
  <PageTable>
    <template #header>
      <InputText
        v-model = 'code'
        placeholder = 'XXXXXXXXX'
        :label = 'serialNumberText'
        inputmode = 'number'
      />
    </template>
    <template #body>
      <TableWithAdditional
        :items = 'itemsFiltered'
        :columns = '$options.columns'
        @edit = 'activeCartridgeId = $event'
      />
    </template>

    <template #footer>
      <BtnBack @click = '$router.push({ name: "mainPage" })' />
    </template>

    <template #modal>
      <FormModalEditCartridge
        v-if = 'activeCartridgeId !== null'
        :cartridge-id = 'activeCartridgeId'
        @success = 'onEdit'
        @cancel = 'activeCartridgeId = null'
      />
    </template>
  </PageTable>
</template>

<script>
import PageTable from '@/components/Common/Page/PageTable.vue';
import InputText from '@/components/Base/InputText.vue';
import BtnBack from '@/components/Common/BtnBack.vue';
import TableWithAdditional from '@/components/Main/TableWithAdditional.vue';
import FormModalEditCartridge from '@/components/Cartridges/FormModalEditCartridge.vue';

import { numToFormatDateTime } from '@/utils/date';

import { getCartridges, updateCartridge } from '@/utils/http';

export default {
  name: 'Cartridges',
  components: {
    PageTable,
    InputText,
    BtnBack,
    TableWithAdditional,
    FormModalEditCartridge
  },
  data: () => ({
    items: [],
    code: '',
    activeCartridgeId: null
  }),
  computed: {
    serialNumberText() {
      return this.$t('serialNumber');
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
        { title: this.$t('serialNumber'), width: null, value: 'code' },
        { title: this.$t('quantityResource'), width: '5rem', value: 'quantityResource' },
        { title: this.$t('quantityPrinted'), width: '5rem', value: 'quantityPrinted' },
        { title: this.$t('quantityBalance'), width: '5rem', value: 'quantityBalance' },
        { title: this.$t('active'), width: '4rem', value: 'active' }
      ],
      additional: [
        { title: this.$t('owner'), width: null, value: 'userEmail' }
      ],
      children: [
        { title: this.$t('device'), width: null, value: 'device' },
        { title: this.$t('lastActive'), width: '6rem', value: 'lastActive' },
        { title: this.$t('quantityPrinted'), width: '4rem', value: 'quantityPrinted' }
      ]
    };

    try {
      const { data = [] } = await getCartridges();
      this.items = data.map(this.transformItem);
    } catch {}
  },
  methods: {
    transformItem(item) {
      return {
        ...item,
        quantityBalance: item.quantityResource - item.quantityPrinted,
        active: item.active ? '\u2714' : '',
        children: item.devices.map(elChild => ({
          ...elChild,
          device: `${elChild.code} ${elChild.city} (${elChild.description})`,
          lastActive: numToFormatDateTime(elChild.lastActive)
        }))
      };
    },
    async onEdit(obj) {
      try {
        const { data: cartridges } = await updateCartridge(obj);
        const index = this.items.findIndex(el => el.id === this.activeCartridgeId);
        if (index !== -1) this.$set(this.items, index, this.transformItem(cartridges));
      } catch {}

      this.activeCartridgeId = null;
    }
  }
};
</script>
