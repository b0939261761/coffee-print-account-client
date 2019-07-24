<template>
  <table class = 'cartridge-table'>
    <colgroup>
      <col>
      <col class = 'cartridge-table__col-date'>
      <col class = 'cartridge-table__col-btn'>
      <col class = 'cartridge-table__col-btn'>
    </colgroup>

    <tbody>
      <tr class = 'cartridge-table__head-row'>
        <td
          class = 'cartridge-table__head-cell'
          v-text='coffeePrinterText'
        />
        <td
          class = 'cartridge-table__head-cell'
          v-text='lastActiveText'
        />

        <td
          class = 'cartridge-table__body-cell'
          rowspan = '2'
        >
          <BtnTableEdit @click = 'onEdit' />
        </td>
        <td
          class = 'cartridge-table__body-cell'
          rowspan = '2'
        >
          <BtnTableRemove
            :cartridge-code = 'cartridgeCode'
            :show-modal = 'showModalRemove'
            @remove = 'onRemove'
            @showModal = 'onShowModalRemove'
          />
        </td>
      </tr>

      <tr class = 'cartridge-table__body-row'>
        <td
          class = 'cartridge-table__body-cell cartridge-table__body-cell--coffee-printer'
          v-text = 'lastDevice'
        />
        <td
          class = 'cartridge-table__body-cell'
          v-text = 'lastActiveToDate'
        />
      </tr>
    </tbody>
  </table>
</template>

<script>
import { formatDateTime } from '@/utils/date';
import BtnTableEdit from '@/components/Cartridges/BtnTableEdit.vue';
import BtnTableRemove from '@/components/Cartridges/BtnTableRemove.vue';

export default {
  name: 'CartridgeTable',
  components: {
    BtnTableEdit,
    BtnTableRemove
  },
  props: {
    id: {
      required: true,
      type: Number
    },
    cartridgeCode: {
      required: true,
      type: String
    },
    lastDevice: {
      required: true,
      validator: prop => typeof prop === 'string' || prop === null
    },
    lastActive: {
      required: true,
      validator: prop => typeof prop === 'string' || prop === null
    },
    showModalRemove: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    coffeePrinterText() {
      return this.$t('coffeePrinter');
    },
    lastActiveText() {
      return this.$t('lastActive');
    },
    lastActiveToDate() {
      return this.lastActive ? formatDateTime(new Date(this.lastActive)) : '';
    }
  },
  methods: {
    onEdit() {
      this.$emit('onEdit');
    },
    async onRemove() {
      return this.$emit('remove', this.id);
    },
    onShowModalRemove(status) {
      this.$emit('showModalRemove', status);
    }
  }
};
</script>

<style scoped>
.cartridge-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.cartridge-table__col-date {
  width: 7rem;
}

.cartridge-table__col-btn {
  width: 5rem;
}

.cartridge-table__head-row {
  height: 3rem;
  font-size: 1rem;
}

.cartridge-table__head-cell {
  overflow: hidden;
  color: rgba(0, 0, 0, .54);
  border-bottom: .1rem solid rgba(0, 0, 0, .12);
}

.cartridge-table__body-cell {
  padding: 5px;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, .87);
}

.cartridge-table__body-cell--coffee-printer {
  text-align: left;
}
</style>
