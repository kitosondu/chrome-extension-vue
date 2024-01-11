<template>
    <div class="flex flex-col items-start w-full p-6 pb-8">
        <div class="flex flex-col items-center w-full p-6 space-y-8 mt-4">
            <div class="flex flex-col items-center space-y-3">
                <span class="text-base">This is page displayed in the Popup</span>
            </div>
        </div>
    </div>
</template>

<route lang="json5">
{
    name: 'Popup Index',
    meta: {
        layout: 'Content'
    }
}
</route>
