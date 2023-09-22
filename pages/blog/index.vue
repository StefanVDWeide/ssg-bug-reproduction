<template>
    <h1>Blog</h1>
    <div v-for="post in posts">
        <nuxt-link :to="localePath(cleanPath(post._path))">{{ post._path }}</nuxt-link>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const { t } = useI18n();

const { data: posts } = await useAsyncData(`${locale}/posts-list`, () => queryContent(locale.value, "blog")
    .only(["_path"])
    .find());


// Methods
const cleanPath = (path: string) => {
    return path.replace(`/${locale.value}`, "")
}
</script>
