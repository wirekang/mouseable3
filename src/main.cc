#include <iostream>
#include <X11/Xlib.h>
#include <unistd.h>

int main() {
    std::cout << "Hello" << std::endl;

    Display *d = XOpenDisplay(nullptr);
    if (d) {
        Window w = XCreateWindow(d, DefaultRootWindow(d), 0, 0, 200, 100, 0, CopyFromParent, CopyFromParent,
                                 CopyFromParent, 0, nullptr);
        XMapWindow(d, w);
        XFlush(d);
        sleep(40);
    }
    return 0;
}
