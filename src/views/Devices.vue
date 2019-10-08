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
      <DevicesTable
        :items = 'itemsFiltered'
        @edit = 'activeUserId = $event'
      />
    </template>

    <template #footer>
      <BtnBack @click = '$router.push({ name: "mainPage" })' />
    </template>

    <template #modal>
      <!-- <FormModalEditUser
        v-if = 'activeDeviceId !== null'
        :user-id = 'activeDeviceId'
        @success = 'onEdit'
        @cancel = 'activeDeviceId = null'
      /> -->
    </template>
  </PageTable>
</template>

<script>
import PageTable from '@/components/Common/Page/PageTable.vue';
import InputText from '@/components/Base/InputText.vue';
import BtnBack from '@/components/Common/BtnBack.vue';

import DevicesTable from '@/components/Devices/DevicesTable.vue';
import FormModalEditUser from '@/components/Users/FormModalEditUser.vue';

import { getDevices } from '@/utils/http';

export default {
  name: 'Devices',
  components: {
    PageTable,
    InputText,
    BtnBack,
    DevicesTable,
    FormModalEditUser
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
  async mounted() {
    try {
      const { data = [] } = await getDevices();
      this.items = data;
    } catch {}
  },
  methods: {
    async onEdit(obj) {
      // try {
      //   if (this.activeDeviceId) {
      //     const { data: user } = await updateUser(obj);
      //     const index = this.items.findIndex(el => el.id === this.activeDeviceId);
      //     if (index) this.$set(this.items, index, user);
      //   } else {
      //     const { data: user } = await addUser(obj);
      //     this.items.unshift(user);
      //   }
      // } catch {}

      this.activeDeviceId = null;
    }
  }
};
</script>
