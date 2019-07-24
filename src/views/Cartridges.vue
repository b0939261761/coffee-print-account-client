<template>
  <div class = 'cartridges'>
    <div class = 'cartridges__header'>
      <InputText
        v-model = 'cartridgeCode'
        placeholder = 'XXXXXXXXX'
        :label = 'serialNumberText'
        inputmode = 'number'
      />
    </div>

    <CartridgesTable
      :items = 'itemsFiltered'
      :show-modal-remove = 'showModalRemove'
      @remove = 'onRemove'
      @showModalRemove = 'onShowModalRemove'
    />
    <div class = 'cartridges__footer'>
      <BtnBack />
    </div>
  </div>
</template>

<script>
import { getCartridges, removeCartridge } from '@/utils/http';
import CartridgesTable from '@/components/Cartridges/CartridgesTable.vue';
import BtnBack from '@/components/Common/BtnBack.vue';
import InputText from '@/components/Base/InputText.vue';

export default {
  name: 'Cartridges',
  components: {
    CartridgesTable,
    InputText,
    BtnBack
  },
  data: () => ({
    items: [],
    cartridgeCode: '',
    showModalRemove: false
  }),
  computed: {
    serialNumberText() {
      return this.$t('serialNumber');
    },
    itemsFiltered() {
      return this.cartridgeCode
        ? this.items.filter(el => el.code.includes(this.cartridgeCode))
        : this.items;
    }
  },
  async created() {
    const response = await getCartridges();
    const items = (response.data && response.data.items) || [];

    this.items = items.map(el => ({
      ...el,
      active: el.active ? '\u2714' : '',
      printed: el.quantity - el.balance,
      visibleAdditional: false
    }));
  },
  methods: {
    async onRemove(id) {
      await removeCartridge(id);
      this.items = this.items.filter(el => el.id !== id);
      this.showModalRemove = false;
    },
    onShowModalRemove(status) {
      this.showModalRemove = status;
    }
  }
};
</script>

<style scoped>
.cartridges {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f3b4ac;
}

.cartridges__header {
  /* margin-bottom: -1rem; */
  padding: 1rem 1rem 0;
  border-radius: .5rem .5rem 0 0;
  box-shadow: inset .2rem -.2rem 1rem 0 rgba(0, 0, 0, .2);
}

.cartridges__footer {
  display: flex;
  margin-bottom: -1rem;
  padding: 1rem 1rem 0;
  border-radius: .5rem .5rem 0 0;
  box-shadow: inset .2rem -.2rem 1rem 0 rgba(0, 0, 0, .2);
}
</style>
