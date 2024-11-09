<script>
  import { onMount } from 'svelte';
  import { request } from 'graphql-request';
  import UserList from './UserList.svelte';
  import UserAddForm from './UserAddForm.svelte';
</script>

<h1 class="text-4xl font-semibold text-gray-900 mb-8">Gymbro App</h1>

<div class="container mx-auto px-4 py-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <section class="bg-white shadow-lg rounded-lg p-6">
      <UserList />
    </section>

    <section class="bg-white shadow-lg rounded-lg p-6">
      <UserAddForm />
    </section>
  </div>
</div>
