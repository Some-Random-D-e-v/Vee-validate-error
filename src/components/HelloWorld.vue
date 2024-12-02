<template>
      <Form as="v-form"  ref="formRef"       
      :validateOnInput=false
      :validateOnChange=false
      :validateOnBlur=true
      :validateOnModelUpdate=false
      >
      {{console.log("formRef test ", JSON.stringify(formRef))}}
        <v-container fluid class="pa-0">
        <v-row>
          <v-col>
            <masonry :cols="{ default: 2, 1264: 1 }" :gutter="12">
              <v-container class="boxed" fluid>
                <header>Label</header>
                <v-row>
                  <v-col>
                    <Field v-model="label.energyIndex" name="energyIndex" rules="decimal:4|between:0,9" v-slot="{errors}">
                      <v-text-field
                        type="number"
                        hide-details="auto"
                        label="Energie-index"
                        v-model="label.energyIndex"
                        @input="label.energyIndex = $event.target.value !== '' ? $event.target.value : undefined"
                        :error-messages="errors"
                        :readonly="showEdit"
                        :variant="!showEdit ? 'outlined' : 'plain'"
                        persistent-placeholder>
                      </v-text-field>
                    </Field>
                  </v-col>
                </v-row>
            
              
              </v-container>

              <div></div>
            </masonry>

          </v-col>
        </v-row>
      </v-container>
      </Form>


</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Form, Field } from 'vee-validate';

const showEdit = ref(false);
const formRef = ref(null);
const label = ref({
  id: undefined,
  energyIndex: undefined,
});


</script>
