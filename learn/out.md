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