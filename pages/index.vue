<script>
import ContactForm from '../components/CONTACTS/ContactForm.vue'
import ContactTable from '../components/CONTACTS/ContactTable.vue'
export default {
  components: { ContactForm, ContactTable},
  name: 'IndexPage',
}
</script>

<template>
  <!----------------------------------------
|| COMOPONENET
------------------------------------------>
  <div class="component">
    <ContactForm/>
    <hr>
    <br>
    <ContactTable/>
  </div>
</template>

<style>
/*-----------------------------------------
 * GLOBAL STYLES
 *-----------------------------------------*/
.accept{
  background-color: blue;
  color: white;
  border-radius: 15px;
}
.delete{
  background-color: red;
  color: white;
  border-radius: 15px;
}
</style>