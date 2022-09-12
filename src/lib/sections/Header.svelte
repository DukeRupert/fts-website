<!-- header.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { LINKS, COMPANY } from '$lib/constants';
  
  let pathname
  $: ({pathname} = $page.url)

  let menuOpen = false
</script>

<header>
  <div class="relative bg-white">
    <div
      class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
    >
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="/" class="z-20">
          <span class="sr-only">{COMPANY.logo.label}</span>
          <img
            class="h-16 w-auto p-1 sm:h-20 sm:p-2 bg-evergreen-500 rounded-md"
            src={COMPANY.logo.img.src}
            alt={COMPANY.logo.img.alt}
          />
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden z-10">
        <button
          type="button"
          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
          on:click={() => (menuOpen = !menuOpen)}
        >
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
        {#each LINKS as {href, label}}
          <a href={href} class="text-base font-medium text-gray-500 hover:text-gray-900">
            {label}
          </a>
        {/each}
      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a
          href={COMPANY.contact.phone.href}
          class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-actionorange-500 to-actionorange-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:text-cream-500 hover:from-actionorange-300 hover:to-actionorange-300"
        >
          <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>

          {COMPANY.contact.phone.string}
        </a>
      </div>
    </div>

    <div
      class="absolute z-1 top-0 inset-x-0 p-2 transition transform origin-top-left md:hidden opacity-0 scale-95 {menuOpen
        ? 'z-30 duration-200 ease-out opacity-100 scale-100'
        : 'z-1 duration-100 ease-in opacity-0 scale-95'}"
    >
      <div
        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
      >
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <a href="/" on:click={() => (menuOpen = !menuOpen)}>
                <img
                  class="h-16 w-auto p-1 sm:h-20 sm:p-2 bg-gradient-to-r from-evergreen-500 to-evergreen-500 rounded-md"
                  src="/logo/FtS_Logo-Cream-01.svg"
                  alt="FtS Excavation logo"
                />
              </a>
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-evergreen-500"
                on:click={() => (menuOpen = !menuOpen)}
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid grid-cols-1 gap-7">
              {#each LINKS as {href, label, svg}}
                <a
                  href={href}
                  class="-m-3 p-3 flex items-center rounded-lg hover:bg-evergreen-100"
                  on:click={() => (menuOpen = !menuOpen)}
                >
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-evergreen-500 to-evergreen-500 text-cream-500"
                  >
                   <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox={svg.viewbox}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d={svg.path}
                      />
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">{label}</div>
                </a>
              {/each}
            </nav>
          </div>
        </div>
        <div class="flex justify-center space-x-6 pt-5 pb-6 px-5 border-none">
          <a
            href="https://www.facebook.com/FtS-Excavation-107417208285323"
            class="text-actionorange-500 hover:text-actionorange-300"
          >
            <span class="sr-only">Facebook Page</span>
            <svg class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/channel/UC_LbjVWjiiFg3h9lB6rcvGQ"
            class="text-actionorange-500 hover:text-actionorange-300"
          >
            <span class="sr-only">Youtube Channel</span>
            <svg
              class="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
              /> <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg
            >
          </a>
        </div>
        <div class="py-6 px-5">
          <div class="mt-6">
            <a
              href="/contact-us"
              class="w-full flex items-center justify-center bg-gradient-to-r from-evergreen-500 to-evergreen-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-cream-500 hover:from-evergreen-600 hover:to-evergreen-600"
              on:click={() => (menuOpen = !menuOpen)}
            >
              <svg
                class="h-6 w-6 mr-2 text-cream-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" /> <line x1="10" y1="14" x2="21" y2="3" />
                <path
                  d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3"
                /></svg
              >
              Contact Us
            </a>
            <div class="mt-6">
              <a
                href={COMPANY.contact.phone.href}
                class="w-full flex items-center justify-center text-center bg-actionorange-500 text-base font-medium text-black px-4 py-2 rounded-md"
              >
                <svg
                  class="h-6 w-6 mr-2 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
