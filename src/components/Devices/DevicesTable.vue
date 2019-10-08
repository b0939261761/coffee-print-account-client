<template>
  <PageBodyTable
    :columns = '$options.columns'
    :current-page = 'currentPage'
    :item-count = 'items.length'
    :rows-per-page = '$options.rowsPerPage'
    @changePage = 'currentPage = $event'
  >
    <template #body>
      <TableBodyRow
        v-for = 'item in itemsOnPage'
        :key = 'item.id'
      >
        <TableBodyCell v-text = 'item.code' />

        <TableBodyCell v-text = 'item.appVersionCode' />

        <TableBodyCell v-text = 'item.userEmail' />

        <TableBodyCell v-text = 'item.quantityPrinted' />
      </TableBodyRow>
    </template>
  </PageBodyTable>
</template>

<script>
import PageBodyTable from '@/components/Common/Page/PageBodyTable.vue';

import TableBodyRow from '@/components/Common/Table/TableBodyRow.vue';
import TableBodyCell from '@/components/Common/Table/TableBodyCell.vue';

import TableBtnEdit from '@/components/Common/Table/TableBtnEdit.vue';

const ROWS_PER_PAGE = 10;

export default {
  name: 'DevicesTable',
  components: {
    PageBodyTable,

    TableBodyRow,
    TableBodyCell
  },
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    currentPage: 1
  }),
  computed: {
    itemsOnPage() {
      return this.items
        .slice((this.currentPage - 1) * this.$options.rowsPerPage,
          this.currentPage * this.$options.rowsPerPage);
    }
  },
  created() {
    this.$options.rowsPerPage = ROWS_PER_PAGE;

    this.$options.columns = [
      { title: this.$t('device'), width: '5rem' },
      { title: this.$t('version'), width: '5rem' },
      { title: this.$t('userEmail'), width: null },
      { title: this.$t('quantityPrinted'), width: '5rem' }
    ];


    // this.$options.titleList = [
    //   { title: this.$t('serialNumber'), width: '7rem' },
    //   { title: this.$t('quantityResource'), width: '5rem' },
    //   { title: this.$t('quantityPrinted'), width: '5rem' },
    //   { title: this.$t('quantityBalance'), width: '5rem' },
    //   { title: this.$t('lastActive'), width: '10rem' },
    //   { title: null, width: null }
    // ];
  }
};
</script>
