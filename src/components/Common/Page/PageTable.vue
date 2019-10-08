<template>
  <PageCustom>
    <PageBodyMain>
      <template #header>
        <slot name = 'header' />
      </template>
      <template #body>
        <slot name = 'body' />
      </template>

      <template #footer>
        <slot name = 'footer' />
      </template>

      <template #modal>
        <slot name = 'modal' />
      </template>
    </PageBodyMain>
  </PageCustom>
</template>

<script>
import PageCustom from '@/components/Common/Page/PageCustom.vue';
import PageBodyMain from '@/components/Common/Page/PageBodyMain.vue';

export default {
  name: 'PageTable',
  components: {
    PageCustom,
    PageBodyMain
  }
};
</script>
