<template>
  <div v-if="can(`leave_type_access`)">
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" top="top" :color="snackColor" elevation="24">
        {{ response }}
      </v-snackbar>
    </div>


    <v-dialog v-model="dialog" width="500px">

      <v-card>
        <v-card-title dense class=" primary  white--text background">
          <span class="headline"><span class="headline">{{ formTitle }} </span></span>
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false" outlined dark color="white">
            mdi mdi-close-circle
          </v-icon>
        </v-card-title>
        <v-card-text>
          <v-container>

            <v-row>
              <v-col cols="12">
                <label for="" style="margin-bottom:5px">Name</label> <br />
                <v-text-field dense outlined v-model="editedItem.name" placeholder="Name" :error-messages="errors && errors.name ? errors.name[0] : ''
                  "></v-text-field>
              </v-col>

              <v-col cols="12">
                <label for="" mb-1 style="margin-bottom:5px">Short Name</label>
                <v-text-field dense outlined v-model="editedItem.short_name" placeholder="Short Name" :error-messages="errors && errors.short_name ? errors.short_name[0] : ''
                  "></v-text-field>
              </v-col>




            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn class="error" small @click="close"> Cancel </v-btn> -->
          <v-btn class="primary" small @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row>
      <v-col md="12">

        <v-card class="mb-5 rounded-md" elevation="0">
          <v-toolbar class="rounded-md" color="background" dense flat dark>
            <v-toolbar-title><span> Dashboard / {{ Model }}s</span></v-toolbar-title>

            <v-tooltip top color="primary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn dense class="ma-0 px-0" x-small :ripple="false" text v-bind="attrs" v-on="on">
                  <v-icon color="white" class="ml-2" @click="getDataFromApi()" dark>mdi mdi-reload</v-icon>
                </v-btn>
              </template>
              <span>Reload</span>
            </v-tooltip>
            <v-spacer></v-spacer>
            <v-tooltip v-if="can(`leave_type_create`)" top color="primary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn dense class="ma-0 px-0" x-small :ripple="false" text v-bind="attrs" v-on="on">
                  <v-icon color="white" class="ml-2" @click="newDialog()" dark>mdi mdi-plus-circle</v-icon>
                </v-btn>
              </template>
              <span>Add LeaveType</span>
            </v-tooltip>

          </v-toolbar>

          <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
            {{ snackText }}

            <template v-slot:action="{ attrs }">
              <v-btn v-bind="attrs" text @click="snack = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
          <v-data-table v-if="can(`leave_type_view`)" v-model="ids" item-key="id" :headers="headers" :items="data"
            :loading="loading" :footer-props="{
              itemsPerPageOptions: [10, 50, 100, 500, 1000],
            }" class="elevation-1">
            <template v-slot:item.name="{ item }">
              {{ (item.name) }}
            </template>
            <template v-slot:item.short_name="{ item }">
              {{ (item.short_name) }}
            </template>

            <template v-slot:item.action="{ item }">
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark-2 icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list width="120" dense>

                  <v-list-item @click="editItem(item)">
                    <v-list-item-title style="cursor: pointer">
                      <v-icon v-if="can(`leave_type_edit`)" color="secondary" small @click="editItem(item)">
                        mdi-pencil
                      </v-icon> Edit
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="deleteItem(item)">
                    <v-list-item-title style="cursor: pointer">
                      <v-icon v-if="can(`leave_type_delete`)" color="error" small @click="deleteItem(item)">
                        {{ item.announcement === "customer" ? "" : "mdi-delete" }}
                      </v-icon> Delete
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>

            <template v-slot:no-data>
              <!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>

  <NoAccess v-else />
</template>
<script>
import {
  TiptapVuetify,
  Image,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
} from "tiptap-vuetify";

export default {
  components: {
    TiptapVuetify,
  },
  data: () => ({
    formTitle: 'New Leave Type',
    dialogEmployees: false,
    idsEmployeeList: [],
    //editor
    datatable_search_textbox: '',
    filter_employeeid: '',
    snack: false,
    snackColor: '',
    snackText: '',
    extensions: [
      History,
      Blockquote,
      Link,
      Image,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3],
          },
        },
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak,
    ],
    // starting editor's content
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
        `,

    //end editor
    scrollInvoked: 0,
    start_menu: false,
    end_menu: false,
    title: "",
    des: "",
    desDate: "",
    dept: "",
    options: {},
    Model: "Leave Type",
    endpoint: "leave_type",
    search: "",
    snackbar: false,
    dialog: false,
    ids: [],
    departments: [],
    loading: false,
    total: 0,

    headers: [
      { text: "Name", align: "left", sortable: true, key: "name", value: "name" },
      {
        text: "Short Name",
        align: "left",
        sortable: true,
        value: "short_name",
      },

      { text: "Actions", align: "center", value: "action", sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      name: "",
      short_name: "",
    },
    defaultItem: {
      name: "",
      short_name: "",

    },
    response: "",
    data: [],
    errors: [],
    options_dialog: {},
    employees_dialog: [],
    selectAllDepartment: false,
    selectAllEmployee: false,
    DialogEmployeesData: {},
  }),

  computed: {

  },

  watch: {

  },
  created() {
    this.loading = true;


    this.getDataFromApi();

  },

  methods: {

    newDialog() {
      this.formTitle = 'New Leave Type';
      this.errors = [];
      this.editedIndex = -1;
      this.editedItem = {
        name: "",
        short_name: "",
      };
      this.defaultItem = {
        name: "",
        short_name: "",

      };
      this.dialog = true;
    },
    update_EdititemStart() {

      this.$refs.from_menu.save(this.editedItem.start_date)
      this.from_menu = false;
      this.getDayscount();
    },
    update_EdititemEnd() {

      this.$refs.end_menu.save(this.editedItem.end_date)
      this.end_menu = false;

      this.getDayscount();

    },
    getDayscount() {


      if (!this.editedItem.start_date || !this.editedItem.end_date) {
        return false;
      }
      let startDate = new Date(this.editedItem.start_date);
      let endDate = new Date(this.editedItem.end_date);

      this.editedItem.year = endDate.getFullYear();

      // Calculate the time difference in milliseconds
      let timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

      // Convert the time difference to days
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));



      this.editedItem.total_days = diffDays + 1;
    },
    gotoDialogPage(item) {
      // console.log('item', item);
      this.DialogEmployeesData = item.employees;
      this.dialogEmployees = true;
    },
    datatable_save() {
    },
    datatable_cancel() {
      this.datatable_search_textbox = '';
    },
    datatable_open() {
      this.datatable_search_textbox = '';
    },
    datatable_close() {
      this.loading = false;
    },
    toggleDepartmentSelection() {
      this.selectAllDepartment = !this.selectAllDepartment;
    },
    toggleEmployeeSelection() {
      this.selectAllEmployee = !this.selectAllEmployee;
    },
    can(per) {
      let u = this.$auth.user;
      return (
        (u && u.permissions.some((e) => e == per || per == "/")) || u.is_master
      );
    },
    onScroll() {
      this.scrollInvoked++;
    },

    getDepartments() {
      let options = {
        params: {
          per_page: 1000,
          company_id: this.$auth.user.company_id,
        },
      };
      this.$axios.get(`departments`, options).then(({ data }) => {
        this.departments = data.data;
      });
    },

    employeesByDepartment() {
      this.loading_dialog = true;
      const { page, itemsPerPage } = this.options_dialog;

      let options = {
        params: {
          department_ids: this.editedItem.departments,
          per_page: itemsPerPage,
          page: page,
          company_id: this.$auth.user.company_id,
        },
      };

      if (!this.editedItem.departments.length) {
        this.getEmployees();
        return;
      }

      this.$axios.get("employeesByDepartment", options).then(({ data }) => {
        this.employees_dialog = data.data;
        this.loading_dialog = false;
      });
    },

    getDataFromApi(url = this.endpoint, filter_column = '', filter_value = '') {
      if (url == '') url = this.endpoint;
      this.loading = true;

      let endDate = new Date();



      const { page, itemsPerPage } = this.options;

      let options = {
        params: {
          per_page: itemsPerPage,
          company_id: this.$auth.user.company_id,
          year: endDate.getFullYear(),
        },
      };
      if (filter_column != '') {

        options.params[filter_column] = filter_value;

      }

      this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {

        if (filter_column != '' && data.data.length == 0) {
          this.snack = true;
          this.snackColor = 'error';
          this.snackText = 'No Results Found';
          this.loading = false;
          return false;
        }
        this.data = data.data;
        this.total = data.total;
        this.loading = false;
      });
    },
    searchIt(e) {
      if (e.length == 0) {
        this.getDataFromApi();
      } else if (e.length > 2) {
        this.getDataFromApi(`${this.endpoint}/search/${e}`);
      }
    },

    editItem(item) {
      this.errors = [];
      this.formTitle = "Edit Holidays Information";
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;

    },

    delteteSelectedRecords() {
      confirm(
        "Are you sure you wish to delete selected records , to mitigate any inconvenience in future."
      ) &&
        this.$axios
          .post(`${this.endpoint}/delete/selected`, {
            ids: this.ids.map((e) => e.id),
          })
          .then(({ data }) => {
            if (!data.status) {
              this.errors = data.errors;
            } else {
              this.snackbar = data.status;
              this.ids = [];
              this.response = "Selected records has been deleted";
            }
            this.getDataFromApi();
          })
          .catch((err) => console.log(err));
    },

    deleteItem(item) {
      confirm(
        "Are you sure you wish to delete , to mitigate any inconvenience in future."
      ) &&
        this.$axios
          .delete(this.endpoint + "/" + item.id)
          .then(({ data }) => {
            if (!data.status) {
              this.errors = data.errors;
            } else {
              this.getDataFromApi();
              this.snackbar = data.status;
              this.response = data.message;
            }
          })
          .catch((err) => console.log(err));
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    getEmployees(url = "employee") {
      this.loading = true;

      const { page, itemsPerPage } = this.options;

      let options = {
        params: {
          per_page: itemsPerPage,
          company_id: this.$auth.user.company_id,
        },
      };

      this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
        this.employees_dialog = data.data;
      });
    },

    save() {


      this.editedItem.company_id = this.$auth.user.company_id;

      if (this.editedIndex > -1) {
        this.$axios
          .put(this.endpoint + "/" + this.editedItem.id, this.editedItem)
          .then(({ data }) => {
            if (!data.status) {
              this.errors = data.errors;
              this.errors = data.errors;
              this.snackColor = 'error';
              this.snackbar = true;
              this.response = data.message;
            } else {
              const index = this.data.findIndex(
                (item) => item.id == this.editedItem.id
              );
              this.data.splice(index, 1, {
                id: this.editedItem.id,
                name: this.editedItem.name,
              });
              this.getDataFromApi();
              this.snackbar = data.status;
              this.response = data.message;
              this.close();
            }
          })
          .catch((err) => console.log(err));
      } else {
        this.$axios
          .post(this.endpoint, this.editedItem)
          .then(({ data }) => {
            if (!data.status) {
              this.errors = data.errors;

              this.snackbar = true;
              this.snackColor = 'error';
              this.response = data.message;
              this.loading = false;
            } else {
              this.getDataFromApi();
              this.snackbar = data.status;
              this.response = data.message;
              this.close();
              this.errors = [];
              this.search = "";
            }
          })
          .catch((res) => console.log(res));
      }
    },
  },
};
</script>

