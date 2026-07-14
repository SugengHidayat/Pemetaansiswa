/************************************************************
 * FORM BUILDER PRO v3.0
 * Config.gs
 * Author : ChatGPT
 * Version : 3.0
 ************************************************************/

const APP = {

  NAME: "FORM BUILDER PRO",

  VERSION: "3.0",

  AUTHOR: "Sugeng Hidayat",

  SCHOOL: "",

  YEAR: new Date().getFullYear(),

  FORM_TITLE: "SOAL MATRIKULASI",

  FORM_DESCRIPTION:
`PETUNJUK

1. Berdoalah sebelum mengerjakan.
2. Isilah identitas dengan benar.
3. Pilih jawaban yang paling tepat.
4. Periksa kembali jawaban sebelum dikirim.

Semoga sukses.`,

  CONFIRM_MESSAGE:
"Terima kasih. Jawaban Anda berhasil dikirim.",

  THEME: {

    PRIMARY:"#1565C0",

    SUCCESS:"#2E7D32",

    WARNING:"#F9A825",

    DANGER:"#C62828",

    DARK:"#263238",

    LIGHT:"#FFFFFF"

  }

};


/******************************************************
 * NAMA SHEET
 ******************************************************/
const SHEET = {

  CONFIG:"CONFIG",

  BANK:"BANK_SOAL",

  MAPEL:"MAPEL",

  MATERI:"MATERI",

  LEVEL:"LEVEL",

  LOG:"LOG",

  BACKUP:"BACKUP"

};


/******************************************************
 * KOLOM BANK SOAL
 ******************************************************/
const COL = {

  NO:1,

  MAPEL:2,

  MATERI:3,

  LEVEL:4,

  JENIS:5,

  SOAL:6,

  GAMBAR:7,

  PIL_A:8,

  PIL_B:9,

  PIL_C:10,

  PIL_D:11,

  PIL_E:12,

  JAWABAN:13,

  BOBOT:14,

  PEMBAHASAN:15

};


/******************************************************
 * JENIS SOAL
 ******************************************************/
const QUESTION = {

  MULTIPLE_CHOICE:"PG",

  CHECKBOX:"CHECKBOX",

  DROPDOWN:"DROPDOWN",

  SHORT:"SHORT",

  PARAGRAPH:"PARAGRAPH",

  SCALE:"SCALE",

  GRID:"GRID",

  DATE:"DATE",

  TIME:"TIME"

};


/******************************************************
 * LEVEL
 ******************************************************/
const LEVEL = {

  LOTS:"LOTS",

  MOTS:"MOTS",

  HOTS:"HOTS"

};


/******************************************************
 * QUIZ
 ******************************************************/
const QUIZ = {

  IS_QUIZ:true,

  SHUFFLE_QUESTION:true,

  SHUFFLE_OPTION:true,

  REQUIRE_LOGIN:false,

  LIMIT_ONE_RESPONSE:false,

  SHOW_PROGRESS:true,

  SHOW_RESULT_IMMEDIATELY:true,

  DEFAULT_POINT:1

};


/******************************************************
 * IMAGE
 ******************************************************/
const IMAGE = {

  WIDTH:600,

  HEIGHT:400

};


/******************************************************
 * MENU
 ******************************************************/
const MENU = [

"Dashboard",

"Buat Google Form",

"Update Google Form",

"Preview Bank Soal",

"Validasi Bank Soal",

"Backup",

"Restore",

"Export",

"Tentang"

];


/******************************************************
 * STATUS
 ******************************************************/
const STATUS = {

  READY:"READY",

  ERROR:"ERROR",

  SUCCESS:"SUCCESS"

};


/******************************************************
 * ICON
 ******************************************************/
const ICON = {

  SUCCESS:"✅",

  ERROR:"❌",

  WARNING:"⚠️",

  INFO:"ℹ️"

};


/******************************************************
 * LOGGER
 ******************************************************/
function logInfo(text){

  Logger.log("[INFO] "+text);

}

function logError(text){

  Logger.log("[ERROR] "+text);

}

function logSuccess(text){

  Logger.log("[SUCCESS] "+text);

}


/******************************************************
 * VERSION
 ******************************************************/
function getVersion(){

  return APP.VERSION;

}


/******************************************************
 * APP NAME
 ******************************************************/
function getAppName(){

  return APP.NAME;

}


/******************************************************
 * TIMESTAMP
 ******************************************************/
function now(){

  return Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "dd/MM/yyyy HH:mm:ss"
  );

}
