<template>
  <FormModalEdit
    :disabled-success = 'disabledSuccess'
    :title-text = 'titleText'
    @cancel = '$emit("cancel")'
    @success = 'onSuccess'
  >
    <InputText
      v-model = 'quantityResource'
      placeholder = 'XXXXX'
      :label = 'quantityResourceText'
      type = 'number'
      inputmode = 'number'
    />

    <InputSwitch
      v-model = 'active'
      :label = 'activeText'
    />

    <SelectCustom
      v-if = '$store.state.auth.roleId < 4'
      v-model = 'userId'
      :data = 'usersData'
      placeholder = 'Выбирите родителя'
    />
  </FormModalEdit>
</template>

<script>
import FormModalEdit from '@/components/Main/FormModalEdit.vue';
import InputText from '@/components/Base/InputText.vue';
import InputSwitch from '@/components/Base/InputSwitch.vue';
import SelectCustom from '@/components/Base/SelectCustom.vue';

import { getCartridge, getUserChildren } from '@/utils/http';

export default {
  name: 'FormModalEditCartridge',
  components: {
    FormModalEdit,
    InputText,
    InputSwitch,
    SelectCustom
  },
  props: {
    cartridgeId: {
      required: true,
      type: Number
    }
  },
  data: () => ({
    cartridge: {},
    quantityResource: 0,
    active: false,
    userId: 0,
    usersData: []
  }),
  computed: {
    titleText() {
      return this.$t('modalTitleEditCartridge', [this.cartridge.code]);
    },
    quantityResourceText() {
      return `${this.$t('quantityResource')}`;
    },
    activeText() {
      return `${this.$t('active')}`;
    },
    disabledSuccess() {
      return false;
    }
  },
  async created() {
    try {
      const { data: cartridge } = await getCartridge(this.cartridgeId);
      this.cartridge = cartridge;

      this.quantityResource = this.cartridge.quantityResource;
      this.active = this.cartridge.active;
      this.userId = this.cartridge.userId;

      const { data: responseUsers } = await getUserChildren();
      this.usersData = responseUsers.map(el => ({ value: el.id, label: el.email }));
    } catch (err) {}
  },
  methods: {
    onSuccess() {
      this.$emit('success', {
        id: this.cartridge.id,
        quantityResource: this.quantityResource,
        active: this.active,
        userId: this.userId
      });
    }
  }
};
</script>
