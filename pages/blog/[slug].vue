<template>
    <h1>Blog post {{ post?.title }}</h1>
</template>

<script setup lang="ts">
const route = useRoute();
const slug: string = route.params.slug as string;
const { locale } = useI18n();

// Fetch posts
const { data: post } = await useAsyncData(`${locale}/${slug}`, () => queryContent(locale.value, "blog", slug).findOne());
</script>
