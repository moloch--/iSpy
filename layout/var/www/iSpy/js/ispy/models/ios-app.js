// iOSApp Model
// --------------
iSpy.Models.iOSApp = Backbone.Model.extend({

    defaults: {
        'CFBundleDisplayName': 'iOS App',
        'CFBundleIdentifier': 'com.foobar',
        'CFBundleVersion': '1337',
        'ASLROffset': 0,
        'classes': [],
        'imageURI': '/img/bf-24x24.png',
        'BuildMachineOSBuild': '',
        "NSMainNibFile":"MainWindow",
        "BuildMachineOSBuild":"",
        "DTPlatformBuild":"",
        "DTCompiler":"",
        "CFBundleDisplayName":"",
        "CFBundleShortVersionString":"",
        "DTSDKName":"",
        "CFBundleExecutable":"",
        "CFBundleIdentifier":"",
        "DTXcode":"",
        "CFBundleInfoDictionaryVersion":"",
        "DTXcodeBuild":"",
        "CFBundleName":"",
        "CFBundleVersion":"",
        "DTSDKBuild":"",
        "MinimumOSVersion":"",
        "DTPlatformVersion":""
    },


    initialize: function() {
        console.log("[Models|iOSApp] initialize");
        iSpy.Events.on('sync:appInfo', this.set, this);
        iSpy.Events.on('sync:ASLR', this.set, this);
        iSpy.Events.on('sync:classList', this.set, this);
        iSpy.Events.on('sync:applicationIcon', this.set, this);
        this.fetch();
    },

    rpcRead: [
        {
            "messageType": "ASLR",
            "messageData": {}
        },
        {
            "messageType": "appInfo",
            "messageData": {}
        },
        {
            "messageType": "classList",
            "messageData": {}
        },
        {
            "messageType": "applicationIcon",
            "messageData": {}
        }
    ],

});
