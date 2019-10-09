<template>
  <div class = 'cartridges'>
    <div class = 'cartridges__header'>
      <InputText
        v-model = 'code'
        placeholder = 'XXXXXXXXX'
        :label = 'serialNumberText'
        inputmode = 'number'
      />
    </div>

    <CartridgesTable
      :items = 'itemsFiltered'
      :active-remove-id = 'activeRemoveId'
      :active-edit-id = 'activeEditId'
      @remove = 'onRemove'
      @edit = 'onEdit'
      @showModalRemove = 'onShowModalRemove'
      @showModalEdit = 'onShowModalEdit'
    />
    <div class = 'cartridges__footer'>
      <BtnBack @click = 'onGoBack' />
    </div>
  </div>
</template>

<script>
import { getCartridges, updateCartridge } from '@/utils/http';
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
    code: '',
    activeRemoveId: 0,
    activeEditId: 0
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
    const response = await getCartridges();
    this.items = response.data || [];
  },
  methods: {
    async onRemove(id) {
      // const { data: { id: responseId = id } } = await removeCartridge(id);
      // this.items = this.items.filter(el => el.id !== responseId);
      // this.onShowModalRemove(0);
    },
    async onEdit({ id, quantityResource, active }) {
      const { data: response } = await updateCartridge({ id, quantityResource, active });
      const item = this.items.find(el => el.id === id);
      this.$set(item, 'quantityResource', response.quantityResource);
      this.$set(item, 'active', response.active);
      this.onShowModalEdit(0);
    },
    onShowModalRemove(id) {
      this.activeRemoveId = id;
    },
    onShowModalEdit(id) {
      this.activeEditId = id;
    },
    onGoBack() {
      this.$router.push({ name: 'mainPage' });
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
