<template>
  <div class = 'wrapper-cartridge-table'>
    <table
      v-if = 'items.length'
      class = 'cartridge-table'
    >
      <colgroup>
        <col class = 'cartridge-table__col-serial-number'>
        <col class = 'cartridge-table__col-number'>
        <col class = 'cartridge-table__col-number'>
        <col class = 'cartridge-table__col-number'>
        <col class = 'cartridge-table__col-date'>
      </colgroup>

      <thead>
        <tr class = 'cartridge-table__head-row'>
          <td
            class = 'cartridge-table__head-cell'
            v-text = 'serialNumberText'
          />
          <td
            class = 'cartridge-table__head-cell'
            v-text = 'quantityResourceText'
          />
          <td
            class = 'cartridge-table__head-cell'
            v-text = 'quantityPrintedText'
          />
          <td
            class = 'cartridge-table__head-cell'
            v-text = 'quantityBalanceText'
          />
          <td
            class = 'cartridge-table__head-cell'
            v-text = 'lastActiveText'
          />
        </tr>
      </thead>

      <tbody>
        <template v-for = 'value in items'>
          <tr
            :key = 'value.deviceId'
            class = 'cartridge-table__body-row'
          >
            <td
              class = 'cartridge-table__body-cell cartridge-table__body-cell--coffee-printer'
              v-text = 'value.code'
            />
            <td
              class = 'cartridge-table__body-cell'
              v-text = 'value.quantityResource'
            />
            <td
              class = 'cartridge-table__body-cell'
              v-text = 'value.quantityPrinted'
            />
            <td
              class = 'cartridge-table__body-cell'
              v-text = 'value.quantityBalance'
            />
            <td
              class = 'cartridge-table__body-cell'
              v-text = 'value.lastActive'
            />
          </tr>
        </template>
      </tbody>
    </table>

    <div class = 'cartridge-table__wrapper-buttons'>
      <BtnTableEdit
        :disabled = 'true'
        :show-modal = 'showModalEdit'
        @edit = 'onEdit'
        @showModal = 'onShowModalEdit'
      />
    </div>
  </div>
</template>

<script>
import { formatDateTime } from '@/utils/date';
import BtnTableEdit from '@/components/Devices/BtnTableEdit.vue';

export default {
  name: 'DeviceTable',
  components: {
    BtnTableEdit
  },
  props: {
    item: {
      required: true,
      type: Object
    },
    showModalEdit: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    serialNumberText() {
      return this.$t('serialNumber');
    },
    quantityResourceText() {
      return this.$t('quantityResource');
    },
    quantityPrintedText() {
      return this.$t('quantityPrinted');
    },
    quantityBalanceText() {
      return this.$t('quantityBalance');
    },
    lastActiveText() {
      return this.$t('lastActive');
    },
    items() {
      return this.item.cartridges
        .filter(el => el.cartridgeId)
        .map(el => ({
          cartridgeId: el.cartridgeId,
          code: el.cartridgeCode,
          lastActive: formatDateTime(new Date(el.lastActive)),
          quantityResource: el.quantityResource,
          quantityPrinted: el.quantityPrinted,
          quantityBalance: el.quantityResource - el.quantityPrinted
        }));
    }
  },
  methods: {
    onEdit(obj) {
      this.$emit('edit', { id: this.item.id, ...obj });
    },
    onShowModalEdit(status) {
      this.$emit('showModalEdit', status ? this.item.id : 0);
    }
  }
};
</script>

<style scoped>
.wrapper-cartridge-table {
  display: flex;
}

.cartridge-table {
  flex-grow: 1;
  border-collapse: collapse;
  table-layout: fixed;
}

.cartridge-table__col-serial-number {
  width: 7rem;
}

.cartridge-table__col-date {
  width: 10rem;
}

.cartridge-table__col-number {
  width: 5rem;
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

.cartridge-table__wrapper-buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 1.5rem 1rem;
}

.cartridge-table__buttons-gap {
  width: 3rem;
}
</style>
