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
    } catch (error) {
      console.error('Errore durante la mutazione GraphQL:', error);
      statusMessage = 'Errore durante l\'aggiunta dell\'utente. Riprova.';  
    } finally {
      isLoading = false;  
    }
  };
</script>

<form class="bg-white shadow-lg rounded-lg p-8 mb-6 w-full max-w-lg mx-auto" on:submit={submitForm}>
  <h2 class="text-2xl font-medium text-gray-800 mb-6">Add a New User</h2>

  <label class="block text-gray-700 text-sm font-semibold mb-2" for="name">Name:</label>
  <input
    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
    type="text"
    id="name"
    name="name"
    bind:value={name}
    required
  />
  
  <label class="block text-gray-700 text-sm font-semibold mb-2" for="email">Email:</label>
  <input
    class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
    type="email"
    id="email"
    name="email"
    bind:value={email}
    required
  />
  
  <button
    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
    type="submit"
    disabled={isLoading}
  >
    {#if isLoading}
      Inviando...
    {:else}
      Submit
    {/if}
  </button>
  
  {#if statusMessage}
    <div class="mt-4 text-center">
      <p class="text-lg font-semibold {statusMessage.includes('Errore') ? 'text-red-500' : 'text-green-500'}">
        {statusMessage}
      </p>
    </div>
  {/if}
</form>
