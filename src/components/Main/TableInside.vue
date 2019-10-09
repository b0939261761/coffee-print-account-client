<template>
  <div class = 'table-inside'>
    <TableCustom class = 'table-inside__table'>
      <TableColgroup>
        <TableCol
          v-for = '(value, index) in columns'
          :key = 'index'
          :width = 'value.width'
        />
      </TableColgroup>

      <TableHead>
        <TableHeadRow class = 'table-inside__head-row'>
          <TableHeadCell
            v-for = '(value, index) in columns'
            :key = 'index'
            class = 'table-inside__table-head-cell'
            v-text = 'value.title'
          />
        </TableHeadRow>
      </TableHead>

      <TableBody>
        <slot name = 'body' />
      </TableBody>
    </TableCustom>

    <div class = 'table-inside__wrapper-buttons'>
      <slot name = 'buttons' />
    </div>
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

export default {
  name: 'TableInside',
  components: {
    TableCustom,

    TableColgroup,
    TableCol,

    TableHead,
    TableHeadRow,
    TableHeadCell,

    TableBody
  },
  props: {
    columns: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped>
.table-inside {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgba(177, 177, 177, .1);
}

.table-inside {
  margin-right: .6rem;
}

.table-inside__head-row {
  height: 3rem;
}

.table-inside__table-head-cell {
  font-weight: normal;
  font-size: 1rem;
}

.table-inside__wrapper-buttons {
  margin-right: auto;
}
</style>
