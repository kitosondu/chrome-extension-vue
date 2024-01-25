<template>
    <div class="flex flex-col items-center space-y-3 text-lg p-5">
        <span class="text-center">This is the page managed by the content script</span>

        <span class="text-center">See <span class="font-medium">`src/pages/content/Index.vue`</span></span>

        <span class="text-center">Press <span class="font-medium">`Esc`</span> to close this page</span>
    </div>
</template>

<script setup lang="ts">
const onWindowKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
        // close content app container
        chrome.runtime.sendMessage({
            message: 'close_content_app',
        });
    }
};

onMounted(() => {
    // init event handlers
    document.addEventListener('keydown', onWindowKeyDown, false);
});

onUnmounted(() => {
    // remove event handlers
    document.removeEventListener('keydown', onWindowKeyDown, false);
});
</script>


<route lang="json5">
{
    name: 'ContentIndex',
    meta: {
        layout: 'Content'
    }
}
</route>
