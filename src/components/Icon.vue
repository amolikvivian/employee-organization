<template>
  <svg
    v-if="name === 'user'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1.5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  <svg
    v-if="name === 'left'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-3 w-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2.5"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  <svg
    v-if="name === 'dots-v'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    />
  </svg>
  <svg
    v-if="name === 'delete'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 text-red-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1.5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
  <svg
    v-if="name === 'eye'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1.5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
  <svg
    v-if="name === 'minus'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 text-gray-100"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1.5"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
  </svg>
  <svg
    v-if="name === 'plus'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-3 w-3 text-gray-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
  <svg
    v-if="name === 'down'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-3 w-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
  <svg
    v-if="name === 'search'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 text-gray-600 bg-transparent"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1.5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  <svg
    v-if="name === 'right'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-3 w-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
  </svg>
  <svg
    v-if="name === 'filter'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1.5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    />
  </svg>
  <svg
    v-if="name === 'edit'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-3 w-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>
  <svg
    v-if="name === 'save'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 text-gray-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
    />
  </svg>
  <svg
    v-if="name === 'cross'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 text-gray-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  <svg
    v-if="name === 'switch'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
    />
  </svg>
  <svg
    v-if="name === 'tick'"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 text-green-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="1.5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style></style>
