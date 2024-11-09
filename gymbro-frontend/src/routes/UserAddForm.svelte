<script>
  import { onMount } from 'svelte';
  import { request } from 'graphql-request';
  
  let name = '';
  let email = '';
  let statusMessage = '';
  let isLoading = false;
  
  const mutation = `
    mutation Mutation($name: String!, $email: String!) {
      addUser(name: $name, email: $email) {
        id
        email
        name
      }
    }
  `;
  
  const submitForm = async (event) => {
    event.preventDefault();  
    const endpoint = 'http://localhost:4000/graphql'; 
    const variables = { name, email };
    isLoading = true;  
    statusMessage = ''; 
  
    try {
      const data = await request(endpoint, mutation, variables);
      console.log('Utente aggiunto:', data.addUser);
      statusMessage = 'Utente aggiunto con successo!';
      // Clear form after successful submission
      name = '';
      email = '';
    } catch (error) {
      console.error('Errore durante la mutazione GraphQL:', error);
      statusMessage = 'Errore durante l\'aggiunta dell\'utente. Riprova.';
    } finally {
      isLoading = false;
    }
  };
</script>

<form on:submit={submitForm} class="space-y-6">
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1" for="name">
        Nome Completo
      </label>
      <div class="relative">
        <input
          type="text"
          id="name"
          bind:value={name}
          required
          class="block w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition duration-150"
          placeholder="Inserisci il tuo nome"
        />
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1" for="email">
        Indirizzo Email
      </label>
      <div class="relative">
        <input
          type="email"
          id="email"
          bind:value={email}
          required
          class="block w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition duration-150"
          placeholder="nome@esempio.com"
        />
      </div>
    </div>
  </div>

  <div class="pt-2">
    <button
      type="submit"
      disabled={isLoading}
      class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {#if isLoading}
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Registrazione in corso...
      {:else}
        Registrati Ora
      {/if}
    </button>
  </div>

  {#if statusMessage}
    <div class="mt-4 rounded-lg p-4 {statusMessage.includes('Errore') ? 'bg-red-50' : 'bg-green-50'} transition-all duration-300">
      <p class="flex items-center justify-center text-sm font-medium {statusMessage.includes('Errore') ? 'text-red-800' : 'text-green-800'}">
        {#if !statusMessage.includes('Errore')}
          <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        {:else}
          <svg class="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        {/if}
        {statusMessage}
      </p>
    </div>
  {/if}
</form>