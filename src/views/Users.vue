<template>
  <PageTable>
    <template #header>
      <InputText
        v-model = 'email'
        placeholder = 'user@email.com'
        :label = 'emailText'
        inputmode = 'email'
      />
    </template>
    <template #body>
      <UsersTable
        :items = 'itemsFiltered'
        @edit = 'activeUserId = $event'
      />
    </template>

    <template #footer>
      <BtnBack
        margin-right = '1rem'
        @click = '$router.push({ name: "mainPage" })'
      />
      <BtnAdd
        margin-left = '1rem'
        @click = 'activeUserId = 0'
      />
    </template>

    <template #modal>
      <FormModalEditUser
        v-if = 'activeUserId !== null'
        :user-id = 'activeUserId'
        @success = 'onEdit'
        @cancel = 'activeUserId = null'
      />
    </template>
  </PageTable>
</template>

<script>
import PageTable from '@/components/Common/Page/PageTable.vue';
import InputText from '@/components/Base/InputText.vue';
import BtnBack from '@/components/Common/BtnBack.vue';
import BtnAdd from '@/components/Common/BtnAdd.vue';

import UsersTable from '@/components/Users/UsersTable.vue';
import FormModalEditUser from '@/components/Users/FormModalEditUser.vue';

import { getUsers, addUser, updateUser } from '@/utils/http';

export default {
  name: 'Users',
  components: {
    PageTable,
    InputText,
    BtnBack,
    BtnAdd,
    UsersTable,
    FormModalEditUser
  },
  data: () => ({
    items: [],
    email: '',
    activeUserId: null
  }),
  computed: {
    emailText() {
      return this.$t('email');
    },
    itemsFiltered() {
      return this.email
        ? this.items.filter(el => el.email.includes(this.email))
        : this.items;
    }
  },
  async mounted() {
    try {
      const { data = [] } = await getUsers();
      this.items = data.map(el => ({ ...el, roleName: this.$t(el.roleName) }));
    } catch {}
  },
  methods: {
    async onEdit(obj) {
      try {
        if (this.activeUserId) {
          const { data: user } = await updateUser(obj);
          const index = this.items.findIndex(el => el.id === this.activeUserId);
          if (index !== -1) this.$set(this.items, index, user);
        } else {
          const { data: user } = await addUser(obj);
          this.items.unshift(user);
        }
      } catch {}

      this.activeUserId = null;
    }
  }
};
</script>
