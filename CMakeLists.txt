cmake_minimum_required(VERSION 3.25)
project(mouseable3)

set(CMAKE_CXX_STANDARD 14)

find_package(X11 REQUIRED)
link_libraries(${X11_LIBRARIES})
include_directories(${X11_INCLUDE_DIR})

add_executable(mouseable3
        src/main.cc)
