# angular-ionic-tabs-app

## Commmand

```cmd
npm install -g @ionic/cli
ionic start angular-ionic-tabs-app tabs
ionic serve 
```

```
D:\Develop\WebApplications\angular>ionic start angular-ionic-tabs-app tabs

Pick a framework!

Please select the JavaScript framework to use for your new app. To bypass this prompt next time, supply a value for the
--type option.

? Framework: Angular
? Would you like to build your app with NgModules or Standalone Components?
 Standalone components are a new way to build with Angular that simplifies the way you build your app.
 To learn more, visit the Angular docs:
 https://angular.io/guide/standalone-components

 NgModules
[INFO] Existing git project found (D:/Develop/WebApplications). Git operations are disabled.
√ Preparing directory .\angular-ionic-tabs-app in 2.16ms
√ Downloading and extracting tabs starter in 581.04ms
> ionic integrations enable capacitor --quiet -- angular-ionic-tabs-app io.ionic.starter
> npm.cmd i --save -E @capacitor/core@latest
npm WARN deprecated @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs

added 1206 packages in 2m
> npm.cmd i -D -E @capacitor/cli@latest

added 40 packages in 8s
> npm.cmd i --save -E @capacitor/haptics @capacitor/app @capacitor/keyboard @capacitor/status-bar

added 4 packages in 6s
> capacitor.cmd init angular-ionic-tabs-app io.ionic.starter --web-dir www
√ Creating capacitor.config.ts in D:\Develop\WebApplications\angular\angular-ionic-tabs-app in 8.89ms
[success] capacitor.config.ts created!

Next steps:
https://capacitorjs.com/docs/getting-started#where-to-go-next
[OK] Integration capacitor added!

Installing dependencies may take several minutes.

  ──────────────────────────────────────────────────────────────────────

      Ionic Enterprise, platform and solutions for teams by Ionic

                  Powerful library of native APIs
                 A supercharged platform for teams

         Learn more: https://ion.link/enterprise

  ──────────────────────────────────────────────────────────────────────


> npm.cmd i

up to date in 5s

Join the Ionic Community! 💙

Connect with millions of developers on the Ionic Forum and get access to live events, news updates, and more.

? Create free Ionic account? No

Your Ionic app is ready! Follow these next steps:

- Go to your new project: cd .\angular-ionic-tabs-app
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition


PS D:\Develop\WebApplications\angular\angular-ionic-tabs-app> ionic serve 
> ng.cmd run app:serve --host=localhost --port=8100
[ng] - Generating browser application bundles (phase: setup)...
[ng] ✔ Browser application bundle generation complete.
[ng] Initial Chunk Files                                                                                     | Names                   |  Raw Size
[ng] vendor.js                                                                                               | vendor                  |   3.18 MB | 
[ng] polyfills.js                                                                                            | polyfills               | 332.52 kB | 
[ng] styles.css, styles.js                                                                                   | styles                  | 273.71 kB | 
[ng] main.js                                                                                                 | main                    |  14.52 kB | 
[ng] runtime.js                                                                                              | runtime                 |  14.10 kB |
[ng]
[ng]                                                                                                         | Initial Total           |   3.80 MB
[ng]
[ng] Lazy Chunk Files                                                                                        | Names                   |  Raw Size
[ng] polyfills-core-js.js                                                                                    | polyfills-core-js       | 152.18 kB | 
[ng] node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js.js                                             | -                       | 137.84 kB |
[ng] node_modules_ionic_core_dist_esm_ion-item_8_entry_js.js                                                 | -                       |  90.40 kB |
[ng] node_modules_ionic_core_dist_esm_ion-modal_entry_js.js                                                  | -                       |  79.48 kB |
[ng] node_modules_ionic_core_dist_esm_ion-app_8_entry_js.js                                                  | -                       |  79.38 kB |
[ng] node_modules_ionic_core_dist_esm_ion-select_3_entry_js.js                                               | -                       |  65.34 kB |
[ng] node_modules_ionic_core_dist_esm_ion-textarea_entry_js.js                                               | -                       |  63.36 kB |
[ng] node_modules_ionic_core_dist_esm_ion-input_entry_js.js                                                  | -                       |  61.91 kB |
[ng] node_modules_ionic_core_dist_esm_ion-popover_entry_js.js                                                | -                       |  60.62 kB |
[ng] common.js                                                                                               | common                  |  56.88 kB |
[ng] default-node_modules_ionic_core_dist_esm_data-b8307d99_js-node_modules_ionic_core_dist_esm_th-33339e.js | -                       |  54.37 kB |
[ng] node_modules_ionic_core_dist_esm_ion-alert_entry_js.js                                                  | -                       |  54.36 kB |
[ng] node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js.js                                            | -                       |  51.94 kB |
[ng] node_modules_ionic_core_dist_esm_ion-range_entry_js.js                                                  | -                       |  45.93 kB |
[ng] node_modules_ionic_core_dist_esm_ion-menu_3_entry_js.js                                                 | -                       |  43.64 kB |
[ng] node_modules_ionic_core_dist_esm_ion-segment_2_entry_js.js                                              | -                       |  41.79 kB |
[ng] node_modules_ionic_core_dist_esm_ion-searchbar_entry_js.js                                              | -                       |  38.06 kB |
[ng] node_modules_ionic_core_dist_esm_ion-button_2_entry_js.js                                               | -                       |  37.46 kB |
[ng] node_modules_ionic_core_dist_esm_ion-nav_2_entry_js.js                                                  | -                       |  36.12 kB |
[ng] node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js.js                                          | -                       |  35.48 kB |
[ng] node_modules_ionic_core_dist_esm_ion-route_4_entry_js.js                                                | -                       |  34.63 kB | 
[ng] node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js.js                                           | -                       |  33.81 kB |
[ng] node_modules_ionic_core_dist_esm_ion-toggle_entry_js.js                                                 | -                       |  30.80 kB |
[ng] node_modules_ionic_core_dist_esm_ion-toast_entry_js.js                                                  | -                       |  30.73 kB |
[ng] node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js.js                                              | -                       |  29.44 kB |
[ng] node_modules_ionic_core_dist_esm_ion-radio_2_entry_js.js                                                | -                       |  29.10 kB |
[ng] node_modules_ionic_core_dist_esm_ion-fab_3_entry_js.js                                                  | -                       |  28.45 kB |
[ng] node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js.js                                            | -                       |  27.91 kB |
[ng] polyfills-dom.js                                                                                        | polyfills-dom           |  26.61 kB |
[ng] node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js.js                                           | -                       |  24.02 kB |
[ng] node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js.js                                        | -                       |  23.83 kB |
[ng] node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js.js                                           | -                       |  23.03 kB |
[ng] node_modules_ionic_core_dist_esm_input-shims-c7404a50_js.js                                             | input-shims-c7404a50-js |  22.47 kB |
[ng] node_modules_ionic_core_dist_esm_ion-checkbox_entry_js.js                                               | -                       |  22.36 kB |
[ng] node_modules_ionic_core_dist_esm_ion-loading_entry_js.js                                                | -                       |  20.26 kB |
[ng] node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js.js                                 | -                       |  19.94 kB |
[ng] node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js.js                                        | -                       |  18.54 kB |
[ng] node_modules_ionic_core_dist_esm_ion-back-button_entry_js.js                                            | -                       |  17.88 kB |
[ng] node_modules_ionic_core_dist_esm_ion-card_5_entry_js.js                                                 | -                       |  17.29 kB |
[ng] node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js.js                                              | -                       |  13.50 kB |
[ng] node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js.js                                      | -                       |  13.44 kB |
[ng] node_modules_ionic_core_dist_esm_ion-col_3_entry_js.js                                                  | -                       |  13.26 kB |
[ng] node_modules_ionic_core_dist_esm_ion-spinner_entry_js.js                                                | -                       |  10.94 kB | 
[ng] node_modules_ionic_core_dist_esm_ion-tab_2_entry_js.js                                                  | -                       |  10.38 kB |
[ng] node_modules_ionic_core_dist_esm_ion-split-pane_entry_js.js                                             | -                       |   9.07 kB |
[ng] src_app_tabs_tabs_module_ts.js                                                                          | tabs-tabs-module        |   7.94 kB |
[ng] node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js.js                                               | -                       |   7.88 kB |
[ng] src_app_tab1_tab1_module_ts.js                                                                          | tab1-tab1-module        |   7.36 kB |
[ng] src_app_tab3_tab3_module_ts.js                                                                          | tab3-tab3-module        |   7.36 kB |
[ng] src_app_tab2_tab2_module_ts.js                                                                          | tab2-tab2-module        |   7.36 kB |
[ng] node_modules_ionic_core_dist_esm_ion-chip_entry_js.js                                                   | -                       |   7.27 kB |
[ng] node_modules_ionic_core_dist_esm_index-f4521aba_js.js                                                   | index-f4521aba-js       |   6.34 kB |
[ng] node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js.js                                          | -                       |   6.26 kB |
[ng] node_modules_ionic_core_dist_esm_ion-img_entry_js.js                                                    | -                       |   4.63 kB |
[ng] node_modules_ionic_core_dist_esm_ion-text_entry_js.js                                                   | -                       |   4.21 kB |
[ng] node_modules_ionic_core_dist_esm_ion-backdrop_entry_js.js                                               | -                       |   3.24 kB |
[ng] node_modules_ionic_core_dist_esm_status-tap-e23e860e_js.js                                              | status-tap-e23e860e-js  |   2.93 kB |
[ng]
[ng] Build at: 2023-05-18T05:03:00.328Z - Hash: 6ca48bb4b551e3a2 - Time: 64231ms
[ng] √ Compiled successfully.

[INFO] Development server running!

       Local: http://localhost:8100

       Use Ctrl+C to quit this process

[INFO] Browser window opened to http://localhost:8100!
```