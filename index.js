ObjC.import('Cocoa');

ObjC.registerSubclass({
    name: 'AppDelegate',
    protocols: ['NSApplicationDelegate'],
    methods: {
        'applicationShouldTerminateAfterLastWindowClosed:': function() {
            return true;
        }
    }
});
var appDelegate = $.AppDelegate.alloc.init;
$.NSApp.setDelegate(appDelegate);

var window = $.NSWindow.alloc.initWithContentRectStyleMaskBackingDefer(
    $.NSMakeRect(0, 0, 400, 200),
    $.NSTitledWindowMask | $.NSClosableWindowMask | $.NSMiniaturizableWindowMask,
    $.NSBackingStoreBuffered,
    false
);

var label = $.NSTextField.alloc.initWithFrame($.NSMakeRect(0, 100 - 24, 400, 24));
label.stringValue = 'Hello World!';
label.drawsBackground = false;
label.editable = false;
label.bezeled = false;
label.selectable = true;
label.alignment = $.NSCenterTextAlignment;
window.contentView.addSubview(label);

window.center;
window.title = 'Hello World';
window.target = appDelegate;
window.makeKeyAndOrderFront(window);
