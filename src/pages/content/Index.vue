<template>
    <div class="flex flex-col items-center space-y-3 text-lg p-5">
        <span class="text-center">This is the page managed by the content script</span>

        <span class="text-center">See <span class="font-medium">`src/pages/content/Index.vue`</span></span>
    </div>
</template>

<route lang="json5">
{
    name: 'ContentIndex',
    meta: {
        layout: 'Content'
    }
}
</route>
