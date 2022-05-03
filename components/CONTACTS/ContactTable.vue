<script setup>
import { contact } from '@/store/Contact'
import { storeToRefs } from 'pinia'

const contactStore = contact();
const { contacts } = storeToRefs(contactStore)

</script>


<template>
  <div v-show="contactStore.contacts.length > 0">
    <table class="tabla">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Celular</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
        <tr v-for="contact in contacts" :key="contact.id">
          <td>{{contact.id}}</td>
          <td>{{contact.name}}</td>
          <td>{{contact.phone}}</td>
          <td>{{contact.email}}</td>
          <td>
            <button class="accept" @click="contactStore.selectedContact(contact.id)">Editar</button>
            <button class="delete" @click="contactStore.deleteContact(contact.id)">Eliminar</button>
          </td>
        </tr>
    </table>
  </div>
</template>

<style>
.tabla{
    background-color: azure;
    text-align: left;
    width: 100%;
}
</style>