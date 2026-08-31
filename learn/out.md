# day1
buff@buff:~/Workspace/learn$ pwd
/home/buff/Workspace/learn
buff@buff:~/Workspace/learn$ cd ..
buff@buff:~/Workspace$ ls
deepseek  learn  learn_ros2
buff@buff:~/Workspace$ cd ..
buff@buff:~$ ls
公共的  模板  视频  图片  文档  下载  音乐  bin  snap  Workspace
buff@buff:~$ pwd
/home/buff
buff@buff:~$ cd ..
buff@buff:/home$ ls
buff
buff@buff:/home$ pwd
/home
buff@buff:/home$


2.
buff@buff:/home$ ls /
bin   cdrom  etc   lib    lib64   lost+found  mnt  proc  run   snap  swapfile  tmp  var
boot  dev    home  lib32  libx32  media       opt  root  sbin  srv   sys       usr
buff@buff:/home$


3.buff@buff:/home$ ls
buff
buff@buff:/home$ cd buff/
buff@buff:~$ ls
公共的  模板  视频  图片  文档  下载  音乐  bin  snap  Workspace
buff@buff:~$ cd wo
bash: cd: wo: 没有那个文件或目录
buff@buff:~$ ls
公共的  模板  视频  图片  文档  下载  音乐  bin  snap  Workspace
buff@buff:~$ cd Workspace/
buff@buff:~/Workspace$ ls
deepseek  learn  learn_ros2
buff@buff:~/Workspace$ cd learn
buff@buff:~/Workspace/learn$ ls
12个月每日学习与项目实践计划_机器人系统方向.txt  365天机器人系统学习实战手册_完整版.txt  daily-learn
365天机器人系统每日理论知识点手册.txt            AGENTS.md                               out.txt
buff@buff:~/Workspace/learn$ mkdir -p robot-system-learning/{linux,ros2,cpp,can}
buff@buff:~/Workspace/learn$ ls
12个月每日学习与项目实践计划_机器人系统方向.txt  365天机器人系统学习实战手册_完整版.txt  daily-learn  robot-system-learning
365天机器人系统每日理论知识点手册.txt            AGENTS.md                               out.txt
buff@buff:~/Workspace/learn$ cd robot-system-learning/
buff@buff:~/Workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/Workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/Workspace/learn/robot-system-learning$


4.ff@buff:~/Workspace/learn$ cd robot-system-learning/
buff@buff:~/Workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/Workspace/learn/robot-system-learning$ ls -R
.:
can  cpp  linux  ros2

./can:

./cpp:

./linux:

./ros2:
buff@buff:~/Workspace/learn/robot-system-learning$

/是系统根目录
home 存放用户个人文件
etc 系统配置文件目录，系统设置中心
var 变化数据目录
usr 用户程序目录（系统安装的程序目录）
opt 安装额外的软件
tmp 临时数据目录
dev 设备文件目录（硬件设备）
| 目录      | 作用    | 机器人开发例子          |
| ------- | ----- | ---------------- |
| `/`     | 根目录   | 整个系统             |
| `/home` | 用户文件  | 代码、工程            |
| `/etc`  | 系统配置  | 网络、服务、启动         |
| `/var`  | 变化数据  | 日志、缓存            |
| `/usr`  | 系统软件  | python、git、ros工具 |
| `/opt`  | 第三方软件 | CUDA、ROS         |
| `/tmp`  | 临时文件  | 编译缓存             |
| `/dev`  | 设备文件  | 串口、摄像头、磁盘        |


buff@buff:~/workspace/learn/robot-system-learning/cpp$ ./hello
hello day1
buff@buff:~/workspace/learn/robot-system-learning/cpp$

buff@buff:~/workspace/learn$ cd robot-system-learning/
buff@buff:~/workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/workspace/learn/robot-system-learning$ cd cpp/
buff@buff:~/workspace/learn/robot-system-learning/cpp$ g++ hello.cpp -o hello
buff@buff:~/workspace/learn/robot-system-learning/cpp$ ls
hello  hello.cpp

buff@buff:~/workspace/learn/robot-system-learning$ cat linux/README.md
本文件存放每日学习笔记，项目实践

buff@buff:~/workspace/learn/robot-system-learning$ cd can
buff@buff:~/workspace/learn/robot-system-learning/can$ touch README.md
buff@buff:~/workspace/learn/robot-system-learning/can$ cp README.md ../cpp
buff@buff:~/workspace/learn/robot-system-learning/can$ cp README.md ../ros2
buff@buff:~/workspace/learn/robot-system-learning/can$



commit f1e04c73941805ad77cb9b244a817eb28641ba32 (HEAD -> main, origin/main)
Merge: 45aaebb ce2ebf8
Author: liang686 <3218058764@qq.com>
Date:   Sun Aug 16 19:12:58 2026 +0800

    Merge branch 'main' of https://github.com/user189397lyh/learn

commit 45aaebbffbc89f6b76ceebc8481178020d51283b
Author: liang686 <3218058764@qq.com>
Date:   Sun Aug 16 19:10:15 2026 +0800
buff@buff:~/workspace/learn/robot-system-learning/can$


robot-system-learning
buff@buff:~/workspace/learn$ git add .
buff@buff:~/workspace/learn$ ls
12个月每日学习与项目实践计划_机器人系统方向.txt
365天机器人系统每日理论知识点手册.txt
365天机器人系统学习实战手册_完整版.txt
AGENTS.md
out.txt
robot-system-learning
buff@buff:~/workspace/learn$ git commit -m "day1linux基础学习"
[main 981b6db] day1linux基础学习
 10 files changed, 93 insertions(+), 873 deletions(-)
 delete mode 100644 learn/daily-learn/Linux+Kernel+Ubuntu+Shell+Terminal.txt
 create mode 100644 learn/robot-system-learning/can/README.md
 create mode 100644 learn/robot-system-learning/cpp/README.md
 create mode 100755 learn/robot-system-learning/cpp/hello
 create mode 100644 learn/robot-system-learning/cpp/hello.cpp
 create mode 100644 learn/robot-system-learning/linux/README.md
 create mode 100644 learn/robot-system-learning/linux/day1.txt
 create mode 100644 learn/robot-system-learning/ros2/README.md
buff@buff:~/workspace/learn$ git push
枚举对象中: 18, 完成.
对象计数中: 100% (18/18), 完成.
使用 8 个线程进行压缩
压缩对象中: 100% (12/12), 完成.
写入对象中: 100% (14/14), 4.91 KiB | 4.91 MiB/s, 完成.
总共 14（差异 4），复用 0（差异 0），包复用 0
remote: Resolving deltas: 100% (4/4), completed with 3 local objects.
To https://github.com/user189397lyh/learn.git
   f1e04c7..981b6db  main -> main
buff@buff:~/workspace/learn$


buff@buff:~/workspace/learn$ git push
枚举对象中: 11, 完成.
对象计数中: 100% (11/11), 完成.
使用 8 个线程进行压缩
压缩对象中: 100% (6/6), 完成.
写入对象中: 100% (6/6), 781 字节 | 781.00 KiB/s, 完成.
总共 6（差异 2），复用 0（差异 0），包复用 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/user189397lyh/learn.git
   981b6db..eaa8d16  main -> main
buff@buff:~/workspace/learn$




# day2

buff@buff:~/workspace/learn$ ls
12个月每日学习与项目实践计划_机器人系统方向.txt
365天机器人系统每日理论知识点手册.txt
365天机器人系统学习实战手册_完整版.txt
当前学习任务安排.txt
AGENTS.md
out.md
robot-system-learning
buff@buff:~/workspace/learn$

相比ls多了.gitignore文件
buff@buff:~/workspace/learn$ ls -a
.
..
12个月每日学习与项目实践计划_机器人系统方向.txt
365天机器人系统每日理论知识点手册.txt
365天机器人系统学习实战手册_完整版.txt
当前学习任务安排.txt
AGENTS.md
.gitignore
out.md
robot-system-learning
buff@buff:~/workspace/learn$

buff@buff:~/workspace/learn$ ls -h
12个月每日学习与项目实践计划_机器人系统方向.txt
365天机器人系统每日理论知识点手册.txt
365天机器人系统学习实战手册_完整版.txt
当前学习任务安排.txt
AGENTS.md
out.md
robot-system-learning
buff@buff:~/workspace/learn$
为什么ls -h没有显示出文件大小,而ls -lh显示出了文件大小
buff@buff:~/workspace/learn$ ls -lh
总计 1.3M
-rw-rw-r-- 1 buff buff  17K  8月 16 13:16 12个月每日学习与项目实践计划_机器人系统方向.txt
-rw-rw-r-- 1 buff buff 789K  8月 16 13:16 365天机器人系统每日理论知识点手册.txt
-rw-rw-r-- 1 buff buff 448K  8月 16 13:16 365天机器人系统学习实战手册_完整版.txt
-rw-rw-r-- 1 buff buff 6.9K  8月 17 15:16 当前学习任务安排.txt
-rw-rw-r-- 1 buff buff 3.7K  8月 17 15:39 AGENTS.md
-rw-rw-r-- 1 buff buff 6.9K  8月 17 15:41 out.md
drwxrwxr-x 6 buff buff 4.0K  8月 16 18:51 robot-system-learning
buff@buff:~/workspace/learn$

buff@buff:~/workspace/learn$ ls -lth
总计 1.3M
-rw-rw-r-- 1 buff buff 7.9K  8月 17 15:43 out.md
-rw-rw-r-- 1 buff buff 3.7K  8月 17 15:39 AGENTS.md
-rw-rw-r-- 1 buff buff 6.9K  8月 17 15:16 当前学习任务安排.txt
drwxrwxr-x 6 buff buff 4.0K  8月 16 18:51 robot-system-learning
-rw-rw-r-- 1 buff buff 789K  8月 16 13:16 365天机器人系统每日理论知识点手册.txt
-rw-rw-r-- 1 buff buff 448K  8月 16 13:16 365天机器人系统学习实战手册_完整版.txt
-rw-rw-r-- 1 buff buff  17K  8月 16 13:16 12个月每日学习与项目实践计划_机器人系统方向.txt
buff@buff:~/workspace/learn$

buff@buff:~/workspace/learn$ ls
12个月每日学习与项目实践计划_机器人系统方向.txt
365天机器人系统每日理论知识点手册.txt
365天机器人系统学习实战手册_完整版.txt
当前学习任务安排.txt
AGENTS.md
out.md
robot-system-learning
buff@buff:~/workspace/learn$ cd robot-system-learning/
buff@buff:~/workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/workspace/learn/robot-system-learning$ cd linux/
buff@buff:~/workspace/learn/robot-system-learning/linux$ ls
README.md
buff@buff:~/workspace/learn/robot-system-learning/linux$ cd ..
buff@buff:~/workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/workspace/learn/robot-system-learning$ mkdir -p linux/day2-demo/subdir
buff@buff:~/workspace/learn/robot-system-learning$ touch linux/day2-demo/a.txt
buff@buff:~/workspace/learn/robot-system-learning$ echo 'hello day2' > linux/day2-demo/a.txt
buff@buff:~/workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/workspace/learn/robot-system-learning$ cd linux/
buff@buff:~/workspace/learn/robot-system-learning/linux$ ls
day2-demo  README.md
buff@buff:~/workspace/learn/robot-system-learning/linux$ cd day2-demo/
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$ ls
a.txt  subdir
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$ cp a.txt backup.txt
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$ mv backup.txt renamed.txt
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$

cp是复制文件到另一个文件，原来的文件不会丢失
mv是移动文件到另一个文件，原来的文件位置/名称都会改变

文件覆盖与重命名含义不理解


buff@buff:~/workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/workspace/learn/robot-system-learning$ cat linux/day2-demo/a.txt
hello day2
buff@buff:~/workspace/learn/robot-system-learning$ head -n 5 linux/day2-demo/a.txt
hello day2
buff@buff:~/workspace/learn/robot-system-learning$ head -n 5 linux/day2-demo/a.txt
hello day2
1
2
3
4
buff@buff:~/workspace/learn/robot-system-learning$


4
buff@buff:~/workspace/learn/robot-system-learning$ tail -n 5 linux/day2-demo/a.txt
3
4
5
6
7
buff@buff:~/workspace/learn/robot-system-learning$

head -n 5是从文件头开始数前五行内容
tail -n 5是从文件末尾开始后五行内容
cat 是查看整个文件
grep 是过滤出符合条件的一行/多行内容

buff@buff:~/workspace/learn/robot-system-learning$ grep 'hello' linux/day2-demo/a.txt
hello day2
buff@buff:~/workspace/learn/robot-system-learning$ wc -l linux/day2-demo/a.txt
8 linux/day2-demo/a.txt
buff@buff:~/workspace/learn/robot-system-learning$

wc 是统计文件的行数 ，但是-l参数是什么意思呢？



buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$ touch demo.sh
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$ ls
a.txt  demo.sh  renamed.txt  subdir
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$ chmod 755 demo.sh
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$ ls
a.txt  demo.sh  renamed.txt  subdir
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$ ./demo.sh
hello world
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$ ls
a.txt  demo.sh  renamed.txt  subdir
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$ ls -l a.txt demo.sh
-rw-r--r-- 1 buff buff 25  8月 17 15:51 a.txt
-rwxr-xr-x 1 buff buff 18  8月 17 16:10 demo.sh
buff@buff:~/workspace/learn/robot-system-learning/linux/day2-demo$
文件不能执行是因为没有添加执行权限，需要+x添加执行权限
chmod  用于修改权限

buff@buff:~/workspace/learn/robot-system-learning$ find . -name '*.txt'
./linux/day2-demo/renamed.txt
./linux/day2-demo/a.txt
buff@buff:~/workspace/learn/robot-system-learning$
find 中 .是什么意思 从当前文件夹开始查找吗？
-name呢？是什么意思

buff@buff:~/workspace/learn/robot-system-learning$ find . -type f | head
./ros2/README.md
./cpp/README.md
./cpp/hello.cpp
./cpp/hello
./can/README.md
./linux/README.md
./linux/day2-demo/renamed.txt
./linux/day2-demo/a.txt
./linux/day2-demo/demo.sh
buff@buff:~/workspace/learn/robot-system-learning$

其中-type是什么意思 f呢？ | head呢？ 我不理解

find 用于查找不知道文件位置的文件
ls用于查看当前文件夹下有哪些内容


buff@buff:~/workspace/learn/robot-system-learning$ vim linux/day2_demo.sh
buff@buff:~/workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/workspace/learn/robot-system-learning$ chmod +x linux/day2_demo.sh
buff@buff:~/workspace/learn/robot-system-learning$ vim linux/day2_demo.sh
buff@buff:~/workspace/learn/robot-system-learning$ ./linux/day2_demo.sh
Today is 2026年 08月 17日 星期一 16:33:57 CST
Hello robot
Current path: /home/buff/workspace/learn/robot-system-learning
buff@buff:~/workspace/learn/robot-system-learning$

我喜欢用vim 不喜欢用nano

name 是变量
date是获取系统时间
pwd是获取当前位置


buff@buff:~/workspace/learn/robot-system-learning$ vim linux/day2_demo_if_for.sh
buff@buff:~/workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/workspace/learn/robot-system-learning$ chmod +x linux/day2_demo_if_for.sh
buff@buff:~/workspace/learn/robot-system-learning$ ls
can  cpp  linux  ros2
buff@buff:~/workspace/learn/robot-system-learning$ ./linux/day2_demo_if_for.sh
missing
1
2
3
buff@buff:~/workspace/learn/robot-system-learning$
我不理解fi是什么意思
不理解for中的do done
不理解for loop中的loop



buff@buff:~/workspace/learn/robot-system-learning$ echo 'hello' > linux/day2-demo/a.txt
buff@buff:~/workspace/learn/robot-system-learning$ ls | head
can
cpp
linux
ros2
 echo 'hello' > linux/day2-demo/a.txt 是覆盖原先的内容写入的吗？追加内容是什么
buff@buff:~/workspace/learn/robot-system-learning/linux$ ls | head
day2-demo
day2_demo_if_for.sh
day2_demo.sh
README.md
buff@buff:~/workspace/learn/robot-system-learning/linux$
ls | head 其中head不加-n参数默认输出前四个吗？

 我的理解：>与>>的区别我不知道
 管道符的作用就是将前一个命令的输出作为后一个命令的输入
 举个例子cat files.txt | grep 'files*' | wc -l 其中cat 输出文件内容，grep过滤文件内容中有files的行，wc统计fgrep过滤出来的行数
 buff@buff:~/workspace/learn/robot-system-learning/linux$ cat files.txt | wc -l
5
buff@buff:~/workspace/learn/robot-system-learning/linux$ cat files.txt | grep 'files*' | wc -l
1
buff@buff:~/workspace/learn/robot-system-learning/linux$

  （使用 "git restore <文件>..." 丢弃工作区的改动）
        修改：     ../../.gitignore
        修改：     ../../AGENTS.md
        修改：     README.md
        删除：     day1.txt

未跟踪的文件:
  （使用 "git add <文件>..." 以包含要提交的内容）
        ../../../deepseek/
        ../../out.md
        day2-demo/
        day2_demo.sh
        day2_demo_if_for.sh
        files.txt
        "../../\345\255\246\344\271\240\344\273\273\345\212\241\346\250\241\346\235\277.md"
        ../../../learn_ros2/

修改尚未加入提交（使用 "git add" 和/或 "git commit -a"）
buff@buff:~/workspace/learn/robot-system-learning/linux$


 "../../\345\255\246\344\271\240\344\273\273\345\212\241\346\250\241\346\235\277.md"
        ../../../learn_ros2/这些乱码是什么？


buff@buff:~/workspace/learn/robot-system-learning/linux$ git diff
diff --git a/learn/.gitignore b/learn/.gitignore
index 8d02ef0..d154830 100644
--- a/learn/.gitignore
+++ b/learn/.gitignore
@@ -73,8 +73,6 @@ Thumbs.db
 ../deepseek/
 ../learn_ros2/

-# out.txt (execution output)
-out.txt

 # 学习笔记
 /learn
@@ -84,4 +82,8 @@ out.txt
 *.out
 a.out
 # Ignore specific cpp build outputs
-robot-system-learning/cpp/hello
:

git diff怎么去查看的？看不懂上面的内容


buff@buff:~/workspace/learn/robot-system-learning/linux$ git diff --staged
buff@buff:~/workspace/learn/robot-system-learning/linux$
--staged是什么意思，为什么没有输出呢？


untracked 是未add的内容
modified / staged这两个我都不理解


git diff 和 git status 的区别是什么？

buff@buff:~/workspace/learn/robot-system-learning/linux$ git add day2_demo.sh
buff@buff:~/workspace/learn/robot-system-learning/linux$ git commit -m "day2: add linux shell practice"
[main 4a53db3] day2: add linux shell practice
 1 file changed, 5 insertions(+)
 create mode 100755 learn/robot-system-learning/linux/day2_demo.sh
buff@buff:~/workspace/learn/robot-system-learning/linux$ git log --oneline -n 5
4a53db3 (HEAD -> main) day2: add linux shell practice
eaa8d16 (origin/main) chore: untrack cpp build artifacts and out.txt
981b6db day1linux基础学习
f1e04c7 Merge branch 'main' of https://github.com/user189397lyh/learn
45aaebb Initial commit: robotics system 12-month learning project

commit的意义是为了清楚每次修改的什么内容，清楚每次提交的是什么内容
每次提交记录适合放什么内容呢？


uff@buff:~/workspace/learn/robot-system-learning/linux$ echo "temporary change" >> somefile
buff@buff:~/workspace/learn/robot-system-learning/linux$ ls
day2-demo  day2_demo_if_for.sh  day2_demo.sh  files.txt  README.md  somefile
buff@buff:~/workspace/learn/robot-system-learning/linux$ git checkout -- somefile
error: 路径规格 'somefile' 未匹配任何 git 已知文件
buff@buff:~/workspace/learn/robot-system-learning/linux$ ls
day2-demo  day2_demo_if_for.sh  day2_demo.sh  files.txt  README.md  somefile
buff@buff:~/workspace/learn/robot-system-learning/linux$ git checkout -- somefile
error: 路径规格 'somefile' 未匹配任何 git 已知文件
buff@buff:~/workspace/learn/robot-system-learning/linux$ git restore -- somefile
error: 路径规格 'somefile' 未匹配任何 git 已知文件
buff@buff:~/workspace/learn/robot-system-learning/linux$
git checkout用于切换分支
git restore不知道用于干什么


buff@buff:~/workspace/learn/robot-system-learning/cpp$ touch hello_day2.cpp
buff@buff:~/workspace/learn/robot-system-learning/cpp$ ls
hello  hello.cpp  hello_day2.cpp  README.md
buff@buff:~/workspace/learn/robot-system-learning/cpp$ g++ hello_day2.cpp -o hello_day2

buff@buff:~/workspace/learn/robot-system-learning/cpp$ ./hello_day2
a = 10
b = 3.14
name = robot
buff@buff:~/workspace/learn/robot-system-learning/cpp$

int整型，double浮点型，string字符串型

buff@buff:~/workspace/learn/robot-system-learning/cpp$ touch condition.cpp
buff@buff:~/workspace/learn/robot-system-learning/cpp$ g++ condition.cpp -o condition
buff@buff:~/workspace/learn/robot-system-learning/cpp$


buff@buff:~/workspace/learn/robot-system-learning/cpp$ ./condition
input score: 60
pass
buff@buff:~/workspace/learn/robot-system-learning/cpp$ ./condition
input score: 50
fail
buff@buff:~/workspace/learn/robot-system-learning/cpp$

buff@buff:~/workspace/learn/robot-system-learning/cpp$ g++ add.cpp -o add
add.cpp: In function ‘int main()’:
add.cpp:2:14: error: ‘cout’ was not declared in this scope
    2 | int main() { cout << add(3, 5) << endl; }
      |              ^~~~
add.cpp:2:35: error: ‘endl’ was not declared in this scope
    2 | int main() { cout << add(3, 5) << endl; }
      |                                   ^~~~
buff@buff:~/workspace/learn/robot-system-learning/cpp$

buff@buff:~/workspace/learn/robot-system-learning/cpp$ g++ add.cpp -o add
buff@buff:~/workspace/learn/robot-system-learning/cpp$ ^C
buff@buff:~/workspace/learn/robot-system-learning/cpp$ ./add
8
buff@buff:~/workspace/learn/robot-system-learning/cpp$
引入头文件问题，你写的时候没有加入对应的头文件

函数可以反复调用，增加可读性和复用性
参数有什么作用
返回值可以作为另一个函数的输入参数


buff@buff:~/workspace/learn$ git add .
buff@buff:~/workspace/learn$ git commit -m 'day2:linux shell and cpp basics'
[main 8f4060e] day2:linux shell and cpp basics
 17 files changed, 848 insertions(+), 7 deletions(-)
 create mode 100644 learn/out.md
 create mode 100755 learn/robot-system-learning/cpp/add
 create mode 100644 learn/robot-system-learning/cpp/add.cpp
 create mode 100755 learn/robot-system-learning/cpp/condition
 create mode 100644 learn/robot-system-learning/cpp/condition.cpp
 create mode 100755 learn/robot-system-learning/cpp/hello_day2
 create mode 100644 learn/robot-system-learning/cpp/hello_day2.cpp
 rename learn/robot-system-learning/linux/{day1.txt => README.md} (87%)
 create mode 100644 learn/robot-system-learning/linux/day2-demo/a.txt
 create mode 100755 learn/robot-system-learning/linux/day2-demo/demo.sh
 create mode 100644 learn/robot-system-learning/linux/day2-demo/renamed.txt
 create mode 100755 learn/robot-system-learning/linux/day2_demo_if_for.sh
 create mode 100644 learn/robot-system-learning/linux/files.txt
 create mode 100644 learn/robot-system-learning/linux/somefile
 create mode 100644 "learn/\345\255\246\344\271\240\344\273\273\345\212\241\346\250\241\346\235\277.md"
buff@buff:~/workspace/learn$ git push
枚举对象中: 38, 完成.
对象计数中: 100% (38/38), 完成.
使用 8 个线程进行压缩
压缩对象中: 100% (26/26), 完成.
写入对象中: 100% (30/30), 19.35 KiB | 4.84 MiB/s, 完成.
总共 30（差异 7），复用 0（差异 0），包复用 0
remote: Resolving deltas: 100% (7/7), completed with 3 local objects.
To https://github.com/user189397lyh/learn.git
   eaa8d16..8f4060e  main -> main
buff@buff:~/workspace/learn$

仔细查看，我忘记加忽略文件了，将cpp的编译文件提交到远程了，如何可以直接忽略所有的编译程序

# day3用户操作输出记录


buff@buff:~/workspace/learn$ pwd
/home/buff/workspace/learn
buff@buff:~/workspace/learn$ pwd -p
bash: pwd: -p: 无效的选项
pwd: 用法： pwd [-LP]
buff@buff:~/workspace/learn$ pwd -P
/home/buff/workspace/learn
buff@buff:~/workspace/learn$ ls -d
.
buff@buff:~/workspace/learn$ ls -ld
drwxrwxr-x 3 buff buff 4096  8月 18 10:25 .
buff@buff:~/workspace/learn$ ls
12个月每日学习与项目实践计划_机器人系统方向.txt  当前学习任务安排.txt  AGENTS.md
365天机器人系统每日理论知识点手册.txt            学习任务模板.md       out.md
365天机器人系统学习实战手册_完整版.txt           学习问题记录模板.md   robot-system-learning
buff@buff:~/workspace/learn$ ls -ld .
drwxrwxr-x 3 buff buff 4096  8月 18 10:25 .
buff@buff:~/workspace/learn$ ls -ld ..
drwxrwxr-x 6 buff buff 4096  8月 16 19:12 ..
buff@buff:~/workspace/learn$ ls -ld /home/buff/
drwxr-x--- 32 buff buff 4096  8月 18 10:45 /home/buff/
buff@buff:~/workspace/learn$ ls -ld /home
drwxr-xr-x 3 root root 4096  3月 26 23:56 /home
buff@buff:~/workspace/learn$

pwd与pwd -P区别是是什么我不懂
.是当前目录，..是上级目录
相对路径是基于当前文件路径地址开始的路径
绝对路径是基于/目录开始的路径


buff@buff:~/workspace/learn/robot-system-learning/linux$ tree
.
├── day2-demo
│   ├── a.txt
│   ├── demo.sh
│   ├── renamed.txt
│   └── subdir
├── day2_demo_if_for.sh
├── day2_demo.sh
├── demo
│   └── day3
│       ├── a.txt
│       └── subdir
├── files.txt
├── README.md
└── somefile

5 directories, 9 files

mkdir 创建文件夹 touch创建文本文件 cp复制 mv移动、改名  rm删除


buff@buff:~/workspace/learn/robot-system-learning/linux$ echo 'first line' > demo/day3/log.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$ echo 'second line' >> demo/day3/log.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$ cat demo/day3/log.txt
first line
second line
buff@buff:~/workspace/learn/robot-system-learning/linux$ echo 'third line' > demo/day3/log.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$ cat demo/day3/log.txt
third line
buff@buff:~/workspace/learn/robot-system-learning/linux$

我已经清楚 > 是覆盖写入 >> 是追加写入

buff@buff:~/workspace/learn/robot-system-learning/linux$ ls > list.txt 2> err.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$ ls
day2-demo  day2_demo_if_for.sh  day2_demo.sh  demo  err.txt  files.txt  list.txt  README.md  somefile
buff@buff:~/workspace/learn/robot-system-learning/linux$ cat list.txt
day2-demo
day2_demo_if_for.sh
day2_demo.sh
demo
err.txt
files.txt
list.txt
README.md
somefile
buff@buff:~/workspace/learn/robot-system-learning/linux$ cat err.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$
为什么err.txt中没有内容


buff@buff:~/workspace/learn/robot-system-learning/linux$ ls notexist >  out.txt 2> err.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$ cat err.txt
ls: 无法访问 'notexist': 没有那个文件或目录
buff@buff:~/workspace/learn/robot-system-learning/linux$ cat out.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$

下面三个我都不能理解，也不懂，需要你讲解与说明
- 能理解标准输出和标准错误
- 能知道 1>、2>、2>&1 分别是什么意思
- 能说明重定向用于记录日志的意义


buff@buff:~/workspace/learn/robot-system-learning/linux$ grep 'day3' demo/day3/log.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$ grep -n 'day3' demo/day3/log.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$ sort demo/day3/log.txt
third line
buff@buff:~/workspace/learn/robot-system-learning/linux$ uniq demo/day3/log.txt
third line
buff@buff:~/workspace/learn/robot-system-learning/linux$ sed -n '1.5p' demo/day3/log.txt
sed: -e 表达式 #1, 字符 2: 未知的命令：“.”↵
buff@buff:~/workspace/learn/robot-system-learning/linux$ sed -n '1,5p' demo/day3/log.txt
third line
buff@buff:~/workspace/learn/robot-system-learning/linux$ cat demo/day3/log.txt
third line
buff@buff:~/workspace/learn/robot-system-learning/linux$


grep 是过滤出自己想要的内容
sort不知道，uniq不知道，sed不知道，需要你讲解基本用途
buff@buff:~/workspace/learn/robot-system-learning/linux$ grep 't*' -n demo/day3/log.txt
1:third line
buff@buff:~/workspace/learn/robot-system-learning/linux$
已经理解grep -n 可以显示出行号

不理解过滤文本与排序文本的区别,需要你讲解


buff@buff:~/workspace/learn/robot-system-learning/linux$ VAR_NAME='day3'
buff@buff:~/workspace/learn/robot-system-learning/linux$ echo $VAR_NAME
day3
buff@buff:~/workspace/learn/robot-system-learning/linux$ echo $HO
$HOME      $HOSTNAME  $HOSTTYPE
buff@buff:~/workspace/learn/robot-system-learning/linux$ echo $HOME
/home/buff
buff@buff:~/workspace/learn/robot-system-learning/linux$ echo $PATH
/home/buff/bin:/home/buff/.config/Code/User/globalStorage/github.copilot-chat/debugCommand:/home/buff/.config/Code/User/globalStorage/github.copilot-chat/copilotCli:/home/buff/bin:/home/buff/bin:/home/buff/.nvm/versions/node/v24.19.0/bin:/home/buff/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin
buff@buff:~/workspace/learn/robot-system-learning/linux$ export TEST_VAR='hello'
buff@buff:~/workspace/learn/robot-system-learning/linux$ echo $TEST_VAR
hello
buff@buff:~/workspace/learn/robot-system-learning/linux$

我不理解变量和环境变量的区别，需要讲解与回答
我不能说明 $HOME、$PATH 是什么，需要讲解与回答
我不能说出 shell 中变量的引用方式，需要讲解与回答


buff@buff:~/workspace/learn/robot-system-learning/linux$ ls
day2-demo  day2_demo_if_for.sh  day2_demo.sh  demo  err.txt  files.txt  list.txt  out.txt  README.md  somefile
buff@buff:~/workspace/learn/robot-system-learning/linux$ touch day3_args.sh
buff@buff:~/workspace/learn/robot-system-learning/linux$ ls
day2-demo  day2_demo_if_for.sh  day2_demo.sh  day3_args.sh  demo  err.txt  files.txt  list.txt  out.txt  README.md  somefile
buff@buff:~/workspace/learn/robot-system-learning/linux$ chmod +x day3_args.sh
buff@buff:~/workspace/learn/robot-system-learning/linux$ ./day3_args.sh robot linux
脚本名: ./day3_args.sh
第一个参数: robot
第二个参数: linux
全部参数: robot linux
buff@buff:~/workspace/learn/robot-system-learning/linux$

下面两个问题需要你回答与讲解，我做完操作之后没懂：
- 解释 $0、$1、$2、$@ 的意义
- 说明脚本参数如何传递

buff@buff:~/workspace/learn/robot-system-learning/linux$ arr=("linux" "cpp" "ros2")
buff@buff:~/workspace/learn/robot-system-learning/linux$ echo ${arr[0]}
linux
buff@buff:~/workspace/learn/robot-system-learning/linux$ echo ${arr[*]}
linux cpp ros2
buff@buff:~/workspace/learn/robot-system-learning/linux$ for item in ${arr[*]}; do echo $item; done
linux
cpp
ros2
buff@buff:~/workspace/learn/robot-system-learning/linux$
arr[0]是数组中下标序号为0数，通常是数组中的第一个数
arr[*]是数组中所有的数
for 循环遍历输出：
#!/bin/bash

arr=("apple" "banana" "orange" "hello world")

for item in "${arr[@]}"; do
    echo "$item"
done

buff@buff:~/workspace/learn/robot-system-learning/linux$ num=10
buff@buff:~/workspace/learn/robot-system-learning/linux$ if [ $num -gt 5 ]; then echo "大于5"; else echo "不大于5"; fi
大于5
buff@buff:~/workspace/learn/robot-system-learning/linux$ if [ -f "a.txt" ]; then echo "文件存在"; elif [ -d "a.txt" ]; then echo " 是目录"; else echo "都不是"; fi
都不是
buff@buff:~/workspace/learn/robot-system-learning/linux$

我能理解 if/else/elif 结构
我不知道 -gt、-lt、-eq 的含义，需要回答与讲解
我能说明条件判断用于筛选逻辑

buff@buff:~/workspace/learn/robot-system-learning/linux$ i=1
buff@buff:~/workspace/learn/robot-system-learning/linux$ while [ $i -le 3 ]; do echo $i; i=$((i+1)); done
1
2
3
buff@buff:~/workspace/learn/robot-system-learning/linux$ V
V：未找到命令
buff@buff:~/workspace/learn/robot-system-learning/linux$ count=1
buff@buff:~/workspace/learn/robot-system-learning/linux$ until [ $count -gt 3 ]; do echo $count; count=$((count+1)); done
1
2
3
buff@buff:~/workspace/learn/robot-system-learning/linux$
我能区分 while 和 until
我能理解循环退出条件
我能说出什么情况下用循环


buff@buff:~/workspace/learn/robot-system-learning/linux$ git branch
* main
buff@buff:~/workspace/learn/robot-system-learning/linux$ git branch day3-practice
buff@buff:~/workspace/learn/robot-system-learning/linux$ git checkout day3-practice
M       learn/AGENTS.md
M       learn/out.md
M       learn/robot-system-learning/can/README.md
M       learn/robot-system-learning/cpp/README.md
M       learn/robot-system-learning/linux/README.md
M       learn/robot-system-learning/ros2/README.md
切换到分支 'day3-practice'
buff@buff:~/workspace/learn/robot-system-learning/linux$ git branch
* day3-practice
  main
buff@buff:~/workspace/learn/robot-system-learning/linux$

每个人都有自己的开发分支，方便同时协作开发，又能隔离代码，最后合入主分支进行存档
checkout与switch都是用于切换分支的


buff@buff:~/workspace/learn/robot-system-learning/linux$ echo "day3 branch note" > day3_note.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$ git add day3_note.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$ git commit -m "day3: add branch note"
[day3-practice 1cc8c46] day3: add branch note
 1 file changed, 1 insertion(+)
 create mode 100644 learn/robot-system-learning/linux/day3_note.txt
buff@buff:~/workspace/learn/robot-system-learning/linux$ git log --oneline -n 3
1cc8c46 (HEAD -> day3-practice) day3: add branch note
8f4060e (origin/main, main) day2:linux shell and cpp basics
4a53db3 day2: add linux shell practice
buff@buff:~/workspace/learn/robot-system-learning/linux$
提交记录可以清晰的知道本次提交的是什么内容，哪个分支修改的，哪个分支提交的，清晰定位问题

commit信息写本次修改主要内容
工作区、暂存区、提交区
工作区是当前编辑区域，暂存区是add 之后的区域，提交区是push上去之后的区域



seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git restore sample.txt
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git checkout -- sample.txt
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git restore sample.txt
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
我做这个任务之后发现，首先我新建sample.txt文件之后保存
之后执行git add sample.txt之后加入暂存区
后面我继续使用vscode手动修改sample.txt文件，修改之后保存
之后我执行git restore sample.txt发现它恢复到了git add sample.txt时的状态
我对于恢复的理解是必须是提交到暂存区域的文件才可以恢复，恢复的内容是已经提交过暂存区的内容，未跟踪的文件无法恢复，因为git不知道这个文件


seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo "temp work" >> temp.txt
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls
day2-demo  day2_demo_if_for.sh  day2_demo.sh  day3_args.sh  demo  err.txt  files.txt  list.txt  out.txt  README.md  sample.txt  somefile  temp.txt
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git stash push -m "temp save"
保存工作目录和索引状态 On main: temp save
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git status
位于分支 main
您的分支与上游分支 'origin/main' 一致。

未跟踪的文件:
  （使用 "git add <文件>..." 以包含要提交的内容）
        temp.txt

提交为空，但是存在尚未跟踪的文件（使用 "git add" 建立跟踪）
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git stash list
stash@{0}: On main: temp save
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git stash pop
位于分支 main
您的分支与上游分支 'origin/main' 一致。

尚未暂存以备提交的变更：
  （使用 "git add <文件>..." 更新要提交的内容）
  （使用 "git restore <文件>..." 丢弃工作区的改动）
        修改：     ../../AGENTS.md
        修改：     ../../out.md

未跟踪的文件:
  （使用 "git add <文件>..." 以包含要提交的内容）
        temp.txt

修改尚未加入提交（使用 "git add" 和/或 "git commit -a"）
丢弃了 refs/stash@{0}（899b9a680d4875569c61e6130ad2c8a8b53e888d）
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
stash的用途是保存临时的工作目录，便于下次回来时修改
我不理解“保存现场 → 后续恢复”，需要你帮我梳理

seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$ touch day3_array.cpp
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$ ls
add  add.cpp  condition  condition.cpp  day3_array.cpp  hello.cpp  hello_day2  hello_day2.cpp  README.md
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$ g++ day3_array.cpp -o day3_array
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$ ./day3_array
1 2 3 4 5
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$
- 能解释数组是什么
- 能理解下标从 0 开始
- 能说明 for 循环和数组结合可以遍历所有元素
数组就是array=[0,1,3,6,7]其中0的下标是0,array[0]=0,array[3]=6
for循环遍历数组就是从下标0开始遍历到最后


seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$ g++ day3_loop.cpp -o day3_loop
day3_loop.cpp: In function ‘int main()’:
day3_loop.cpp:3:25: error: ‘cout’ was not declared in this scope
    3 |         if (i % 2 == 0) cout << i << " is even" << endl;
      |                         ^~~~
day3_loop.cpp:3:52: error: ‘endl’ was not declared in this scope
    3 |         if (i % 2 == 0) cout << i << " is even" << endl;
      |                                                    ^~~~
day3_loop.cpp:4:14: error: ‘cout’ was not declared in this scope
    4 |         else cout << i << " is odd" << endl;
      |              ^~~~
day3_loop.cpp:4:40: error: ‘endl’ was not declared in this scope
    4 |         else cout << i << " is odd" << endl;
      |                                        ^~~~
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$
编译失败了，我的理解是因为头文件缺失
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$ ./day3_loop
1 is odd
2 is even
3 is odd
4 is even
5 is odd
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$
头文件加入之后正常编译执行输出
- 能解释 for 循环的三部分：初始化 / 条件 / 更新
- 能理解 if/else 判断
- 能说出 % 是取模运算
for (int i = 1; i <= 5; i++) 其中int i = 1是初始化，i<=5是循环条件，i++是更新，后面{}里面是循环体
 if (i % 2 == 0) cout << i << " is even" << endl;
        else cout << i << " is odd" << endl;
其中if ()中是判断条件，如果if成立则执行后面count内容，如果不成立则执行else的内容
我对%的理解是5%2=1,其中5/2=2...1


seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$ g++ day3_func.cpp day3_func
day3_func.cpp: In function ‘int main()’:
day3_func.cpp:7:5: error: ‘cout’ was not declared in this scope
    7 |     cout << "sum = " << total << endl;
      |     ^~~~
day3_func.cpp:7:34: error: ‘endl’ was not declared in this scope
    7 |     cout << "sum = " << total << endl;
      |                                  ^~~~
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$
依旧是缺少头文件，下次你注意必须给出完整可复制粘贴执行代码

seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$ g++ day3_func.cpp day3_func
/usr/bin/ld: 找不到 day3_func: 没有那个文件或目录
collect2: error: ld returned 1 exit status
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$ g++ day3_func.cpp -o day3_func
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$ ./day3_func
sum = 15
function sum: 8
seeway@test:~/workspace/learn/learn/robot-system-learning/cpp$
其中sum函数复用在main中，函数方便复用，在修改其他代码时可以直接调用这个函数
total+=i是total=total+i
sum函数的参数是a,b返回值是a+b
main没有参数，返回值是0


seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ file day3_args.sh
day3_args.sh: Bourne-Again shell script, Unicode text, UTF-8 text executable
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
Unicode text这是什么意思？

seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ stat day3_args.sh
  文件：day3_args.sh
  大小：110             块：8          IO 块大小：4096   普通文件
设备：10302h/66306d     Inode：48522843    硬链接：1
权限：(0755/-rwxr-xr-x)  Uid: ( 1000/  seeway)   Gid: ( 1000/       l)
访问时间：2026-08-24 10:20:26.985601739 +0800
修改时间：2026-08-21 17:37:19.017295859 +0800
变更时间：2026-08-21 17:37:19.017295859 +0800
创建时间：2026-08-21 17:37:19.017295859 +0800
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$

seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ stat -c '名称=%n 类型=%F 大小=%s 权限=%A 所有者=%U:%G inode=%i' day3_args.sh
名称=day3_args.sh 类型=普通文件 大小=110 权限=-rwxr-xr-x 所有者=seeway:l inode=48522843
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
file和stat有什么区别？
名称=day3_args.sh 类型=普通文件 大小=110 权限=-rwxr-xr-x 所有者=seeway:l inode=48522843
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
这个可以看到大小、权限、所有者、修改时间和 inode。

seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ uname -r
6.8.0-136-generic
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ 这是什么意思

seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ uname -m
x86_64
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ 这个我理解系统是X86架构的，但是我们的项目机器是aarch64。所以才采用了交叉编译

seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ hostname
test
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ uname -a
Linux test 6.8.0-136-generic #136~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Jul  3 16:29:11 UTC  x86_64 x86_64 x86_64 GNU/Linux
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
这是我设置的主机名字是test,其中seeway@test中的test就是主机名字


seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cat /etc/os-release
PRETTY_NAME="Ubuntu 22.04.5 LTS"
NAME="Ubuntu"
VERSION_ID="22.04"
VERSION="22.04.5 LTS (Jammy Jellyfish)"
VERSION_CODENAME=jammy
ID=ubuntu
ID_LIKE=debian
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
UBUNTU_CODENAME=jammy
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
这是我安装的ubuntu发行版的信息


ubuntu只是一个操作界面，linux是内核操作系统


seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ df -h
文件系统        大小  已用  可用 已用% 挂载点
tmpfs           3.2G  2.9M  3.2G    1% /run
/dev/nvme0n1p2  916G  184G  686G   22% /
tmpfs            16G  162M   16G    2% /dev/shm
tmpfs           5.0M  4.0K  5.0M    1% /run/lock
efivarfs        256K  132K  120K   53% /sys/firmware/efi/efivars
/dev/nvme0n1p1  511M  6.1M  505M    2% /boot/efi
tmpfs           3.2G  204K  3.2G    1% /run/user/1000
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cd ..
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls
can  cpp  linux  ros2
seeway@test:~/workspace/learn/learn/robot-system-learning$ cd ..
seeway@test:~/workspace/learn/learn$ ls
12个月每日学习与项目实践计划_机器人系统方向.txt  AGENTS.md              学习任务模板.md
365天机器人系统学习实战手册_完整版.txt           out.md                 学习问题记录模板.md
365天机器人系统每日理论知识点手册.txt            robot-system-learning  当前学习任务安排.txt
seeway@test:~/workspace/learn/learn$ du -sh robot-system-learning/
260K    robot-system-learning/
seeway@test:~/workspace/learn/learn$
seeway@test:~/workspace/learn/learn$ free -h
               total        used        free      shared  buff/cache   available
内存：       31Gi        11Gi       9.5Gi       185Mi        10Gi        20Gi
交换：      2.0Gi          0B       2.0Gi
seeway@test:~/workspace/learn/learn$
seeway@test:~/workspace/learn/learn$ uptime
 15:10:21 up 1 day, 21:30,  1 user,  load average: 0.61, 0.46, 0.40
seeway@test:~/workspace/learn/learn$
df 是查看整个文件系统的使用情况
du 是查看指定文件或当前文件的大小
free -h 中内存的total是31G，used是11G，可用的是20G
看不懂这个seeway@test:~/workspace/learn/learn$ uptime
 15:10:21 up 1 day, 21:30,  1 user,  load average: 0.61, 0.46, 0.40

 seeway@test:~/workspace/learn/learn$ true
seeway@test:~/workspace/learn/learn$ 为什么没有输出
seeway@test:~/workspace/learn/learn$ true
seeway@test:~/workspace/learn/learn$ echo $?
0
seeway@test:~/workspace/learn/learn$ 为什么输出0？
seeway@test:~/workspace/learn/learn$ false
seeway@test:~/workspace/learn/learn$ echo $?
1
seeway@test:~/workspace/learn/learn$ 为什么又输出1了？
seeway@test:~/workspace/learn/learn$ command -v uname
/usr/bin/uname
seeway@test:~/workspace/learn/learn$ echo $?
0
seeway@test:~/workspace/learn/learn$ 又变成0了？
seeway@test:~/workspace/learn/learn$ 俄文三
俄文三：未找到命令
seeway@test:~/workspace/learn/learn$ echo $?
127
seeway@test:~/workspace/learn/learn$为什么是127了？
seeway@test:~/workspace/learn/learn$ command -v day4_missing_command
seeway@test:~/workspace/learn/learn$ echo $?
1
seeway@test:~/workspace/learn/learn$


seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day4_system_check.sh
bash: ./day4_system_check.sh: 权限不够
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ chmod +x day4_system_check.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day4_system_check.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ 没有输出是为什么？
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day4_system_check.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cat day4_system_check.log
cat: day4_system_check.log: 没有那个文件或目录
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day4_system_check.sh day4_custom.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ at day4_custom.log
找不到命令 “at”，但可以通过以下软件包安装它：
sudo apt install at
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cat day4_custom.log
cat: day4_custom.log: 没有那个文件或目录
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ DAY4_TEST_MISSING=1 ./day4_system_check.sh day4_failed.log
[ERROR] missing command: day4_missing_command
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ test -e day4_failed.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$

seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ chmod +x robot-system-learning/linux/day4_system_check.sh
cd robot-system-learning/linux
./day4_system_check.sh
echo $?
cat day4_system_check.log

./day4_system_check.sh day4_custom.log
echo $?
cat day4_custom.log
chmod: 无法访问 'robot-system-learning/linux/day4_system_check.sh': 没有那个文件或目录
bash: cd: robot-system-learning/linux: 没有那个文件或目录
[ERROR] missing command: day4_missing_command
cat: day4_system_check.log: 没有那个文件或目录
[ERROR] missing command: day4_missing_command
cat: day4_custom.log: 没有那个文件或目录
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ chmod +x robot-system-learning/linux/day4_system_check.sh
chmod: 无法访问 'robot-system-learning/linux/day4_system_check.sh': 没有那个文件或目录
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cd ..
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls -a
seeway@test:~/workspace/learn/learn/robot-system-learning$ cd linux/
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ;s
bash: 未预期的记号 ";" 附近有语法错误
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls


补充：
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day4_system_check.sh
[OK] date
[OK] uname
[OK] hostname
[OK] df
[OK] free
[OK] uptime
Report saved to: day4_system_check.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
0
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cat day4_system_check.log
=== Robot System Diagnostic ===
Time: 2026-08-24 19:41:36
Host: test
Kernel: 6.8.0-136-generic
Architecture: x86_64

--- Root Filesystem ---
文件系统        大小  已用  可用 已用% 挂载点
/dev/nvme0n1p2  916G  185G  685G   22% /

--- Memory ---
               total        used        free      shared  buff/cache   available
内存：       31Gi        13Gi       6.5Gi       240Mi        11Gi        18Gi
交换：      2.0Gi          0B       2.0Gi

--- Uptime And Load ---
 19:41:36 up 2 days,  2:01,  1 user,  load average: 0.90, 0.82, 0.82
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$

seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day4_system_check.sh day4_custom.log
[OK] date
[OK] uname
[OK] hostname
[OK] df
[OK] free
[OK] uptime
Report saved to: day4_custom.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
0
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cat day4_custom.log
=== Robot System Diagnostic ===
Time: 2026-08-24 19:51:52
Host: test
Kernel: 6.8.0-136-generic
Architecture: x86_64

--- Root Filesystem ---
文件系统        大小  已用  可用 已用% 挂载点
/dev/nvme0n1p2  916G  185G  685G   22% /

--- Memory ---
               total        used        free      shared  buff/cache   available
内存：       31Gi        13Gi       6.7Gi       259Mi        11Gi        18Gi
交换：      2.0Gi          0B       2.0Gi

--- Uptime And Load ---
 19:51:52 up 2 days,  2:11,  1 user,  load average: 1.41, 0.80, 0.73
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ DAY4_TEST_MISSING=1 ./day4_system_check.sh day4_failed.log
[OK] date
[OK] uname
[OK] hostname
[OK] df
[OK] free
[OK] uptime
[ERROR] missing command: day4_missing_command
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
1
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ test -e day4_failed.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
1
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$

8. `command -v` 的用途是什么？Shell 当前环境下能不能找到某个命令，以及这个命令实际对应什么。
9. `${1:-day4_system_check.log}` 是什么意思？常见的 Shell 参数设计方式。
10. `local`、`return 0`、`return 1` 分别有什么作用？给调用者返回结果。
11. `check_command "$command_name" || exit 1` 的执行逻辑是什么？检查 git，如果 git 不存在，就立即终止脚本。
12. 正常验证和异常验证分别证明了什么？系统在符合预期条件下，脚本能够正确执行，并且能够识别正常状态。系统不仅能处理正常情况，还能够正确识别和处理错误情况。

file回答：这个文件的类型是什么。stat回答：详细文件属性
文件名是目录中的“名字”，inode 才是文件在文件系统中的核心身份信息。
Linux 是内核，Ubuntu 是基于 Linux 内核构建出来的一套完整操作系统发行版。
df -h 文件系统整体还剩多少空间。
du -sh 某个目录/文件实际占用了多少空间。
free = 现在完全没被使用的内存

available = 系统估计还能拿出来给程序使用的内存
系统中处于可运行状态或不可中断睡眠状态、正在等待 CPU 或某些内核资源的任务数量的时间平均情况。
$?上一条命令的退出状态码。
第 5 题回答不完整：
- free 只是当前完全空闲的内存。
- available 还考虑了系统能够回收的缓存，表示在不发生明显交换的情况下，估计还能提供给新程序的内存，所以更适合判断可用内存。
第 6 题缺少两部分：
- 三个值依次表示过去 1、5、15 分钟的平均负载。
- 它统计可运行和不可中断睡眠任务的平均数量，不是 CPU 时间比例，因此不是百分比；判断高低还要结合 CPU 逻辑核心数。
第 7 题只解释了 $? 是什么，没有回答为什么立即检查：
- 每执行一条新命令，$? 都会被新命令的退出状态覆盖。
第 9 题过于模糊：
${1:-day4_system_check.log}
表示：如果第一个参数 $1 未提供或为空，使用 day4_system_check.log；否则使用 $1。
第 10 题需要分别解释：
- local：变量只在当前函数内有效。
- return 0：函数结束并向调用者报告成功。
- return 1：函数结束并向调用者报告失败。
第 11 题回答错误，不是固定检查 Git：
check_command "$command_name" || exit 1
表示检查当前数组中的命令；如果 check_command 返回非零状态，就执行 exit 1，立即结束整个脚本。

如果 free 只有 1 GiB，但 available 有 8 GiB，程序申请 4 GiB 内存是否一定失败？为什么？
不一定失败，因为可用还有8G，足够4G程序使用
uptime 显示负载为 4.0 时，在 4 核与 16 核 CPU 上分别可能意味着什么？
负载 4.0：4 核系统可能接近满载；16 核系统通常仍有较多余量，但还要考虑不可中断任务。
依次执行 false、echo hello、echo $?，最后为什么不是查看 false 的状态？
echo hello 是有效的 Shell 内置命令，执行成功并返回 0,false; echo hello; echo $? 最后输出 0，因为 echo hello 成功并覆盖了 false 的状态。
${1:-day4_system_check.log} 在传入和不传入参数时分别得到什么？
不知道
local command_name 为什么放在函数内部？return 1 与 exit 1 的影响范围有什么区别？
return 1：退出当前函数，将失败状态交给调用者。
exit 1：结束整个脚本。
check_command "$command_name" || exit 1 检查到不存在的命令后会发生什么？为什么错误使用 >&2？
>&2：把错误写入标准错误，使错误能与正常输出分开处理。
用三句话总结：今天真正学会了什么、排查了什么错误、还有什么不确定。
学习了命令状态，文件属性与类型
今天学会了查看cpu负载情况，shell命令使用，文件查看属性与类型，脚本参数设置
发现了执行脚本错误echosss 应该是echo
目前仍然不确定day4_system_check.sh脚本是干嘛的


这个脚本是一个诊断工具
out_file是输出文件，保存执行日志
之后检查依赖的六个命令是否正常
如果是正常模式，则走手机系统信息写入日志文件，最后告诉用户日志文件在哪
如果是异常模式，缺少命令的情况下，则exit 1不生成日志保存


# Day5 用户操作输出记录
seeway@test:~/workspace/learn/learn$ find robot-system-learning/linux -maxdepth 1 -type f -name '*.log' -printf '%f | %s bytes\n'
day4_system_check.log | 560 bytes
day4_custom.log | 560 bytes
seeway@test:~/workspace/learn/learn$
这条命令的搜索起点是robot-system-learning/linux，并且只在当前目录层级搜索，不去更深层级,-type f 是指普通文件，-name是指区分大小写，*.log表示后缀是.log的文件， -printf是指搜索到的文件怎么去输出，输出格式为是文件名+字节数

seeway@test:~/workspace/learn/learn$ find robot-system-learning/linux -maxdepth 1 -type f -name '*.log' -printf '%f | %s bytes | %TY-%Tm-%Td %TH:%TM\n'
day4_system_check.log | 560 bytes | 2026-08-24 19:41
day4_custom.log | 560 bytes | 2026-08-24 19:51
seeway@test:~/workspace/learn/learn$
起点是这条命令的搜索起点是robot-system-learning/linux，并且只在当前目录层级搜索，不去更深层级，与第一条的区别是文件的输出格式不同，增加了一个修改时间

seeway@test:~/workspace/learn/learn$ find robot-system-learning/linux -maxdepth 1 -type f -iname 'DAY4_CUSTOM.LOG' -printf '%f\n'
day4_custom.log
seeway@test:~/workspace/learn/learn$
这条命令与第一条的区别是： -iname不区分大小写 输出格式只有文件名，搜索方式是指定文件名搜索

seeway@test:~/workspace/learn/learn$ find robot-system-learning/linux -maxdepth 1 -type f -name '*.log' -size +500c -printf '%f | %s bytes\n'
day4_system_check.log | 560 bytes
day4_custom.log | 560 bytes
seeway@test:~/workspace/learn/learn$
这条命令与第一条的区别是： 只有大于500bytes的文件并且后缀是.log的文件才会被搜索

seeway@test:~/workspace/learn/learn$ find robot-system-learning/linux -maxdepth 1 -type f -name '*.log' -newermt '2 days ago' -printf '%f | %TY-%Tm-%Td %TH:%TM\n'
day4_system_check.log | 2026-08-24 19:41
day4_custom.log | 2026-08-24 19:51
seeway@test:~/workspace/learn/learn$
这条命令与第一条的区别是：文件修改时间是近2天修改的文件，没有输出字节，有日期

- 如果某条命令没有输出，要根据文件大小或修改时间判断这是正常无匹配还是命令错误
-name 是区分大小写，-iname是不区分大小写
-size +500c 其中c是字节
seeway@test:~/workspace/learn/learn$ find robot-system-learning/linux -maxdepth 1 -type f -name '*.log' -size +1000c -printf '%f | %s bytes\n'
seeway@test:~/workspace/learn/learn$ 没有输出是因为在linux文件夹中普通文件是.log后缀的文件有但是没有大于1000bytes的匹配文件

seeway@test:~/workspace/learn/learn$ find robot-system-learning/linux -maxdepth 1 -type f -name '*.log' -exec grep -Hn -- 'Kernel' {} +
robot-system-learning/linux/day4_system_check.log:4:Kernel: 6.8.0-136-generic
robot-system-learning/linux/day4_custom.log:4:Kernel: 6.8.0-136-generic
seeway@test:~/workspace/learn/learn$


seeway@test:~/workspace/learn/learn$ find robot-system-learning/linux -maxdepth 1 -type f -name '*.log' -exec grep -Hn -- 'DAY5_NOT_FOUND' {} +
echo $?
1
seeway@test:~/workspace/learn/learn$
seeway@test:~/workspace/learn/learn$ find robot-system-learning/linux -maxdepth 1 -type f -name '*.log' -exec grep -Hn -- 'DAY5_NOT_FOUND' {} +
seeway@test:~/workspace/learn/learn$ echo $?
1
seeway@test:~/workspace/learn/learn$ find robot-system-learning/linux -maxdepth 1 -type f -name '*.log' -exec grep -Hn -- 'Kernel' {} +
robot-system-learning/linux/day4_system_check.log:4:Kernel: 6.8.0-136-generic
robot-system-learning/linux/day4_custom.log:4:Kernel: 6.8.0-136-generic
seeway@test:~/workspace/learn/learn$ echo $?
0
seeway@test:~/workspace/learn/learn$
需要你教学这些：为什么第二组的 `echo $?` 可能仍然是 `0`。项目脚本为什么需要直接保存 `grep` 的退出状态。

seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ practice_dir='/tmp/day5-delete-practice'
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ mkdir -p "$practice_dir"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ touch "$practice_dir/keep.txt" "$practice_dir/remove.log"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ find "$practice_dir" -maxdepth 1 -type f -printf '%f\n'
remove.log
keep.txt
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ find "$practice_dir" -maxdepth 1 -type f -name '*.log' -print
/tmp/day5-delete-practice/remove.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ find "$practice_dir" -maxdepth 1 -type f -name '*.log' -delete
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ find "$practice_dir" -maxdepth 1 -type f -printf '%f\n'
keep.txt
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
预览可以确保你要删除的文件是可以安全删除的，很重要，本次删除的精确搜索起点是/tmp/day5-delete-practice，深度是day5-delete-practice，只在本级目录搜索，类型是普通文件，名称条件是.log后缀区分大小写

seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day5_find_logs.sh . Kernel
[INFO] searched log files: 2
./day4_system_check.log:4:Kernel: 6.8.0-136-generic
./day4_custom.log:4:Kernel: 6.8.0-136-generic
[OK] keyword found: Kernel
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
0
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day5_find_logs.sh . DAY5_NOT_FOUND
[INFO] searched log files: 2
[INFO] no matching line: DAY5_NOT_FOUND
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
1
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day5_find_logs.sh ./day5_missing_dir Kernel
[ERROR] directory not found: ./day5_missing_dir
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
2
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day5_find_logs.sh ./demo Kernel
[INFO] no log files found in: ./demo
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
3
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day5_find_logs.sh . -n
[INFO] searched log files: 2
[INFO] no matching line: -n
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
1
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
1. `find` 命令中的搜索起点与筛选条件分别是什么？这个问题答案在上面，自行寻找
2. `-maxdepth 1` 限制了什么？限制了搜索目录的层级
3. `-name` 与 `-iname` 有什么区别？是否区分大小写的区别
4. `-size +500c` 中 `+`、`500`、`c` 分别代表什么？+是大于，500是数字，C是字节
5. 为什么 `find -exec grep ...` 没有匹配时，`find` 仍可能返回 `0`？GNU find 使用 -exec ... {} + 时，已经找到日志文件并执行了 grep，如果 grep 返回 1，find 最终也可能返回非零。若根本没找到文件，grep 没有执行，find 却可能返回 0。所以不能仅靠 find 的状态准确区分搜索结果，
6. 为什么处理文件名时，`-print0` 比普通换行分隔更可靠？-print0 配合 mapfile：安全地把每个文件路径放入数组，避免路径中的空格或换行被错误拆开。
7. `mapfile -d '' -t log_files` 做了什么？mapfile`：把多条输入读取进 Bash 数组。
8. `${#log_files[@]}` 是匹配行数还是日志文件数？${#log_files[@]}：找到的日志文件数量，不是匹配行数。
9. `grep` 的退出状态 `0`、`1`、大于 `1` 分别代表什么？grep：0 表示找到，1 表示没找到，大于 1 表示执行错误。
10. `--` 为什么能保护以 `-` 开头的关键字？--：告诉 grep 后面是搜索文本，所以 -n 不会被当成选项
11. 为什么删除前必须先用同样的条件执行 `-print`？需要确认删除的文件是否安全，是否是自己要删除的文件
12. `day5_find_logs.sh` 的状态 `0`、`1`、`2`、`3` 分别代表什么？脚本状态：0 找到关键字，1 没有匹配行，2 目录不存在，3 没有日志文件。

1. 真正学会了什么、排查了什么问题、目前还有什么不确定。
学会了find搜索，安全删除 ，排查了为什么 find -exec grep 返回 1，目前不确定的是5～12问题答案，但是整体逻辑已经理解


# Day6 用户操作输出记录

seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ find "$practice_dir" -maxdepth 1 -type f -name '*.log' -printf '%f | %s bytes\n'
warning.log | 81 bytes
clean.log | 86 bytes
error.log | 139 bytes
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
clean代表的场景是正常场景
warning代表的场景是有警告但是不影响正常运行，但有风险
error代表的是无法正常执行场景，必须修复
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ grep -n -- '[ERROR]' "$practice_dir/error.log"
1:10:02:00 [INFO] robot boot
2:10:02:01 [WARN] temp=82
3:10:02:02 [ERROR] motor timeout
4:10:02:03 [INFO] retry motor
5:10:02:04 [ERROR] CAN offline
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ grep -Fn -- '[ERROR]' "$practice_dir/error.log"
3:10:02:02 [ERROR] motor timeout
5:10:02:04 [ERROR] CAN offline
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
第一组是因为[error]中只需要匹配其中任意一个即可
第二组是严格匹配error整个字符
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ grep -En -- 'temp=[0-9]+' "$practice_dir/error.log"
2:10:02:01 [WARN] temp=82
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ grep -En -- '\[(ERROR|WARN)\]' "$practice_dir/error.log"
2:10:02:01 [WARN] temp=82
3:10:02:02 [ERROR] motor timeout
5:10:02:04 [ERROR] CAN offline
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
其中固定文本过滤是用 -F,需要表达“数字范围、多个可能模式”等变化时再使用正则。
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ grep -Fn -C 1 -- '[ERROR]' "$practice_dir/error.log"
2-10:02:01 [WARN] temp=82
3:10:02:02 [ERROR] motor timeout
4-10:02:03 [INFO] retry motor
5:10:02:04 [ERROR] CAN offline
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
如果单独查看error motor timeout,则不确定在哪一步造成了timeout,此时查看带有上下文的grep则更方便的定位问题
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ touch day6_log_analyzer.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ chmod +x day6_log_analyzer.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day6_log_analyzer.sh
[ANALYZER ERROR] log file not found:
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day6_log_analyzer.sh day4_system_check.log
Log file: day4_system_check.log
ERROR count: 0
WARN count: 0
[STATUS] HEALTHY
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day6_log_analyzer.sh /tmp/day6-grep-practice/clean.log
echo $?
Log file: /tmp/day6-grep-practice/clean.log
ERROR count: 0
WARN count: 0
[STATUS] HEALTHY
0
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day6_log_analyzer.sh /tmp/day6-grep-practice/warning.log
Log file: /tmp/day6-grep-practice/warning.log
ERROR count: 0
WARN count: 1
--- WARN evidence ---
1-10:01:00 [INFO] robot boot
2:10:01:01 [WARN] temp=78
3-10:01:02 [INFO] fan increased
[STATUS] WARN
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
1
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day6_log_analyzer.sh /tmp/day6-grep-practice/error.log
Log file: /tmp/day6-grep-practice/error.log
ERROR count: 2
WARN count: 1
--- ERROR evidence ---
2-10:02:01 [WARN] temp=82
3:10:02:02 [ERROR] motor timeout
4-10:02:03 [INFO] retry motor
5:10:02:04 [ERROR] CAN offline
[STATUS] ERROR
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
2
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day6_log_analyzer.sh /tmp/day6-grep-practice/missing.log
[ANALYZER ERROR] log file not found: /tmp/day6-grep-practice/missing.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ echo $?
3
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
2. 搜索固定标签 `[ERROR]` 时，为什么字面量搜索比普通正则更准确？因为字面量匹配更精准
3. 什么情况下适合使用正则表达式？我明确告诉你，不需要管这个事情自然有AI帮助我解答
4. 查看错误前后的上下文能提供什么额外证据？提供更清晰的前后步骤，更容易确定错误内容
5. `day6_log_analyzer.sh` 从输入日志到最终状态经历了哪些步骤？接收并检查日志文件，统计错误和警告，优先判断错误，其次判断警告，否则判断为健康。
6. 为什么脚本先判断 `ERROR`，再判断 `WARN`？error的优先级更高
7. 脚本状态 `0`、`1`、`2`、`3` 分别表示什么？不知道，不要再学这个了，明确告诉你不需要学习这个
8. 为什么日志分析脚本只读取日志，不应该自动删除或修改日志？日志分析只能用来分析，不可以用来删除，分析工具只读日志是为了保留原始故障证据，避免分析过程改变证据。

grep处理的输入是日志文件，处理是根据参数确定的，输出是我们过滤后的内容
 例如grep -Fn -C 1 -- '[ERROR]' "$practice_dir/error.log"输入是error.log文件，处理是-Fn -C 1是匹配error完整字符并且输出前后1行输出的内容就是2-10:02:01 [WARN] temp=82
3:10:02:02 [ERROR] motor timeout
4-10:02:03 [INFO] retry motor
5:10:02:04 [ERROR] CAN offline
我再明确告知你，不需要总结

# Day7 用户操作输出记录

Day7 采用能力验证方式，用户申请跳过重复实践。

## 能力验证回答

1. 查看大日志开头使用 `head`；搜索中间错误可使用文本搜索；查看持续新增的最新内容使用 `tail -f`。
2. 日志开头和结尾正常，不能排除中间位置存在问题。
3. `tail -f` 可以持续观察新增内容；普通 `tail` 只显示执行当时的尾部快照。
4. `cat` 查看大文件会产生大量终端输出，不便定位；`less` 更适合分页查看大文件。
5. 查看工具不应修改原始日志，否则会破坏开发和故障分析所依赖的证据。

## AI 检查与纠正

- 能力验证通过，Day7 重复实践和 `day7_log_snapshot.sh` 可以跳过。
- 搜索大日志时不需要写成 `cat file | grep ERROR`，可以直接让搜索工具读取日志，减少不必要的命令环节。
- 首尾快照必须提示“中间内容未包含”；用户在第 2 题中已经理解这一证据边界。
- 日志查看工具应保持只读，避免改变原始故障证据。

# Day8 用户操作输出记录
seeway@test:~/workspace/learn$ wc -l "$practice_dir/mixed.log" "$practice_dir/clean.log"
  5 /tmp/day8-pipeline-practice/mixed.log
  3 /tmp/day8-pipeline-practice/clean.log
  8 总计
seeway@test:~/workspace/learn$
能说明两份日志分别用于验证什么场景。我明确告知你不要再有这种验收标准，我不需要知道日志用于什么场景，我只需要知道日志中分析出什么问题
seeway@test:~/workspace/learn$ grep -F -e '[ERROR]' -e '[WARN]' "$practice_dir/mixed.log"
[WARN] motor temperature high
[ERROR] motor timeout
[ERROR] CAN offline
seeway@test:~/workspace/learn$ grep -F -e '[ERROR]' -e '[WARN]' "$practice_dir/mixed.log" | wc -l
3
seeway@test:~/workspace/learn$
- 能指出每个阶段接收什么、输出什么。
- 能说明 `wc` 统计的是筛选后的内容，而不是原日志全部五行。
grep -F -e '[ERROR]' -e '[WARN]' "$practice_dir/mixed.log" 这个阶段输出[WARN] motor temperature high[ERROR] motor
timeout[ERROR] CAN offline,这些是从mixed.log中筛选出的内容，wc -l统计grep阶段输出的行数，|的作用是grep的输出作为wc -l的输入

seeway@test:~/workspace/learn$ {
    printf '%s\n' '[NORMAL] diagnostic output'
    printf '%s\n' '[ERROR STREAM] simulated failure' >&2
} | tee "$practice_dir/stdout-only.txt"
[ERROR STREAM] simulated failure
[NORMAL] diagnostic output
seeway@test:~/workspace/learn$ cat "$practice_dir/stdout-only.txt"
[NORMAL] diagnostic output
seeway@test:~/workspace/learn$
[NORMAL] 是标准输出，会经过管道进入 tee，因此既显示在终端又写入 stdout-only.txt；[ERROR STREAM] 带有 >&2，是标准错误，默认绕过管道直接显示在终端。
因此我们不能非常确定所有的终端错误输出都放在了我们设置的stdout-only.txt中，要有这个意识
seeway@test:~/workspace/learn$ grep -F -e '[ERROR]' -e '[WARN]' "$practice_dir/mixed.log" \
    | tee "$practice_dir/attention-report.txt"
[WARN] motor temperature high
[ERROR] motor timeout
[ERROR] CAN offline
seeway@test:~/workspace/learn$ cat "$practice_dir/attention-report.txt"
[WARN] motor temperature high
[ERROR] motor timeout
[ERROR] CAN offline
seeway@test:~/workspace/learn$ wc -l "$practice_dir/attention-report.txt"
3 /tmp/day8-pipeline-practice/attention-report.txt
seeway@test:~/workspace/learn$ grep -F -e '[ERROR]' -e '[WARN]' "$practice_dir/clean.log" \
    | tee "$practice_dir/attention-report.txt"
seeway@test:~/workspace/learn$ wc -l "$practice_dir/attention-report.txt"
0 /tmp/day8-pipeline-practice/attention-report.txt
seeway@test:~/workspace/learn$
旧报告残留保存在report.txt中，会导致分析的结果不是当前问题的原因
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day8_diagnostic_pipeline.sh \
    /tmp/day8-pipeline-practice/mixed.log \
    /tmp/day8-pipeline-practice/script-report.txt
Input log: /tmp/day8-pipeline-practice/mixed.log
Report file: /tmp/day8-pipeline-practice/script-report.txt
--- Attention lines ---
[WARN] motor temperature high
[ERROR] motor timeout
[ERROR] CAN offline
Matched lines: 3
[RESULT] attention required
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day8_diagnostic_pipeline.sh \
    /tmp/day8-pipeline-practice/clean.log \
    /tmp/day8-pipeline-practice/script-report.txt
Input log: /tmp/day8-pipeline-practice/clean.log
Report file: /tmp/day8-pipeline-practice/script-report.txt
--- Attention lines ---
Matched lines: 0
[RESULT] no warning or error found
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ wc -l /tmp/day8-pipeline-practice/script-report.txt
0 /tmp/day8-pipeline-practice/script-report.txt
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day8_diagnostic_pipeline.sh \
    /tmp/day8-pipeline-practice/missing.log \
    /tmp/day8-pipeline-practice/script-report.txt
[PIPELINE ERROR] input log not found: /tmp/day8-pipeline-practice/missing.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./day8_diagnostic_pipeline.sh \
    /tmp/day8-pipeline-practice/missing.log \
    /tmp/day8-pipeline-practice/script-report.txt
[PIPELINE ERROR] input log not found: /tmp/day8-pipeline-practice/missing.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cat /tmp/day8-pipeline-practice/mixed.log
[INFO] robot boot
[WARN] motor temperature high
[INFO] retry motor
[ERROR] motor timeout
[ERROR] CAN offline
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ grep -F -e '[ERROR]' -e '[WARN]' \
    /tmp/day8-pipeline-practice/mixed.log
[WARN] motor temperature high
[ERROR] motor timeout
[ERROR] CAN offline
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cat /tmp/day8-pipeline-practice/script-report.txt
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
2. 在“日志 → 筛选 → 统计”中，每个阶段的输入和输出是什么？第一阶段确认日志是否存在，之后筛选警告与错误信息，筛选的结果作为|后面统计的输入
3. 为什么屏幕上的错误文字不一定会进入管道后的报告文件？因为标准错误只会输出在终端不一会进入报告文件
4. `tee` 在诊断管道中解决了什么问题？同一份标准输入既显示在屏幕，又写入文件”，它不会自动把标准错误送进报告。
5. 为什么每次测试应覆盖生成本次报告，不能保留旧内容冒充新结果？可能会导致本次生成的日志文件不是最新的，也不是当前问题的原因，导致排查方向错误
6. 管道最终结果与预期不符时，为什么应该逐段检查？排查具体问题出在哪个阶段mixed.log 确实包含异常。
单独运行筛选也得到三行。
script-report.txt 却为空，是因为它之前被正常日志覆盖，之后没有用混合日志重新生成。
因此空报告不是当前混合日志的有效分析结果。
7. `day8_diagnostic_pipeline.sh` 的整体处理流程是什么？
  1. 接收输入日志和报告文件路径。
  2. 先确认输入日志存在。
  3. 筛选警告与错误信息。
  4. 使用 `tee` 同时显示并覆盖生成本次报告。
  5. 根据报告行数显示“无需关注”或“需要关注”。
8. 为什么脚本可以覆盖分析报告，但不能修改原始输入日志？修改原始输入日志会导致程序产生的原始错误被覆盖或者抹除，导致无法定位原有问题的原因
管道中的上游是|前面的内容。下游是|后面的内容。即上游的输出作为下游的输入

# Day9 用户操作输出记录

Day9 主题为重定向。现有 Day3、Day4 和 Day8 记录已覆盖并验证该内容，因此归档后跳过重复学习。

# Day10 用户操作输出记录
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ DAY10_LOCAL='local-value'
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ export DAY10_ENV='environment-value'
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ printf 'current shell local: %s\n' "$DAY10_LOCAL"
current shell local: local-value
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ printf 'current shell environment: %s\n' "$DAY10_ENV"
current shell environment: environment-value
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ bash -c 'printf "child local: %s\n" "${DAY10_LOCAL:-<empty>}"; printf "child environment: %s\n" "${DAY10_ENV:-<empty>}"'
child local: <empty>
child environment: environment-value
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
当前输出中 只有export设置的变量可以传递给当前shell的子进程，普通的变量则不会
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ printf '%s\n' "$PATH" | tr ':' '\n'
/home/l/.config/Code/User/globalStorage/github.copilot-chat/debugCommand
/home/l/.config/Code/User/globalStorage/github.copilot-chat/copilotCli
/home/l/.local/bin
/opt/ros/humble/bin
/home/l/.nvm/versions/node/v24.19.0/bin
/home/l/.local/bin
/usr/local/sbin
/usr/local/bin
/usr/sbin
/usr/bin
/sbin
/bin
/usr/games
/usr/local/games
/snap/bin
/snap/bin
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ command -v bash
/usr/bin/bash
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ command -v day8_diagnostic_pipeline.sh || printf '%s\n' '[NOT FOUND] day8 script is not in PATH'
[NOT FOUND] day8 script is not in PATH
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
shell在以下目录中寻找可执行命令
/home/l/.config/Code/User/globalStorage/github.copilot-chat/debugCommand
/home/l/.config/Code/User/globalStorage/github.copilot-chat/copilotCli
/home/l/.local/bin
/opt/ros/humble/bin
/home/l/.nvm/versions/node/v24.19.0/bin
/home/l/.local/bin
/usr/local/sbin
/usr/local/bin
/usr/sbin
/usr/bin
/sbin
/bin
/usr/games
/usr/local/games
/snap/bin
/snap/bin
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ /tmp/day10-bin/robot-health
[ROBOT] health check ready
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ command -v robot-health || printf '%s\n' '[NOT FOUND] robot-health is not in PATH'
[NOT FOUND] robot-health is not in PATH
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ export PATH="/tmp/day10-bin:$PATH"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ command -v robot-health
/tmp/day10-bin/robot-health
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ robot-health
[ROBOT] health check ready
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ saved_day10_path="$PATH"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ PATH='/tmp/day10-bin'
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
command -v robot-health
/tmp/day10-bin/robot-health
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ command -v ls || printf '%s\n' '[NOT FOUND] ls is not in the current PATH'
alias ls='ls --color=auto'
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ PATH="$saved_day10_path"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ command -v ls || printf '%s\n' '[NOT FOUND] ls is not in the current PATH'
alias ls='ls --color=auto'
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls
day2-demo            day3_args.sh           day4_system_check.sh  day8_diagnostic_pipeline.sh  files.txt  README.md   temp.txt
day2_demo_if_for.sh  day4_custom.log        day5_find_logs.sh     demo                         list.txt   sample.txt
day2_demo.sh         day4_system_check.log  day6_log_analyzer.sh  err.txt                      out.txt    somefile
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ command -v ls
alias ls='ls --color=auto'
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls --version | head -n 1
ls (GNU coreutils) 8.32
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ touch robot_env.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ bash -n robot_env.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ unset ROBOT_PROJECT_ROOT ROBOT_LOG_DIR
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ source ./robot_env.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ printf 'project root: %s\n' "$ROBOT_PROJECT_ROOT"
project root: /home/l/workspace/learn/learn/robot-system-learning
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ printf 'log directory: %s\n' "$ROBOT_LOG_DIR"
log directory: /tmp/robot-system-logs
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ command -v day8_diagnostic_pipeline.sh
/home/l/workspace/learn/learn/robot-system-learning/linux/day8_diagnostic_pipeline.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ mkdir -p "$ROBOT_LOG_DIR"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ test -d "$ROBOT_LOG_DIR" && printf '%s\n' '[OK] robot log directory exists'
[OK] robot log directory exists
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$

1. 普通 Shell 变量与导出的环境变量，对子进程有什么不同？普通shell变量不会被子进程继承，导出的环境变量会被继承
2. `PATH` 保存的是什么，Shell 只收到一个命令名时如何找到程序？path保存的是文件目录，shell受到命令时在path中顺序查找可执行文件目录之后找到程序执行
3. 为什么 `/tmp/day10-bin/robot-health` 一开始能运行，只输入 `robot-health` 却找不到？因为/tmp/day10-bin/robot-health`带有路径，并且一开始没有加入path,只输入robot-health当然找不到
4. 为什么更新 `PATH` 时应保留原来的内容，而不能只写项目目录？如果不保留原来的内容，那么shell将找不到之前安装软件的可执行程序，会造成很多问题
5. 出现“命令找不到”时，应按什么顺序检查命令文件、执行权限和 `PATH`？应线检查命令文件中是否存在，之后检查有没有执行权限，最后看path中有没有该命令项目目录
6. `robot_env.sh` 集中保存了哪些配置，加载后对当前 Shell 有什么影响？保存了项目目录，日志目录，最后写入了path,加载后可以使用命令执行项目下的可执行文件,类似于下面执行的内容
seeway@test:~/workspace$ day3_args.sh
脚本名: /home/l/workspace/learn/learn/robot-system-learning/linux/day3_args.sh
第一个参数:
第二个参数:
全部参数:
seeway@test:~/workspace$
7. 为什么今天不直接把 `robot_env.sh` 写入 `~/.bashrc`？避免后续学习重复内容，但是这种问题和我学习相关吗？我根本不需要关心这个
seeway@test:~/workspace$ saved_day10_path="$PATH"
PATH='/tmp/day10-bin'

type -P ls || printf '%s\n' '[NOT FOUND] ls executable is not in PATH'
command ls

PATH="$saved_day10_path"
type -P ls
command ls --version | head -n 1
[NOT FOUND] ls executable is not in PATH
命令 “ls” 可在以下位置找到
 * /bin/ls
 * /usr/bin/ls
由于 /bin:/usr/bin 不在 PATH 环境变量中，故无法找到该命令。
ls：未找到命令
/usr/bin/ls
ls (GNU coreutils) 8.32
seeway@test:~/workspace$

# Day11 用户操作输出记录
seeway@test:~/workspace$ practice_dir='/tmp/day11-source-practice'
seeway@test:~/workspace$ mkdir -p "$practice_dir"
seeway@test:~/workspace$ vim "$practice_dir/day11_config.sh"
seeway@test:~/workspace$ cat "$practice_dir/day11_config.sh
> ^C
seeway@test:~/workspace$ cat "$practice_dir/day11_config.sh
>
>
>
> ^C
seeway@test:~/workspace$ cat "$practice_dir/day11_config.sh"
#!/bin/bash

export DAY11_MODE='diagnostic'

day11_status() {
    echo "[DAY11] mode=$DAY11_MODE"
}
seeway@test:~/workspace$
seeway@test:~/workspace$ bash -n "$practice_dir/day11_config.sh"
seeway@test:~/workspace$ chmod +x "$practice_dir/day11_config.sh"
seeway@test:~/workspace$ unset DAY11_MODE
seeway@test:~/workspace$ unset -f day11_status 2>/dev/null
seeway@test:~/workspace$ "$practice_dir/day11_config.sh"
seeway@test:~/workspace$ printf 'after direct run: %s\n' "${DAY11_MODE:-<empty>}"
after direct run: <empty>
seeway@test:~/workspace$ type day11_status 2>&1
bash: type: day11_status: 未找到
seeway@test:~/workspace$
seeway@test:~/workspace$ source "$practice_dir/day11_config.sh"
seeway@test:~/workspace$ printf 'after source: %s\n' "$DAY11_MODE"
after source: diagnostic
seeway@test:~/workspace$ type day11_status
day11_status 是函数
day11_status ()
{
    echo "[DAY11] mode=$DAY11_MODE"
}
seeway@test:~/workspace$ day11_status
[DAY11] mode=diagnostic
seeway@test:~/workspace$
seeway@test:~/workspace$ source "$practice_dir/missing_config.sh"
bash: /tmp/day11-source-practice/missing_config.sh: 没有那个文件或目录
seeway@test:~/workspace$ printf '%s\n' '[CHECK] current shell is still running'
[CHECK] current shell is still running
seeway@test:~/workspace$
seeway@test:~/workspace$ day11_status
[DAY11] mode=diagnostic
seeway@test:~/workspace$ source "$practice_dir/missing_config.sh"
bash: /tmp/day11-source-practice/missing_config.sh: 没有那个文件或目录
seeway@test:~/workspace$ printf '%s\n' '[CHECK] current shell is still running'
[CHECK] current shell is still running
seeway@test:~/workspace$ pwd
/home/l/workspace
seeway@test:~/workspace$ ls -l "$practice_dir/day11_config.sh"
-rwxr-xr-x 1 seeway l 100 Aug 27 10:24 /tmp/day11-source-practice/day11_config.sh
seeway@test:~/workspace$ bash -n "$practice_dir/day11_config.sh"
seeway@test:~/workspace$ cd /tmp
seeway@test:/tmp$ unset ROBOT_PROJECT_ROOT ROBOT_LOG_DIR
seeway@test:/tmp$ source "$HOME/workspace/learn/learn/robot-system-learning/linux/robot_env.sh"
seeway@test:/tmp$ printf 'project root: %s\n' "$ROBOT_PROJECT_ROOT"
project root: /home/l/workspace/learn/learn/robot-system-learning
seeway@test:/tmp$ printf 'log directory: %s\n' "$ROBOT_LOG_DIR"
log directory: /tmp/robot-system-logs
seeway@test:/tmp$ command -v day8_diagnostic_pipeline.sh
/home/l/workspace/learn/learn/robot-system-learning/linux/day8_diagnostic_pipeline.sh
seeway@test:/tmp$ day11_status
[DAY11] mode=diagnostic
seeway@test:/tmp$
seeway@test:/tmp$ unset DAY11_MODE
seeway@test:/tmp$ unset -f day11_status
seeway@test:/tmp$ printf 'after cleanup: %s\n' "${DAY11_MODE:-<empty>}"
after cleanup: <empty>
seeway@test:/tmp$ type day11_status 2>&1
bash: type: day11_status: 未找到
seeway@test:/tmp$
1. `source` 对文件做了什么，文件内容在哪个 Shell 中执行？source 让当前shell读取并执行文件内容
2. 为什么直接运行 `day11_config.sh` 后，当前 Shell 看不到其变量和函数？直接运行脚本会启动子 Shell，变量和函数只存在于子 Shell；子 Shell 结束后不会回写当前 Shell。unset 只是清理测试前的旧内容。
3. 为什么使用 `source` 后，当前 Shell 可以继续使用该文件定义的变量和函数？source读取day11_config.sh并执行了这个脚本,source 在当前 Shell 中执行文件，所以变量赋值和函数定义都会留
4. `source` 加载失败时，应按什么顺序检查？source 读取文件，不要求文件具有执行权限。应依次检查：路径是否正确、文件是否存在且可读、语法是否正确、加载后预期内容是否出现。执行权限只用于直接运行脚本。
5. 为什么从 `/tmp` 中使用完整路径，仍然能加载项目里的 `robot_env.sh`？当然可以，因为使用的是完整路径，不受当前路径的干扰
6. `robot_env.sh` 被 `source` 后，从文件输入到当前 Shell 变化的整体流程是什么？source 读取robot_env.sh并执行之后，export了环境变量，给当前shell的path中robot_env.sh 是把项目目录放到现有 PATH 前面，不是简单追加到末尾，后续shell执行项目内可执行文件时，都可以找到并执行
7. 为什么不应随意 `source` 不信任或不了解的文件？不可信文件中的命令会直接在当前 Shell 执行，可能修改变量、PATH、当前目录或文件，因此不能随意 source。

# Day12 用户操作输出记录
seeway@test:~/workspace/learn/learn/robot-system-learning$ whoami
seeway
seeway@test:~/workspace/learn/learn/robot-system-learning$ id
uid=1000(seeway) gid=1000(l) 组=1000(l),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),122(lpadmin),135(lxd),136(sambashare),999(docker)
seeway@test:~/workspace/learn/learn/robot-system-learning$ group
找不到命令 “group”，您的意思是：
  “groups” 命令来自 Debian 软件包 coreutils (8.32-4.1ubuntu1.3)
  “grop” 命令来自 Debian 软件包 grop (2:0.10-1.2)
尝试 sudo apt install <deb name>
seeway@test:~/workspace/learn/learn/robot-system-learning$ groups
l adm cdrom sudo dip plugdev lpadmin lxd sambashare docker
seeway@test:~/workspace/learn/learn/robot-system-learning$
当前用户名seeway,主组是l,当前用户所属组l adm cdrom sudo dip plugdev lpadmin lxd sambashare docker
seeway@test:~/workspace/learn/learn/robot-system-learning$ practice_dir='/tmp/day12-permission-practice'
seeway@test:~/workspace/learn/learn/robot-system-learning$ mkdir -p "$practice_dir"
seeway@test:~/workspace/learn/learn/robot-system-learning$ printf '%s\n' 'robot status: ready' > "$practice_dir/status.txt"
seeway@test:~/workspace/learn/learn/robot-system-learning$ chmod u=rwx,go= "$practice_dir"
seeway@test:~/workspace/learn/learn/robot-system-learning$ chmod u=rw,go= "$practice_dir/status.txt"
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls -ld "$practice_dir"
drwx------ 2 seeway l 4096 Aug 27 11:05 /tmp/day12-permission-practice
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls -l "$practice_dir/status.txt"
-rw------- 1 seeway l 20 Aug 27 11:05 /tmp/day12-permission-practice/status.txt
seeway@test:~/workspace/learn/learn/robot-system-learning$ stat -c 'permissions=%A | owner=%U | group=%G | file=%n' "$practice_dir" "$practice_dir/status.txt"
permissions=drwx------ | owner=seeway | group=l | file=/tmp/day12-permission-practice
permissions=-rw------- | owner=seeway | group=l | file=/tmp/day12-permission-practice/status.txt
seeway@test:~/workspace/learn/learn/robot-system-learning$
其中day12-permission-practice是目录文件，status.txt是普通文件，目录的owner是seeway权限是rwx,普通文件的owner是seeway,权限是rw
group都是l,权限都是---，这个---是没有权限？还是所有权限，我认为是没有权限，对不对。其他用户组都是没有权限

下面这个权限组这些东西是困扰我多年的知识点，现已经学会，但是希望重点记录在reademe中，要能够在文件中重点突出，方便我一眼就能看到
- rw- --- ---
│  │   │   └─ other：其他用户
│  │   └───── group：文件所属组
│  └───────── owner：文件所有者
└──────────── 文件类型；“-”表示普通文件，“d”表示目录
seeway@test:~/workspace/learn/learn/robot-system-learning$ cat "$practice_dir/status.txt"
robot status: ready
seeway@test:~/workspace/learn/learn/robot-system-learning$ whoami
seeway
seeway@test:~/workspace/learn/learn/robot-system-learning$ 可以看到当前用户是seeway,而status.txt的owner是seeway所以我拥有的权限是rw,自然可以cat也可以vim
seeway@test:~/workspace/learn/learn/robot-system-learning$ chmod u-r "$practice_dir/status.txt"
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls -l "$practice_dir/status.txt"
--w------- 1 seeway l 20 Aug 27 11:05 /tmp/day12-permission-practice/status.txt
seeway@test:~/workspace/learn/learn/robot-system-learning$ cat "$practice_dir/status.txt"
cat: /tmp/day12-permission-practice/status.txt: 权限不够
seeway@test:~/workspace/learn/learn/robot-system-learning$
seeway@test:~/workspace/learn/learn/robot-system-learning$ chmod u+r "$practice_dir/status.txt"
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls -l "$practice_dir/status.txt"
-rw------- 1 seeway l 20 Aug 27 11:05 /tmp/day12-permission-practice/status.txt
seeway@test:~/workspace/learn/learn/robot-system-learning$ cat "$practice_dir/status.txt"
robot status: ready
seeway@test:~/workspace/learn/learn/robot-system-learning$
本次实验中唯一改变的条件是r权限
seeway@test:~/workspace/learn/learn/robot-system-learning$ whoami
seeway
seeway@test:~/workspace/learn/learn/robot-system-learning$ id
uid=1000(seeway) gid=1000(l) 组=1000(l),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),122(lpadmin),135(lxd),136(sambashare),999(docker)
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls -ld "$practice_dir"
drwx------ 2 seeway l 4096 Aug 27 11:05 /tmp/day12-permission-practice
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls -l "$practice_dir/status.txt"
-rw------- 1 seeway l 20 Aug 27 11:05 /tmp/day12-permission-practice/status.txt
seeway@test:~/workspace/learn/learn/robot-system-learning$ stat -c 'permissions=%A | owner=%U | group=%G | file=%n' "$practice_dir" "$practice_dir/status.txt"
permissions=drwx------ | owner=seeway | group=l | file=/tmp/day12-permission-practice
permissions=-rw------- | owner=seeway | group=l | file=/tmp/day12-permission-practice/status.txt
seeway@test:~/workspace/learn/learn/robot-system-learning$
权限不足时，先查看当前用户身份是什么whoami、id确认当前用户身份是seeway,用户所属组是id输出的这些，之后查看权限不足的文件的归属是什么，用户所拥有的权限是什么，当前用户身份是否于文件权限匹配，最后修改权限或者切换用户验证问题
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls -l   "$project_linux/day4_system_check.sh"   "$project_linux/day5_find_logs.sh"   "$
project_linux/day6_log_analyzer.sh"   "$project_linux/day8_diagnostic_pipeline.sh"   "$project_linux/robot_env.sh"
-rwxr-xr-x 1 seeway l 933 Aug 25 12:03 /home/l/workspace/learn/learn/robot-system-learning/linux/day4_system_check.sh
-rwxr-xr-x 1 seeway l 772 Aug 25 15:44 /home/l/workspace/learn/learn/robot-system-learning/linux/day5_find_logs.sh
-rwxr-xr-x 1 seeway l 693 Aug 26 15:45 /home/l/workspace/learn/learn/robot-system-learning/linux/day6_log_analyzer.sh
-rwxr-xr-x 1 seeway l 591 Aug 26 16:46 /home/l/workspace/learn/learn/robot-system-learning/linux/day8_diagnostic_pipeline.sh
-rw-r--r-- 1 seeway l 182 Aug 27 09:57 /home/l/workspace/learn/learn/robot-system-learning/linux/robot_env.sh
seeway@test:~/workspace/learn/learn/robot-system-learning$ stat -c 'permissions=%A | owner=%U | group=%G | file=%n' \
  "$project_linux/day4_system_check.sh" \
  "$project_linux/day5_find_logs.sh" \
  "$project_linux/day6_log_analyzer.sh" \
  "$project_linux/day8_diagnostic_pipeline.sh" \
  "$project_linux/robot_env.sh"
permissions=-rwxr-xr-x | owner=seeway | group=l | file=/home/l/workspace/learn/learn/robot-system-learning/linux/day4_system_check.sh
permissions=-rwxr-xr-x | owner=seeway | group=l | file=/home/l/workspace/learn/learn/robot-system-learning/linux/day5_find_logs.sh
permissions=-rwxr-xr-x | owner=seeway | group=l | file=/home/l/workspace/learn/learn/robot-system-learning/linux/day6_log_analyzer.sh
permissions=-rwxr-xr-x | owner=seeway | group=l | file=/home/l/workspace/learn/learn/robot-system-learning/linux/day8_diagnostic_pipeline.sh
permissions=-rw-r--r-- | owner=seeway | group=l | file=/home/l/workspace/learn/learn/robot-system-learning/linux/robot_env.sh
seeway@test:~/workspace/learn/learn/robot-system-learning$
day8_diagnostic_pipeline.sh可以直接执行是因为当前用户是seeway,拥有对该文件的执行权限
robot_env.sh可以通过source读取是因为当前用户拥有对该文件的读取权限
1. 用户和组分别表示什么？当前 Shell 执行命令时，如何确认自己的用户和所属组？用户表示操作身份；组表示一组用户的集合，不是“谁在使用当前文件”。，通过whoami确认当前用户，用id确认所属组s
2. `ls -l` 权限字符串中，owner、group、other 三组分别对应谁？owner 是文件所有者；group 是属于该文件所属组的用户；other 是既不是 owner、也不属于文件所属组的其他用户。other 不是“拥有者所属的其他组”。
3. 当前用户正好是文件 owner 时，系统使用哪组权限？是否会再把三组权限相加？系统使用owner权限，不会相加
4. 为什么文件明明存在，`cat` 仍然可能提示“权限不够”？文件虽然存在，但是当前用户没有对该文件的r权限，所以当前权限不足
5. `ls -l` 能提供哪些权限证据？为什么判断访问结果时还要查看 `whoami` 或 `id`？能提供文件所属用户，用户组拥有什么权限的证据，使用whoami,id为了确认当前用户和用户组是什么，有没有对文件的对应权限
6. 遇到权限问题时，应按什么顺序检查和验证？先确认当前用户和所属组，再确认路径及文件存在，检查路径目录和目标文件的 owner、group、权限，判断当前身份匹配 owner/group/other 中哪一组，检查该组是否允许所需操作，最后最小修改并回归验证。
7. 为什么今天只在 `/tmp` 的测试对象上复现问题，不使用 `sudo`、不修改系统文件，也不对项目文件执行 `chown`？sudo拥有高级权限，无法在当前测试对象上复现问题，Day13 专门学习 `chmod/chown`，所以今天只用最少的 `chmod` 建立测试条件，不学习所有者变更，也不使用 `chown`。你再问这种关于学习安排的问题，就把你网断掉，以后禁止询问学习安排相关问题

# Day13 用户操作输出记录
seeway@test:~/workspace/learn/learn/robot-system-learning$ practice_dir='/tmp/day13-ownership-practice'
seeway@test:~/workspace/learn/learn/robot-system-learning$ source_file="$HOME/workspace/learn/learn/robot-system-learning/linux/robot_env.sh"
seeway@test:~/workspace/learn/learn/robot-system-learning$ test_file="$practice_dir/robot_env.test.sh"
seeway@test:~/workspace/learn/learn/robot-system-learning$ mkdir -p "$practice_dir"
seeway@test:~/workspace/learn/learn/robot-system-learning$ cp "$source_file" "$test_file"
seeway@test:~/workspace/learn/learn/robot-system-learning$ chmod u=rw,g=r,o= "$test_file"
seeway@test:~/workspace/learn/learn/robot-system-learning$ id
uid=1000(seeway) gid=1000(l) 组=1000(l),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),122(lpadmin),135(lxd),136(sambashare),999(docker)
seeway@test:~/workspace/learn/learn/robot-system-learning$ groups
l adm cdrom sudo dip plugdev lpadmin lxd sambashare docker
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls -l "$source_file" "$test_file"
-rw-r--r-- 1 seeway l 182 Aug 27 09:57 /home/l/workspace/learn/learn/robot-system-learning/linux/robot_env.sh
-rw-r----- 1 seeway l 182 Aug 27 11:56 /tmp/day13-ownership-practice/robot_env.test.sh
seeway@test:~/workspace/learn/learn/robot-system-learning$ stat -c 'permissions=%A | owner=%U | group=%G | file=%n' "$source_file" "$test_file"
permissions=-rw-r--r-- | owner=seeway | group=l | file=/home/l/workspace/learn/learn/robot-system-learning/linux/robot_env.sh
permissions=-rw-r----- | owner=seeway | group=l | file=/tmp/day13-ownership-practice/robot_env.test.sh
seeway@test:~/workspace/learn/learn/robot-system-learning$
seeway@test:~/workspace/learn/learn/robot-system-learning$ stat -c 'before chown: permissions=%A | owner=%U | group=%G' "$test_file"
before chown: permissions=-rw-r----- | owner=seeway | group=l
seeway@test:~/workspace/learn/learn/robot-system-learning$ chown :adm "$test_file"
seeway@test:~/workspace/learn/learn/robot-system-learning$ stat -c 'after chown:  permissions=%A | owner=%U | group=%G' "$test_file"
after chown:  permissions=-rw-r----- | owner=seeway | group=adm
seeway@test:~/workspace/learn/learn/robot-system-learning$
seeway@test:~/workspace/learn/learn/robot-system-learning$ id -nG | tr ' ' '\n' | grep -Fx 'root' || printf '%s\n' '[EXPECTED] current user is not in group root'
[EXPECTED] current user is not in group root
seeway@test:~/workspace/learn/learn/robot-system-learning$ chown :root "$test_file"
chown: 更改 '/tmp/day13-ownership-practice/robot_env.test.sh' 的所属组: 不允许的操作
seeway@test:~/workspace/learn/learn/robot-system-learning$ stat -c 'after failed chown: permissions=%A | owner=%U | group=%G' "$test_file"
after failed chown: permissions=-rw-r----- | owner=seeway | group=adm
seeway@test:~/workspace/learn/learn/robot-system-learning$ chown :l "$test_file"
seeway@test:~/workspace/learn/learn/robot-system-learning$ stat -c 'final: permissions=%A | owner=%U | group=%G' "$test_file"
final: permissions=-rw-r----- | owner=seeway | group=l
seeway@test:~/workspace/learn/learn/robot-system-learning$ cmp -s "$source_file" "$test_file" && printf '%s\n' '[OK] file content unchanged'
[OK] file content unchanged
seeway@test:~/workspace/learn/learn/robot-system-learning$ ls -l "$source_file"
-rw-r--r-- 1 seeway l 182 Aug 27 09:57 /home/l/workspace/learn/learn/robot-system-learning/linux/robot_env.sh
seeway@test:~/workspace/learn/learn/robot-system-learning$ stat -c 'project file: permissions=%A | owner=%U | group=%G | file=%n' "$source_file"
project file: permissions=-rw-r--r-- | owner=seeway | group=l | file=/home/l/workspace/learn/learn/robot-system-learning/linux/robot_env.sh
seeway@test:~/workspace/learn/learn/robot-system-learning$ git -C "$HOME/workspace/learn/learn" status --short -- robot-system-learning/linux/robot_env.sh
seeway@test:~/workspace/learn/learn/robot-system-learning$
1. `chmod` 和 `chown` 分别修改文件的什么信息？chmod 修改权限；chown 修改 owner、group，或者同时修改两者。
2. 为什么执行 `chmod g+w` 后，权限发生变化，但 owner 和 group 没有变化？因为chmod只修改文件权限信息
3. 为什么当前用户可以把自己文件的 group 改成 `adm`，改成 `root` 却失败？成功原因不是“adm 是普通用户”。adm 和 root 在这里都是组名。当前用户属于 adm 组，所以能将自己的文件改为该组；当前用户不属于 root 组，所以 chown :root 失败。
4. 文件 group 改成 `adm` 后，当前用户仍然是 owner；系统访问该文件时使用 owner、group 还是 other 权限？系统访问时使用的owner权限
5. 为什么 `chmod/chown` 执行后，文件内容仍然可以与原文件完全相同？chmod 修改权限元数据，chown 修改 owner/group 元数据；二者都不修改文件正文
6. `chown` 提示操作不允许时，应检查哪些身份和文件证据？应检查当前用户、所属组、文件 owner/group/权限、目标 owner/group，以及当前用户是否有权执行该变更；失败后再用 stat 确认状态未变化。
7. 如何验证一次 `chmod/chown` 变更确实达到预期，并且没有意外修改其他元数据或文件内容？应比较变更前后的 stat，确认权限、owner、group 是否符合预期；使用 cmp 检查内容，并用 Git 状态确认项目原文件未变化。仅使用 ls 不能证明内容没有改变。
seeway@test:~/workspace/learn/learn/robot-system-learning$ stat -c 'before chmod: permissions=%A | owner=%U | group=%G' "$test_file"
chmod g+w "$test_file"
stat -c 'after chmod: permissions=%A | owner=%U | group=%G' "$test_file"
chmod g-w "$test_file"
stat -c 'restored: permissions=%A | owner=%U | group=%G' "$test_file"
before chmod: permissions=-rw-r----- | owner=seeway | group=l
after chmod: permissions=-rw-rw---- | owner=seeway | group=l
restored: permissions=-rw-r----- | owner=seeway | group=l
seeway@test:~/workspace/learn/learn/robot-system-learning$

# Day14 用户操作输出记录
seeway@test:~/workspace/learn/learn/robot-system-learning$ printf 'current shell PID: %s\n' "$$"
current shell PID: 4994
seeway@test:~/workspace/learn/learn/robot-system-learning$ ps -p "$$" -o pid,ppid,user,stat,etime,cmd
    PID    PPID USER     STAT     ELAPSED CMD
   4994    4880 seeway   Ss      21:12:59 /usr/bin/bash --init-file /usr/share/code/resources/app/out/vs/workbench/contrib/terminal/common/scripts
seeway@test:~/workspace/learn/learn/robot-system-learning$
seeway@test:~/workspace/learn/learn/robot-system-learning$ ps -eo pid,ppid,user,stat,etime,comm --sort=pid | head -n 15
    PID    PPID USER     STAT     ELAPSED COMMAND
      1       0 root     Ss      21:15:47 systemd
      2       0 root     S       21:15:47 kthreadd
      3       2 root     S       21:15:47 pool_workqueue_release
      4       2 root     I<      21:15:47 kworker/R-rcu_g
      5       2 root     I<      21:15:47 kworker/R-rcu_p
      6       2 root     I<      21:15:47 kworker/R-slub_
      7       2 root     I<      21:15:47 kworker/R-netns
      9       2 root     I<      21:15:47 kworker/0:0H-events_highpri
     12       2 root     I<      21:15:47 kworker/R-mm_pe
     13       2 root     I       21:15:47 rcu_tasks_kthread
     14       2 root     I       21:15:47 rcu_tasks_rude_kthread
     15       2 root     I       21:15:47 rcu_tasks_trace_kthread
     16       2 root     S       21:15:47 ksoftirqd/0
     17       2 root     I       21:15:47 rcu_preempt
seeway@test:~/workspace/learn/learn/robot-system-learning$
第一行的pid是1,ppid是0,user是root,命令名是systemd,任意一行的这些东西我都知道
seeway@test:~/workspace/learn/learn/robot-system-learning$ shell_pid="$$"

bash -c 'exec -a robot-system-diagnostic-worker sleep 8' &
worker_pid="$!"

printf 'shell PID: %s\n' "$shell_pid"
printf 'worker PID: %s\n' "$worker_pid"

printf '%s\n' '[PS] exact worker snapshot'
ps -p "$worker_pid" -o pid,ppid,user,stat,etime,cmd

printf '%s\n' '[PS] children of current shell'
ps --ppid "$shell_pid" -o pid,ppid,user,stat,etime,cmd

printf '%s\n' '[SEARCH] worker by name'
pgrep -af 'robot-system-diagnostic-worker'

printf '%s\n' '[TOP] worker snapshot'
  printf '%s\n' '[EXPECTED] worker is no longer running'
[1] 95307
shell PID: 4994
worker PID: 95307
[PS] exact worker snapshot
    PID    PPID USER     STAT     ELAPSED CMD
  95307    4994 seeway   S          00:00 robot-system-diagnostic-worker 8
[PS] children of current shell
    PID    PPID USER     STAT     ELAPSED CMD
  95307    4994 seeway   S          00:01 robot-system-diagnostic-worker 8
  95309    4994 seeway   R+         00:00 ps --ppid 4994 -o pid,ppid,user,stat,etime,cmd
[SEARCH] worker by name
95307 robot-system-diagnostic-worker 8
[TOP] worker snapshot
top - 13:31:48 up 21:17,  1 user,  load average: 0.84, 0.88, 0.79
任务:   1 total,   0 running,   1 sleeping,   0 stopped,   0 zombie
%Cpu(s):  1.1 us,  2.8 sy,  0.0 ni, 96.1 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :  31948.2 total,  15011.4 free,   9427.5 used,   7509.2 buff/cache
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.  22790.2 avail Mem

 进程号 USER      PR  NI    VIRT    RES    SHR    %CPU  %MEM     TIME+ COMMAND
  95307 seeway    20   0   11788   2100   1996 S   0.0   0.0   0:00.00 sleep
[1]+  已完成               bash -c 'exec -a robot-system-diagnostic-worker sleep 8'
[PS] after worker finished
    PID    PPID USER     STAT     ELAPSED CMD
[EXPECTED] worker is no longer running
seeway@test:~/workspace/learn/learn/robot-system-learning$
根据输出可以看到当前shell的pid是4994,worker的ppid也是4994，可以确认worker的父进程是4994进程当前shell
seeway@test:~/workspace/learn/learn/robot-system-learning$ command -v htop || printf '%s\n' '[INFO] htop is not installed; continue with ps and top'
[INFO] htop is not installed; continue with ps and top
seeway@test:~/workspace/learn/learn/robot-system-learning$
seeway@test:~/workspace/learn/learn/robot-system-learning$ ps -eo pid,ppid,user,stat,etime,cmd |
  grep -E '[r]os2|[r]obot_state_publisher' ||
  printf '%s\n' '[INFO] no matching ROS2-related process is currently visible'
[INFO] no matching ROS2-related process is currently visible
seeway@test:~/workspace/learn/learn/robot-system-learning$
1. 磁盘上的程序文件与正在运行的进程有什么区别？程序是存储在磁盘上的代码文件，即使没有运行也可以存在；进程是程序运行后产生的实例，具有 PID、运行状态和资源，结束后进程消失，但程序文件通常仍在。
2. PID 和 PPID 分别表示什么？本次 worker 的 PPID 为什么与当前 Shell PID 一致？pid表示进程的id信息，ppid表示进程的父进程id信息，本次的worker的父进程是shell,所以一致
3. 为什么通过已知 PID 查询 worker，比只依赖名称搜索更精确？PID 不是永久唯一，进程结束后可能被系统重新使用。准确答案：
名称可能对应多个进程；已知 PID 可以精确查询当前时刻的目标实例。但进程结束后 PID 可能被复用，因此仍要重新查询确认。
4. `ps` 与正常交互使用的 `top` 在观察方式上有什么区别？ps是快照，输出当前的状态。top是动态更新的，适合动态观察
5. 哪些实际输出共同证明 worker 曾经运行，并且后来已经结束？仅打印 $! 得到 PID，不能单独证明进程仍在运行。准确答案：
ps、pgrep 和 top 都显示 PID 95307，共同证明 worker 当时正在运行；wait 之后最终 ps 只剩表头并显示预期提示，证明该 worker 已结束。
6. 为什么进程搜索没有结果，不能直接证明对应软件没有安装？这种可能是程序安装了，但是没有运行的实例，就搜索不到对应的结果
7. 从当前 Shell 启动 worker，到最后确认它消失，整个进程生命周期验证流程是什么？当前shell运行程序worker,此时ps或者top都可以看到该进程id,等待自然结束之后，ps/top就看不到worker的pid了

# Day15 用户操作输出记录
seeway@test:~/workspace/learn/learn/robot-system-learning$ practice_dir='/tmp/day15-signal-practice'
seeway@test:~/workspace/learn/learn/robot-system-learning$ worker_script="$practice_dir/day15_worker.sh"
worker_log="$practice_dir/day15_worker.log"
seeway@test:~/workspace/learn/learn/robot-system-learning$ mkdir -p "$practice_dir"
seeway@test:~/workspace/learn/learn/robot-system-learning$ vim "$worker_script"
seeway@test:~/workspace/learn/learn/robot-system-learning$ bash -n "$worker_script"
seeway@test:~/workspace/learn/learn/robot-system-learning$ chmod u+x "$worker_script"
seeway@test:~/workspace/learn/learn/robot-system-learning$ cat "$worker_script"
#!/bin/bash

trap 'printf "%s\n" "[WORKER] TERM received; cleanup complete"; exit 0' TERM

printf '[WORKER] ready pid=%s\n' "$$"

while true; do
    sleep 1
done
seeway@test:~/workspace/learn/learn/robot-system-learning$ : > "$worker_log"
"$worker_script" > "$worker_log" 2>&1 &
worker_pid="$!"

sleep 1

printf 'worker PID: %s\n' "$worker_pid"
ps -p "$worker_pid" -o pid,ppid,user,stat,etime,cmd
cat "$worker_log"
[2] 101498
worker PID: 101498
    PID    PPID USER     STAT     ELAPSED CMD
 101498    4994 seeway   S          00:01 /bin/bash /tmp/day15-signal-practice/day15_worker.sh
[WORKER] ready pid=101498
seeway@test:~/workspace/learn/learn/robot-system-learning$ kill -TERM "$worker_pid"
seeway@test:~/workspace/learn/learn/robot-system-learning$ wait "$worker_pid"
[2]+  已完成               "$worker_script" > "$worker_log" 2>&1
seeway@test:~/workspace/learn/learn/robot-system-learning$ cat "$worker_log"
[WORKER] ready pid=101498
[WORKER] TERM received; cleanup complete
seeway@test:~/workspace/learn/learn/robot-system-learning$ ps -p "$worker_pid" -o pid,ppid,user,stat,etime,cmd ||
  printf '%s\n' '[EXPECTED] worker stopped after TERM'
    PID    PPID USER     STAT     ELAPSED CMD
[EXPECTED] worker stopped after TERM
seeway@test:~/workspace/learn/learn/robot-system-learning$ invalid_pid='99999999'
seeway@test:~/workspace/learn/learn/robot-system-learning$ ps -p "$invalid_pid" -o pid,ppid,user,stat,etime,cmd ||
  printf '%s\n' '[EXPECTED] invalid PID is not running'
    PID    PPID USER     STAT     ELAPSED CMD
[EXPECTED] invalid PID is not running
seeway@test:~/workspace/learn/learn/robot-system-learning$ kill -TERM "$invalid_pid"
bash: kill: (99999999) - 没有那个进程
eeway@test:~/workspace/learn/learn/robot-system-learning$ bash -c 'exec -a day15-pkill-worker sleep 60' &
pkill_pid_one="$!"

bash -c 'exec -a day15-pkill-worker sleep 60' &
pkill_pid_two="$!"

sleep 1

printf 'worker one PID: %s\n' "$pkill_pid_one"
printf 'worker two PID: %s\n' "$pkill_pid_two"

printf '%s\n' '[BEFORE] exact name matches'
pgrep -af '^day15-pkill-worker '

pkill -TERM -f '^day15-pkill-worker '

wait "$pkill_pid_one" 2>/dev/null || true
wait "$pkill_pid_two" 2>/dev/null || true

printf '%s\n' '[AFTER] exact name matches'
pgrep -af '^day15-pkill-worker ' ||
  printf '%s\n' '[EXPECTED] no day15 pkill workers remain'
[2] 102017
[3] 102018
worker one PID: 102017
worker two PID: 102018
[BEFORE] exact name matches
102017 day15-pkill-worker 60
102018 day15-pkill-worker 60
[2]-  已终止               bash -c 'exec -a day15-pkill-worker sleep 60'
[3]+  已终止               bash -c 'exec -a day15-pkill-worker sleep 60'
[AFTER] exact name matches
[EXPECTED] no day15 pkill workers remain
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls
day2-demo            day3_args.sh           day4_system_check.sh  day8_diagnostic_pipeline.sh  files.txt  README.md     somefile
day2_demo_if_for.sh  day4_custom.log        day5_find_logs.sh     demo                         list.txt   robot_env.sh  temp.txt
day2_demo.sh         day4_system_check.log  day6_log_analyzer.sh  err.txt                      out.txt    sample.txt
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ vim process_check.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ bash -n process_check.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ chmod u+x process_check.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls -l process_check.sh
-rwxr--r-- 1 seeway l 516 Aug 27 14:32 process_check.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ bash -c 'exec -a day15-check-worker sleep 60' &
check_pid="$!"
[2] 102608
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ sleep 1
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./process_check.sh "$check_pid"
[PROCESS RUNNING] PID=102608
    PID    PPID USER     STAT     ELAPSED CMD
 102608    4994 seeway   S          00:09 day15-check-worker 60
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ kill -TERM "$check_pid"
[2]+  已终止               bash -c 'exec -a day15-check-worker sleep 60'
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$wait "$check_pid" 2>/dev/null || true
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
./process_check.sh "$check_pid"
[PROCESS NOT RUNNING OR NOT ACCESSIBLE] PID=102608
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$bash -n process_check.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$git -C "$HOME/workspace/learn/learn" status --short -- robot-system-learning/linux/process_check.sh
?? robot-system-learning/linux/process_check.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
1. signal 是什么？`kill` 命令对目标进程执行的核心动作是什么？signal是发给进程的通知，kill核心动作是给进程发信号
2. 哪些日志和进程证据证明临时 worker 收到 `TERM` 后执行了清理再退出？[2] 101498
启动时的 PID、ps 和 ready 日志证明 worker 正在运行；[WORKER] TERM received; cleanup complete 证明它收到 TERM 并执行了清理；随后 ps 查不到该 PID，证明它已经退出。
3. 为什么发送信号前必须确认 PID 对应的目标，发送后还要重新查询？发送之前确认是安全范围内kill的进程，不影响其他进程，发送之后需要确认进程是否被kill掉
4. `kill` 与 `pkill` 的目标选择方式有什么区别，哪一种更容易一次影响多个进程？pkill 是按名称或模式匹配，不一定是模糊搜索。本次使用 -f 配合带首尾限制的模式匹配完整命令行。kill是进程id搜索.其中pkill更容易影响多个进程，进程的pid不同但是名字可能相同
5. 为什么执行 `pkill` 前必须用相同的精确模式查看匹配结果？确定pkill的影响范围，确认不会影响到其他进程
6. `process_check.sh` 中的 `kill -0` 做什么？检查失败为什么不能只解释为进程不存在？kill -0是做检查进程是否存在，且当前用户是否可访问，不发送终止信号。检查失败有可能是因为用户不可访问
7. `process_check.sh` 从接收 PID 到输出运行或不可访问结果，整体流程是什么？
  1. 接收一个 PID。
  2. 检查 PID 是否为空或格式无效。
  3. 使用 `kill -0` 检查目标是否存在且当前用户可访问，不发送终止信号。
  4. 可访问时输出运行状态和 `ps` 证据。
  5. 不存在或不可访问时输出明确提示。
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cat process_check.sh
#!/bin/bash

target_pid="$1"

if [[ -z "$target_pid" ]]; then
    printf '%s\n' '[PROCESS CHECK ERROR] PID is required' >&2
    exit 1
fi

if [[ ! "$target_pid" =~ ^[0-9]+$ ]]; then
    printf '[PROCESS CHECK ERROR] invalid PID: %s\n' "$target_pid" >&2
    exit 1
fi

if kill -0 "$target_pid" 2>/dev/null; then
    printf '[PROCESS RUNNING] PID=%s\n' "$target_pid"
    ps -p "$target_pid" -o pid,ppid,user,stat,etime,cmd
else
    printf '[PROCESS NOT RUNNING OR NOT ACCESSIBLE] PID=%s\n' "$target_pid"
    exit 1
fi

# Day16 用户操作输出记录
seeway@test:~$ ps -p 1 -o pid,comm,args
    PID COMMAND         COMMAND
      1 systemd         /sbin/init splash
seeway@test:~$ systemctl --version | head -n 1
systemd 249 (249.11-0ubuntu3.22)
seeway@test:~$ systemctl is-system-running
degraded
seeway@test:~$ systemctl --user is-system-running
running
seeway@test:~$
seeway@test:~$ printf '%s\n' '[RUNNING SERVICES]'
[RUNNING SERVICES]
seeway@test:~$ systemctl list-units --type=service --state=running --no-pager | head -n 15
  UNIT                          LOAD   ACTIVE SUB     DESCRIPTION
  accounts-daemon.service       loaded active running Accounts Service
  acpid.service                 loaded active running ACPI event daemon
  avahi-daemon.service          loaded active running Avahi mDNS/DNS-SD Stack
  colord.service                loaded active running Manage, Install and Generate Color Profiles
  containerd.service            loaded active running containerd container runtime
  cron.service                  loaded active running Regular background program processing daemon
  cups-browsed.service          loaded active running Make remote CUPS printers available locally
  cups.service                  loaded active running CUPS Scheduler
  dbus.service                  loaded active running D-Bus System Message Bus
  docker.service                loaded active running Docker Application Container Engine
  gdm.service                   loaded active running GNOME Display Manager
  irqbalance.service            loaded active running irqbalance daemon
  jenkins.service               loaded active running Jenkins Continuous Integration Server
  kerneloops.service            loaded active running Tool to automatically collect and submit kernel crash signatures
seeway@test:~$ printf '%s\n' '[SERVICE UNIT FILES]'
[SERVICE UNIT FILES]
seeway@test:~$ systemctl list-unit-files --type=service --no-pager | head -n 15
UNIT FILE                                  STATE           VENDOR PRESET
accounts-daemon.service                    enabled         enabled
acpid.service                              disabled        enabled
alsa-restore.service                       static          -
alsa-state.service                         static          -
alsa-utils.service                         masked          enabled
anacron.service                            enabled         enabled
apparmor.service                           enabled         enabled
apport-autoreport.service                  static          -
apport-forward@.service                    static          -
apport.service                             generated       -
apt-daily-upgrade.service                  static          -
apt-daily.service                          static          -
apt-news.service                           static          -
autovt@.service                            alias           -
seeway@test:~$
从list-units输出中可以看到runing当前运行中，状态为active
从list-units-files中可以看到enabled根据配置开机自启动，disabled开机不启动,其他static,masked,generated是什么状态？static：不能独立 enable，通常由其他 unit 依赖或手动启动。
masked：被屏蔽，不能启动，比 disabled 更严格。
generated：由 systemd 在启动或重载时动态生成。
alias：另一个 unit 名称的别名。
seeway@test:~$ cd "$HOME/workspace/learn/learn/robot-system-learning/linux"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ls
day2-demo            day4_system_check.log        demo       process_check.sh  temp.txt
day2_demo_if_for.sh  day4_system_check.sh         err.txt    README.md
day2_demo.sh         day5_find_logs.sh            files.txt  robot_env.sh
day3_args.sh         day6_log_analyzer.sh         list.txt   sample.txt
day4_custom.log      day8_diagnostic_pipeline.sh  out.txt    somefile
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ vim day16-practice.service
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ project_unit="$PWD/day16-practice.service"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemd-analyze --user verify "$project_unit"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cat "$project_unit"
[Unit]
Description=Day16 safe systemd user service practice

[Service]
Type=simple
ExecStart=/usr/bin/sleep infinity
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git -C "$HOME/workspace/learn/learn" status --short -- robot-system-learning/linux/day16-practice.service
?? robot-system-learning/linux/day16-practice.service
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user link "$project_unit"
Created symlink /home/l/.config/systemd/user/day16-practice.service → /home/l/workspace/learn/learn/robot-system-learning/linux/day16-practice.service.
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user daemon-reload
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user show day16-practice.service \
  -p LoadState -p ActiveState -p SubState -p UnitFileState
LoadState=loaded
ActiveState=inactive
SubState=dead
UnitFileState=linked
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user status day16-practice.service --no-pager
○ day16-practice.service - Day16 safe systemd user service practice
     Loaded: loaded (/home/l/.config/systemd/user/day16-practice.service; linked; vendor preset: enabled)
     Active: inactive (dead)
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user start day16-practice.service
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user status day16-practice.service --no-pager
● day16-practice.service - Day16 safe systemd user service practice
     Loaded: loaded (/home/l/.config/systemd/user/day16-practice.service; linked; vendor preset: enabled)
     Active: active (running) since Thu 2026-08-27 16:37:34 CST; 5s ago
   Main PID: 123162 (sleep)
      Tasks: 1 (limit: 38040)
     Memory: 184.0K
        CPU: 3ms
     CGroup: /user.slice/user-1000.slice/user@1000.service/app.slice/day16-practice.service
             └─123162 /usr/bin/sleep infinity

Aug 27 16:37:34 test systemd[1994]: Started Day16 safe systemd user service practice.
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user is-active day16-practice.service
active
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user show day16-practice.service \
  -p LoadState -p ActiveState -p SubState -p MainPID
MainPID=123162
LoadState=loaded
ActiveState=active
SubState=running
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ main_pid="$(systemctl --user show day16-practice.service -p MainPID --value)"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ printf 'service MainPID: %s\n' "$main_pid"
service MainPID: 123162
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ps -p "$main_pid" -o pid,ppid,user,stat,etime,cmd
    PID    PPID USER     STAT     ELAPSED CMD
 123162    1994 seeway   Ss         00:32 /usr/bin/sleep infinity
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user stop day16-practice.service
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user is-active day16-practice.service ||
  printf '%s\n' '[EXPECTED] day16 practice service is inactive'\
> ^C
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user is-active day16-practice.service ||   printf '%s\n' '[EXPECTED] day16 practice service is inactive'\
>
inactive
[EXPECTED] day16 practice service is inactive
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user show day16-practice.service \
  -p LoadState -p ActiveState -p SubState -p MainPID
MainPID=0
LoadState=loaded
ActiveState=inactive
SubState=dead
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ps -p "$main_pid" -o pid,ppid,user,stat,etime,cmd ||
  printf '%s\n' '[EXPECTED] previous MainPID is no longer running'
    PID    PPID USER     STAT     ELAPSED CMD
[EXPECTED] previous MainPID is no longer running
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user status day16-missing.service --no-pager
Unit day16-missing.service could not be found.
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user show day16-missing.service \
  -p LoadState -p ActiveState -p SubState
LoadState=not-found
ActiveState=inactive
SubState=dead
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ printf '%s\n' '[SSH/CAN UNIT FILE MATCHES]'
[SSH/CAN UNIT FILE MATCHES]
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl list-unit-files --type=service --no-pager |
  grep -Ei 'ssh|sshd|can|socketcan' ||
  printf '%s\n' '[INFO] no matching SSH/CAN service unit files found'
dbus-fi.w1.wpa_supplicant1.service         alias           -
ssh.service                                enabled         enabled
ssh@.service                               static          -
sshd.service                               alias           -
wpa_supplicant-nl80211@.service            disabled        enabled
wpa_supplicant-wired@.service              disabled        enabled
wpa_supplicant.service                     enabled         enabled
wpa_supplicant@.service                    disabled        enabled
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ printf '%s\n' '[SSH/CAN LOADED UNIT MATCHES]'
systemctl list-units --type=service --all --no-pager |
  grep -Ei 'ssh|sshd|can|socketcan' ||
  printf '%s\n' '[INFO] no matching loaded SSH/CAN services found'
[SSH/CAN LOADED UNIT MATCHES]
  ssh.service                                           loaded    active   running OpenBSD Secure Shell server
  wpa_supplicant.service                                loaded    active   running WPA supplicant
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
printf '%s\n' '[SSH COMMON UNIT STATES]'
[SSH COMMON UNIT STATES]
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl show ssh.service sshd.service \
  -p Id -p LoadState -p ActiveState -p SubState -p UnitFileState --no-pager
Id=ssh.service
LoadState=loaded
ActiveState=active
SubState=running
UnitFileState=enabled

Id=ssh.service
LoadState=loaded
ActiveState=active
SubState=running
UnitFileState=enabled
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user stop day16-practice.service
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user disable day16-practice.service
Removed /home/l/.config/systemd/user/day16-practice.service.
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user daemon-reload
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user show day16-practice.service \
  -p LoadState -p ActiveState -p SubState
LoadState=not-found
ActiveState=inactive
SubState=dead
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git -C "$HOME/workspace/learn/learn" status --short -- \
  robot-system-learning/linux/day16-practice.service
?? robot-system-learning/linux/day16-practice.service
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
诊断：
确认 unit 名称与管理范围（系统级或 --user）
                    ↓
检查 LoadState，确认配置是否被找到并加载
                    ↓
检查 ActiveState / SubState，确认当前状态
                    ↓
查看 status 中的 MainPID 和错误信息
                    ↓
需要时检查对应进程
                    ↓
做最小修改后重新查询状态
1. systemd、service unit 和 `systemctl` 分别是什么，它们之间是什么关系？systemd是系统的服务管理，service unit是unit配置文件，systemctl是用于和用户交互的系统操作，关系如下，用户使用systemctl发送给systemd,systemd寻找到unit配置文件，并启动这个服务
2. unit 文件存在为什么不能直接证明服务正在运行？unit 文件只是启动和管理配置；只有查询到 ActiveState=active、SubState=running 才能证明服务正在运行。
3. `LoadState`、`ActiveState` 和 `UnitFileState` 分别回答什么问题？load回答有没有读取这个unit文件，active回答用户启动状态，UnitFileState它表示 unit 文件的安装或启用状态，例如 enabled、disabled、static、masked、linked，不只是“是否通过链接找到”。
4. `start/stop` 与 `enable/disable` 关注的状态有什么区别？start/stop关注的是服务本身有没有正常启动，而不是配置文件中有没有写开机自启动，enable/disable关注的状态是开机是否自启动
5. 哪些状态和进程证据共同证明 Day16 练习服务已经启动，后来又停止？启动后 ActiveState=active、SubState=running、MainPID 大于 0，并且 ps 找到相同 PID；停止后状态为 inactive/dead、MainPID=0，且 ps 查不到原 PID。
6. 为什么真实 SSH、CAN 服务只能只读查看，不能直接拿来练习 `start/stop`？停止 SSH 可能断开远程连接；停止 CAN 相关服务可能中断机器人通信，并影响其他程序或用户。
7. 查询服务提示 unit not found 时，应该按什么顺序检查？确认 unit 名称 → 确认系统级还是 --user → 检查 unit 文件位置 → 新增或修改过文件时执行 daemon-reload → 重新查询 LoadState。
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl list-unit-files --type=service --no-pager \
  'ssh*.service' 'sshd*.service' 'can*.service' 'socketcan*.service'

systemctl list-units --type=service --all --no-pager \
  'ssh*.service' 'sshd*.service' 'can*.service' 'socketcan*.service'
UNIT FILE    STATE   VENDOR PRESET
ssh.service  enabled enabled
ssh@.service static  -
sshd.service alias   -

3 unit files listed.
  UNIT        LOAD   ACTIVE SUB     DESCRIPTION
  ssh.service loaded active running OpenBSD Secure Shell server

LOAD   = Reflects whether the unit definition was properly loaded.
ACTIVE = The high-level unit activation state, i.e. generalization of SUB.
SUB    = The low-level unit activation state, values depend on unit type.
1 loaded units listed.
To show all installed unit files use 'systemctl list-unit-files'.
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$

# Day17 用户操作输出记录
seeway@test:~$ journalctl --version | head -n 1
systemd 249 (249.11-0ubuntu3.22)
seeway@test:~$ journalctl --disk-usage
Archived and active journals take up 2.9G in the file system.
seeway@test:~$
cd "$HOME/workspace/learn/learn/robot-system-learning/linux"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ project_unit="$PWD/day16-practice.service"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemd-analyze --user verify "$project_unit"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user is-system-running
running
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user link "$project_unit"
Created symlink /home/l/.config/systemd/user/day16-practice.service → /home/l/workspace/learn/learn/robot-system-learning/linux/day16-practice.service.
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user daemon-reload
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user stop day16-practice.service
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user show day16-practice.service \
  -p LoadState -p ActiveState -p SubState
LoadState=loaded
ActiveState=inactive
SubState=dead
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ start_marker="$(date '+%Y-%m-%d %H:%M:%S')"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ printf 'start marker: %s\n' "$start_marker"
start marker: 2026-08-28 10:32:56
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user start day16-practice.service
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ sleep 1
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user stop day16-practice.service
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ journalctl --user -u day16-practice.service \
  --since "$start_marker" --no-pager
Aug 28 10:33:09 test systemd[1994]: Started Day16 safe systemd user service practice.
Aug 28 10:33:19 test systemd[1994]: Stopping Day16 safe systemd user service practice...
Aug 28 10:33:19 test systemd[1994]: Stopped Day16 safe systemd user service practice.
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ follow_output='/tmp/day17-journal-follow.out'
follow_marker="$(date '+%Y-%m-%d %H:%M:%S')"

: > "$follow_output"

timeout 8s journalctl --user -f -u day16-practice.service \
  --since "$follow_marker" --no-pager > "$follow_output" 2>&1 &
follow_pid="$!"

sleep 1
systemctl --user start day16-practice.service
sleep 1
systemctl --user stop day16-practice.service

wait "$follow_pid" 2>/dev/null || true

cat "$follow_output"
[1] 252525
Aug 28 10:35:17 test systemd[1994]: Started Day16 safe systemd user service practice.
Aug 28 10:35:18 test systemd[1994]: Stopping Day16 safe systemd user service practice...
Aug 28 10:35:18 test systemd[1994]: Stopped Day16 safe systemd user service practice.
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ps -p "$follow_pid" -o pid,ppid,user,stat,etime,cmd ||
  printf '%s\n' '[EXPECTED] journal follow process has ended'
    PID    PPID USER     STAT     ELAPSED CMD
[EXPECTED] journal follow process has ended
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ journalctl --user -u day17-missing.service \
  --since "$start_marker" --no-pager
-- No entries --
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ bash -n service_log_collect.sh
chmod u+x service_log_collect.sh
ls -l service_log_collect.sh
cat service_log_collect.sh
-rwxr--r-- 1 seeway l 640 Aug 28 10:36 service_log_collect.sh
#!/bin/bash

unit_name="$1"
since_time="$2"
output_file="$3"

if [[ -z "$unit_name" || -z "$since_time" || -z "$output_file" ]]; then
    printf '%s\n' '[LOG COLLECTION ERROR] unit, since time and output file are required' >&2
    exit 1
fi

{
    printf '[LOG COLLECTION] unit=%s since=%s\n' "$unit_name" "$since_time"
    journalctl --user -u "$unit_name" --since "$since_time" --no-pager
} > "$output_file" 2>&1

collect_status="$?"

if (( collect_status != 0 )); then
    printf '[LOG COLLECTION ERROR] failed; report=%s\n' "$output_file" >&2
    exit "$collect_status"
fi

printf '[LOG COLLECTION COMPLETE] report=%s\n' "$output_file"
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ normal_report='/tmp/day17-service-report.log'

./service_log_collect.sh \
  day16-practice.service "$start_marker" "$normal_report"

cat "$normal_report"
[LOG COLLECTION COMPLETE] report=/tmp/day17-service-report.log
[LOG COLLECTION] unit=day16-practice.service since=2026-08-28 10:32:56
Aug 28 10:33:09 test systemd[1994]: Started Day16 safe systemd user service practice.
Aug 28 10:33:19 test systemd[1994]: Stopping Day16 safe systemd user service practice...
Aug 28 10:33:19 test systemd[1994]: Stopped Day16 safe systemd user service practice.
Aug 28 10:34:39 test systemd[1994]: Started Day16 safe systemd user service practice.
Aug 28 10:34:47 test systemd[1994]: Stopping Day16 safe systemd user service practice...
Aug 28 10:34:47 test systemd[1994]: Stopped Day16 safe systemd user service practice.
Aug 28 10:35:17 test systemd[1994]: Started Day16 safe systemd user service practice.
Aug 28 10:35:18 test systemd[1994]: Stopping Day16 safe systemd user service practice...
Aug 28 10:35:18 test systemd[1994]: Stopped Day16 safe systemd user service practice.
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ invalid_report='/tmp/day17-invalid-report.log'
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./service_log_collect.sh \
  day16-practice.service 'not-a-valid-time' "$invalid_report"
[LOG COLLECTION ERROR] failed; report=/tmp/day17-invalid-report.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ cat "$invalid_report"
[LOG COLLECTION] unit=day16-practice.service since=not-a-valid-time
Failed to parse timestamp: not-a-valid-time
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ ./service_log_collect.sh \
  day16-practice.service "$start_marker" "$normal_report"
[LOG COLLECTION COMPLETE] report=/tmp/day17-service-report.log
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user stop day16-practice.service
systemctl --user disable day16-practice.service
systemctl --user daemon-reload
Removed /home/l/.config/systemd/user/day16-practice.service.
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ systemctl --user show day16-practice.service \
  -p LoadState -p ActiveState -p SubState
LoadState=not-found
ActiveState=inactive
SubState=dead
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$ git -C "$HOME/workspace/learn/learn" status --short -- \
  robot-system-learning/linux/service_log_collect.sh
?? robot-system-learning/linux/service_log_collect.sh
seeway@test:~/workspace/learn/learn/robot-system-learning/linux$
1. systemd-journald 与 `journalctl` 分别做什么，它们是什么关系？systemd-journald用来收集journal,journalctl用来查询journal
2. `-u`、`--since` 和 `-f` 分别怎样改变 journalctl 的查询结果？`journalctl -u` 按 unit 查询受控服务日志。`--since` 限定本次实验的时间范围。`-f` 观察本次练习服务新产生的日志。
3. 为什么本次查询用户服务日志时必须使用 `--user`？--user 不是“只对当前用户进行操作”，而是让 journalctl 查询当前用户管理器及用户 unit 的 journal；不加时查询的是系统级范围，可能找不到用户服务日志。
4. 哪些实际输出证明限时 `-f` 取得了新日志，并且观察进程最终已经结束？follow 输出中出现 10:35:17 的 Started，以及 10:35:18 的 Stopping/Stopped，证明 -f 取得了观察期间的新日志；随后 ps 只显示表头并出现 [EXPECTED] journal follow process has ended，证明观察进程已经结束。
5. 为什么 `-- No entries --` 不能单独证明 unit 不存在或服务一直正常？没有日志只说明当前 unit 和时间条件下没有取得记录。判断 unit 是否存在仍应查询 `LoadState`；判断当前状态仍应查询 `ActiveState`。
6. `service_log_collect.sh` 从接收输入到生成报告的整体流程是什么？脚本整体逻辑：

1. 接收 unit 名称、起始时间和输出文件三个输入。
2. 缺少输入时输出错误并停止。
3. 使用 journalctl 查询指定用户 unit 和时间范围。
4. 将查询条件、日志或 journalctl 错误保存到报告。
5. 查询成功时输出报告路径，失败时输出明确错误。
7. 日志收集提示时间无法解析时，应该如何定位并回归验证？先查看报告中的 Failed to parse timestamp，确认错误来自时间输入而不是服务；把无效时间改回 $start_marker 后重新执行，出现 [LOG COLLECTION COMPLETE] 即证明修正成功。

# Day18 用户操作输出记录
