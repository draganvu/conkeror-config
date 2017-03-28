/// init.js - Conkeror config

// load custom theme
theme_load_paths.unshift("~/.conkerorrc/themes/");
theme_unload("default");
theme_load("gruvbox-dark-soft");

// displaying favicons
require("favicon");
add_hook("mode_line_hook", mode_line_adder(buffer_icon_widget), true);

// favicons in minibuffer completion list
read_buffer_show_icons = true;

// show buffer count
add_hook("mode_line_hook", mode_line_adder(buffer_count_widget), true);

// show loading buffers
add_hook("mode_line_hook", mode_line_adder(loading_count_widget), true);

// disable clock widget
remove_hook("mode_line_hook", mode_line_adder(clock_widget));

// show download status / seems to break navigation
//add_hook("mode_line_hook", mode_line_adder(downloads_status_widget));

// completition
minibuffer_auto_complete_default = true;

// don't open a new window for downloads
download_buffer_automatic_open_target = OPEN_NEW_BUFFER_BACKGROUND;
