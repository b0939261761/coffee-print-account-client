<template>
  <div class = 'page-body-main'>
    <PageBodyHeader v-if = '$slots.header'>
      <slot name = 'header' />
    </PageBodyHeader>
    <PageBodyBody>
      <slot name = 'body' />
    </PageBodyBody>

    <PageBodyFooter>
      <slot name = 'footer' />
    </PageBodyFooter>

    <portal to = 'formModal'>
      <slot name = 'modal' />
    </portal>
  </div>
</template>

<script>
import PageBodyHeader from '@/components/Common/Page/PageBodyHeader.vue';
import PageBodyBody from '@/components/Common/Page/PageBodyBody.vue';
import PageBodyFooter from '@/components/Common/Page/PageBodyFooter.vue';

export default {
  name: 'PageBodyMain',
  components: {
    PageBodyHeader,
    PageBodyBody,
    PageBodyFooter
  }
};
</script>

<style scoped>
.page-body-main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f3b4ac;
}
</style>
