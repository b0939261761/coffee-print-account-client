<template>
  <FormModalEdit
    :disabled-success = 'disabledSuccess'
    :title-text = 'titleText'
    @cancel = '$emit("cancel")'
    @success = 'onSuccess'
  >
    <InputText
      v-model = 'email'
      placeholder = 'user@email.com'
      :label = 'emailText'
      inputmode = 'email'
    />

    <InputPassword
      v-model = 'password'
      placeholder = 'xxxxxxxx'
      :label = 'passwordText'
    />

    <InputRadio
      v-if = '!isEdit'
      v-model = 'roleId'
      :label = 'roleText'
      :data = 'rolesData'
      @input = 'onInput'
    />

    <SelectCustom
      v-if = '!isEdit'
      v-model = 'parentId'
      :data = 'usersData'
      placeholder = 'Выбирите родителя'
      :disabled = 'roleId === 1'
    />
  </FormModalEdit>
</template>

<script>
import FormModalEdit from '@/components/Main/FormModalEdit.vue';
import InputText from '@/components/Base/InputText.vue';
import InputPassword from '@/components/Base/InputPassword.vue';
import InputRadio from '@/components/Base/InputRadio.vue';
import SelectCustom from '@/components/Base/SelectCustom.vue';

import { getRoles, getUser, getUserList } from '@/utils/http';

export default {
  name: 'FormModalEditUser',
  components: {
    FormModalEdit,
    InputText,
    InputPassword,
    InputRadio,
    SelectCustom
  },
  props: {
    userId: {
      required: true,
      type: Number
    }
  },
  data: () => ({
    user: {},
    email: '',
    password: '',
    roleId: 4,
    parentId: 0,
    rolesData: [],
    usersData: []
  }),
  computed: {
    isEdit() {
      return Boolean(this.userId);
    },
    titleText() {
      return this.isEdit
        ? this.$t('modalTitleEditUser', [this.user.email])
        : this.$t('modalTitleAddUser');
    },
    emailText() {
      return this.$t('email');
    },
    passwordText() {
      return this.$t('password');
    },
    roleText() {
      return this.$t('role');
    },
    disabledSuccess() {
      return this.email === this.user.email;
    }
  },
  async created() {
    try {
      if (this.isEdit) {
        const { data: user } = await getUser(this.userId);
        this.user = user;

        this.email = this.user.email;
        this.roleId = this.user.roleId;
        this.parentId = this.user.parentId;
      }

      const { data: responseRoles } = await getRoles();
      const rolesData = responseRoles.map(el => ({ value: el.id, label: this.$t(el.name) }));
      this.rolesData = rolesData.reverse();
    } catch (err) {}

    await this.getUserList();
  },
  methods: {
    async getUserList() {
      if (this.roleId === 1) {
        this.usersData = [];
        return;
      }
      try {
        const { data: responseUsers } = await getUserList({ roleId: this.roleId });
        const usersData = responseUsers.map(el => ({ value: el.id, label: el.email }));
        this.usersData = usersData;
      } catch (err) { }
    },
    async onInput() {
      await this.getUserList();
    },
    onSuccess() {
      this.$emit('success', {
        email: this.email,
        roleId: this.roleId,
        parentId: this.parentId,
        password: this.password
      });
    }
  }
};
</script>
