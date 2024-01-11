<template>
    <div class="flex flex-col items-center gap-4 p-5 text-lg">
        <span class="text-center">This is the page displayed in the extension popup.</span>

        <span class="text-center">See <span class="font-medium">`src/pages/popup/Index.vue`</span></span>

        <button type="button"
            class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            @click="showContentApp">Show content app</button>

    </div>
</template>

<script setup lang="ts">
const showContentApp = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.runtime.sendMessage({ message: 'show_on_page_content' });
        setTimeout(() => {
            window.close();
        }, 10);
    });
};
</script>

<route lang="json5">
{
    name: 'Popup Index',
    meta: {
        layout: 'Content'
    }
}
</route>
