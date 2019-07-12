<template>
  <div class = 'cartridges'>
    <table class = 'cartridges-table'>
      <colgroup>
        <col class = 'cartridges-table__col-serial-number'>
        <col class = 'cartridges-table__col-number'>
        <col class = 'cartridges-table__col-number'>
        <col class = 'cartridges-table__col-number'>
        <col class = 'cartridges-table__col-active'>
      </colgroup>

      <thead>
        <tr class = 'cartridges-table__head-row'>
          <th
            class = 'cartridges-table__head-cell'
            v-text='serialNumberText'
          />
          <th
            class = 'cartridges-table__head-cell'
            v-text='quantityText'
          />
          <th
            class = 'cartridges-table__head-cell'
            v-text='printedText'
          />
          <th
            class = 'cartridges-table__head-cell'
            v-text='balanceText'
          />
          <th
            class = 'cartridges-table__head-cell'
            v-text='activeText'
          />
        </tr>
      </thead>

      <template v-for = 'item in items'>
        <tr
          :key = '`row-main-${item.id}`'
          class = 'cartridges-table__body-row'
          :data-id = 'item.id'
          @click = 'onRowClick'
        >
          <td
            class = 'cartridges-table__body-cell'
            v-text = 'item.code'
          />
          <td
            class = 'cartridges-table__body-cell'
            v-text = 'item.quantity'
          />
          <td
            class = 'cartridges-table__body-cell'
            v-text = 'item.printed'
          />
          <td
            class = 'cartridges-table__body-cell'
            v-text = 'item.balance'
          />
          <td
            class = 'cartridges-table__body-cell'
            v-text = 'item.active'
          />
        </tr>

        <tr
          :key = '`row-additional-${item.id}`'
          class = 'cartridges-table__row-additional'
        >
          <td colspan = '5'>
            <transition name = 'cartridges-table__transition-visible-additional'>
              <div
                v-if = 'item.visibleAdditional'
                class = 'cartridges-table__wrapper-cartridge-table'
              >
                <CartridgeTable
                  :cartridge-code = 'item.code'
                  :last-device = 'item.lastDevice'
                  :last-active = 'item.lastActive'
                />
              </div>
            </transition>
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import { getCartridges } from '@/utils/http';
import CartridgeTable from '@/components/Cartridges/CartridgeTable.vue';

export default {
  name: 'Cartridges',
  components: {
    CartridgeTable
  },
  data: () => ({
    items: []
  }),
  computed: {
    serialNumberText() {
      return this.$t('serialNumber');
    },
    quantityText() {
      return this.$t('quantity');
    },
    printedText() {
      return this.$t('printed');
    },
    balanceText() {
      return this.$t('balance');
    },
    activeText() {
      return this.$t('active');
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
    onRowClick(event) {
      const id = +event.currentTarget.dataset.id;
      const item = this.items.find(el => el.id === id);
      item.visibleAdditional = !item.visibleAdditional;
    }
  }
};
</script>

<style scoped>
.cartridges {
  width: 100%;
  height: 100%;
  padding: .5rem;
  overflow-y: auto;
  background-color: white;
}

.cartridges-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 1.2rem;
  background-color: white;
}

.cartridges-table__col-serial-number {
  width: 7rem;
}

.cartridges-table__col-number {
  width: 5rem;
}

.cartridges-table__col-active {
  width: 2rem;
}

.cartridges-table__head-row {
  height: 5.6rem;
  border-bottom: .1rem solid rgba(0, 0, 0, .12);
}

.cartridges-table__head-cell {
  overflow: hidden;
  color: rgba(0, 0, 0, .54);
}

.cartridges-table__body-row {
  cursor: pointer;
}

.cartridges-table__body-cell {
  padding: .5rem;
  font-size: 1.3rem;
  color: rgba(0, 0, 0, .87);
}

.cartridges-table__row-additional {
  border-bottom: .1rem solid rgba(0, 0, 0, .5);
}

.cartridges-table__wrapper-cartridge-table {
  max-height: 10rem;
}

.cartridges-table__transition-visible-additional-enter-active,
.cartridges-table__transition-visible-additional-leave-active {
  transition:
    max-height .3s linear,
    opacity .3s linear;
}

.cartridges-table__transition-visible-additional-enter,
.cartridges-table__transition-visible-additional-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
