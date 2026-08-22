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