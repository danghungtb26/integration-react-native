# Integration IOS App with React-Native app

** Note: require 

Nodejs https://nodejs.org/en/download/

yarn: https://classic.yarnpkg.com/lang/en/docs/install/
## Setup
1. Copy `package.json` ([this](./package.json)) to root folder
2. Open terminal
    ```
    yarn or npm install
    ```
3. Copy to Podfile
```rb
    require_relative './node_modules/react-native/scripts/react_native_pods'
    require_relative './node_modules/@react-native-community/cli-platform-ios/native_modules'

    platform :ios, '11.0'


    
    target '***' do
        use_frameworks! :linkage => :static
        config = use_native_modules!

        use_react_native!(
            :path => './node_modules/react-native',
            # to enable hermes on iOS, change `false` to `true` and then install pods
            :hermes_enabled => false
        )
        permissions_path = './node_modules/react-native-permissions/ios'
        pod 'Permission-Camera', :path => "#{permissions_path}/Camera"

        pre_install do |installer|
            Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}
        
            installer.pod_targets.each do |pod|
                if pod.name.eql?('RNPermissions') || pod.name.start_with?('Permission-')
                    def pod.build_type;
                    # Uncomment the line corresponding to your CocoaPods version
                    Pod::BuildType.static_library # >= 1.9
                    # Pod::Target::BuildType.static_library # < 1.9
                    end
                end
            end
        end
        

        post_install do |installer|
            react_native_post_install(installer)
            __apply_Xcode_12_5_M1_post_install_workaround(installer)


            installer.pods_project.targets.each do |target|
                if target.name == 'RCT-Folly'
                    target.build_configurations.each do |config|
                        config.build_settings['HEADER_SEARCH_PATHS'] = "$(inherited) ${PODS_ROOT}/fmt/include"
                    end
                end
            end
        end

    end
```

4. Copy All from folder [copy](./copy) to project
5. Drag and drop all file to `xcode`
6. Create and copy [`ViewController.h`](./Safemobile-IOS-POC/ViewController.h) and [`ViewController.m`](./Safemobile-IOS-POC/ViewController.m)

Done!