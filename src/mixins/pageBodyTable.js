const ROWS_PER_PAGE = 10;

export default {
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
  }
};
