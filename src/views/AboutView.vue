<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Profile Card -->
        <v-card class="mx-auto" max-width="600">
          <!-- Header with Profile Image -->
          <v-card-title>
            <v-avatar size="80" class="mr-4">
              <img src="https://via.placeholder.com/150" alt="User Avatar" />
            </v-avatar>
            <div>
              <h2 class="mb-0">John Doe</h2>
              <p class="text-subtitle-2 text-grey">Web Developer</p>
            </div>
          </v-card-title>

          <!-- Divider -->
          <v-divider></v-divider>

          <!-- Profile Details -->
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <strong>Email:</strong> john.doe@example.com
              </v-col>
              <v-col cols="6">
                <strong>Phone:</strong> +123 456 7890
              </v-col>
              <v-col cols="6">
                <strong>Location:</strong> New York, USA
              </v-col>
              <v-col cols="6">
                <strong>Skills:</strong> Vue.js, Vuetify, Laravel
              </v-col>
            </v-row>
          </v-card-text>

          <!-- Action Buttons -->
          <v-card-actions>
            <v-btn class="mr-2" @click="dialog = true">Edit Stats</v-btn>
            <add-state ref="addState" :selectedStatValue="selectedStatValue"  :selectedStatName="selectedStatName"/>
            <!-- Dialog -->
            <v-dialog v-model="dialog" max-width="500">
              <v-card>
                <v-card-title class="headline">All Stats</v-card-title>

                <v-card-text>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Value</th>
                        <th class="text-left">Status</th>
                        <th class="text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.status }}</td>
                        <td>
                          <div class="d-flex">
                            <v-btn text color="primary" @click="editState(item.name , item.calories)" class="mr-2">
                              Edit
                            </v-btn>
                            <v-btn text color="red" @click="deleteState(item)">
                              Delete
                            </v-btn>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red" text @click="dialog = false">Cancel</v-btn>
                  <v-btn color="green" text @click="dialog = false">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>

        <v-tabs class="mt-6">
          <v-tab>About</v-tab>
          <v-tab>Projects</v-tab>
          <v-tab>Contact</v-tab>
        </v-tabs>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AddState from "./AddState.vue";

export default {
  name: "UserProfile",
  components: {
    AddState,
  },
  data() {
    return {
      dialog: false,
      selectedStatName: null,
      selectedStatValue: null,
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          status: 'Active',
        },
        {
          name: 'Test',
          calories: 8271,
          status: 'Inactive',
        },
        {
          name: 'Final',
          calories: 4342,
          status: 'Active',
        },
      ],
    };
  },

  methods: {
    editState(name , value) {
      console.log('Editing:', name , value);
      this.selectedStatName = name,
      this.selectedStatValue =  value,
      this.dialog = true; 
      this.$refs.addState.stateDialogOpen = true;
    },

    deleteState(item) {
 
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 4px;
}

.text-grey {
  color: #757575;
}
</style>
