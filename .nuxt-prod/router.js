import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _adf8651a = () => interopDefault(import('..\\pages\\announcement.vue' /* webpackChunkName: "pages/announcement" */))
const _d544b674 = () => interopDefault(import('..\\pages\\announcement-new.vue' /* webpackChunkName: "pages/announcement-new" */))
const _3cd70d02 = () => interopDefault(import('..\\pages\\assign_permission\\index.vue' /* webpackChunkName: "pages/assign_permission/index" */))
const _9c3cd746 = () => interopDefault(import('..\\pages\\attendance_modules.vue' /* webpackChunkName: "pages/attendance_modules" */))
const _97418f18 = () => interopDefault(import('..\\pages\\attendance_report\\index.vue' /* webpackChunkName: "pages/attendance_report/index" */))
const _2746f95e = () => interopDefault(import('..\\pages\\camera.vue' /* webpackChunkName: "pages/camera" */))
const _52c3bad0 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _05a07b6e = () => interopDefault(import('..\\pages\\dashboard1.vue' /* webpackChunkName: "pages/dashboard1" */))
const _05844c6c = () => interopDefault(import('..\\pages\\dashboard2.vue' /* webpackChunkName: "pages/dashboard2" */))
const _43b155fc = () => interopDefault(import('..\\pages\\date_range_picker_test.vue' /* webpackChunkName: "pages/date_range_picker_test" */))
const _091e0a04 = () => interopDefault(import('..\\pages\\department.vue' /* webpackChunkName: "pages/department" */))
const _679e487f = () => interopDefault(import('..\\pages\\department-mapping.vue' /* webpackChunkName: "pages/department-mapping" */))
const _7192837b = () => interopDefault(import('..\\pages\\designation.vue' /* webpackChunkName: "pages/designation" */))
const _7ae41040 = () => interopDefault(import('..\\pages\\device\\index.vue' /* webpackChunkName: "pages/device/index" */))
const _7f4afcb2 = () => interopDefault(import('..\\pages\\device_management\\index.vue' /* webpackChunkName: "pages/device_management/index" */))
const _6d8d6f31 = () => interopDefault(import('..\\pages\\devicelogs.vue' /* webpackChunkName: "pages/devicelogs" */))
const _3a7f9723 = () => interopDefault(import('..\\pages\\employee_photo_upload.vue' /* webpackChunkName: "pages/employee_photo_upload" */))
const _64004814 = () => interopDefault(import('..\\pages\\employee_schedule\\index.vue' /* webpackChunkName: "pages/employee_schedule/index" */))
const _1c766453 = () => interopDefault(import('..\\pages\\employee_to_report.vue' /* webpackChunkName: "pages/employee_to_report" */))
const _095fc159 = () => interopDefault(import('..\\pages\\employees\\index.vue' /* webpackChunkName: "pages/employees/index" */))
const _5df931fc = () => interopDefault(import('..\\pages\\generate_attendance_log.vue' /* webpackChunkName: "pages/generate_attendance_log" */))
const _7f27f972 = () => interopDefault(import('..\\pages\\holidays.vue' /* webpackChunkName: "pages/holidays" */))
const _fc989d58 = () => interopDefault(import('..\\pages\\host.vue' /* webpackChunkName: "pages/host" */))
const _cf782e04 = () => interopDefault(import('..\\pages\\hr_modules.vue' /* webpackChunkName: "pages/hr_modules" */))
const _555cdccf = () => interopDefault(import('..\\pages\\leavegroups.vue' /* webpackChunkName: "pages/leavegroups" */))
const _638db548 = () => interopDefault(import('..\\pages\\leaves.vue' /* webpackChunkName: "pages/leaves" */))
const _03d9abf5 = () => interopDefault(import('..\\pages\\leavetype.vue' /* webpackChunkName: "pages/leavetype" */))
const _7ba94aed = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _04c37d67 = () => interopDefault(import('..\\pages\\login-bkp.vue' /* webpackChunkName: "pages/login-bkp" */))
const _0cecb6d8 = () => interopDefault(import('..\\pages\\login1.vue' /* webpackChunkName: "pages/login1" */))
const _001534f4 = () => interopDefault(import('..\\pages\\manager_dashboard.vue' /* webpackChunkName: "pages/manager_dashboard" */))
const _9ad37698 = () => interopDefault(import('..\\pages\\master\\index.vue' /* webpackChunkName: "pages/master/index" */))
const _3e28cdea = () => interopDefault(import('..\\pages\\modules.vue' /* webpackChunkName: "pages/modules" */))
const _61704e1e = () => interopDefault(import('..\\pages\\payroll_modules.vue' /* webpackChunkName: "pages/payroll_modules" */))
const _b7cd4228 = () => interopDefault(import('..\\pages\\payslip.vue' /* webpackChunkName: "pages/payslip" */))
const _237bcb22 = () => interopDefault(import('..\\pages\\purpose.vue' /* webpackChunkName: "pages/purpose" */))
const _27fe4b82 = () => interopDefault(import('..\\pages\\qr-page.vue' /* webpackChunkName: "pages/qr-page" */))
const _27fa03ce = () => interopDefault(import('..\\pages\\report_notifications\\index.vue' /* webpackChunkName: "pages/report_notifications/index" */))
const _6feeafe3 = () => interopDefault(import('..\\pages\\reportsemployeelog.vue' /* webpackChunkName: "pages/reportsemployeelog" */))
const _1a62db85 = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _f88bb5bc = () => interopDefault(import('..\\pages\\role.vue' /* webpackChunkName: "pages/role" */))
const _9ec31768 = () => interopDefault(import('..\\pages\\salary\\index.vue' /* webpackChunkName: "pages/salary/index" */))
const _76e0a413 = () => interopDefault(import('..\\pages\\salary_type.vue' /* webpackChunkName: "pages/salary_type" */))
const _d23b2342 = () => interopDefault(import('..\\pages\\schedule\\index.vue' /* webpackChunkName: "pages/schedule/index" */))
const _355c4388 = () => interopDefault(import('..\\pages\\shift\\index.vue' /* webpackChunkName: "pages/shift/index" */))
const _60210faa = () => interopDefault(import('..\\pages\\sub-department.vue' /* webpackChunkName: "pages/sub-department" */))
const _55839019 = () => interopDefault(import('..\\pages\\tab.vue' /* webpackChunkName: "pages/tab" */))
const _154bf16d = () => interopDefault(import('..\\pages\\timeline.vue' /* webpackChunkName: "pages/timeline" */))
const _0101c925 = () => interopDefault(import('..\\pages\\timezone.vue' /* webpackChunkName: "pages/timezone" */))
const _f793baaa = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _26344b1c = () => interopDefault(import('..\\pages\\visitor.vue' /* webpackChunkName: "pages/visitor" */))
const _3bf7ea8c = () => interopDefault(import('..\\pages\\visitor_logs.vue' /* webpackChunkName: "pages/visitor_logs" */))
const _bb6d790e = () => interopDefault(import('..\\pages\\visitor-dashboard.vue' /* webpackChunkName: "pages/visitor-dashboard" */))
const _ced43560 = () => interopDefault(import('..\\pages\\visitors_report\\index.vue' /* webpackChunkName: "pages/visitors_report/index" */))
const _173d7297 = () => interopDefault(import('..\\pages\\wizard.vue' /* webpackChunkName: "pages/wizard" */))
const _86c437ac = () => interopDefault(import('..\\pages\\zone\\index.vue' /* webpackChunkName: "pages/zone/index" */))
const _78af011f = () => interopDefault(import('..\\pages\\assign_permission\\create.vue' /* webpackChunkName: "pages/assign_permission/create" */))
const _3cb5c30a = () => interopDefault(import('..\\pages\\attendance_report\\general.vue' /* webpackChunkName: "pages/attendance_report/general" */))
const _0b8c1d25 = () => interopDefault(import('..\\pages\\attendance_report\\multi_inout.vue' /* webpackChunkName: "pages/attendance_report/multi_inout" */))
const _dc6e3768 = () => interopDefault(import('..\\pages\\device_management\\create.vue' /* webpackChunkName: "pages/device_management/create" */))
const _19afed88 = () => interopDefault(import('..\\pages\\employee_schedule\\create.vue' /* webpackChunkName: "pages/employee_schedule/create" */))
const _97c29ee2 = () => interopDefault(import('..\\pages\\employees\\announcements\\index.vue' /* webpackChunkName: "pages/employees/announcements/index" */))
const _02e704f2 = () => interopDefault(import('..\\pages\\employees\\dashboard\\index.vue' /* webpackChunkName: "pages/employees/dashboard/index" */))
const _60325238 = () => interopDefault(import('..\\pages\\employees\\holidays.vue' /* webpackChunkName: "pages/employees/holidays" */))
const _22a1fba8 = () => interopDefault(import('..\\pages\\employees\\index1.vue' /* webpackChunkName: "pages/employees/index1" */))
const _7b19b604 = () => interopDefault(import('..\\pages\\employees\\leave\\index.vue' /* webpackChunkName: "pages/employees/leave/index" */))
const _25a705f4 = () => interopDefault(import('..\\pages\\employees\\leave_notification\\index.vue' /* webpackChunkName: "pages/employees/leave_notification/index" */))
const _33916010 = () => interopDefault(import('..\\pages\\employees\\logs.vue' /* webpackChunkName: "pages/employees/logs" */))
const _822c70dc = () => interopDefault(import('..\\pages\\employees\\profile\\index.vue' /* webpackChunkName: "pages/employees/profile/index" */))
const _12a16860 = () => interopDefault(import('..\\pages\\employees\\schedule.vue' /* webpackChunkName: "pages/employees/schedule" */))
const _5b7c5bb8 = () => interopDefault(import('..\\pages\\master\\assign_module\\index.vue' /* webpackChunkName: "pages/master/assign_module/index" */))
const _b19d2cb6 = () => interopDefault(import('..\\pages\\master\\companies\\index.vue' /* webpackChunkName: "pages/master/companies/index" */))
const _231621c4 = () => interopDefault(import('..\\pages\\master\\device\\index.vue' /* webpackChunkName: "pages/master/device/index" */))
const _426c69fa = () => interopDefault(import('..\\pages\\master\\module.vue' /* webpackChunkName: "pages/master/module" */))
const _5ba845b6 = () => interopDefault(import('..\\pages\\payroll\\create.vue' /* webpackChunkName: "pages/payroll/create" */))
const _e55d1132 = () => interopDefault(import('..\\pages\\payroll\\month.vue' /* webpackChunkName: "pages/payroll/month" */))
const _22d83e2f = () => interopDefault(import('..\\pages\\payroll\\salary\\index.vue' /* webpackChunkName: "pages/payroll/salary/index" */))
const _87dde076 = () => interopDefault(import('..\\pages\\report_notifications\\create.vue' /* webpackChunkName: "pages/report_notifications/create" */))
const _26c397fc = () => interopDefault(import('..\\pages\\shift\\create.vue' /* webpackChunkName: "pages/shift/create" */))
const _0ce185fa = () => interopDefault(import('..\\pages\\timezonemapping\\edit.vue' /* webpackChunkName: "pages/timezonemapping/edit" */))
const _72f91db8 = () => interopDefault(import('..\\pages\\timezonemapping\\employeedevicesmapping.vue' /* webpackChunkName: "pages/timezonemapping/employeedevicesmapping" */))
const _2b71d4d2 = () => interopDefault(import('..\\pages\\timezonemapping\\list.vue' /* webpackChunkName: "pages/timezonemapping/list" */))
const _51db2ab7 = () => interopDefault(import('..\\pages\\timezonemapping\\new.vue' /* webpackChunkName: "pages/timezonemapping/new" */))
const _2a427d73 = () => interopDefault(import('..\\pages\\user\\create.vue' /* webpackChunkName: "pages/user/create" */))
const _025a2858 = () => interopDefault(import('..\\pages\\zone\\create.vue' /* webpackChunkName: "pages/zone/create" */))
const _9c806d32 = () => interopDefault(import('..\\pages\\employees\\attendance_report\\general.vue' /* webpackChunkName: "pages/employees/attendance_report/general" */))
const _4541ad02 = () => interopDefault(import('..\\pages\\employees\\attendance_report\\multi_inout.vue' /* webpackChunkName: "pages/employees/attendance_report/multi_inout" */))
const _daf3a230 = () => interopDefault(import('..\\pages\\employees\\payroll\\create.vue' /* webpackChunkName: "pages/employees/payroll/create" */))
const _65573d78 = () => interopDefault(import('..\\pages\\employees\\payroll\\month.vue' /* webpackChunkName: "pages/employees/payroll/month" */))
const _ee1409e8 = () => interopDefault(import('..\\pages\\employees\\payroll\\salary\\index.vue' /* webpackChunkName: "pages/employees/payroll/salary/index" */))
const _c4a685cc = () => interopDefault(import('..\\pages\\master\\assign_module\\create.vue' /* webpackChunkName: "pages/master/assign_module/create" */))
const _66b015b9 = () => interopDefault(import('..\\pages\\master\\companies\\create.vue' /* webpackChunkName: "pages/master/companies/create" */))
const _36510922 = () => interopDefault(import('..\\pages\\master\\device\\create\\index.vue' /* webpackChunkName: "pages/master/device/create/index" */))
const _78c15f18 = () => interopDefault(import('..\\pages\\employees\\payroll\\salary\\_id.vue' /* webpackChunkName: "pages/employees/payroll/salary/_id" */))
const _2a326435 = () => interopDefault(import('..\\pages\\master\\companies\\details\\_id.vue' /* webpackChunkName: "pages/master/companies/details/_id" */))
const _1772ec0a = () => interopDefault(import('..\\pages\\master\\device\\create\\_id.vue' /* webpackChunkName: "pages/master/device/create/_id" */))
const _794c02d7 = () => interopDefault(import('..\\pages\\companies\\details\\_id.vue' /* webpackChunkName: "pages/companies/details/_id" */))
const _18b3e4e8 = () => interopDefault(import('..\\pages\\master\\assign_module\\_id.vue' /* webpackChunkName: "pages/master/assign_module/_id" */))
const _da30dd66 = () => interopDefault(import('..\\pages\\master\\companies\\_id.vue' /* webpackChunkName: "pages/master/companies/_id" */))
const _02102106 = () => interopDefault(import('..\\pages\\master\\device\\_id.vue' /* webpackChunkName: "pages/master/device/_id" */))
const _5323ff52 = () => interopDefault(import('..\\pages\\payroll\\salary\\_id.vue' /* webpackChunkName: "pages/payroll/salary/_id" */))
const _79631a9b = () => interopDefault(import('..\\pages\\register\\visitor\\_id.vue' /* webpackChunkName: "pages/register/visitor/_id" */))
const _a86b40a4 = () => interopDefault(import('..\\pages\\salary\\details\\_id.vue' /* webpackChunkName: "pages/salary/details/_id" */))
const _0fa4fa4a = () => interopDefault(import('..\\pages\\zone\\single\\_id.vue' /* webpackChunkName: "pages/zone/single/_id" */))
const _52be60b2 = () => interopDefault(import('..\\pages\\assign_permission\\_id.vue' /* webpackChunkName: "pages/assign_permission/_id" */))
const _d746d72a = () => interopDefault(import('..\\pages\\companies\\_id.vue' /* webpackChunkName: "pages/companies/_id" */))
const _e79cc6f4 = () => interopDefault(import('..\\pages\\leavecount\\_id.vue' /* webpackChunkName: "pages/leavecount/_id" */))
const _47889a7e = () => interopDefault(import('..\\pages\\report_notifications\\_id.vue' /* webpackChunkName: "pages/report_notifications/_id" */))
const _ea0b80b8 = () => interopDefault(import('..\\pages\\shift\\_id.vue' /* webpackChunkName: "pages/shift/_id" */))
const _1004b63d = () => interopDefault(import('..\\pages\\theme\\_id.vue' /* webpackChunkName: "pages/theme/_id" */))
const _3e2555d1 = () => interopDefault(import('..\\pages\\timezonemapping\\_id.vue' /* webpackChunkName: "pages/timezonemapping/_id" */))
const _149a585a = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _53cae912 = () => interopDefault(import('..\\pages\\zone\\_id.vue' /* webpackChunkName: "pages/zone/_id" */))
const _9bfcb054 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/announcement",
    component: _adf8651a,
    name: "announcement"
  }, {
    path: "/announcement-new",
    component: _d544b674,
    name: "announcement-new"
  }, {
    path: "/assign_permission",
    component: _3cd70d02,
    name: "assign_permission"
  }, {
    path: "/attendance_modules",
    component: _9c3cd746,
    name: "attendance_modules"
  }, {
    path: "/attendance_report",
    component: _97418f18,
    name: "attendance_report"
  }, {
    path: "/camera",
    component: _2746f95e,
    name: "camera"
  }, {
    path: "/dashboard",
    component: _52c3bad0,
    name: "dashboard"
  }, {
    path: "/dashboard1",
    component: _05a07b6e,
    name: "dashboard1"
  }, {
    path: "/dashboard2",
    component: _05844c6c,
    name: "dashboard2"
  }, {
    path: "/date_range_picker_test",
    component: _43b155fc,
    name: "date_range_picker_test"
  }, {
    path: "/department",
    component: _091e0a04,
    name: "department"
  }, {
    path: "/department-mapping",
    component: _679e487f,
    name: "department-mapping"
  }, {
    path: "/designation",
    component: _7192837b,
    name: "designation"
  }, {
    path: "/device",
    component: _7ae41040,
    name: "device"
  }, {
    path: "/device_management",
    component: _7f4afcb2,
    name: "device_management"
  }, {
    path: "/devicelogs",
    component: _6d8d6f31,
    name: "devicelogs"
  }, {
    path: "/employee_photo_upload",
    component: _3a7f9723,
    name: "employee_photo_upload"
  }, {
    path: "/employee_schedule",
    component: _64004814,
    name: "employee_schedule"
  }, {
    path: "/employee_to_report",
    component: _1c766453,
    name: "employee_to_report"
  }, {
    path: "/employees",
    component: _095fc159,
    name: "employees"
  }, {
    path: "/generate_attendance_log",
    component: _5df931fc,
    name: "generate_attendance_log"
  }, {
    path: "/holidays",
    component: _7f27f972,
    name: "holidays"
  }, {
    path: "/host",
    component: _fc989d58,
    name: "host"
  }, {
    path: "/hr_modules",
    component: _cf782e04,
    name: "hr_modules"
  }, {
    path: "/leavegroups",
    component: _555cdccf,
    name: "leavegroups"
  }, {
    path: "/leaves",
    component: _638db548,
    name: "leaves"
  }, {
    path: "/leavetype",
    component: _03d9abf5,
    name: "leavetype"
  }, {
    path: "/login",
    component: _7ba94aed,
    name: "login"
  }, {
    path: "/login-bkp",
    component: _04c37d67,
    name: "login-bkp"
  }, {
    path: "/login1",
    component: _0cecb6d8,
    name: "login1"
  }, {
    path: "/manager_dashboard",
    component: _001534f4,
    name: "manager_dashboard"
  }, {
    path: "/master",
    component: _9ad37698,
    name: "master"
  }, {
    path: "/modules",
    component: _3e28cdea,
    name: "modules"
  }, {
    path: "/payroll_modules",
    component: _61704e1e,
    name: "payroll_modules"
  }, {
    path: "/payslip",
    component: _b7cd4228,
    name: "payslip"
  }, {
    path: "/purpose",
    component: _237bcb22,
    name: "purpose"
  }, {
    path: "/qr-page",
    component: _27fe4b82,
    name: "qr-page"
  }, {
    path: "/report_notifications",
    component: _27fa03ce,
    name: "report_notifications"
  }, {
    path: "/reportsemployeelog",
    component: _6feeafe3,
    name: "reportsemployeelog"
  }, {
    path: "/reset-password",
    component: _1a62db85,
    name: "reset-password"
  }, {
    path: "/role",
    component: _f88bb5bc,
    name: "role"
  }, {
    path: "/salary",
    component: _9ec31768,
    name: "salary"
  }, {
    path: "/salary_type",
    component: _76e0a413,
    name: "salary_type"
  }, {
    path: "/schedule",
    component: _d23b2342,
    name: "schedule"
  }, {
    path: "/shift",
    component: _355c4388,
    name: "shift"
  }, {
    path: "/sub-department",
    component: _60210faa,
    name: "sub-department"
  }, {
    path: "/tab",
    component: _55839019,
    name: "tab"
  }, {
    path: "/timeline",
    component: _154bf16d,
    name: "timeline"
  }, {
    path: "/timezone",
    component: _0101c925,
    name: "timezone"
  }, {
    path: "/user",
    component: _f793baaa,
    name: "user"
  }, {
    path: "/visitor",
    component: _26344b1c,
    name: "visitor"
  }, {
    path: "/visitor_logs",
    component: _3bf7ea8c,
    name: "visitor_logs"
  }, {
    path: "/visitor-dashboard",
    component: _bb6d790e,
    name: "visitor-dashboard"
  }, {
    path: "/visitors_report",
    component: _ced43560,
    name: "visitors_report"
  }, {
    path: "/wizard",
    component: _173d7297,
    name: "wizard"
  }, {
    path: "/zone",
    component: _86c437ac,
    name: "zone"
  }, {
    path: "/assign_permission/create",
    component: _78af011f,
    name: "assign_permission-create"
  }, {
    path: "/attendance_report/general",
    component: _3cb5c30a,
    name: "attendance_report-general"
  }, {
    path: "/attendance_report/multi_inout",
    component: _0b8c1d25,
    name: "attendance_report-multi_inout"
  }, {
    path: "/device_management/create",
    component: _dc6e3768,
    name: "device_management-create"
  }, {
    path: "/employee_schedule/create",
    component: _19afed88,
    name: "employee_schedule-create"
  }, {
    path: "/employees/announcements",
    component: _97c29ee2,
    name: "employees-announcements"
  }, {
    path: "/employees/dashboard",
    component: _02e704f2,
    name: "employees-dashboard"
  }, {
    path: "/employees/holidays",
    component: _60325238,
    name: "employees-holidays"
  }, {
    path: "/employees/index1",
    component: _22a1fba8,
    name: "employees-index1"
  }, {
    path: "/employees/leave",
    component: _7b19b604,
    name: "employees-leave"
  }, {
    path: "/employees/leave_notification",
    component: _25a705f4,
    name: "employees-leave_notification"
  }, {
    path: "/employees/logs",
    component: _33916010,
    name: "employees-logs"
  }, {
    path: "/employees/profile",
    component: _822c70dc,
    name: "employees-profile"
  }, {
    path: "/employees/schedule",
    component: _12a16860,
    name: "employees-schedule"
  }, {
    path: "/master/assign_module",
    component: _5b7c5bb8,
    name: "master-assign_module"
  }, {
    path: "/master/companies",
    component: _b19d2cb6,
    name: "master-companies"
  }, {
    path: "/master/device",
    component: _231621c4,
    name: "master-device"
  }, {
    path: "/master/module",
    component: _426c69fa,
    name: "master-module"
  }, {
    path: "/payroll/create",
    component: _5ba845b6,
    name: "payroll-create"
  }, {
    path: "/payroll/month",
    component: _e55d1132,
    name: "payroll-month"
  }, {
    path: "/payroll/salary",
    component: _22d83e2f,
    name: "payroll-salary"
  }, {
    path: "/report_notifications/create",
    component: _87dde076,
    name: "report_notifications-create"
  }, {
    path: "/shift/create",
    component: _26c397fc,
    name: "shift-create"
  }, {
    path: "/timezonemapping/edit",
    component: _0ce185fa,
    name: "timezonemapping-edit"
  }, {
    path: "/timezonemapping/employeedevicesmapping",
    component: _72f91db8,
    name: "timezonemapping-employeedevicesmapping"
  }, {
    path: "/timezonemapping/list",
    component: _2b71d4d2,
    name: "timezonemapping-list"
  }, {
    path: "/timezonemapping/new",
    component: _51db2ab7,
    name: "timezonemapping-new"
  }, {
    path: "/user/create",
    component: _2a427d73,
    name: "user-create"
  }, {
    path: "/zone/create",
    component: _025a2858,
    name: "zone-create"
  }, {
    path: "/employees/attendance_report/general",
    component: _9c806d32,
    name: "employees-attendance_report-general"
  }, {
    path: "/employees/attendance_report/multi_inout",
    component: _4541ad02,
    name: "employees-attendance_report-multi_inout"
  }, {
    path: "/employees/payroll/create",
    component: _daf3a230,
    name: "employees-payroll-create"
  }, {
    path: "/employees/payroll/month",
    component: _65573d78,
    name: "employees-payroll-month"
  }, {
    path: "/employees/payroll/salary",
    component: _ee1409e8,
    name: "employees-payroll-salary"
  }, {
    path: "/master/assign_module/create",
    component: _c4a685cc,
    name: "master-assign_module-create"
  }, {
    path: "/master/companies/create",
    component: _66b015b9,
    name: "master-companies-create"
  }, {
    path: "/master/device/create",
    component: _36510922,
    name: "master-device-create"
  }, {
    path: "/employees/payroll/salary/:id",
    component: _78c15f18,
    name: "employees-payroll-salary-id"
  }, {
    path: "/master/companies/details/:id?",
    component: _2a326435,
    name: "master-companies-details-id"
  }, {
    path: "/master/device/create/:id",
    component: _1772ec0a,
    name: "master-device-create-id"
  }, {
    path: "/companies/details/:id?",
    component: _794c02d7,
    name: "companies-details-id"
  }, {
    path: "/master/assign_module/:id",
    component: _18b3e4e8,
    name: "master-assign_module-id"
  }, {
    path: "/master/companies/:id",
    component: _da30dd66,
    name: "master-companies-id"
  }, {
    path: "/master/device/:id",
    component: _02102106,
    name: "master-device-id"
  }, {
    path: "/payroll/salary/:id",
    component: _5323ff52,
    name: "payroll-salary-id"
  }, {
    path: "/register/visitor/:id?",
    component: _79631a9b,
    name: "register-visitor-id"
  }, {
    path: "/salary/details/:id?",
    component: _a86b40a4,
    name: "salary-details-id"
  }, {
    path: "/zone/single/:id?",
    component: _0fa4fa4a,
    name: "zone-single-id"
  }, {
    path: "/assign_permission/:id",
    component: _52be60b2,
    name: "assign_permission-id"
  }, {
    path: "/companies/:id?",
    component: _d746d72a,
    name: "companies-id"
  }, {
    path: "/leavecount/:id?",
    component: _e79cc6f4,
    name: "leavecount-id"
  }, {
    path: "/report_notifications/:id",
    component: _47889a7e,
    name: "report_notifications-id"
  }, {
    path: "/shift/:id",
    component: _ea0b80b8,
    name: "shift-id"
  }, {
    path: "/theme/:id?",
    component: _1004b63d,
    name: "theme-id"
  }, {
    path: "/timezonemapping/:id?",
    component: _3e2555d1,
    name: "timezonemapping-id"
  }, {
    path: "/user/:id",
    component: _149a585a,
    name: "user-id"
  }, {
    path: "/zone/:id",
    component: _53cae912,
    name: "zone-id"
  }, {
    path: "/",
    component: _9bfcb054,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
