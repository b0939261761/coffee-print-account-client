<template>
  <div class = 'page-body-table'>
    <div class = 'page-body-table__wrapper-table'>
      <TableCustom>
        <TableColgroup>
          <TableCol
            v-for = '(value, index) in columns'
            :key = 'index'
            :width = 'value.width'
          />
        </TableColgroup>

        <TableHead>
          <TableHeadRow>
            <TableHeadCell
              v-for = '(value, index) in columns'
              :key = 'index'
              v-text = 'value.title'
            />
          </TableHeadRow>
        </TableHead>

        <TableBody>
          <slot name = 'body' />
        </TableBody>
      </TableCustom>
    </div>
    <TablePagination
      :current-page = 'currentPage'
      :item-count = 'itemCount'
      :rows-per-page = 'rowsPerPage'
      @changePage = '$emit("changePage", $event)'
    />
  </div>
</template>

<script>
import TableCustom from '@/components/Common/Table/TableCustom.vue';

import TableColgroup from '@/components/Common/Table/TableColgroup.vue';
import TableCol from '@/components/Common/Table/TableCol.vue';

import TableHead from '@/components/Common/Table/TableHead.vue';
import TableHeadRow from '@/components/Common/Table/TableHeadRow.vue';
import TableHeadCell from '@/components/Common/Table/TableHeadCell.vue';

import TableBody from '@/components/Common/Table/TableBody.vue';

import TablePagination from '@/components/Common/Table/TablePagination.vue';

export default {
  name: 'PageBodyTable',
  components: {
    TableCustom,

    TableColgroup,
    TableCol,

    TableHead,
    TableHeadRow,
    TableHeadCell,

    TableBody,

    TablePagination
  },
  props: {
    columns: {
      required: true,
      type: Array
    },
    currentPage: {
      required: true,
      type: Number
    },
    itemCount: {
      required: true,
      type: Number
    },
    rowsPerPage: {
      required: true,
      type: Number
    }
  }
};
</script>

<style scoped>
.page-body-table {
  display: flex;
  flex-direction: column;
  height: inherit;
  background-color: white;
}

.page-body-table__wrapper-table {
  padding: 0 .5rem;
  overflow-y: auto;
}
</style>
