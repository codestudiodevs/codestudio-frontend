<template>
  <div style="width: 100% !important">
    <div>
      <!-- <v-row>
        <v-col cols="12">
          <v-row class="mt-5 mb-5">
            <v-col cols="4">
              <h4>Timezone Mapping - Edit/Update</h4>
              <div>Dashboard</div>
            </v-col>
          </v-row>
          <v-progress-linear v-if="progressloading" :active="loading" :indeterminate="loading" absolute
            color="primary"></v-progress-linear>
        </v-col>
      </v-row> -->
      <v-row>
        <div class="text-center ma-2">
          <v-snackbar :color="snackbar.color" v-model="snackbar.show" small top="top" :timeout="3000">
            {{ response }}
          </v-snackbar>
        </div>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-select @change="loadDepartmentemployees" v-model="departmentSelected" :items="departments" dense outlined
            item-value="id" item-text="name" hide-details label="Department" :search-input.sync="searchInput"></v-select>
        </v-col>
        <v-col cols="4">
          <v-select v-model="timezonesselected" :items="timezones" dense outlined item-value="timezone_id"
            item-text="timezone_name" hide-details label="Timezones" required></v-select>
        </v-col>
        <v-col cols="4">
          <div style="width: 150px; float: right">
            <button @click="goback()" type="button" id="back" class="btn primary btn-block white--text v-size--default">
              <v-icon color="white">mdi mdi-format-list-bulleted-square</v-icon>
              View List
            </button>
          </div>
        </v-col>
      </v-row>
      <v-row>

        <v-col cols="5">
          <v-toolbar color="background" dense flat dark>
            <span>All Employees List</span>
          </v-toolbar>
          <div>
            <v-card class="timezoneedit-displaylist">

              <v-card-text class="timezoneedit-displaylistview" v-for="(user, index) in leftEmployees" :id="user.id"
                v-model="leftSelectedEmp" :key="user.id">
                <div class="row">

                  <v-col class=" col-1   " style="padding:0px">
                    <!-- <v-checkbox
                      v-if="(!user.timezone) || (user.timezone.timezone_name == '---' || user.timezone.timezone_id == timezonesselected || user.timezone.timezone_id == 1)"
                      hideDetails class="col-1   d-flex flex-column  justify-center " v-model="leftSelectedEmp"
                      :value="user.id" primary hide-details></v-checkbox>

                    <v-checkbox v-else indeterminate value disabled hide-details
                      class="col-1   d-flex flex-column  justify-center "></v-checkbox> -->
                    <v-checkbox hideDetails class="col-1   d-flex flex-column  justify-center " v-model="leftSelectedEmp"
                      :value="user.id" primary hide-details></v-checkbox>



                  </v-col>
                  <div class="col-8" :style="{
                    color:
                      user.timezone && user.timezone.timezone_name
                        ? '#000000'
                        : '#b4b0b0',
                  }" style="padding-top:21px">
                    {{ user.employee_id }}: {{ user.first_name }} {{ user.last_name }}:
                    <span v-if="user.timezone && user.timezone.timezone_id != 1">
                      {{ user.timezone.timezone_name == '---' ? '---' : user.timezone.timezone_name +
                        ' Assigned'
                      }}
                    </span>
                  </div>
                  <div class="col-3"></div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>

        <v-col cols="2">
          <div style="text-align: -webkit-center">
            <button type="button" id="undo_redo_undo" class="btn primary btn-block white--text">
              Options
            </button>

            <button @click="moveToRightEmpOption2" type="button" id="undo_redo_rightSelected"
              class="btn btn-default btn-block">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-right theme--red"></i>
            </button>

            <button @click="allmoveToRightEmp" type="button" id="undo_redo_rightAll" class="btn btn-default btn-block">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-double-right theme--red"></i>
            </button>
            <button @click="moveToLeftempOption2" type="button" id="undo_redo_leftSelected"
              class="btn btn-default btn-block">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-left theme--red"></i>
            </button>
            <button @click="allmoveToLeftemp" type="button" id="undo_redo_leftAll" class="btn btn-default btn-block">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-double-left theme--red"></i>
            </button>
          </div>
        </v-col>

        <v-col cols="5">
          <v-toolbar color="background" dense flat dark>
            <span>Selected Employees List</span>
          </v-toolbar>
          <div>
            <v-card class="timezoneedit-displaylist">
              <v-card-text class="timezoneedit-displaylistview" v-for="(user, index) in rightEmployees" :id="user.id"
                v-model="rightSelectedEmp" :key="user.id">
                <div class="row">

                  <v-col class=" col-1   " style="padding:0px">
                    <v-checkbox hideDetails class="col-1   d-flex flex-column  justify-center " v-model="rightSelectedEmp"
                      :value="user.id" primary hide-details></v-checkbox>

                  </v-col>
                  <div class="col-sm" style="padding-top:21px;color:#000000">
                    {{ user.employee_id }} : {{ user.first_name }} {{ user.last_name }}
                  </div>
                  <div class="col-sm" style="padding-top:21px">
                    <span style="color: red">{{ user.sdkEmpResponse }}</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
            <!-- <select
              multiple
              v-model="rightSelectedEmp"
              @dblclick="moveToLeftemp"
              class="form-control"
              size="13"
            >
              <option
                v-for="(user, index) in rightEmployees"
                :key="index"
                :value="user.id"
              >
                Eid: {{ user.employee_id }} : {{ user.display_name }} :
              </option>
            </select> -->
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-toolbar color="background" dense flat dark>
            <span>All Devices List</span>
          </v-toolbar>
          <div>
            <v-card class="timezoneedit-displaylist">
              <v-card-text class="timezoneedit-displaylistview" v-for="(user, index) in leftDevices" :id="user.id"
                v-model="leftSelectedDevices" :key="user.id">
                <div class="row">
                  <v-col class=" col-1   " style="padding:0px">
                    <v-checkbox v-if="user.status.name == 'active'" hideDetails
                      class="col-1   d-flex flex-column  justify-center " v-model="leftSelectedDevices" :value="user.id"
                      primary hide-details></v-checkbox>
                    <v-checkbox v-else indeterminate title="Device is offline" value disabled hide-details
                      class="col-1   d-flex flex-column  justify-center "></v-checkbox>
                  </v-col>
                  <div class="col" style="padding-top:21px;color:#000000">
                    {{ user.name }} : {{ user.device_id }}
                    <span style="color:green" v-if="user.status.name == 'active'">
                      Online</span>
                    <span style="color:red" v-else>Offline
                    </span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
            <!-- <select
              multiple
              v-model="leftSelectedDevices"
              @dblclick="moveToRightDevices"
              class="form-control"
              size="13"
            >
              <option
                v-for="(device, index) in leftDevices"
                :key="index"
                :value="device.id"
              >
                {{ device.name }}: {{ device.location }}(
                {{ device.device_id }})
                <span class="error--text">Test</span>
              </option>
            </select> -->
          </div>
        </v-col>

        <v-col cols="2">
          <div style="text-align: -webkit-center">
            <button type="button" id="undo_redo_undo" class="btn primary btn-block white--text">
              Options
            </button>

            <button @click="moveToRightDevicesOption2" type="button" id="undo_redo_rightSelected"
              class="btn btn-default btn-block">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-right theme--red"></i>
            </button>

            <button @click="allmoveToRightDevices" type="button" id="undo_redo_rightAll"
              class="btn btn-default btn-block">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-double-right theme--red"></i>
            </button>
            <button @click="moveToLeftDevicesOption2" type="button" id="undo_redo_leftSelected"
              class="btn btn-default btn-block">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-left theme--red"></i>
            </button>
            <button @click="allmoveToLeftDevices" type="button" id="undo_redo_leftAll" class="btn btn-default btn-block">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-double-left theme--red"></i>
            </button>
          </div>
        </v-col>

        <v-col cols="5">
          <v-toolbar color="background" dense flat dark>
            <span>Selected Devices List</span>
          </v-toolbar>
          <div>
            <v-card class="timezoneedit-displaylist">
              <v-card-text class="timezoneedit-displaylistview" v-for="(user, index) in rightDevices" :id="user.id"
                v-model="rightSelectedDevices" :key="user.id">
                <div class="row">
                  <v-col class=" col-1   " style="padding:0px">
                    <v-checkbox hideDetails class="col-1   d-flex flex-column  justify-center "
                      v-model="rightSelectedDevices" :value="user.id" primary hide-details></v-checkbox>
                  </v-col>
                  <div class="col-sm" style="padding-top:21px;color:#000000">
                    {{ user.name }} : {{ user.device_id }}
                  </div>
                  <div class="col-sm" style="padding-top:21px">

                    <span v-if="user.sdkDeviceResponse == 'Success'" style="color: green">{{ user.sdkDeviceResponse
                    }}</span>
                    <span v-else style="color: red">{{ user.sdkDeviceResponse }}</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="row">
            <div class="col col-lg-6 text-center">
              <span v-if="errors && errors.message" class="text-danger mt-2">{{
                errors.message
              }}</span>
            </div>
            <div class="col col-lg-3 text-right">
              <div style="width: 150px; float: right">
                <button :loading="loading" @click="goback()" type="button" id="save"
                  class="btn primary btn-block white--text v-size--default">
                  Back
                </button>
              </div>
            </div>
            <div class="col col-lg-3 text-right">
              <div style="width: 150px; float: right">
                <button :loading="loading" @click="onSubmit" type="button" id="save"
                  class="btn primary btn-block white--text v-size--default">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- <Preloader v-else /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      displaybutton: true,
      progressloading: false,
      searchInput: "",
      snackbar: {
        message: "",
        color: "black",
        show: true,
      },
      errors: [],
      response: "",
      color: "primary",
      loading: true,
      endpointEmployee: "get_employeeswith_timezonename",
      endpointUpdatetimezoneStore: "employee_timezone_mapping",
      //endpointUpdatetimezoneUpdate: "employee_timezone_mapping",
      endpointDevise: "device",
      endPointMapping: "employee_timezone_mapping",
      leftSelectedEmp: [],
      departmentSelected: [],
      departments: [],
      leftEmployees: [],
      rightSelectedEmp: [],
      rightEmployees: [],
      leftSelectedDevices: [],
      leftDevices: [],
      rightSelectedDevices: [],
      rightDevices: [],
      department_ids: ["---"],
      timezones: ["Timeszones are not available"],
      timezonesselected: parseInt(this.$route.query.id),
      options: {
        params: {
          company_id: this.$auth.user.company_id,
          cols: ["id", "name"],
        },
      },
      mappingtId: "",
      timezone_id: "",
    };
  },
  mounted: function () {
    this.snackbar.show = true;
    this.snackbar.message = "Data loading...Please wait ";
    this.response = "Data loading...Please wait ";

    this.$nextTick(function () {
      setTimeout(() => {
        //this.snackbar = false;

        this.getMappeddatafromAPI();
      }, 2000);
    });

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  created() {
    this.getDepartmentsApi(this.options);
    this.getDevisesDataFromApi();
    this.getEmployeesDataFromApi();
    this.getTimezonesFromApi();
  },
  methods: {
    verifySubmitButton() {
      if (this.rightEmployees.length > 0 && this.rightDevices.length > 0) {
        this.displaybutton = true;
      }
      else {
        this.displaybutton = false;
      }
    },
    fetch_logs() { },
    getMappeddatafromAPI() {
      this.mappingtId = this.$route.query.id;

      let url = this.endPointMapping;


      let options = {
        params: {
          per_page: 1000, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
        },
      };
      let page = 1;
      this.$axios.get(`${url}/${this.mappingtId}`, options).then(({ data }) => {

        this.rightEmployees = data.employee_id;

        let url1 = "get_employeeswith_timezonename_id";
        this.$axios.get(`get_employeeswith_timezonename_id/${data.timezone_id}`, options).then(({ data }) => {

          this.rightEmployees = data.data;
        });
        this.rightDevices = data.device_id;

        this.timezonesselected = parseInt(data.timezone_id);


        this.rightEmployees
          .map((e) => ({ id: e.id }))
          .filter((re) => {
            let selectedindex = this.leftEmployees.findIndex(
              (le) => re.id == le.id
            );

            this.leftEmployees.splice(selectedindex, 1);
          });
        //let leftEmployees = this.leftEmployees;
        //this.leftEmployees = leftEmployees.filter((el) => el.timezone.timezone_name == '---');
        //this.rightEmployees = this.leftEmployees.filter((el) => el.timezone.timezone_name != '---');

        this.rightDevices
          .map((e) => ({ id: e.id }))
          .filter((re) => {
            let selectedindex = this.leftDevices.findIndex(
              (le) => re.id == le.id
            );

            this.leftDevices.splice(selectedindex, 1);
          });
      });
    },
    loadDepartmentemployees() {
      //this.loading = true;
      // let page = this.pagination.current;
      let url = this.endpointEmployee;

      let options = {
        params: {
          per_page: 1000, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
          department_id: this.departmentSelected,
          cols: ["id", "employee_id", "display_name"],
        },
      };
      let page = 1;

      this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
        this.leftEmployees = [];
        this.leftEmployees = data.data;
        this.leftSelectedEmp = [];

        this.rightEmployees = [];
        this.rightSelectedEmp = [];
      }, 1000);
    },
    getDepartmentsApi(options) {
      this.$axios
        .get("departments", options)
        .then(({ data }) => {
          this.departments = data.data;
          this.departments.unshift({ id: "---", name: "All Departments" });
        })
        .catch((err) => console.log(err));
    },
    getTimezonesFromApi() {
      let options = {
        params: {
          per_page: 1000, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
        },
      };
      this.$axios
        .get("timezone", options)
        .then(({ data }) => {
          this.timezones = data.data; //1/2/3

          this.timezonesselected = parseInt(this.$route.query.id);

          console.log(this.timezones);
          console.log(this.timezonesselected);
          this.$axios
            .get("employee_timezone_mapping", options)
            .then(({ data }) => {
              console.log(data);
              data.data.forEach((element) => { //2/3

                let selectedindex = this.timezones.findIndex(
                  (e) => e.timezone_id == element.timezone_id
                );


                if (selectedindex >= 0 && element.id != this.timezonesselected) this.timezones.splice(selectedindex, 1);
              });



            });
        })
        .catch((err) => console.log(err));


    },
    resetErrorMessages() {
      this.errors = [];
      this.response = "";

      $.extend(this.leftEmployees, {
        sdkEmpResponse: "",
      });
      $.extend(this.leftDevices, {
        sdkDeviceResponse: "",
      });
    },
    onSubmit() {
      this.resetErrorMessages();

      if (this.timezonesselected == "") {
        this.response = this.response + "Timezones not selected";
      } else if (this.rightEmployees.length == 0) {
        this.response = this.response + " Atleast select one Employee Details";
      } else if (this.rightDevices.length == 0) {
        this.response = this.response + " Atleast select one Device Details";
      }

      if (this.response != "") {
        this.snackbar.show = true;
        this.snackbar.message = this.response;
        this.snackbar.color = "red";
        setTimeout(() => {
          this.snackbar.show = false;
        }, 1000 * 10);
        return false;
      }
      this.loading = true;

      let columnsToFilter = ["systeM_user_id"];
      let onlyUserSystemids = {};
      // $.each(columnsToFilter, function (index, column) {
      //   if (this.timezonesselected.hasOwnProperty(column)) {
      //     onlyUserSystemids[column] = jsonData[column];
      //   }
      // });

      // Define the keys you want to select
      let keysToSelect = ["system_user_id"];

      // Select the specified keys from each object
      let filteredDataEmp = [];
      this.rightEmployees.map(function (obj) {
        let selectedObj = {};
        keysToSelect.forEach(function (key) {
          if (obj.hasOwnProperty(key)) {
            // selectedObj[key] = obj[key];
            selectedObj = obj[key];
            filteredDataEmp.push(selectedObj);
          }
        });
        return selectedObj;
      });
      //
      // Define the keys you want to select
      keysToSelect = ["device_id"];

      // Select the specified keys from each object
      let filteredDataDevices = [];
      this.rightDevices.map(function (obj) {
        let selectedObj = {};
        keysToSelect.forEach(function (key) {
          if (obj.hasOwnProperty(key)) {
            // selectedObj[key] = obj[key];
            selectedObj = obj[key];
            filteredDataDevices.push(selectedObj);
          }
        });
        return selectedObj;
      });


      let options = {
        timezone_id: this.timezonesselected,
        employee_id: this.rightEmployees,
        device_id: this.rightDevices,
        company_id: this.$auth.user.company_id,
        employee_ids: filteredDataEmp,
        device_ids: filteredDataDevices,
      };

      let url = this.endpointUpdatetimezoneStore;

      this.progressloading = true;
      let jsrightEmployees = this.rightEmployees;

      let SDKSuccessStatus = true;
      let idTable = this.$route.query.id;
      this.$axios.put(`${url}/${idTable}`, options).then(({ data }) => {
        // this.displaybutton = false;
        if (data.record.SDKResponse) {
          this.loading = false;

          $.each(this.rightDevices, function (index, rightDevicesobj) {
            let SdkResponseDeviceobject = data.record.SDKResponse.data.find(
              (e) => e.sn == rightDevicesobj.device_id
            );


            let deviceStatusResponse = "";
            let EmpStatusResponse = "";

            if (SdkResponseDeviceobject.message == "") {
              deviceStatusResponse = "Success";
            } else if (
              SdkResponseDeviceobject.message == "The device was not found"
            ) {
              deviceStatusResponse = "The device was not found or offline";
              SDKSuccessStatus = false;
            } else if (SdkResponseDeviceobject.message == "person info error") {
              let SDKUseridArray = SdkResponseDeviceobject.userList; //SDK error userslist
              jsrightEmployees.forEach((element) => {
                element["sdkEmpResponse"] = "Success";
                let systemUserid = element.system_user_id;
                SDKSuccessStatus = false;
                let selectedEmpobject = SDKUseridArray.find(
                  (e) => e.userCode == systemUserid
                );
                EmpStatusResponse = SdkResponseDeviceobject.sdkEmpResponse;
                deviceStatusResponse = "";


                if (EmpStatusResponse != "") {
                  //Adding extra parameters for Employee object
                  if (selectedEmpobject) {
                    element["sdkEmpResponse"] = "person photo error ";
                    // $.extend(element, {
                    //   sdkEmpResponse: "person info error ",
                    // });
                  } else {
                    // $.extend(element, {
                    //   sdkEmpResponse: " Success",
                    // });
                    element["sdkEmpResponse"] = "Success";
                  }
                }


              });
            } else {
            }

            //Adding extra parameters for Devices object
            rightDevicesobj["sdkDeviceResponse"] =
              deviceStatusResponse != "" ? deviceStatusResponse : " Success";
            this.errors = [];
          });
          this.rightEmployees = jsrightEmployees;
          this.progressloading = false;

          this.loading = false;
          if (!SDKSuccessStatus) {
            {
              this.errors = data.errors;
            }
            this.errors = [];
            this.errors["message"] =
              "Device/Employee Error:   Device and Employee details are Mapped. You can add/remove items from Edit list ";

            //this.displaybutton = false;
          } else {
            this.$router.push("/timezonemapping/list");
          }
        } else {
          this.errors = [];
          this.progressloading = false;

          this.errors["message"] = "Device Communication is not available";


          this.snackbar.show = true;
          this.snackbar.message = "Device Communication is not available ";
          this.response = "Device Communication is not available ";
          return false;
        }
      });
    },
    goback() {
      this.$router.push("/timezonemapping/list");
    },
    getDevisesDataFromApi(url = this.endpointDevise) {
      //this.loading = true;
      // let page = this.pagination.current;
      let options = {
        params: {
          per_page: 1000, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
          //cols: ["id", "location", "name", "device_id"],
        },
      };
      let page = 1;
      this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
        this.leftDevices = data.data;
      });
    },
    getEmployeesDataFromApi(url = this.endpointEmployee) {
      //this.loading = true;
      // let page = this.pagination.current;
      let options = {
        params: {
          per_page: 1000, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
          cols: ["id", "employee_id", "display_name", "first_name", "last_name"],
        },
      };
      let page = 1;
      this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
        this.leftEmployees = data.data;
      }, 1000);
    },
    sortObject: (o) =>
      o.sort(function compareByName(a, b) {
        if (a.first_name && b.first_name) {
          let nameA = a.first_name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
          let nameB = b.first_name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0;
          }
        }
      }),
    sortObjectD: (o) =>
      o.sort(function compareByName(a, b) {
        if (a.device_id && b.device_id) {
          let nameA = a.device_id.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
          let nameB = b.device_id.toUpperCase();

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0;
          }
        } else {
          return 0;
        }
      }),
    sortObjectC: (o) =>
      o.sort(function compareByName(a, b) {

        if (a.name && b.name) {
          let nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
          let nameB = b.name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0;
          }
        }
      }),
    allmoveToLeftemp() {
      this.resetErrorMessages();
      this.leftEmployees = this.leftEmployees.concat(this.rightEmployees);
      this.rightEmployees = [];
      this.leftEmployees = this.sortObject(this.leftEmployees);
      this.verifySubmitButton();
    },
    allmoveToRightEmp() {
      this.resetErrorMessages();
      // this.rightEmployees = this.rightEmployees.concat(this.leftEmployees);
      // this.leftEmployees = [];
      this.rightEmployees = this.rightEmployees.concat(this.leftEmployees.filter((el) => el.timezone.timezone_name == '---' || el.timezone.timezone_id == 1));

      this.leftEmployees = this.leftEmployees.filter((el) => el.timezone.timezone_id != 1 && el.timezone.timezone_id != this.timezonesselected);

      this.rightEmployees = this.sortObject(this.rightEmployees);
      this.verifySubmitButton();
    },
    moveToLeftempOption2() {
      // this.rightSelectedEmp.push(id);

      this.resetErrorMessages();
      if (!this.rightSelectedEmp.length) return;


      //for (let i = this.leftSelectedEmp.length; i > 0; i--) {
      let _rightSelectedEmp_length = this.rightSelectedEmp.length;
      for (let i = 0; i < _rightSelectedEmp_length; i++) {
        if (this.rightSelectedEmp) {
          let selectedindex = this.rightEmployees.findIndex(
            (e) => e.id == this.rightSelectedEmp[i]
          );

          let selectedobject = this.rightEmployees.find(
            (e) => e.id == this.rightSelectedEmp[i]
          );

          selectedobject.sdkEmpResponse = "";
          this.leftEmployees.push(selectedobject);

          this.rightEmployees.splice(selectedindex, 1);
        }
      }
      this.leftEmployees = this.sortObject(this.leftEmployees);

      for (let i = 0; i < _rightSelectedEmp_length; i++) {

        this.rightSelectedEmp.pop(this.rightSelectedEmp[i]);
      }
      this.verifySubmitButton();
    },
    moveToRightEmpOption2() {
      this.resetErrorMessages();
      if (!this.leftSelectedEmp.length) return;

      let _leftSelectedEmp_length = this.leftSelectedEmp.length;
      for (let i = 0; i < _leftSelectedEmp_length; i++) {
        if (this.leftSelectedEmp) {
          let selectedindex = this.leftEmployees.findIndex(
            (e) => e.id == this.leftSelectedEmp[i]
          );

          let selectedobject = this.leftEmployees.find(
            (e) => e.id == this.leftSelectedEmp[i]
          );

          this.rightEmployees.push(selectedobject);

          this.leftEmployees.splice(selectedindex, 1);
        }
      }
      this.rightEmployees = this.sortObject(this.rightEmployees);

      for (let i = 0; i < _leftSelectedEmp_length; i++) {

        this.leftSelectedEmp.pop(this.leftSelectedEmp[i]);
      }
      this.verifySubmitButton();
    },
    /* Devices---------------------------------------- */
    allmoveToLeftDevices() {
      this.resetErrorMessages();
      this.leftDevices = this.leftDevices.concat(this.rightDevices);
      this.rightDevices = [];

      this.leftDevices = this.sortObjectD(this.leftDevices);
      this.verifySubmitButton();
    },
    allmoveToRightDevices() {
      this.resetErrorMessages();


      this.rightDevices = this.rightDevices.concat(this.leftDevices.filter((el) => el.status.name == "active"));
      this.leftDevices = this.leftDevices.filter((el) => el.status.name == "inactive");


      this.rightDevices = this.sortObjectD(this.rightDevices);
      this.verifySubmitButton();
    },
    moveToLeftDevicesOption2() {

      this.resetErrorMessages();
      if (!this.rightSelectedDevices.length) return;


      //for (let i = this.leftSelectedDevices.length; i > 0; i--) {
      let _rightSelectedDevices_length = this.rightSelectedDevices.length;
      for (let i = 0; i < _rightSelectedDevices_length; i++) {
        if (this.rightSelectedDevices) {
          let selectedindex = this.rightDevices.findIndex(
            (e) => e.id == this.rightSelectedDevices[i]
          );

          let selectedobject = this.rightDevices.find(
            (e) => e.id == this.rightSelectedDevices[i]
          );

          this.leftDevices.push(selectedobject);

          this.rightDevices.splice(selectedindex, 1);
        }
      }

      this.leftDevices = this.sortObjectD(this.leftDevices);

      for (let i = 0; i < _rightSelectedDevices_length; i++) {

        this.rightSelectedDevices.pop(this.rightSelectedDevices[i]);
      }
      this.verifySubmitButton();
    },
    moveToRightDevicesOption2() {
      this.resetErrorMessages();
      if (!this.leftSelectedDevices.length) return;

      let _leftSelectedDevices_length = this.leftSelectedDevices.length;
      for (let i = 0; i < _leftSelectedDevices_length; i++) {
        if (this.leftSelectedDevices) {
          let selectedindex = this.leftDevices.findIndex(
            (e) => e.id == this.leftSelectedDevices[i]
          );

          let selectedobject = this.leftDevices.find(
            (e) => e.id == this.leftSelectedDevices[i]
          );

          this.rightDevices.push(selectedobject);

          this.leftDevices.splice(selectedindex, 1);
        }
      }

      this.rightDevices = this.sortObjectD(this.rightDevices);


      for (let i = 0; i < _leftSelectedDevices_length; i++) {

        this.leftSelectedDevices.pop(this.leftSelectedDevices[i]);
      }
      this.verifySubmitButton();
    },
  },
};
</script>

