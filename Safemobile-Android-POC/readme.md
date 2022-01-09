# Integration Android App with React-Native App

** Note: require 

Nodejs https://nodejs.org/en/download/

yarn: https://classic.yarnpkg.com/lang/en/docs/install/
## Setup

1. Create folder android at project folder
    ```
        mkdir android
    ```
2. Move all files & dirs from Android project to `android` folder
3. Copy `package.json` ([this](./package.json)) to root folder
4. Open terminal
    ```
    yarn or npm install
    ```
5. Add to the top-level `build.gradle `
    ```
    allprojects {
        repositories {
            maven {
                // All of React Native (JS, Android binaries) is installed from npm
                url "$rootDir/../node_modules/react-native/android"
            }
        }
    }
    ``` 
6. Add to settings.gradle
    ```
        apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
    ```
7. Add to the top of the app/build.grade
    ```
        project.ext.react = [
            enableHermes: true,  // clean and rebuild if changing
        ]
    ```
8. Add the React Native and Hermes dependency to your app's build.gradle file:
    ```
        implementation "com.facebook.react:react-native:+"
        def hermesPath = "../../node_modules/hermes-engine/android/";
        debugImplementation files(hermesPath + "hermes-debug.aar")
        releaseImplementation files(hermesPath + "hermes-release.aar")
    ```
8. Add to the bottom of the app/build.grade
    ```
        apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)
    ```
10. Copy [`assets`](./assets) to the app/src/main
11. Copy all `drawable-**` to the app/src/main/res
12. Create file `RNJSIModulePackage` and copy [this](./android/app/src/main/java/com/cyradar/safemobile_android_poc/RNJSIModulePackage.java)
13. Create `Activity` [this](./android/app/src/main/java/com/cyradar/safemobile_android_poc/SecondActivity.java)
14. Start `Activity`

Done!

[Example](./android)