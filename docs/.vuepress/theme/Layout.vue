<template>
    <div>
        <NavBar/>
        <Index v-if="isIndex"/>
        <Page v-if="!isIndex"/>
    </div>
</template>

<script>
export default {
    computed: {
        isIndex() {
            return this.$page.path.endsWith("/");
        }
    }
}
</script>

<style lang="stylus">
// @import '../styles/theme.styl'
</style>