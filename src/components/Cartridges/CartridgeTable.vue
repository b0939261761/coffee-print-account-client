<template>
  <div class = 'wrapper-cartridge-table'>
    <table
      v-if = 'devices.length'
      class = 'cartridge-table'
    >
      <colgroup>
        <col>
        <col class = 'cartridge-table__col-date'>
        <col class = 'cartridge-table__col-number'>
      </colgroup>

      <thead>
        <tr class = 'cartridge-table__head-row'>
          <td
            class = 'cartridge-table__head-cell'
            v-text = 'coffeePrinterText'
          />
          <td
            class = 'cartridge-table__head-cell'
            v-text = 'lastActiveText'
          />
          <td
            class = 'cartridge-table__head-cell'
            v-text = 'quantityPrintedText'
          />
        </tr>
      </thead>

      <tbody>
        <template v-for = 'item in devices'>
          <tr
            :key = 'item.deviceId'
            class = 'cartridge-table__body-row'
          >
            <td
              class = 'cartridge-table__body-cell cartridge-table__body-cell--coffee-printer'
              v-text = 'item.device'
            />
            <td
              class = 'cartridge-table__body-cell'
              v-text = 'item.lastActive'
            />
            <td
              class = 'cartridge-table__body-cell'
              v-text = 'item.quantityPrinted'
            />
          </tr>
        </template>
      </tbody>
    </table>

    <div class = 'cartridge-table__wrapper-buttons'>
      <BtnTableEdit
        :code = 'cartridge.code'
        :quantity-resource = 'cartridge.quantityResource'
        :active = 'cartridge.active'
        :show-modal = 'showModalEdit'
        @edit = 'onEdit'
        @showModal = 'onShowModalEdit'
      />

      <div class = 'cartridge-table__buttons-gap' />

      <BtnTableRemove
        :code = 'cartridge.code'
        :show-modal = 'showModalRemove'
        @remove = 'onRemove'
        @showModal = 'onShowModalRemove'
      />
    </div>
  </div>
</template>

<script>
import { numToFormatDateTime } from '@/utils/date';
import BtnTableEdit from '@/components/Cartridges/BtnTableEdit.vue';
import BtnTableRemove from '@/components/Cartridges/BtnTableRemove.vue';

export default {
  name: 'CartridgeTable',
  components: {
    BtnTableEdit,
    BtnTableRemove
  },
  props: {
    cartridge: {
      required: true,
      type: Object
    },
    showModalRemove: {
      required: true,
      type: Boolean
    },
    showModalEdit: {
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
    quantityPrintedText() {
      return this.$t('quantityPrinted');
    },
    devices() {
      return this.cartridge.devices
        .filter(el => el.deviceId)
        .map(el => ({
          deviceId: el.deviceId,
          device: `${el.deviceCode} ${el.deviceCity} (${el.deviceDescription})`,
          lastActive: numToFormatDateTime(el.lastActive),
          quantityPrinted: el.quantityPrinted
        }));
    }
  },
  methods: {
    onRemove() {
      this.$emit('remove', this.cartridge.id);
    },
    onEdit(obj) {
      this.$emit('edit', { id: this.cartridge.id, ...obj });
    },
    onShowModalRemove(status) {
      this.$emit('showModalRemove', status ? this.cartridge.id : 0);
    },
    onShowModalEdit(status) {
      this.$emit('showModalEdit', status ? this.cartridge.id : 0);
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

.cartridge-table__col-date {
  width: 7rem;
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
