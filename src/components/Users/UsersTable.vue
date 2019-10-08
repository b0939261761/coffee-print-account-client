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
        <TableBodyCell v-text = 'item.email' />

        <TableBodyCell v-text = 'item.roleName' />

        <TableBodyCell v-text = 'item.parentEmail' />

        <TableBodyCell>
          <TableBtnEdit @click = '$emit("edit", item.id)' />
        </TableBodyCell>
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
  name: 'UsersTable',
  components: {
    TableBtnEdit,
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
    this.$options.widthList = [null, '9rem', null, '5rem'];

    this.$options.columns = [
      { title: this.$t('email'), width: null },
      { title: this.$t('role'), width: '9rem' },
      { title: this.$t('owner'), width: null },
      { title: null, width: '5rem' }
    ];
  }
};
</script>
