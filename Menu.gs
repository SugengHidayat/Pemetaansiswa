/************************************************************
 * FORM BUILDER PRO v3.0
 * Menu.gs
 ************************************************************/

/**
 * Membuat Menu Utama
 */
function createMenu() {

  SpreadsheetApp.getUi()
    .createMenu("🎓 FormBuilder Pro")

    .addItem("🏠 Dashboard", "showDashboard")

    .addSeparator()

    .addItem("🚀 Buat Google Form", "buildGoogleForm")
    .addItem("🔄 Update Google Form", "updateGoogleForm")
    .addItem("🗑️ Hapus Google Form", "deleteGoogleForm")

    .addSeparator()

    .addItem("👁️ Preview Bank Soal", "previewBank")
    .addItem("✅ Validasi Bank Soal", "validateBank")

    .addSeparator()

    .addItem("💾 Backup Bank Soal", "backupBank")
    .addItem("📂 Restore Backup", "restoreBank")

    .addSeparator()

    .addItem("📄 Export Excel", "exportExcel")
    .addItem("📑 Export PDF", "exportPDF")

    .addSeparator()

    .addItem("⚙️ Pengaturan", "openSetting")
    .addItem("ℹ️ Tentang Aplikasi", "aboutApp")

    .addToUi();

}


/****************************************************
 * DASHBOARD
 ****************************************************/
function showDashboard(){

  const html = HtmlService
      .createHtmlOutputFromFile("Dashboard")
      .setWidth(1200)
      .setHeight(700);

  SpreadsheetApp.getUi().showModalDialog(
      html,
      APP.NAME
  );

}


/****************************************************
 * BUILD FORM
 ****************************************************/
function buildGoogleForm(){

    preCheck();

    FormBuilder.build();

}


/****************************************************
 * UPDATE
 ****************************************************/
function updateGoogleForm(){

    preCheck();

    UpdateForm.run();

}


/****************************************************
 * DELETE FORM
 ****************************************************/
function deleteGoogleForm(){

    const ui = SpreadsheetApp.getUi();

    const result = ui.alert(
      "Konfirmasi",
      "Hapus Google Form yang sudah dibuat?",
      ui.ButtonSet.YES_NO
    );

    if(result!=ui.Button.YES) return;

    DriveManager.deleteForm();

}


/****************************************************
 * VALIDATOR
 ****************************************************/
function validateBank(){

    Validator.run();

}


/****************************************************
 * PREVIEW
 ****************************************************/
function previewBank(){

    Validator.preview();

}


/****************************************************
 * BACKUP
 ****************************************************/
function backupBank(){

    Backup.run();

}


/****************************************************
 * RESTORE
 ****************************************************/
function restoreBank(){

    Backup.restore();

}


/****************************************************
 * EXPORT EXCEL
 ****************************************************/
function exportExcel(){

    Exporter.exportExcel();

}


/****************************************************
 * EXPORT PDF
 ****************************************************/
function exportPDF(){

    Exporter.exportPDF();

}


/****************************************************
 * SETTING
 ****************************************************/
function openSetting(){

const html=HtmlService
.createHtmlOutputFromFile("Setting")
.setWidth(700)
.setHeight(650);

SpreadsheetApp
.getUi()
.showModalDialog(
html,
"Pengaturan"
);

}


/****************************************************
 * REFRESH MENU
 ****************************************************/
function refreshMenu(){

createMenu();

toast("Menu berhasil diperbarui");

}


/****************************************************
 * CEK VERSI
 ****************************************************/
function checkVersion(){

SpreadsheetApp
.getUi()
.alert(

APP.NAME+

"\nVersi : "+APP.VERSION+

"\nBuild : Professional"

);

}


/****************************************************
 * MENU HELP
 ****************************************************/
function help(){

SpreadsheetApp
.getUi()
.alert(

`FORM BUILDER PRO

Langkah penggunaan

1. Isi BANK_SOAL

2. Validasi

3. Klik Buat Google Form

4. Form otomatis dibuat

5. Bagikan Link Form`

);

}


/****************************************************
 * MENU DEBUG
 ****************************************************/
function debugMenu(){

debug();

}


/****************************************************
 * RESET
 ****************************************************/
function resetApplication(){

const ui=SpreadsheetApp.getUi();

const pilih=ui.alert(
"Reset",
"Reset aplikasi?",
ui.ButtonSet.YES_NO
);

if(pilih!=ui.Button.YES)
return;

clearBankSoal();

toast("Reset selesai");

}
