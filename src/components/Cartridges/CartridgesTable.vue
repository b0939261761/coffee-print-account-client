<template>
  <div class = 'table'>
    <div class = 'wrapper-cartridges-table'>
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

        <template v-for = '(item, index) in itemsOnPage'>
          <tr
            :key = '`row-main-${item.id}`'
            class = 'cartridges-table__body-row'
            :data-index = 'index'
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
              v-text = 'item.activeSymbol'
            />
          </tr>

          <tr
            :key = '`row-additional-${item.id}`'
            class = 'cartridges-table__row-additional'
          >
            <td colspan = '5'>
              <transition name = 'cartridges-table__transition-visible-additional'>
                <div
                  v-if = 'visibleAdditionals[index]'
                  class = 'cartridges-table__wrapper-cartridge-table'
                >
                  <CartridgeTable
                    :id = 'item.id'
                    :code = 'item.code'
                    :quantity = 'item.quantity'
                    :active = 'item.active'
                    :last-device = 'item.lastDevice'
                    :last-active = 'item.lastActive'
                    :show-modal-remove = 'item.id === activeRemoveId'
                    :show-modal-edit = 'item.id === activeEditId'
                    @remove = 'onRemove'
                    @edit = 'onEdit'
                    @showModalRemove = 'onShowModalRemove'
                    @showModalEdit = 'onShowModalEdit'
                  />
                </div>
              </transition>
            </td>
          </tr>
        </template>
      </table>
    </div>
    <div class = 'cartridges-table__footer'>
      <span
        class = 'cartridges-table__footer-pages'
        v-text = 'pages'
      />
      <div class = 'cartridges-table__footer-gap' />
      <BtnTablePrev
        :disabled = 'currentPage === 1'
        @click = 'onPrev'
      />
      <div class = 'cartridges-table__footer-gap' />
      <BtnTableNext
        :disabled = 'currentPage === totalPages'
        @click = 'onNext'
      />
    </div>
  </div>
</template>

<script>
import CartridgeTable from '@/components/Cartridges/CartridgeTable.vue';
import BtnTablePrev from '@/components/Common/BtnTablePrev.vue';
import BtnTableNext from '@/components/Common/BtnTableNext.vue';

const ROWS_PER_PAGE = 10;

export default {
  name: 'CartridgesTable',
  components: {
    CartridgeTable,
    BtnTablePrev,
    BtnTableNext
  },
  props: {
    items: {
      required: true,
      type: Array
    },
    activeRemoveId: {
      required: true,
      type: Number
    },
    activeEditId: {
      required: true,
      type: Number
    }
  },
  data: () => ({
    currentPage: 1,
    visibleAdditionals: []
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
    },
    pages() {
      return `${this.currentPage} / ${this.totalPages}`;
    },
    totalPages() {
      return Math.ceil(this.items.length / ROWS_PER_PAGE) || 1;
    },
    itemsOnPage() {
      const items = this.items.slice((this.currentPage - 1) * ROWS_PER_PAGE,
        this.currentPage * ROWS_PER_PAGE);

      return items.map(el => ({
        ...el,
        activeSymbol: el.active ? '\u2714' : '',
        balance: el.quantity - el.printed
      }));
    }
  },
  watch: {
    items() {
      this.currentPage = 1;
    },
    currentPage: {
      immediate: true,
      handler() {
        this.visibleAdditionals = Array(ROWS_PER_PAGE);
      }
    }
  },
  methods: {
    onRowClick(event) {
      const index = +event.currentTarget.dataset.index;
      this.$set(this.visibleAdditionals, index, !this.visibleAdditionals[index]);
    },
    onRemove(id) {
      this.$emit('remove', id);
    },
    onEdit(obj) {
      this.$emit('edit', obj);
    },
    onShowModalRemove(id) {
      this.$emit('showModalRemove', id);
    },
    onShowModalEdit(id) {
      this.$emit('showModalEdit', id);
    },
    onPrev() {
      --this.currentPage;
    },
    onNext() {
      ++this.currentPage;
    }
  }
};
</script>

<style scoped>
.table {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  background-color: white;
}

.wrapper-cartridges-table {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
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

.cartridges-table__footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  padding: .5rem 1.5rem .5rem 0;
  border-top: 1px solid rgba(0, 0, 0, .12);
}

.cartridges-table__footer-pages {
  font-size: 1.5rem;
}

.cartridges-table__footer-gap {
  width: 3rem;
}
</style>
