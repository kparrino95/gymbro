<script>
  import { onMount } from 'svelte';
  import { request } from 'graphql-request';
  import UserList from './UserList.svelte';
  import UserAddForm from './UserAddForm.svelte';
</script>

<!-- Hero Section with Background -->
<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
  <!-- Header -->
  <header class="py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl font-bold text-gray-900 tracking-tight">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Gymbro App
        </span>
      </h1>
      <p class="mt-4 text-xl text-gray-600 max-w-3xl">
        Track your fitness journey and connect with other gym enthusiasts
      </p>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- User List Section -->
      <section class="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Community Members
        </h2>
        <div class="bg-gray-50 rounded-xl p-4">
          <UserList />
        </div>
      </section>

      <!-- Add User Form Section -->
      <section class="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Join the Community
        </h2>
        <div class="bg-gray-50 rounded-xl p-4">
          <UserAddForm />
        </div>
      </section>
    </div>
  </main>

  <!-- Footer -->
  <footer class="mt-16 bg-gray-800 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-gray-400 text-sm">
          © 2024 GymBro App. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</div>

<style>
  /* Add any custom styles if needed */
</style>