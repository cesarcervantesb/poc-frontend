<script setup>
/*-----------------------------------------
 * SETUP SCRIPT
 *-----------------------------------------*/
import { contact } from '@/store/Contact'
import { storeToRefs } from 'pinia'

const contactStore = contact();
const { contacts } = storeToRefs(contactStore)

</script>

<template>
  <!----------------------------------------
|| COMOPONENET
------------------------------------------>
  <div class="formulario">
    <h2>Contactos</h2>
    <div>
      <form class="flex" @submit.prevent="">
        <!-- Name -->
        <label>ID: </label>
        <input v-model="contactStore.id" type="text" disabled>
        <!-- Name -->
        <label>Nombre: </label>
        <input v-model="contactStore.name" maxlength="50" required type="text">
        <!-- Phone -->
        <label>Celular: </label>
        <input v-model="contactStore.phone" maxlength="10" pattern="[0-9]{10}" required type="text">
        <!-- Email -->
        <label>email: </label>
        <input v-model="contactStore.email" maxlength="50" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required type="email">
        <!-- Buttons -->
        <button class="accept" @click="contactStore.createContact()">Guardar</button>
        <button class="delete" @click="contactStore.cleanForm()">Borrar</button>
    </form>
    </div>
    <br>
  </div>
</template>

<style>
/*-----------------------------------------
 * GLOBAL STYLES
 *-----------------------------------------*/
.formulario{
  background-color: bisque;
  border-radius: 15px;
  margin: 5px;
  width: max-content;
}
</style>