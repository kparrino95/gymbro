<script>
   import { onMount } from 'svelte';
   import { request } from 'graphql-request';
 
   let users = [];
 
   const query = `
     query GetUsers {
       getUsers {
         id
         email
         name
       }
     }
   `;
 
   // Effettua la chiamata GraphQL al caricamento della pagina
   onMount(async () => {
     const endpoint = 'http://localhost:4000/graphql'; // Sostituisci con il tuo endpoint GraphQL
 
     try {
       const data = await request(endpoint, query);
       users = data.getUsers;
     } catch (error) {
       console.error('Errore nella chiamata GraphQL:', error);
     }
   });
</script>

<div class="container mx-auto px-4 py-6">
   <h2 class="text-3xl font-semibold text-gray-900 mb-6">Users</h2>
   <div class="bg-white shadow-md rounded-lg p-6">
     {#if users.length > 0}
       <ol class="list-decimal pl-6 space-y-2">
         {#each users as user}
           <li class="text-lg text-gray-700">
             <span class="font-semibold">{user.name}</span> - {user.email}
           </li>
         {/each}
       </ol>
     {:else}
       <p class="text-center text-gray-500">No users found.</p>
     {/if}
   </div>
</div>
