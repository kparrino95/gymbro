<script>
  import { onMount } from 'svelte';
  import { request } from 'graphql-request';

  let users = [];
  let isLoading = true;
  let error = null;

  const query = `
    query GetUsers {
      getUsers {
        id
        email
        name
      }
    }
  `;

  onMount(async () => {
    const endpoint = 'http://localhost:4000/graphql';

    try {
      const data = await request(endpoint, query);
      users = data.getUsers;
    } catch (error) {
      console.error('Errore nella chiamata GraphQL:', error);
      error = 'Impossibile caricare gli utenti. Riprova più tardi.';
    } finally {
      isLoading = false;
    }
  });
</script>

<div class="space-y-6">
  {#if isLoading}
    <div class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  {:else if error}
    <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-red-700">{error}</p>
        </div>
      </div>
    </div>
  {:else if users.length === 0}
    <div class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <h3 class="mt-2 text-sm font-medium text-gray-900">Nessun utente</h3>
      <p class="mt-1 text-sm text-gray-500">Inizia aggiungendo un nuovo utente.</p>
    </div>
  {:else}
    <ul class="divide-y divide-gray-200">
      {#each users as user (user.id)}
        <li class="py-4 hover:bg-gray-50 transition duration-150 rounded-lg px-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <div class="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                {user.name[0].toUpperCase()}
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">
                {user.name}
              </p>
              <p class="text-sm text-gray-500 truncate">
                {user.email}
              </p>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</div>