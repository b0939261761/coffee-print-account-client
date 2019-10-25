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
import pageBodyTable from '@/mixins/pageBodyTable';

export default {
  name: 'UsersTable',
  components: {
    TableBtnEdit,
    PageBodyTable,

    TableBodyRow,
    TableBodyCell
  },
  mixins: [pageBodyTable],
  created() {
    this.$options.columns = [
      { title: this.$t('email'), width: null },
      { title: this.$t('role'), width: '9rem' },
      { title: this.$t('owner'), width: null },
      { title: null, width: '5rem' }
    ];
  }
};
</script>
