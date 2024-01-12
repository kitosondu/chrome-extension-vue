# Chrome Extension (Vue 3 + Vue Router + Typescript + Vite + TailwindCSS + Flowbite)

This is a template for creating a Chrome extension using Vue. It is heavily inspired by [ennjoy/chrome-extension-vuejs](https://github.com/ennjoy/chrome-extension-vuejs) but has some additional features.

# Features

### Two application entry points

One for the extension popup and one for the on-page content.

- `src/popup/popup-main.ts` &mdash; the popup entry point
- `src/content/content-main.ts` &mdash; the on-page content entry point

Note: any application page from the `pages` directory is accessible from both entry points. So it's up to you to decide which pages are accessible from the popup and which are accessible from the on-page content.

### Automatic routing

The [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) package will generate routes for the [Vue Router](https://router.vuejs.org/) automatically based on the content of the `pages` directory. To add a new page to the application, just create a new `.vue` file in the `pages` directory.

### Layouts

The [vite-plugin-vue-layouts](https://github.com/johncampionjr/vite-plugin-vue-layouts) package enables you to define layouts for your application's pages, which is convenient for applications with a large number of pages.

By default, the extension popup page uses the `Popup` layout from `src/layouts/Popup.vue` and the on-page content uses the `Content` layout from `src/layouts/Content.vue`.

To define a layout for a page, add a `meta.layout` property to the page's route definition. See an example in `src/pages/popup/index.vue`:

```HTML
<route lang="json5">
{
    name: 'Popup Index',
    meta: {
        layout: 'Popup'
    }
}
</route>
```

### TailwindCSS + Flowbite

[Flowbite](https://flowbite.com/) is a component library built on top of [TailwindCSS](https://tailwindcss.com/). It provides a set of ready-to-use components that you can use in your application.

I have been using Flowbite for a while and have found it to be a great tool for building UIs quickly. What I like the most is that the Flowbite's components are just plain HTML elements with TailwindCSS classes that make them look good. This makes it very easy to customize the components.

Example of a button:

```HTML
<button 
    type="button"
    class="text-white bg-gradient-to-br 
        from-pink-500 to-orange-400 hover:bg-gradient-to-bl 
        focus:ring-4 focus:outline-none focus:ring-pink-200 
        dark:focus:ring-pink-800 font-medium rounded-lg text-sm 
        px-5 py-2.5 text-center me-2 mb-2">
    Click Me
</button>
```


# Build

To build the extension, run the command:

```shell
npm run build
```

Now go to the [chrome://extensions](chrome://extensions) page and enable developer mode. Click `Load Unpacked` and select the `extension-build` folder.


