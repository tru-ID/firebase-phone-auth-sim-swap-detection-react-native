# Adding SIM Swap Detection to your React Native Firebase Apps with Firebase Auth & SIMCheck.

## Requirements

- A [**tru.ID** Account](https://tru.id)
- A [Firebase Account](https://firebase.google.com/console)
- An Android / Apple Phone with a SIM card and mobile data connection
- For iOS: Require XCode >12
- For Android:
  - Require JDK 14 (Java version 14.02 / Gradle v6.3).
  - Android Studio or Android SDK manager via [Android developer downloads](https://developer.android.com/studio). VS Code would work as you aren't using a virtual device.
  - Set up the [React Native Environment](https://reactnative.dev/docs/environment-setup)
- For metro bundler, require node version > 10

## Getting Started

Clone the `starter-files` branch via:

```bash
git clone -b starter-files --single-branch https://github.com/tru-ID/firebase-phone-auth-sim-swap-detection.git
```

If you're only interested in the finished code in `main` then run:

```bash
git clone -b main --single-branch https://github.com/tru-ID/firebase-phone-auth-sim-swap-detection.git
```

To restore dependencies, open a new terminal and run:

```bash
npm install
```

Create a [tru.ID Account](https://tru.id)

Install the tru.ID CLI via:

```bash
npm i -g @tru_id/cli

```

Input your **tru.ID** credentials which can be found within the tru.ID [console](https://developer.tru.id/console)

Install the **tru.ID** CLI [development server plugin](https://github.com/tru-ID/cli-plugin-dev-server)

Create a new **tru.ID** project within the root directory via:

```bash
tru projects:create rn-firebase-auth
```

Run the development server, pointing it to the directly containing the newly created project configuration. This will also open up a localtunnel to your development server making it publicly accessible to the Internet so that your mobile phone can access it when only connected to mobile data.

```bash
tru server -t --project-dir ./rn-firebase-auth
```

## Setting up Firebase Auth

This project uses [React Native Firebase](https://rnfirebase.io).

### Installation

1. Install via NPM:

```bash
npm install --save @react-native-firebase/app @react-native-firebase/auth
```

Next headover to the [Firebase console](https://console.firebase.google.com) and create a new project.

2. Android Setup

#### Generating Android Credentials

On the Firebase console, add a new Android application and enter your projects details. The "Android package name" must match your local projects package name which can be found inside of the `manifest` tag within the /`android/app/src/main/AndroidManifest.xml` file within your project.

The debug signing certificate is optional to use Firebase with your app, but is required for Phone Authentication (which we'll be doing). To generate a certificate run cd android && ./gradlew signingReport and copy the `SHA1` and `SHA256` from the debug key and add in the `debug signing certificate` or `SHA certificate fingerprints` section.

Download the `google-services.json` file and place it inside of your project at the following location: `/android/app/google-services.json`.

#### Configure Firebase with Android Credentials

To allow Firebase on Android to use the credentials, the google-services plugin must be enabled on the project. This requires modification to two files in the Android directory.

First, add the `google-services` plugin as a dependency inside of your `/android/build.gradle` file:

```gradle
buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.3.4'
    // Add me --- /\
  }
}
```

Lastly, execute the plugin by adding the following to your `/android/app/build.gradle` file, at the top:

```gradle
apply plugin: 'com.google.gms.google-services'
```

3. iOS Setup

#### Generating iOS credentials

On the Firebase console, add a new iOS application and enter your projects details. The "iOS bundle ID" must match your local project bundle ID. The bundle ID can be found within the "General" tab when opening the project with Xcode.

Download the `GoogleService-Info.plist` file.

Using Xcode, open the projects `/ios/{projectName}`.xcodeproj file (or `/ios/{projectName}.xcworkspace` if using Pods).

Right click on the project name and "Add files" to the project, select the downloaded `GoogleService-Info.plist` file from your computer, and ensure the "Copy items if needed" checkbox is enabled.

#### Configure Firebase with iOS credentials

To allow Firebase on iOS to use the credentials, the Firebase iOS SDK must be configured during the bootstrap phase of your application.

To do this, open your `/ios/{projectName}/AppDelegate.m` file, and add the following:

At the top of the file, import the Firebase SDK:

```m
#import <Firebase.h>
```

Within your existing `didFinishLaunchingWithOptions` method, add the following to the top of the method:

```m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  // Add me --- \/
  if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }
  // Add me --- /\
  // ...
}
```

In order to integrate these changes, link & your project via:

```bash
# Android apps
npx react-native run-android

# iOS apps
cd ios/
pod install --repo-update
cd ..
npx react-native run-ios
```

If you're on React Native < 0.60 follow the manual installation steps for [iOS](https://rnfirebase.io/install-ios) and [Android](https://rnfirebase.io/install-ios)

## Starting Project

To start the project, ensure you have a physical device connected (see [Running React Native on a physical device guide](https://reactnative.dev/docs/running-on-device) ) then run:

```bash
npm run android
#or
npm run ios

```

## Troubleshooting

While trying to run on Android, you might run into `Could not find or load main class org.gradle.wrapper.GradleWrapperMain` error. To resolve it:

- [Install Gradle](https://gradle.org/install/)
- Navigate to the Android directory and run `gradle wrapper`
- Run `npm run android`

## References

- [React Native Firebase Getting Started](https://rnfirebase.io/)
- [**tru.ID** docs](https://developer.tru.id/docs)
- [Running React Native on a physical device guide](https://reactnative.dev/docs/running-on-device)
- [React Native Environment guide](https://reactnative.dev/docs/environment-setup)

## Meta

Distributed under the MIT License. See [LICENSE](https://github.com/tru-ID/sim-card-auth-react-native/blob/main/LICENSE.md)

[**tru.ID**](https://tru.id)
