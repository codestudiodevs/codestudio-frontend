<template>
  <div>
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" top="top" color="secondary" elevation="24">
        {{ response }}
      </v-snackbar>
    </div>
    <v-row>
      <v-col cols="6">
        <div class="form-group">
          <label class="col-form-label">{{ caps("passport no") }}</label>
          <input
            v-model="passport_list.passport_no"
            type="text"
            class="form-control"
          />
          <span v-if="errors && errors.passport_no" class="text-danger mt-2">{{
            errors.passport_no[0]
          }}</span>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="form-group">
          <label class="col-form-label">{{ caps("note") }}</label>
          <input
            v-model="passport_list.note"
            type="text"
            class="form-control"
          />
          <span v-if="errors && errors.note" class="text-danger mt-2">{{
            errors.note[0]
          }}</span>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="form-group">
          <label class="col-form-label">{{ caps("place of issues") }}</label>
          <input
            v-model="passport_list.place_of_issues"
            type="text"
            class="form-control"
          />
          <span
            v-if="errors && errors.place_of_issues"
            class="text-danger mt-2"
            >{{ errors.place_of_issues[0] }}</span
          >
        </div>
      </v-col>

      <v-col cols="6">
        <div class="form-group">
          <label class="col-form-label">{{ caps("country") }}</label>
          <input
            v-model="passport_list.country"
            class="form-control"
            type="text"
          />
          <span v-if="errors && errors.country" class="text-danger mt-2">{{
            errors.country[0]
          }}</span>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="form-group">
          <label class="col-form-label">{{ caps("issue date") }}</label>
          <input
            v-model="passport_list.issue_date"
            type="date"
            class="form-control"
          />
          <span v-if="errors && errors.issue_date" class="text-danger mt-2">{{
            errors.issue_date[0]
          }}</span>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="form-group">
          <label class="col-form-label">{{ caps("expiry date") }}</label>
          <input
            v-model="passport_list.expiry_date"
            type="date"
            class="form-control"
          />
          <span v-if="errors && errors.expiry_date" class="text-danger mt-2">{{
            errors.expiry_date[0]
          }}</span>
        </div>
      </v-col>

      <span v-if="errors && errors.length" class="error--text">{{
        errors
      }}</span>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-right">
        <v-btn class="primary" small @click="save_passport_info">Save</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["employeeId"],
  data() {
    return {
      passport_info: false,
      errors: [],
      snackbar: false,
      response: "",
      passport_list: {},
    };
  },
  created() {
    this.getInfo(this.employeeId);
  },
  methods: {
    getInfo(id) {
      this.$axios.get(`passport/${id}`).then(({ data }) => {
        this.passport_list = {
          ...data,
          employee_id: id,
        };
      });
    },
    caps(str) {
      if (str == "" || str == null) {
        return "---";
      } else {
        let res = str.toString();
        return res.replace(/\b\w/g, (c) => c.toUpperCase());
      }
    },

    can(item) {
      return true;
    },

    close_passport_info() {
      this.passport_info = false;
      this.errors = [];
      setTimeout(() => {}, 300);
    },

    save_passport_info() {
      let payload = {
        ...this.passport_list,
        company_id: this.$auth?.user?.company?.id,
        employee_id: this.passport_list.employee_id,
      };

      this.$axios
        .post(`passport`, payload)
        .then(({ data }) => {
          this.loading = false;

          if (!data.status) {
            this.errors = data.errors;
          } else {
            this.$emit("eventFromchild");
            this.errors = [];
            this.snackbar = true;
            this.response = data.message;
            this.close_passport_info();
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #fbfdff;
}
</style>
