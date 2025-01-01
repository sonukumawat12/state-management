<template>
    <v-dialog v-model="stateDialogOpen" max-width="500">
      <v-card>
        <v-card-title class="headline">Edit Stat</v-card-title>
  
        <v-card-text>
          <!-- Automatically fill the selected stat values -->
          <v-text-field label="Enter Value" v-model="statsValue" />
          <v-select
            label="Select Stat"
            :items="['Frozen Yogurt', 'Test', 'Final', 'Georgia', 'Texas', 'Wyoming']"
            v-model="stateName"
            variant="outlined"
          />
        </v-card-text>
  
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="toggleDialog">Cancel</v-btn>
          <v-btn color="green" text @click="saveStat">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      selectedStatValue: {
        type: Number,
        default: null,
      },
      selectedStatName: {
        type: String,
        default: null,
      },
    },
    data() {
      return {
        stateDialogOpen: false,
        statsValue: null,
        stateName: null,
      };
    },
    watch: {
      selectedStatName(newVal) {
        this.stateName = newVal; // Update local state when prop changes
        console.log("Updated stateName:", newVal);
      },
      selectedStatValue(newVal) {
        this.statsValue = newVal; // Update local state when prop changes
        console.log("Updated statsValue:", newVal);
      },
    },
    methods: {
      toggleDialog() {
        this.stateDialogOpen = !this.stateDialogOpen;
      },
      saveStat() {
        console.log("Stat saved:", {
          name: this.stateName,
          value: this.statsValue,
        });
        this.toggleDialog(); // Close the dialog after saving
      },
    },
  };
  </script>
  