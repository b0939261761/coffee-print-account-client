<template>
  <FormModalEdit
    :disabled-success = 'disabledSuccess'
    :title-text = 'titleText'
    @cancel = '$emit("cancel")'
    @success = 'onSuccess'
  >
    <InputText
      v-model = 'city'
      placeholder = 'London'
      :label = 'cityText'
    />

    <InputText
      v-model = 'description'
      placeholder = 'Client info, address'
      :label = 'descriptionText'
    />

    <SelectCustom
      v-model = 'userId'
      :data = 'usersData'
      placeholder = 'Выбирите родителя'
    />
  </FormModalEdit>
</template>

<script>
import FormModalEdit from '@/components/Main/FormModalEdit.vue';
import InputText from '@/components/Base/InputText.vue';
import SelectCustom from '@/components/Base/SelectCustom.vue';

import { getDevice, getUserChildren } from '@/utils/http';

export default {
  name: 'FormModalEditDevice',
  components: {
    FormModalEdit,
    InputText,
    SelectCustom
  },
  props: {
    deviceId: {
      required: true,
      type: Number
    }
  },
  data: () => ({
    device: {},
    city: '',
    description: '',
    userId: 0,
    usersData: []
  }),
  computed: {
    titleText() {
      return this.$t('modalTitleEditDevice', [this.device.code]);
    },
    cityText() {
      return this.$t('city');
    },
    descriptionText() {
      return this.$t('description');
    },
    disabledSuccess() {
      return false;
    }
  },
  async created() {
    try {
      const { data: device } = await getDevice(this.deviceId);
      this.device = device;

      this.code = this.device.code;
      this.city = this.device.city;
      this.description = this.device.description;
      this.userId = this.device.userId;

      const { data: responseUsers } = await getUserChildren();
      this.usersData = responseUsers.map(el => ({ value: el.id, label: el.email }));
    } catch (err) {}
  },
  methods: {
    onSuccess() {
      this.$emit('success', {
        id: this.device.id,
        city: this.city,
        description: this.description,
        userId: this.userId
      });
    }
  }
};
</script>
