<template>
  <div class = 'table-pagination'>
    <span
      class = 'table-pagination__pages'
      v-text = 'pages'
    />

    <TableBtnPrev
      :disabled = 'currentPage === 1'
      @click = '$emit("changePage", currentPage - 1)'
    />

    <div class = 'table-pagination__btn-gap' />

    <TableBtnNext
      :disabled = 'currentPage === totalPages'
      @click = '$emit("changePage", currentPage + 1)'
    />
  </div>
</template>

<script>
import TableBtnPrev from '@/components/Common/Table/TableBtnPrev.vue';
import TableBtnNext from '@/components/Common/Table/TableBtnNext.vue';

export default {
  name: 'TablePagination',
  components: {
    TableBtnPrev,
    TableBtnNext
  },
  props: {
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
  },
  computed: {
    totalPages() {
      return Math.ceil(this.itemCount / this.rowsPerPage) || 1;
    },
    pages() {
      return `${this.currentPage} / ${this.totalPages}`;
    }
  }
};
</script>

<style scoped>
.table-pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  padding: .5rem 1.5rem .5rem 0;
  border-top: .1rem solid rgba(0, 0, 0, .12);
}

.table-pagination__pages {
  margin-right: 3rem;
  font-size: 1.5rem;
}

.table-pagination__btn-gap {
  width: 3rem;
}
</style>
