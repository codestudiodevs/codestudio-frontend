<template>
  <div>
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" small top="top" :color="color">
        {{ response }}
      </v-snackbar>
    </div>
    <v-card>
      <v-card-text>
        <v-dialog v-model="dialogCropping" width="500">
          <v-card style="padding-top: 20px">
            <v-card-text>
              <!-- <img :src="imageUrl" alt="Preview Image" /> -->
              <!-- Cropping image step1 -->
              <VueCropper
                v-show="selectedFile"
                ref="cropper"
                :src="selectedFile"
                alt="Source Image"
                :aspectRatio="1"
                :autoCropArea="0.9"
                :viewMode="3"
              ></VueCropper>

              <!-- <div class="cropper-preview"></div> -->
            </v-card-text>

            <v-card-actions>
              <div col="6" md="6" class="col-sm-12 col-md-6 col-12 pull-left">
                <v-btn
                  class="danger btn btn-danger text-left"
                  text
                  @click="closePopup()"
                  style="float: left"
                  >Cancel</v-btn
                >
              </div>
              <div col="6" md="6" class="col-sm-12 col-md-6 col-12 text-right">
                <v-btn
                  class="primary btn btn-danger text-right"
                  @click="saveCroppedImageStep2(), (dialog = false)"
                  >Crop</v-btn
                >
              </div>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-row>
          <v-col md="6" sm="12" cols="12" dense>
            <v-row>
              <v-col md="6" sm="12" cols="12">
                <label class="col-form-label"
                  >Title <span class="text-danger">*</span></label
                >
                <v-select
                  v-model="employee.title"
                  :items="titleItems"
                  :hide-details="!errors.title"
                  :error="errors.title"
                  :error-messages="
                    errors && errors.title ? errors.title[0] : ''
                  "
                  dense
                  outlined
                ></v-select>
              </v-col>
              <v-col md="6" sm="12" cols="12" dense>
                <label class="col-form-label"
                  >Display Name <span class="text-danger">*</span></label
                >
                <v-text-field
                  dense
                  outlined
                  :hide-details="!errors.display_name"
                  type="text"
                  v-model="employee.display_name"
                  :error="errors.display_name"
                  :error-messages="
                    errors && errors.display_name ? errors.display_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" sm="12" cols="12" dense>
                <label class="col-form-label"
                  >First Name <span class="text-danger">*</span></label
                >
                <v-text-field
                  dense
                  outlined
                  :hide-details="!errors.first_name"
                  type="text"
                  v-model="employee.first_name"
                  :error="errors.first_name"
                  :error-messages="
                    errors && errors.first_name ? errors.first_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" sm="12" cols="12" dense>
                <label class="col-form-label"
                  >Last Name <span class="text-danger">*</span></label
                >
                <v-text-field
                  dense
                  outlined
                  :hide-details="!errors.last_name"
                  type="text"
                  v-model="employee.last_name"
                  :error="errors.last_name"
                  :error-messages="
                    errors && errors.last_name ? errors.last_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" cols="12" sm="12" dense>
                <label class="col-form-label"
                  >Employee ID <span class="text-danger">*</span></label
                >
                <v-text-field
                  dense
                  outlined
                  type="text"
                  v-model="employee.employee_id"
                  :hide-details="!errors.employee_id"
                  :error="errors.employee_id"
                  :error-messages="
                    errors && errors.employee_id ? errors.employee_id[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" cols="12" sm="12" dense>
                <label class="col-form-label"
                  >Employee Device Id <span class="text-danger">*</span></label
                >
                <v-text-field
                  dense
                  outlined
                  type="text"
                  v-model="employee.system_user_id"
                  :hide-details="!errors.system_user_id"
                  :error="errors.system_user_id"
                  :error-messages="
                    errors && errors.system_user_id
                      ? errors.system_user_id[0]
                      : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" sm="12" cols="12">
                <label class="col-form-label">Department </label>
                <v-autocomplete
                  :items="departments"
                  item-text="name"
                  item-value="id"
                  placeholder="Select"
                  v-model="employee.department_id"
                  :hide-details="!errors.department_id"
                  :error="errors.department_id"
                  :error-messages="
                    errors && errors.department_id
                      ? errors.department_id[0]
                      : ''
                  "
                  dense
                  outlined
                ></v-autocomplete>
              </v-col>
              <v-col md="6" sm="12" cols="12">
                <label class="col-form-label">Sub Department </label>
                <v-autocomplete
                  :items="sub_departments"
                  item-text="name"
                  item-value="id"
                  placeholder="Select"
                  v-model="employee.sub_department_id"
                  :hide-details="!errors.sub_department_id"
                  :error="errors.sub_department_id"
                  :error-messages="
                    errors && errors.sub_department_id
                      ? errors.sub_department_id[0]
                      : ''
                  "
                  dense
                  outlined
                ></v-autocomplete>
              </v-col>
              <v-col md="6" sm="12" cols="12">
                <label class="col-form-label">Designation </label>
                <v-autocomplete
                  :items="designations"
                  item-text="name"
                  item-value="id"
                  placeholder="Select"
                  v-model="employee.designation_id"
                  :hide-details="!errors.designation_id"
                  :error="errors.designation_id"
                  :error-messages="
                    errors && errors.designation_id
                      ? errors.designation_id[0]
                      : ''
                  "
                  dense
                  outlined
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-sm-6">
            <div class="form-group pt-15" style="margin: 0 auto; width: 200px">
              <v-img
                style="
                  width: 100%;
                  height: 200px;
                  border: 1px solid #5fafa3;
                  border-radius: 50%;
                  margin: 0 auto;
                "
                :src="previewImage || '/no-profile-image.jpg'"
              ></v-img>
              <br />
              <v-btn
                small
                class="form-control primary"
                @click="onpick_attachment"
                >{{ !upload.name ? "Upload" : "Change" }}
                Profile Image
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
              <input
                required
                type="file"
                @change="attachment"
                style="display: none"
                accept="image/*"
                ref="attachment_input"
              />

              <span
                v-if="errors && errors.profile_picture"
                class="text-danger mt-2"
                >{{ errors.profile_picture[0] }}</span
              >
            </div>
          </v-col>
          <!-- <v-divider></v-divider> -->
          <v-col cols="12" class="text-right">
            <v-btn
              v-if="can('employee_create')"
              small
              :loading="loading"
              color="primary"
              @click="store_data"
            >
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import "cropperjs/dist/cropper.css";
import VueCropper from "vue-cropperjs";
export default {
  components: {
    VueCropper,
  },
  props: ["employeeId"],
  data: () => ({
    image: "",
    leave_managers: [],
    mime_type: "",
    cropedImage: "",
    cropper: "",
    autoCrop: false,
    dialogCropping: false,
    selectedFile: "",
    upload_edit: {
      name: "",
    },

    attrs: [],
    dialog: false,
    editDialog: false,
    tab: null,
    m: false,
    expand: false,
    expand2: false,
    boilerplate: false,
    right: true,
    rightDrawer: false,
    drawer: true,
    tab: null,
    selectedItem: 1,

    on: "",
    color: "background",
    files: "",
    Model: "Employee",
    endpoint: "employee",
    search: "",
    loading: false,
    total: 0,
    next_page_url: "",
    prev_page_url: "",
    current_page: 1,
    per_page: 8,
    response: "",
    ListName: "",
    snackbar: false,
    btnLoader: false,
    max_employee: 0,
    employee: {
      title: "",
      display_name: "",
      employee_id: "",
      system_user_id: "",
      profile_picture: "",
      //employee_role_id: "",
      leave_group_id: "",
      reporting_manager_id: "",
    },
    upload: {
      name: "",
    },
    previewImage: null,
    snackbar: false,
    ids: [],
    loading: false,
    total: 0,
    titleItems: ["Mr", "Mrs", "Miss", "Ms", "Dr"],
    editedIndex: -1,
    response: "",
    departments: [],
    sub_departments: [],
    designations: [],
    roles: [],
    leave_groups: [],
    data: [],
    errors: [],
    departments: [],
    department_id: "",
    payloadOptions: {},
  }),

  created() {
    this.getInfo(this.employeeId);

    this.payloadOptions = {
      params: {
        per_page: 1000,
        company_id: this.$auth.user.company_id,
        department_ids: this.$auth.user.assignedDepartments,
      },
    };

    this.getDepartments();
    this.getSubDepartments();
    this.getDesignations();
    this.getRoles();
    //this.getLeaveGroups();
    //this.getLeaveManagers();

    try {
      let employee_id = this.$route.params.id;
      if (employee_id) {
        this.editItemId(employee_id);
      }
    } catch (error) {}
  },
  mounted() {
    //this.getDataFromApi();
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  methods: {
    getDepartments() {
      this.$axios.get(`departments`, this.payloadOptions).then(({ data }) => {
        this.departments = data.data;
      });
    },
    getSubDepartments() {
      this.$axios
        .get(`sub-departments`, this.payloadOptions)
        .then(({ data }) => {
          this.sub_departments = data.data;
        });
    },
    getDesignations() {
      this.$axios.get(`designation`, this.payloadOptions).then(({ data }) => {
        this.designations = data.data;
      });
    },
    getRoles() {
      this.payloadOptions.params.role_type = "employee";

      this.$axios.get(`role`, this.payloadOptions).then(({ data }) => {
        this.roles = data.data;
      });
    },
    // getLeaveGroups() {
    //   this.payloadOptions.params.company_id = this.$auth.user.company_id;

    //   this.$axios.get(`leave_groups`, this.payloadOptions).then(({ data }) => {
    //     this.leave_groups = data.data;

    //   });
    // },
    // getLeaveManagers() {

    //   this.payloadOptions.params.company_id = this.$auth.user.company_id;

    //   this.$axios.get(`employeesList`, this.payloadOptions).then(({ data }) => {
    //     this.leave_managers = data.data;

    //   });
    // },
    // getEmployeeName(item) {

    //   return item.first_name ? item.first_name + ' ' + item.last_name : '---';
    // },
    getInfo(id) {
      this.$axios
        .get(`employee-single/${id}`)
        .then(({ data }) => {
          this.employee = {
            title: data.title,
            display_name: data.display_name,
            first_name: data.first_name,
            last_name: data.last_name,
            employee_id: data.employee_id,
            system_user_id: data.system_user_id,
            department_id: data.department_id,
            sub_department_id: data.sub_department_id,
            designation_id: data.designation_id,
            //employee_role_id: data.user.employee_role_id,
            leave_group_id: data.leave_group_id,
            reporting_manager_id: data.reporting_manager_id,
          };

          // this.employee.id = data.id;
          this.previewImage = data.profile_picture;
        })
        .catch((err) => console.log(err));
    },
    saveCroppedImageStep2() {
      this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL();

      this.image_name = this.cropedImage;
      this.previewImage = this.cropedImage;

      this.dialogCropping = false;
    },
    can() {
      return true;
    },
    close() {
      this.dialog = false;
    },
    onpick_attachment() {
      this.$refs.attachment_input.click();
    },

    attachment(e) {
      this.upload.name = e.target.files[0] || "";

      let input = this.$refs.attachment_input;
      let file = input.files;

      if (file[0].size > 1024 * 1024) {
        e.preventDefault();
        this.errors["profile_picture"] = [
          "File too big (> 1MB). Upload less than 1MB",
        ];
        return;
      }

      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          //croppedimage step6
          // this.previewImage = e.target.result;

          this.selectedFile = event.target.result;

          this.$refs.cropper.replace(this.selectedFile);
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);

        this.dialogCropping = true;
      }
    },
    mapper(obj) {
      let employee = new FormData();

      for (let x in obj) {
        if (obj[x]) {
          employee.append(x, obj[x]);
        }
      }

      employee.append("company_id", this.$auth.user.company_id);

      return employee;
    },

    store_data() {
      let final = Object.assign(this.employee);
      let employee = this.mapper(final);

      //croppedimageStep3
      if (this.$refs.attachment_input.files[0]) {
        this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL();

        this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
          // Create a FormData object and append the Blob as a file
          //const formData = new FormData();
          employee.append("profile_picture", blob, "cropped_image.jpg");
          employee.append("attachment_input", blob, "cropped_image.jpg");

          //croppedimagesptep4 //push to API in blob method only
          this.saveToAPI(employee);
        }, "image/jpeg");
      } else {
        employee.delete("profile_picture");
        this.saveToAPI(employee);
      }
    },
    saveToAPI(employee) {
      this.$axios
        .post(`/employee-update/${this.employeeId}`, employee)
        .then(({ data }) => {
          this.loading = false;

          if (!data.status) {
            this.errors = data.errors;
          } else {
            this.errors = [];
            this.snackbar = true;
            this.response = "Employees Updated successfully";
            this.$emit("eventFromchild");

            //this.employeeDialog = false;
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
