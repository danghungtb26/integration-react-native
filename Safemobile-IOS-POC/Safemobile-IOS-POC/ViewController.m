//
//  ViewController.m
//  Safemobile-IOS-POC
//
//  Created by Đặng Văn Hùng on 2022-01-09.
//

#import "ViewController.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTLog.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (IBAction)onPress:(id)sender {
    UIViewController *controller = [[UIViewController alloc] init];
    //    NSURL * url = [[NSBundle mainBundle] URLForResource:@"main" withExtension: @"jsbundle"];
    //
    //
    //
    //    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:url moduleName:@"RNProject" initialProperties:nil launchOptions:nil];
        RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
        RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                             moduleName:@"RNProject"
                                                      initialProperties:nil];
        controller.view = rootView;
        [self presentViewController:controller animated:YES completion:nil];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
//#if DEBUG
//  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
//#endif
}


@end
