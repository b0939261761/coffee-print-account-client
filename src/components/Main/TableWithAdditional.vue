<template>
  <PageBodyTable
    :columns = 'columnsMain'
    :current-page = 'currentPage'
    :item-count = 'items.length'
    :rows-per-page = '$options.rowsPerPage'
    @changePage = 'currentPage = $event'
  >
    <template #body>
      <template v-for = 'item in itemsOnPage'>
        <TableBodyRow
          :key = '`1${item.id}`'
          :data-index = 'item.id'
          @click = 'onRowClick'
        >
          <TableBodyCell
            v-for = '(value, index) in columnsMain'
            :key = 'index'
            v-text = 'item[columnsMain]'
          />
        </TableBodyRow>

        <TableBodyRow
          v-if = 'visibleAdditionals[item.id]'
          :key = '`2${item.id}`'
          class = 'row-additional'
        >
          <TableBodyCell
            colspan = '3'
            class = 'cell-additional'
          >
            <TableInside :columns = '$options.columnsAdditional'>
              <template #body>
                <TableBodyRow class = 'table-inside-body-row'>
                  <TableBodyCell v-text = 'item.appVersionName' />
                  <TableBodyCell v-text = 'item.city' />
                  <TableBodyCell v-text = 'item.description' />
                </TableBodyRow>
              </template>

              <template #buttons>
                <TableBtnEdit @click = '$emit("edit", item.id)' />
              </template>
            </TableInside>

            <TableInside
              v-if = 'item.cartridges.length'
              :columns = '$options.columnsCartridges'
            >
              <template #body>
                <TableBodyRow
                  v-for = 'value in item.cartridges'
                  :key = 'value.id'
                  class = 'table-inside-body-row'
                >
                  <TableBodyCell v-text = 'value.code' />
                  <TableBodyCell v-text = 'value.quantityResource' />
                  <TableBodyCell v-text = 'value.quantityPrinted' />
                  <TableBodyCell v-text = 'value.quantityBalance' />
                  <TableBodyCell v-text = 'value.lastActive' />
                </TableBodyRow>
              </template>
            </TableInside>
          </TableBodyCell>
        </TableBodyRow>
      </template>
    </template>
  </PageBodyTable>
</template>

<script>
import PageBodyTable from '@/components/Common/Page/PageBodyTable.vue';
import TableBodyRow from '@/components/Common/Table/TableBodyRow.vue';
import TableBodyCell from '@/components/Common/Table/TableBodyCell.vue';
import TableBtnEdit from '@/components/Common/Table/TableBtnEdit.vue';

import TableInside from '@/components/Main/TableInside.vue';

import pageBodyTable from '@/mixins/pageBodyTable';

export default {
  name: 'DevicesTable',
  components: {
    PageBodyTable,
    TableBodyRow,
    TableBodyCell,
    TableBtnEdit,
    TableInside
  },
  mixins: [pageBodyTable],
  // props: {
  //   columnsMain: {
  //     type: Array,
  //     default: () => []
  //   },
  //   valuesMain: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  data: () => ({
    visibleAdditionals: []
  }),
  watch: {
    currentPage: {
      immediate: true,
      handler() {
        this.visibleAdditionals = Array(10);
      }
    }
  },
  created() {
    this.columnsMain = [
      { title: this.$t('code'), width: '5rem', value: 'code' },
      { title: this.$t('owner'), width: null, value: 'userEmail' },
      { title: this.$t('quantityPrinted'), width: '5rem', value: 'quantityPrinted' }
    ];

    this.$options.columnsAdditional = [
      { title: this.$t('appVersion'), width: '5rem' },
      { title: this.$t('city'), width: null },
      { title: this.$t('description'), width: null }
    ];
    this.$options.columnsCartridges = [
      { title: this.$t('serialNumber'), width: null },
      { title: this.$t('quantityResource'), width: '4rem' },
      { title: this.$t('quantityPrinted'), width: '4rem' },
      { title: this.$t('quantityBalance'), width: '4rem' },
      { title: this.$t('lastActive'), width: '6rem' }
    ];
  },
  methods: {
    onRowClick(event) {
      const index = +event.currentTarget.dataset.index;
      this.$set(this.visibleAdditionals, index, !this.visibleAdditionals[index]);
    }
  }
};
</script>

<style scoped>
.row-additional:not(:first-child) {
  border-top: none;
}

.cell-additional {
  padding: 0;
}

.table-inside-body-row {
  font-size: 1.1rem;
}

.table-inside-body-row:not(:first-child) {
  border-top: .1rem dashed rgba(134, 134, 134, .4);
}

/* .row:nth-child(4n),
.row:nth-child(4n+3) {
  background-color: rgba(214, 214, 214, .2);
} */
</style>
