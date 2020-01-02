<template>
  <PageBodyTable
    :columns = 'columns.main'
    :current-page = 'currentPage'
    :item-count = 'items.length'
    :rows-per-page = '$options.rowsPerPage'
    @changePage = 'currentPage = $event'
  >
    <template #body>
      <template v-for = 'item in itemsOnPage'>
        <TableBodyRow
          :key = '`1${item.id}`'
          @click = 'onRowClick(item.id)'
        >
          <TableBodyCell
            v-for = '({ value }, index) in columns.main'
            :key = 'index'
            v-text = 'item[value]'
          />
        </TableBodyRow>

        <TableBodyRow
          v-if = 'visibleAdditionals[item.id]'
          :key = '`2${item.id}`'
          class = 'table-inside__table-body-row-additional'
        >
          <TableBodyCell
            :colspan = 'columns.main.length'
            class = 'table-inside__table-body-cell-additional'
          >
            <TableInside :columns = 'columns.additional'>
              <template #body>
                <TableBodyRow class = 'table-inside__table-body-row'>
                  <TableBodyCell
                    v-for = '({ value }, index) in columns.additional'
                    :key = 'index'
                    v-text = 'item[value]'
                  />
                </TableBodyRow>
              </template>

              <template #buttons>
                <TableBtnEdit @click = '$emit("edit", item.id)' />
              </template>
            </TableInside>

            <TableInside
              v-if = 'item.children.length'
              :columns = 'columns.children'
            >
              <template #body>
                <TableBodyRow
                  v-for = 'child in item.children'
                  :key = 'child.id'
                  class = 'table-inside__table-body-row'
                >
                  <TableBodyCell
                    v-for = '({ value }, index) in columns.children'
                    :key = 'index'
                    v-text = 'child[value]'
                  />
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
  name: 'TableWithAdditional',
  components: {
    PageBodyTable,
    TableBodyRow,
    TableBodyCell,
    TableBtnEdit,
    TableInside
  },
  mixins: [pageBodyTable],
  props: {
    items: {
      required: true,
      type: Array
    },
    columns: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    visibleAdditionals: []
  }),
  watch: {
    items() {
      this.currentPage = 1;
    },
    currentPage: {
      immediate: true,
      handler() {
        this.visibleAdditionals = Array(this.$options.rowsPerPage);
      }
    }
  },
  methods: {
    onRowClick(id) {
      this.$set(this.visibleAdditionals, id, !this.visibleAdditionals[id]);
    }
  }
};
</script>

<style scoped>
.table-inside__table-body-row-additional:not(:first-child) {
  border-top: none;
}

.table-inside__table-body-cell-additional {
  padding: 0;
}

.table-inside__table-body-row:not(:first-child) {
  border-top: .1rem dashed rgba(134, 134, 134, .4);
}
</style>
