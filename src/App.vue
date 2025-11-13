<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <header class="bg-gray-800 p-4 mb-4">
      <h1 class="text-xl font-bold">Gamer Social Network</h1>
    </header>

    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script>
export default { name: "App" };
</script>
