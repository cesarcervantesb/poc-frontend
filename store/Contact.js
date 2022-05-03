import { defineStore } from 'pinia'

export const contact = defineStore("main", {
    state: () => {
        return {
            contacts: [],
            name : '',
            phone: '',
            email: '',
            edit: false,
            id: 1,
            last_id: null,
        }
    },

    actions: {
        selectedContact(id){
            let currentValue = this.contacts.find(element => element.id === id);
            this.last_id = this.id;
            this.id = currentValue.id;
            this.name = currentValue.name;
            this.phone = currentValue.phone;
            this.email = currentValue.email;
            this.edit = true;
        },
        createContact(){
            if(this.validateForm()){
                if(this.edit){
                    //update contact
                    this.contacts.splice(this.contacts.findIndex(element => element.id === this.id), 1, {id: this.id,name: this.name, phone: this.phone, email: this.email});
                    this.edit = false;
                    this.id = this.last_id;
                }
                else{
                    //create a new contact
                    this.contacts.push({id: this.id,name: this.name, phone: this.phone, email: this.email});
                    this.id++;
                }
                this.cleanForm();
            }
            else{
                alert("Asegurate de ingresar los datos correctamente");
            }
        },
        deleteContact(id){
            this.contacts.splice(this.contacts.findIndex(element => element.id === id), 1);
        },
        validateForm(){
            return this.name.length > 0 && this.phone.match("[0-9]{10}") && this.email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
        },
        cleanForm(){
            this.name   = '';
            this.phone  = '';
            this.email  = '';
        }
    },
})
