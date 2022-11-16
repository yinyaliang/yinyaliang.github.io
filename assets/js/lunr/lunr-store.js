var store = [{
        "title": "docker 入门 -- 01",
        "excerpt":"了解什么是容器,如何管理容器和镜像,了解docker网络 初始化一台主机 virt-install --name docker --ram 4096 --vcpus=4 --os-type=linux --accelerate --cdrom=/home/kvm/CentOS-7.5-x86_64-Minimal-1804.iso --disk path=/home/kvm/docker.qcow2,size=30,format=qcow2,bus=ide --bridge=virbr0 --vnc --vncport=60009 --vnclisten=0.0.0.0 主机名称 IP地址 docker 192.168.122.100 systemctl stop firewalld systemctl disable firewalld sed -i 's/enforcing/disabled/' /etc/selinux/config setenforce 0 swapoff -a sed -ri 's/.*swap.*/#&amp;/' /etc/fstab yum install ntpdate vim wget -y ntpdate time.windows.com hostnamectl set-hostname docker...","categories": [],
        "tags": ["Docker"],
        "url": "/docker-01/",
        "teaser": null
      },{
        "title": "`Python中的 __iter__ __reversed__ __next__`",
        "excerpt":"Python 中特殊方法的一些理解笔记 __reversed__说明 返回集合的倒叙迭代器,如果没有实现这个方法,reversed()会去使用__getitem__和__len__来实现 特殊方法__next__和__iter__说明 介绍__next__和__iter__方法需要了解下可迭代对象(iterable)和迭代器(iterator): iterable 如果对象实现了__iter__方法,那么对象就是可迭代的。python中的序列都可以迭代。如果没有实现__iter__,实现了__getitem__方法,而且参数是从零开始的索引,这种对象也可以迭代。 iterator 标准的迭代器都有两个方法___next__和__iter__: __next__返回下一个可用的元素,如果没有元素了,抛出 StopIteration 异常 __iter__返回self code python从可迭代对象中获取迭代器(可迭代对象—iter()—&gt;迭代器—next()—&gt;值) In [9]: a=(1,2,3) In [10]: type(a) Out[10]: tuple In [11]: b=iter(a) In [12]: type(b) Out[12]: tuple_iterator In [13]: a=[1,2,3] In [14]: type(a) Out[14]: list In [15]: b=iter(a) In [16]: type(b) Out[16]: list_iterator In [20]:...","categories": [],
        "tags": ["Python"],
        "url": "/python-iter-reversed-next/",
        "teaser": null
      },{
        "title": "Centos Prometheus 安装",
        "excerpt":"Prometheus 在centos中的安装记录 下载 cd /tmp wget https://github.com/prometheus/prometheus/releases/download/v2.37.0/prometheus-2.37.0.linux-amd64.tar.gz 解压 tar zxvfp prometheus-2.37.0.linux-amd64.tar.gz mv prometheus-2.37.0.linux-amd64 /usr/local/ mkdir /data/config/oss/prometheus cd /usr/local/ ln -s prometheus-2.37.0.linux-amd64 prometheus cd prometheus mv prometheus.yml /data/config/oss/prometheus/ mkdir /data/prometeus mv data /data/prometeus/ 启动文件 cat &lt;&lt; 'EOF' | sudo tee /etc/systemd/system/prometheus.service [Unit] Description=Prometheus Server Documentation=https://prometheus.io/docs/introduction/overview/ After=network-online.target [Service] User=root ExecStart=/usr/local/prometheus/prometheus --config.file=/data/config/oss/prometheus/prometheus.yml --storage.tsdb.path=/data/prometeus/data...","categories": [],
        "tags": ["Application"],
        "url": "/install-prometheus/",
        "teaser": null
      },{
        "title": "`Python中的 __getattr__、__getattribute__、__setattr__、__delattr__、__dir__`",
        "excerpt":"Python 中特殊方法的一些理解笔记 __getattr__ 属性查找失败后会调用__getattr__方法 class TmpTest: def __init__(self): self.tmp = 'tmp123' def __getattr__(self, item): raise AttributeError('{} object has no attribute {}'.format(type(self), item)) a=TmpTest() print(a.tmp) 结果: tmp123 print(a.tmpnone) 结果: Traceback (most recent call last): File \"D:/pythonScript/leetcode/leetcode.py\", line 12, in &lt;module&gt; print(a.tmpnone) File \"D:/pythonScript/leetcode/leetcode.py\", line 7, in __getattr__ raise AttributeError(msg.format(tmp_cls, item)) AttributeError:...","categories": [],
        "tags": ["Python"],
        "url": "/python-getattr-getattribute-setattr-delattr-dir/",
        "teaser": null
      },{
        "title": "`Python中的 __new__ __init__ __del__`",
        "excerpt":"Python 中特殊方法的一些理解笔记 Python中的__new__ __init__ __del__三个方法用于实例的创建和销毁,在使用python的类中，我们最常用的是__init__方法，通常称为构造方法,__new__方法几乎不会使用，这篇文章是基于Python3.6为基础来做实验，主要谈一谈python的__new__和__init__，__init__通常称为构造方法,但其实它是个“初始化方法”，真正的构造方法是__new__,__init__既然是初始化方法，那么肯定是对对象的初始化，也就是存在一个被初始化的对象 第一个例子 class inch(): def __init__(self): print(\"__init__\") def __new__(cls): print(\"__new__ \") print(\"__new__ \") __new__ None 因为我们没有从__new__返回任何结果，__init__这里不会调用。如果init被调用，我们就会看到我们在init中的打印语句。 第二个例子 class inch(): def __new__(cls): print(\"__new__ \") print(super(inch, cls).__new__(cls)) return super(inch, cls).__new__(cls) def __init__(self): print(\"__init__\") print(inch()) __new__ &lt;__main__.inch object at 0x002BF170&gt; __init__ &lt;__main__.inch object at 0x002BF170&gt; 用于构建实例的是特殊方法 new：是个类方法(不需要使用@classmethod)，调用__init__方法时要传入实例，__new__必须返回一个实例。返回的实例会作为第一个参数（即 self）传给__init__ 方法。注意:__init__不允许返回任何值...","categories": [],
        "tags": ["Python"],
        "url": "/python-new-init-del/",
        "teaser": null
      },{
        "title": "`Python中的 __repr__ __str__`",
        "excerpt":"Python 中特殊方法的一些理解笔记 __repr__ 被内置函数repr用于把一个对象用”官方”的字符串形式表示出来(终端友好) 值传给eval()来返回一个对象的字符串表示形式 否则返回一个尖括号括起来的字符串，包含了对象类型的名称和附加的信息通常包括对象的名称和地址 一个类可以通过 __repr__方法来控制它的实例返回内容(也就是以上两点都通可以通过__repr__方法来定制) 返回 Unicode 字符串(str 类型) __str__ 被str(object) 和内置函数format()和print() 返回一个对象的’非正式’字符串形式(用户友好) 返回一个对象的字符串版本，如果对象没有提供，会返回空字符串， 对于字符串，会返回字符串本身，如果对象没有提供__str__方法，会使用__repr__方法(也就是repr(object))来提供返回值 返回 Unicode 字符串(str 类型) code 这是django query的源码部分,使用__repr__来返回一个对象和查询的数据切片: def __repr__(self): data = list(self[:REPR_OUTPUT_SIZE + 1]) if len(data) &gt; REPR_OUTPUT_SIZE: data[-1] = \"…(remaining elements truncated)…\" return '&lt;%s %r&gt;' % (self.__class__.__name__, data) 注意:这里用到了%r,会返回数据的标准字符串形式，它和%s的区别看下面的例子: In [58]:...","categories": [],
        "tags": ["Python"],
        "url": "/python-repr-str/",
        "teaser": null
      },{
        "title": "`Centos 更新Glibc `",
        "excerpt":"写CBPF需要更新系统的Glibc 安装centos-release-scl yum install centos-release-scl 安装7版本的devtoolset yum install devtoolset-7-gcc* 激活 scl enable devtoolset-7 bash 查看gcc版本 gcc -v 下载安装包 cd /tmp wget https://ftp.gnu.org/gnu/glibc/glibc-2.23.tar.gz tar xf glibc-2.23.tar.gz cd glibc-2.23/ mkdir glibc-build cd glibc-build 安装 ../configure --prefix=/usr make make install 验证 ldd --version ldd (GNU libc) 2.23 Copyright (C) 2016 Free Software Foundation,...","categories": [],
        "tags": ["Linux"],
        "url": "/centos-update-glibc/",
        "teaser": null
      },{
        "title": "`Python中的 __call__`",
        "excerpt":"Python 中特殊方法的一些理解笔记 如果python中的一个类定义了 call 方法，那么这个类它的实例就可以作为函数调用,也就是实现了 () 运算符，即可调用对象协议 code class TmpTest: def __init__(self, x, y): self.x = x self.y = y def __call__(self, x, y): self.x, self.y = x, y a = TmpTest(1, 2) a(4, 5) print(a.x, a.y) 4 5 在本文中不讨论装饰部分的内容，借用装饰器来讲解一个__call__方法的使用，如果需要将一个类作为装饰器，那需要为这个类实现__call__方法，一个使用__call__来实现类装饰器的例子 class TmpTest: def __init__(self, func): self.func=func def __call__(self, *args,**kwargs): result=self.func(*args,**kwargs)...","categories": [],
        "tags": ["Python"],
        "url": "/python-call/",
        "teaser": null
      },{
        "title": "`Python中的 __enter__ __exit__`",
        "excerpt":"Python 中特殊方法的一些理解笔记 在python中实现了__enter__和__exit__方法，即支持上下文管理器协议。上下文管理器就是支持上下文管理器协议的对象，它是为了with而生。当with语句在开始运行时，会在上下文管理器对象上调用__enter__方法。with语句运行结束后，会在上下文管理器对象上调用__exit__方法 语法 with的语法 with EXPR as VAR: BLOCK 伪代码 mgr = (EXPR) exit = type(mgr).__exit__ # Not calling it yet value = type(mgr).__enter__(mgr) exc = True try: try: VAR = value # Only if \"as VAR\" is present BLOCK except: # The exceptional case is handled here exc...","categories": [],
        "tags": ["Python"],
        "url": "/python-enter-exit/",
        "teaser": null
      },{
        "title": "`Python中的 __len__、__getitem__、__setitem__、__delitem__、__contains__`",
        "excerpt":"Python 中特殊方法的一些理解笔记 __len__ 返回集合长度 __getitem__(self, item) 使用索引访问元素 __setitem__(self, key, value) 对索引赋值,使用 self[key] = value __delitem__(self, key) 删除索引值 del self[key] __contains__ 实现in运算符，如果没有实现这个方法python也会调用__getitem__来使in运算符可用 可变集合和不可变集合 可变集合需要实现: len getitem setitem delitem 不可变集合需要实现: len getitem code class TemTest: def __init__(self,): self.x=[i for i in range(10)] def __len__(self): return len(self.x) def __getitem__(self, item): return self.x[item] def...","categories": [],
        "tags": ["Python"],
        "url": "/python-len-getitem-setitem-delitem-contains/",
        "teaser": null
      },{
        "title": "docker 入门 -- 02",
        "excerpt":"自定义镜像 数据卷 仓库 构建docker镜像 自定义镜像 需要写Dockerfile文件 ,如果名字不叫Dockerfile,则需要使用-f来指定文件 常用命令: FROM: 指定基镜像 MAINTAINER: 维护者信息 RUN: 在临时容器里执行的操作系统命令 ADD file /path/ : 把物理机里file拷贝到镜像的制定目录 /path COPY file /path/ : 把物理机里file拷贝到镜像的制定目录 /path ENV: 指定变量 USER: 指定容器内部以哪个用户运行进程 VOLUME: 指定数据卷 EXPOSE: 指定镜像容器所使用的端口，只是一个标记 CMD: 指定镜像创建出来的容器运行在什么进程 创建一个可以执行ipconfig的centos镜像 FROM centos:7 MAINTAINER yaliang.yin@eeoa.com RUN yun -y install net-tools -y CMD [\"/bin/bash\"] 构建命令...","categories": [],
        "tags": ["Docker"],
        "url": "/docker-02/",
        "teaser": null
      },{
        "title": "使用kubeadm 安装Kubernetes",
        "excerpt":"介绍使用kubeadm部署集群 使用kubeadm 部署集群 master上的组件 名称 作用 kubectl 命令行工具，用户来创建、删除，都使用此工具 api-server 接口,接收用户发送的请求 scheduler 调度器,当用户创建pod时,判断这个pod会调度到哪个worker controller-manager k8s的大管家,包括监测节点的状态,pod的数目 worker上的组件 名称 作用 kubelet 在包括master上的所有节点上运行,是一个代理,接受master分配的任务,并把节点的信息反馈给master上的api-server kube-proxy 在包括master在内的所有节点上运行,用于把发送给server的请求转发给后端的Pod,有iptables和ipvs两种模式. calico网络 使得节点的pod能够互相通信,集群安装好后,一定要安装它 安装集群 建立主机 主机名 IP地址 内存需求 操作系统 角色 master 192.168.122.200 4GB centos 7 master node1 192.168.122.202 4GB centos 7 node node2 192.168.122.203 4GB centos 7 node 初始化配置 virt-install...","categories": [],
        "tags": ["Kubernetes"],
        "url": "/kubernetes-kubeadm-install/",
        "teaser": null
      },{
        "title": "ubuntu install zabbix agent2",
        "excerpt":"ubuntu install zabbix agent2 安装依赖 apt install gcc apt install libpcre3 libpcre3-dev apt-get install zlib1g-dev apt install make golang 安装 https://go.dev/doc/install 创建组和用户 groupadd -g 2210 zabbix useradd -u 2210 zabbix -g zabbix 创建目录及赋权 [ ! -d /data/scripts/oss/zabbix ] &amp;&amp; mkdir -p /data/scripts/oss/zabbix [ ! -d /data/logs/oss/zabbix ] &amp;&amp; mkdir -p...","categories": [],
        "tags": ["Application"],
        "url": "/ubuntu-install-zabbix-agent2/",
        "teaser": null
      },{
        "title": "使用kubeadm 升级Kubernetes ",
        "excerpt":"升级kubernetes版本 安装一套v1.20.1集群 创建两台主机 主机名 IP地址 内存需求 操作系统 角色 umaster 192.168.122.240 4GB centos 7 master unode1 192.168.122.241 4GB centos 7 node 初始化配置 virt-install --name umaster --ram 4096 --vcpus=4 --os-type=linux --accelerate --cdrom=/home/kvm/CentOS-7.5-x86_64-Minimal-1804.iso --disk path=/home/kvm/umaster.qcow2,size=30,format=qcow2,bus=ide --bridge=virbr0 --vnc --vncport=60021 --vnclisten=0.0.0.0 virt-install --name unode1 --ram 4096 --vcpus=2 --os-type=linux --accelerate --cdrom=/home/kvm/CentOS-7.5-x86_64-Minimal-1804.iso --disk path=/home/kvm/unode1.qcow2,size=30,format=qcow2,bus=ide --bridge=virbr0 --vnc --vncport=60022...","categories": [],
        "tags": ["Kubernetes"],
        "url": "/kubernetes-kubeadm-update/",
        "teaser": null
      },{
        "title": "pgsql监控",
        "excerpt":"测试pgsql监控 系统 Centos 7 安装pgsql sudo yum install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm sudo yum install -y postgresql12-server sudo /usr/pgsql-12/bin/postgresql-12-setup initdb sudo systemctl enable postgresql-12 sudo systemctl start postgresql-12 数据库设置 sudo su postgres psql CREATE USER zbx_monitor WITH PASSWORD 'monitor' INHERIT; GRANT EXECUTE ON FUNCTION pg_catalog.pg_ls_dir(text) TO zbx_monitor; GRANT EXECUTE ON FUNCTION pg_catalog.pg_stat_file(text)...","categories": [],
        "tags": ["Monitor"],
        "url": "/monitor-pgsql/",
        "teaser": null
      },{
        "title": "路由交换 - OSPF - 01",
        "excerpt":"OSPF备忘信息 基础术语 链路状态协议的特点 快速适应网络变化 在网络发生变化时发送触发更新 以较低的频率（如每隔30分钟）发送定期更新，这被称为链路状态刷新 每台路由器都必须记录下述信息 直接相连的邻接路由器 网络或区域内的其他路由器及其连接的网络 前往每个目的地的最佳路径 OSPF使用的各种表 OSPF邻居表=邻接关系数据库 OSPF拓扑表=OSPF拓扑数据库=LSDB 路由表=转发数据库 区域结构 内部路由器：所有接口都位于同一个区域中的路由器，同一区域中所有内部路由器的LSDB都相同 骨干路由器：位于骨干区域0边缘的路由器，至少有一个接口与区域0相连。骨干路由器在维护OSPF路由信息时采用的步骤和算法与内部路由器相同 区域边界路由器（ABR）：连接多个区域的路由器，为其连接的每个区域维护一个LSDB，并路由前往/来自其他区域的数据流 自治系统边界路由器（ASBR）：至少有一个接口与其他域（如另一个OSPF自治系统或使用增强内部网关协议[EIGRP]的域）相连 在多路访问广播环境中，每个网段都有独立的DR和BDR 在路由器链路通告中，以链路开销的方式通告它。默认的OSPF开销如下 56kbit/s 的串行链路：默认开销为1785 64kbit/s 的串行链路：默认开销为1562 T1（1.544Mbit/s 的串行链路）：默认开销为64 E1（2.048Mbit/s 的串行链路）：默认开销为48 以太网：默认开销为10 快速以太网：默认开销为1 FDDI：默认开销为1 ATM：默认开销为1 这5种OSPF分组都被直接封装到IP分组的有效负载中，OSPF分组不使用传输控制协议（TCP）和用户数据报协议（UDP） 邻接路由器要建立邻接关系，Hello分组的如下字段必须匹配 Hello 间隔 失效间隔 区域ID 身份验证密码 末节区域标记 要让路由器通过接口建立邻接关系，接口的主IP地址必须位于同一个子网且子网掩码相同，接口的最大传输单元（MTU）也必须匹配 OSPF 邻接关系状态 Down：没有检测到活动邻居 Init：收到Hello分组 双向：路由器在其收到的Hello分组中看到了自己的路由器ID 预启动：确定了主/从角色 交换：发送DBD（LSDB摘要） 加载：交换LSR和LSU以填充LSDB...","categories": [],
        "tags": ["RS"],
        "url": "/rs-ospf-01/",
        "teaser": null
      },{
        "title": "`Python 装饰器 - 01`",
        "excerpt":"Python装饰器介绍 这是一篇介绍python装饰器的文章，对比之前看到的类似介绍装饰器的文章，个人认为无人可出其右，文章由浅到深，由函数介绍到装饰器的高级应用，每个介绍必有例子说明。文章太长，看完原文后我计划按照文章作者的划分，将分为两章翻出来和大家分享,如果你觉得干的还不错，就点个赞吧 在本次的装饰器教程中，将介绍何为装饰器以及如何创建和使用它们,装饰器提供了简单的语法来调用高阶函数。 从定义上讲，装饰器是一个函数，它接收另一个函数作为参数并且扩展它的功能，但不会显式的去修改它 说起来可能会让人觉得难理解，但它(装饰器)确实不会这么做，特别是一会你会看到一些装饰器如何工作的例子 函数 在理解装饰器之前，你首先需要理解函数如何工作。函数会基于给定的参数返回值。这里有一个非常简单的例子: &gt;&gt;&gt; def add_one(number): ... return number + 1 &gt;&gt;&gt; add_one(2) 3 通常情况下，函数在python中也会有其它功效而不是仅仅接收输入并返回输出。print()函数是一个例子。在控制台输出的时候它会返回None(1)，然而，为了理解装饰器， 将函数认为是接收参数并返回值就足够了 注意:在面向函数编程,你几乎只会使用纯函数，不会有其它功能，然而python不是一个纯函数式语言，python支持许多函数式编程概念，包括一等对象 一等对象 在python中，函数是一等对象，意思是函数可以作为参数被传递，就像其它的对象(string，int，fload，list和其它)，思考下面的三个函数 def say_hello(name): return f\"Hello {name}\" def be_awesome(name): return f\"Yo {name}, together we are the awesomest!\" def greet_bob(greeter_func): return greeter_func(\"Bob\") 在这里,say_hello()和be_awsone()是常规函数，接收一个name参数返回一个字符串，然而greet_bob()函数，接收一个函数作为他的参数，我们可以将say_hello()或者be_awesome()函数传递给它 &gt;&gt;&gt; greet_bob(say_hello) 'Hello Bob' &gt;&gt;&gt; greet_bob(be_awesome) 'Yo...","categories": [],
        "tags": ["Python"],
        "url": "/python-decorator-01/",
        "teaser": null
      },{
        "title": "路由交换 - RIP - 01",
        "excerpt":"RIP 笔记 RIP的基本原理与实现 RIP的端口: UDP 520 RIP的计时器和稳定性 启动后，每隔30s从启动协议的接口发送更新信息，包含整个路由表。更新的目的地址是广播地址 255.255.255.255 rip也使用无效计时器，也成为限时计时器，初始化时间为180s，如果超过这个时间还没有收到这条路有的更新，就将这条路有的跳数设置为16跳 另一种计时器称为垃圾收集或刷新计时器，一般比限时计时器长240-60s，如果到时，这条路由就会被宣告为一条度量值为不可达的路由 第三个计时器是抑制计时器。如果一条路由更新的跳数大于路由表已记录的该路由的跳数，那么将会引起该路由进入180s的抑制状态阶段 timers basic update invalid holddown flush 默认不建议更改计时器，如果一台路由器更改，那这个RIP域中的路由器都需要更改 RIP使用带毒性逆转的水平分隔和触发更新，触发更新只有在路由的度量值发生变化时产生，触发更新会有一个1-5s的随机计时器，以免产生触发更新风暴 RIP的消息格式 请求消息类型 可以请求整个路由表信息，也可以请求某些具体路由信息 有类别路由选择 RIP的管理距离为120 数据包选路过程 读出目的地址的网络部分(A\\B\\C类)，查看在路由表中是否有匹配的条目，没有则丢弃，同时发出一个ICMP目的不可达的消息给源 如果存在匹配该数据包网络部分的主类网络，会在路由器的主网络的子网中查找，找到匹配则转发，否则发送ICMP目的不可达消息 有类别路由选择:直连的子网络 192.168.35.3数据包进入路由器，路由器没有发现192.168.35.0的条目，该数据包则丢弃 172.25.33.89数据包进入路由器，路由器中有一个B类172.25.0.0条目，但没有发现172.25.0.0的子网条目，该数据包丢弃 172.25.153.220数据包进入路由器，路由器中有172.25.0.0的条目并找到172.25.153.0的条目，该数据包被转发到172.25.15.2 有类别路由选择:在边界路由器上汇总路由 如果没有和某个目的网络直连，那么该路由器仅仅需要一条路由指向直接相连的路由器 有类别路由选择:小结 特点：在通告目的地址时无法通告它的掩码 如果目的地址是一个和路由器直接相连的主网络成员，那么该网络的路由器接口上配置的子网掩码将被用来确定目的地址的子网 如果目的地址不是一个和路由器直接相连的主网络的成员，那么路由器会尝试匹配A\\B\\C类的主网络号 配置RIP router rip network 指定主网络 被动接口 配置单播更新 为了防止广播更新，也需要加上一条passive-interface命令 不连续的子网 控制RIP的度量 可以使用offset-list来改变路由的度量值 offset-list...","categories": [],
        "tags": ["RS"],
        "url": "/rs-rip-01/",
        "teaser": null
      },{
        "title": "`Python 装饰器 - 02`",
        "excerpt":"Python装饰器介绍 装饰类 在类中有两种不通的方式使用装饰器，第一个和我们之前做过的函数非常相似:在类的方法上应用。这也是当时引入装饰器的原因之一 一些常用的装饰器已经内置到python中，像@classmethod @staticmethod @property。这三个装饰器我们之前都介绍过，这段就不翻译了(打字手酸，偷懒下) 下面的Circle 类使用了@classmethod @staticmethod和@property三个装饰器 class Circle: def __init__(self, radius): self._radius = radius @property def radius(self): \"\"\"Get value of radius\"\"\" return self._radius @radius.setter def radius(self, value): \"\"\"Set radius, raise error if negative\"\"\" if value &gt;= 0: self._radius = value else: raise ValueError(\"Radius must be positive\") @property...","categories": [],
        "tags": ["Python"],
        "url": "/python-decorator-02/",
        "teaser": null
      },{
        "title": "路由交换 - BGP案例 - 01",
        "excerpt":"BGP案例01 (参考https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/26634-bgp-toc.html#neighborsroutemaps) BGP如何工作? BGP使用TCP 179端口作为传输协议，两台BGP路由器基于TCP建立连接，建立连接后的路由器成为对等(peer)，对等路由器通过交换信息打开和确认连接参数 BGP路由器交换网络可达信息，信息主要指示出路由必须经过的完整路径，以便到达目标网络。使用BGP的AS号标记路径，用于构建无环的AS图，还显示了在何处应用路由策略，以便对路由行为实施一些限制 为了交换BGP路由信息而形成TCP连接的任何两个路由器都是“对等”或“邻居”，BGP对等初始会交换完整的BGP路由表，交换之后，当路由表发生更改时，对等只会发送增量更新，BGP会对BGP表维持一个版本号，所有的BGP对等都会保持版本号一致，每当BGP路由信息发生更改而更新表时，版本号就会随之更改，keepalive数据包用来确保BGP对等之间的连接是活动的，通知包会在出现错误或特殊情况时发出 EBGP 和 IBGP 如果一个AS自治系统内有许多BGP路由器(speakers),这个AS可以为其它AS提供过境服务(传递路由)，如图所示，AS200 作为AS100和AS300的过境AS 为了发送信息到外部的AS，必须要保证网络的可达性，为了保证网络的可达性，会发生以下的过程: 内部BGP(ibgp)对等会在一个AS的路由器上运行 将BGP信息重新分发给运行在AS中的IGP协议 当BGP在属于两个不同AS的路由器之间运行时，这称为外部BGP (eBGP)。当BGP在路由器之间以相同的方式运行时，这称为iBGP 启用BGP路由 完成下面的配置以启用和配置BGP 假定你有两台路由器RTA和RTB，在第一个例子中，RTA和RTB在不同的AS中，在第二个例子中，两台路由器在一样的AS中 定义路由器进程和路由器所属的AS号。 使用下面的命令在路由器上启用BGP RTA# router bgp 100 RTB# router bgp 200 这些语句表明RTA运行BGP，属于AS100。RTB运行BGP，属于AS200 定义BGP邻居 BGP邻居结构表示试图通过BGP通信的路由器，BGP邻居的部分解释了这个过程 BGP邻居 路由器之间建立TCP连接后，两个BGP路由器成为邻居。为了让两个对等路由器开始交换路由更新，TCP连接是必不可少的 在TCP连接成功后，路由器会发送open信息来交换值，路由器交换的值包括AS号、路由器运行的BGP版本、BGP路由器ID和keepalive保持时间，在确认和接受这些值之后，会建立邻居，除了Established状态外，任何状态都表明这两个路由器没有成为邻居，并且路由器不能交换BGP更新。 使用neighbor命令建立TCP连接 neighbor ip-address remote-as number 命令中的number表示要连接到的路由器的AS号， ip-address为直接连接eBGP的下一跳地址，在ibgp中，ip-address可以是其它路由器的任何IP地址，在对等路由器上的neighbor命令后面的Ip地址要相互可达，可以使用扩展ping来验证可达性，扩展ping要使用neighbor的IP地址来作为ping的源地址，而不能使用路由器的数据包发出地址 如果BGP的配置有任何的变化，你必须重置邻居连接以使新的参数生效 clear ip bgp address clear ip...","categories": [],
        "tags": ["RS"],
        "url": "/rs-bgp-01/",
        "teaser": null
      },{
        "title": "路由交换 - BGP案例 - 02",
        "excerpt":"BGP案例02 (参考https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/26634-bgp-toc.html#neighborsroutemaps) AS_PATH Attribute 当路由更新通过一个AS的时候，AS的编号会成为这个更新的前缀，AS_PATH属性实际上是一个路由为到达目的地而穿过的AS编号列表.AS_SET是已穿过的所有AS的有序数学集合{}。AS_SET示例: CIDR Example 2 (as-set) 在本小节的例子中，RTB在AS200中宣告网络190.10.0.0，当路由穿过AS300，RTC添加它自己的AS号码到network，所以当190.10.0.0到达RTA，这个network会被添加两个AS号码，第一个是200，然后是300，RTA上到达190.10.0.0是(300,200) 同样的过程也适用于170.10.0.0和180.10.0.0。RTB必须选择path (300,100)，为了达到170.10.0.0,RTB穿过AS300和AS100。RTC必须穿过路径(200)才能达到190.10.0.0，路径(100)才能达到170.10.0.0 Origin Attribute origin是一个强制性属性，定义路径信息的起源，origion属性能够假定三个值 IGP 网络层可达性信息(NLRI)是网络产生之初的内部信息。这通常发生在发出 bgp network 命令时。BGP表中的i表示IGP。 EBGP NLRI是通过外部网关协议(EGP)学习的。BGP表中的e表示EGP INCOMPLETE NLRI是未知的，或者是通过其他方式习得的。当您将路由从其他路由协议重新分发到BGP并且路由的起源不完整时，通常会产生不完整的情况。一个?在BGP表中表示INCOMPLETE RTA# router bgp 100 neighbor 190.10.50.1 remote-as 100 neighbor 170.10.20.2 remote-as 300 network 150.10.0.0 redistribute static ip route 190.10.0.0 255.255.0.0 null0 RTB# router bgp 100 neighbor...","categories": [],
        "tags": ["RS"],
        "url": "/rs-bgp-02/",
        "teaser": null
      },{
        "title": "etcd集群监控",
        "excerpt":"etcd集群监控   系统  Centos 7   测试接口   curl --cert /opt/etcd/ssl/server.pem --key /opt/etcd/ssl/server-key.pem https://10.0.2.45:2379/metrics --insecure   prometheus 配置   添加 etcd主机组 prometheus.yml    - job_name: \"etcd cluster\"     scheme: https     static_configs:       - targets: [\"10.0.2.44:2379\",\"10.0.2.45:2379\",\"10.0.2.46:2379\"]     tls_config:       insecure_skip_verify: true       cert_file: \"/data/config/oss/prometheus/etcd_ca/server.pem\"       key_file: \"/data/config/oss/prometheus/etcd_ca/server-key.pem\"   ","categories": [],
        "tags": ["Monitor"],
        "url": "/monitor-etcd/",
        "teaser": null
      },{
        "title": "路由交换 - BGP案例 - 03",
        "excerpt":"BGP案例03 (参考https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/26634-bgp-toc.html#neighborsroutemaps) BGP Filtering 有很多方法可以控制发送和接收的BGP更新，可以使用路由信息作为基础过滤BGP更新，或者使用路径信息或社区作为基础过滤BGP更新，这些方法都可以得到一样的结果。使用哪种方法却决于特定的网络情况 Route Filtering 为了可以限制路由学习到的更新或者宣告的更新，你可以从一个特定的邻居使用路由更新过滤BGP，可以定义一个控制访问列表，然后应用到一个邻居的更新中，配置命令: neighbor {ip-address | peer-group-name} distribute-list access-list-number {in | out} 在这个例子中，RTB作为160.10.0.0的源网络发送 更新到RTC.如果RTC不想发布更新到AS100，需要定义一个访问控制列表，并把这个访问控制列表应用到路由进程配置中 RTC# router bgp 300 network 170.10.0.0 neighbor 3.3.3.3 remote-as 200 neighbor 2.2.2.2 remote-as 100 neighbor 2.2.2.2 distribute-list 1 out access-list 1 deny 160.10.0.0 0.0.255.255 access-list 1 permit 0.0.0.0 255.255.255.255 过滤掉所有到160.10.0.0的路由更新 在处理一些超网的时候访问控制列表可能会有一些棘手...","categories": [],
        "tags": ["RS"],
        "url": "/rs-bgp-03/",
        "teaser": null
      },{
        "title": "php 配置fcgi 获取监控数据",
        "excerpt":"规避Nginx,通过fcgi接口取值 安装 在 centos上可以通过下面的方式安装 yum --enablerepo=epel install fcgi FasdCGI在命令行访问需要通过配置环境变量,连接到一个FastCGI接口,需要有–bind和–conect参数: cgi-fcgi -bind -connect 127.0.0.1:端口 配置 php-fpm的conf 需要配置 pm.status_path = /status listen = 61185 listen.allowed_clients = 127.0.0.1 测试 SCRIPT_NAME=/status SCRIPT_FILENAME=/status REQUEST_METHOD=GET QUERY_STRING=xml cgi-fcgi -bind -connect 127.0.0.1:61185 Expires: Thu, 01 Jan 1970 00:00:00 GMT Cache-Control: no-cache, no-store, must-revalidate, max-age=0 Content-Type: text/xml &lt;?xml version=\"1.0\"...","categories": [],
        "tags": ["Monitor"],
        "url": "/monitor-php/",
        "teaser": null
      },{
        "title": "路由交换 - BGP案例 - 04",
        "excerpt":"BGP案例04 (参考https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/26634-bgp-toc.html#neighborsroutemaps) CIDR and Aggregate Addresses BGP4对BGP3的主要增强之一是无类域间路由(CIDR)。CIDR或supernet是一种查看IP地址的新方法。对于CIDR，没有类的概念，比如类A、B或C。例如，网络192.213.0.0曾经是一个非法的C类网络。现在，这个网络是一个合法的supernet，192.213.0 /16。“16”表示子网掩码中的比特数，当您从IP地址的最左边开始计数时。这个表示类似于192.213.0.0 255.255.0.0 使用聚合是为了最小化路由表的大小。聚合是将多个不同路由的特性组合在一起的过程，从而使单个路由的宣告成为可能。在本例中，RTB生成网络160.10.0.0。将RTC配置为将该路由的超网络160.0.0.0传播到RTA RTB# router bgp 200 neighbor 3.3.3.1 remote-as 300 network 160.10.0.0 #RTC router bgp 300 neighbor 3.3.3.3 remote-as 200 neighbor 2.2.2.2 remote-as 100 network 170.10.0.0 aggregate-address 160.0.0.0 255.0.0.0 RTC将聚合地址160.0.0.0传播到RTA Aggregate Commands 聚合命令的范围很广。为了完成聚合的操作，必须了解每个组件是如何工作的 第一个使本节示例中的命令 CIDR and Aggregate Addresses aggregate-address address-mask 这个命令通知前缀路由和所有更具体的路由。命令 aggregate-address...","categories": [],
        "tags": ["RS"],
        "url": "/rs-bgp-04/",
        "teaser": null
      },{
        "title": "bcc c 环境部署",
        "excerpt":"下载kernel 查看系统版本 root@yinyaliang-virtual-machine:/usr/src# uname -r 5.8.0-43-generic 下载对应版本 http://ftp.sjtu.edu.cn/sites/ftp.kernel.org/pub/linux/kernel/v5.x/ 解压放在/usr/src目录下 root@yinyaliang-virtual-machine:/usr/src# ll total 176612 drwxr-xr-x 5 root root 4096 7月 8 20:06 ./ drwxr-xr-x 14 root root 4096 2月 10 02:48 ../ drwxrwxr-x 24 root root 4096 8月 3 2020 linux-5.8/ -rwxrw-rw- 1 yinyaliang yinyaliang 180827693 7月 1 20:07 linux-5.8.tar.gz* drwxr-xr-x...","categories": [],
        "tags": ["BCC"],
        "url": "/bcc-01/",
        "teaser": null
      },{
        "title": "zabbix 源码分析 another/first network error wait for 15s seconds ",
        "excerpt":"从zabbix的源码看another network error, wait for 15s seconds的异常 poller.c get_values for (i = 0; i &lt; num; i++) { switch (errcodes[i]) { case SUCCEED: case NOTSUPPORTED: case AGENT_ERROR: if (HOST_AVAILABLE_TRUE != last_available) { zbx_activate_item_host(&amp;items[i], &amp;timespec); last_available = HOST_AVAILABLE_TRUE; } break; case NETWORK_ERROR: case GATEWAY_ERROR: case TIMEOUT_ERROR: if (HOST_AVAILABLE_FALSE != last_available) {...","categories": [],
        "tags": ["Monitor"],
        "url": "/monitor-sourcecod-01/",
        "teaser": null
      },{
        "title": "CISCO VPN配置备忘",
        "excerpt":"IPSEC, GRE OVER IPSEC, IP SEC REMOTEACCESS, DMVPN 配置 IPSEC # R2 # IKE第一阶段 # 配置策略 第一个和第二个报文 crypto isakmp policy 10 #策略优先级 encr aes 256 #加密算法 hash sha #hash算法默认SHA authentication pre-share #认证方式 预共享密钥 group 5 #迪菲.赫尔曼算法的g和P的大小 建议1 2 5 lifetime 3600 # 第三和第四报文会自动计算 # 指定第五和第六个报文 进行身份认证 crypto isakmp key 6...","categories": [],
        "tags": ["RS"],
        "url": "/rs-cisco-config-vpn-01/",
        "teaser": null
      },{
        "title": "Switch STP",
        "excerpt":"STP介绍 生成树协议功能: 以太网构建无环逻辑拓扑的网络协议 防止环路及其产生的广播风暴、多帧复用、MAC表不稳定 允许网络设计包含备份链接，保持冗余链路 三个步骤 选举一个根桥 在非根桥交换机选举根端口 在每条链路上选举指定端口 生成树术语 Bridge Priority Data Unit(BPDU): 包含桥ID,发送发的桥ID,到根桥的COST值,计时器等，所有的交换机会交换BPDU来选举根桥。桥ID最小的会变为根桥 Bridge ID(桥ID) 字节的字段，包含2个字节的桥优先级和6个字节的设备MAC 地址，在优先级一致的情况下会参考MAC地址 Bridge Priority(桥优先级) 默认值32768，范围:0-65535 spanning-tree vlan 1 priority priority Root Bridge(根桥) 具有最低的Bridge id的交换机会成为根桥.网络中的流量都会基于根桥选路 Path Cost(路径开销) 到根桥可能会有多条路径，会依据cost选择最低的一条 Speed Code 10Mbps 100 100Mbps 19 1Gbps 4 10Gbps 2 Designated port(指定端口) 环路中的每条链路选择一个端口作为指定端口，根桥的所有端口都是指定端口 最小的BID(发送者的) 到达根桥最低的路径开销 最低的发送者BID...","categories": [],
        "tags": ["RS"],
        "url": "/rs-cisco-config-stp-01/",
        "teaser": null
      },{
        "title": "Pod 管理",
        "excerpt":"创建和删除pod pod是k8s里最小调度单元 下载镜像 docker pull hub.c.163.com/library/centos:7 docker pull nginx docker pull nginx:1.7.9 docker pull nginx:1.9 docker pull busybox docker pull alpine docker pull perl 查看 默认命名空间 [root@master tmp]# kubectl get pods No resources found in default namespace. 指定命名空间 [root@master tmp]# kubectl get pods -n kube-system NAME READY STATUS RESTARTS AGE...","categories": [],
        "tags": ["Kubernetes"],
        "url": "/kubernetes-kubeadm-pod/",
        "teaser": null
      },{
        "title": "docker 部署redis sentinel",
        "excerpt":"Redis Docker Sentinel Docker 安装 bash &lt;(wget -O- get.docker.com) Docker Compose 安装 #https://docs.docker.com/compose/install/linux/ curl -SL https://github.com/docker/compose/releases/download/v2.10.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose sudo chmod +x /usr/local/bin/docker-compose docker-compose --version 修改内核参数 cat &gt; /etc/sysctl.d/docker-compose.conf &lt;&lt; EOF net.core.somaxconn = 1024 net.ipv4.tcp_syncookies = 0 vm.overcommit_memory = 1 EOF sysctl --system 关闭防火墙 systemctl stop firewalld systemctl disable firewalld 目录结构...","categories": [],
        "tags": ["Docker"],
        "url": "/docker-03/",
        "teaser": null
      },{
        "title": "docker 部署 mysql",
        "excerpt":"Mysql Docker Dockerfile FROM mysql:8.0.20 ADD devops.sql /docker-entrypoint-initdb.d Build docker build -t osp/mysql-init . Docker Login docker login #账户 #密码 Docker Push docker tag osp/mysql-init registry.eeo-inc.com/omdev/osp-mysql-init:v01 docker push registry.eeo-inc.com/omdev/osp-mysql-init:v01 Docker Pull docker pull registry.eeo-inc.com/omdev/osp-mysql-init:v01 Docker Run docker run \\ --name osp-dev-8.0.20 \\ -t --net host \\ -e MYSQL_DATABASE=osp \\ -e...","categories": [],
        "tags": ["Docker"],
        "url": "/docker-04/",
        "teaser": null
      },{
        "title": "密码管理",
        "excerpt":"密码管理的几种方式 创建及删除secret 避免mysql类型的容器变量保存在yaml里不安全,可以使用secret,保存方式为 键=值 或者是 key=value 创建secret [root@master ~]# mkdir secret [root@master ~]# cd secret/ 创建一个新的命名空间 [root@master secret]# kubectl create ns nssec namespace/nssec created [root@master secret]# kubens nssec Context \"kubernetes-admin@kubernetes\" modified. Active namespace is \"nssec\". 命令行 kubectl create secret generic 名字 –from-literal=k1=v1 –from-literal=k2=v2 # 创建一个名字为 mysecret1 的 secret [root@master secret]#...","categories": [],
        "tags": ["Kubernetes"],
        "url": "/kubernetes-kubeadm-password/",
        "teaser": null
      },{
        "title": "Deployment",
        "excerpt":"deployment 创建及删除deployment 利用deployment提高pod的健壮性,deployment是一个控制器,保证环境中有一定数量的pod 通过yaml方式创建 不建议使用命令行创建,从1.8之后不了–image之外,不再支持其他选项 kubectl create deplyment 名字 –image=镜像 –dry-run=client -o yaml &gt; d1.yaml 创建目录 mkdir deploy cd deploy 创建命名空间 kubectl create ns nsdeploy kubens nsdeploy 生成文件 kubectl create deployment test1 --image=nginx --dry-run=client -o yaml &gt; d1.yaml apiVersion: apps/v1 kind: Deployment metadata: creationTimestamp: null labels: # deploy 标签,可以和后面的pod的标签不一直 app:...","categories": [],
        "tags": ["Kubernetes"],
        "url": "/kubernetes-kubeadm-deployment/",
        "teaser": null
      },{
        "title": " 解决Zabbix 关于 TCP状态监控取值占用CPU高BUG的解决方案",
        "excerpt":"修复zabbix CPU占用高的bug 故障现象 现象分析 perf stat -d ./zabbix_agent2 -t net.tcp.socket.count[,,,,established] net.tcp.socket.count[,,,,established] [s|3208] Performance counter stats for './zabbix_agent2 -t net.tcp.socket.count[,,,,established]': 1,389.13 msec task-clock # 0.598 CPUs utilized 2,602 context-switches # 0.002 M/sec 5 cpu-migrations # 0.004 K/sec 2,576 page-faults # 0.002 M/sec &lt;not supported&gt; cycles &lt;not supported&gt; instructions &lt;not supported&gt; branches...","categories": [],
        "tags": ["Monitor"],
        "url": "/monitor-tcp-state/",
        "teaser": null
      },{
        "title": "Daemonset",
        "excerpt":"daemonset 创建及删除daemonset daemonset会在所有的节点上创建一个pod,有几个节点就创建几个pod,每个节点只有一个 一般用于监控、日志等，每个节点上运行一个pod master上不会产生Pod,因为master上有污点 [root@master ~]# kubectl describe nodes master | grep ^Taints Taints: node-role.kubernetes.io/master:NoSchedule 查看 [root@master ~]# kubectl get ds No resources found in nsdeploy namespace. 创建及删除ds mkdir ds cd ds/ [root@master ds]# kubectl create ns nsds namespace/nsds created [root@master ds]# kubens nsds Context \"kubernetes-admin@kubernetes\" modified. Active namespace...","categories": [],
        "tags": ["Kubernetes"],
        "url": "/kubernetes-kubeadm-daemonset/",
        "teaser": null
      },{
        "title": "Terraform 安装使用",
        "excerpt":"Terraform创建腾讯CVM 什么是terraform HashiCorp Terraform 是一种基础架构即代码工具，可让在可读的配置文件中定义云和本地资源，可以对其进行版本控制、重用和共享。可以使用一致的工作流程在整个生命周期内配置和管理所有基础架构。Terraform 可以管理计算、存储和网络资源等低级组件，以及DNS 条目和 SaaS 功能等高级组件。 使用 以_configurations_的形式获取凭证和输入，在目标云上创建一个资源, 配置以Terraform的语法进行资源的描述。基本上是声明式的语法。 Terraform使用云服务商提供的API来创建资源，社区提供了1700多个provider来提供管理（https://registry.terraform.io/）,支持扩展 优势 可以管理多个云平台上的基础架构 时间优化，可以在短时间内编写配置，几分钟就可以创建云资源 变更更容易了和改代码一样了 Terraform 的状态允许在整个部署过程中跟踪资源更改 支持版本控制 工作流程 安装 安装 sudo yum install -y yum-utils sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo sudo yum -y install terraform 验证 # terraform -help Usage: terraform [global options] &lt;subcommand&gt; [args] The available commands...","categories": [],
        "tags": ["Application"],
        "url": "/terraform/",
        "teaser": null
      },{
        "title": "Zabbix 对于 KVM 虚拟机资源监控",
        "excerpt":"采集KVM虚拟主机CPU以及内存使用资源情况 安装 centos yum -y install libvirt-devel ubuntu apt install libvirt-dev package go get libvirt/libvirt-go 代码 package kvm import ( \"encoding/json\" \"fmt\" \"time\" \"libvirt.org/go/libvirt\" \"zabbix.com/pkg/plugin\" \"zabbix.com/pkg/zbxerr\" ) type Plugin struct { plugin.Base } var impl Plugin func (p *Plugin) Export(key string, params []string, ctx plugin.ContextProvider) (result interface{}, err error) {...","categories": [],
        "tags": ["Monitor"],
        "url": "/monitor-kvm-cpumem/",
        "teaser": null
      },{
        "title": "写一个C版本的ebpf测试程序",
        "excerpt":"hello_kern.c #include &lt;linux/bpf.h&gt; #include \"bpf/bpf_helpers.h\" #define SEC(NAME) __attribute__((section(NAME), used)) // 编译到tracepoint/syscalls/sys_enter_execve SEC(\"tracepoint/syscalls/sys_enter_execve\") int bpf_prog(void *ctx) { char msg[] = \"Hello BPF!\\n\"; bpf_trace_printk(msg, sizeof(msg)); // 在内核跟踪日志打印消息 return 0; } // 兼容内核使用 char _license[] SEC(\"license\") = \"GPL\"; hello_user.c #include &lt;stdio.h&gt; #include \"bpf_load.h\" #include \"trace_helpers.h\" int main(int argc, char **argv) { if( load_bpf_file(\"hello_kern.o\")...","categories": [],
        "tags": ["BCC"],
        "url": "/bcc-02/",
        "teaser": null
      },{
        "title": "docker 常用命令",
        "excerpt":"Mysql 命令记录   删除none的images  docker images  | grep '&lt;none&gt;' | awk '{print $3}' | xargs  docker image rm -f {}  ","categories": [],
        "tags": ["Docker"],
        "url": "/docker-command/",
        "teaser": null
      },{
        "title": "使用open()和create()创建文件",
        "excerpt":"使用open()和create()创建文件 涉及函数 int open( const char *pathname, int flags); int open( const char *pathname, int flags, mode_t mode); int creat(const char *pathname, mode_t mode); 在下面的情形下两种函数的功能一致 open(const char* pathname, (O_CREAT|O_WRONLY|O_TRUNC),mode_t mode); creat(const char* pathname,mode_t mode); 命令 #include \"stdio.h\" #include \"sys/types.h\" #include \"sys/stat.h\" #include \"fcntl.h\" #include \"unistd.h\" #include \"error.h\" #include &lt;stdlib.h&gt; int...","categories": [],
        "tags": ["Linux"],
        "url": "/c-01/",
        "teaser": null
      },{
        "title": "k8s安装metric server",
        "excerpt":"k8s安装metric server kubernetes 安装metric server k8s版本 # kubectl version Client Version: version.Info{Major:\"1\", Minor:\"20\", GitVersion:\"v1.20.15\", GitCommit:\"8f1e5bf0b9729a899b8df86249b56e2c74aebc55\", GitTreeState:\"clean\", BuildDate:\"2022-01-19T17:27:39Z\", GoVersion:\"go1.15.15\", Compiler:\"gc\", Platform:\"linux/amd64\"} Server Version: version.Info{Major:\"1\", Minor:\"20\", GitVersion:\"v1.20.15\", GitCommit:\"8f1e5bf0b9729a899b8df86249b56e2c74aebc55\", GitTreeState:\"clean\", BuildDate:\"2022-01-19T17:23:01Z\", GoVersion:\"go1.15.15\", Compiler:\"gc\", Platform:\"linux/amd64\"} 作用 基于 CPU/内存的水平自动缩放 自动调整/建议容器所需的资源 安装metric server 的条件 kube-apiserver 必须启用聚合层。 节点必须启用 Webhook身份验证和授权。 Kubelet 证书需要由集群证书颁发机构签名（或通过传递--kubelet-insecure-tls给 Metrics Server 来禁用证书验证） 容器运行时必须实现容器度量 RPC（或具有cAdvisor支持） 网络应支持以下通信：...","categories": [],
        "tags": ["Kubernetes"],
        "url": "/kubernetes-metric-server/",
        "teaser": null
      },{
        "title": "zabbix discovery use prometheusi data",
        "excerpt":"zabbix 使用prometheus数据格式实现自动发现 数据格式 # HELP apisix_http_status HTTP status codes per service in APISIX # TYPE apisix_http_status counter apisix_http_status{code=\"200\",route=\"ceshi-api\",matched_uri=\"/*\",matched_host=\"ceshi.camin.vip\",service=\"ceshi-api\",consumer=\"\",node=\"\"} 26489 apisix_http_status{code=\"200\",route=\"ceshi-api\",matched_uri=\"/*\",matched_host=\"ceshi.camin.vip\",service=\"ceshi-api\",consumer=\"\",node=\"10.1.9.3\"} 624693 apisix_http_status{code=\"200\",route=\"ceshi-api\",matched_uri=\"/*\",matched_host=\"ceshi.campre.dom\",service=\"ceshi-api\",consumer=\"\",node=\"10.1.9.3\"} 4820 apisix_http_status{code=\"200\",route=\"ceshi.camin.vip\",matched_uri=\"/*\",matched_host=\"ceshi.camin.vip\",service=\"ceshi-console\",consumer=\"\",node=\"10.1.9.1\"} 8006 apisix_http_status{code=\"200\",route=\"ceshi.camin.vip\",matched_uri=\"/*\",matched_host=\"ceshi.camin.vip\",service=\"ceshi-console\",consumer=\"\",node=\"10.0.1.1\"} 2376 模板 zabbix_export: version: '6.0' date: '2022-11-16T06:43:50Z' groups: - uuid: 5875dc458fab45f699bdaf705773c951 name: 模板/服务 templates: - uuid: 70715d4c9a5744a0a0550c7131c107f5 template: service.apisix name: service.apisix groups: - name:...","categories": [],
        "tags": ["Monitor"],
        "url": "/monitor-zabbix-metrics/",
        "teaser": null
      },{
        "title": "获取tcp状态",
        "excerpt":"通过module方式 替换zabbix通过ss命令获取tcp状态 老的方式 #!/usr/bin/python import os,sys from operator import itemgetter Base_Dir = '/data/scripts/oss/zabbix/' sys.path.append(Base_Dir) from eeo_zabbix import trapper_zabbix class tcp_state(dict): def __init__(self): self.update(self.command()) def command(self): for com in os.popen(\"/usr/sbin/ss -ant\"): yield com.split(' ')[0] def update(self, iterable=None, **kwds): if iterable is not None: if hasattr(iterable, 'items'): if self: self_get = self.get...","categories": [],
        "tags": ["Linux"],
        "url": "/c-02/",
        "teaser": null
      },{
        "title": "zabbix discovery use prometheusi data",
        "excerpt":"zabbix 使用prometheus数据格式实现自动发现 数据格式 # HELP apisix_http_status HTTP status codes per service in APISIX # TYPE apisix_http_status counter apisix_http_status{code=\"200\",route=\"ceshi-api\",matched_uri=\"/*\",matched_host=\"ceshi.camin.vip\",service=\"ceshi-api\",consumer=\"\",node=\"\"} 26489 apisix_http_status{code=\"200\",route=\"ceshi-api\",matched_uri=\"/*\",matched_host=\"ceshi.camin.vip\",service=\"ceshi-api\",consumer=\"\",node=\"10.1.9.3\"} 624693 apisix_http_status{code=\"200\",route=\"ceshi-api\",matched_uri=\"/*\",matched_host=\"ceshi.campre.dom\",service=\"ceshi-api\",consumer=\"\",node=\"10.1.9.3\"} 4820 apisix_http_status{code=\"200\",route=\"ceshi.camin.vip\",matched_uri=\"/*\",matched_host=\"ceshi.camin.vip\",service=\"ceshi-console\",consumer=\"\",node=\"10.1.9.1\"} 8006 apisix_http_status{code=\"200\",route=\"ceshi.camin.vip\",matched_uri=\"/*\",matched_host=\"ceshi.camin.vip\",service=\"ceshi-console\",consumer=\"\",node=\"10.0.1.1\"} 2376 模板 zabbix_export: version: '6.0' date: '2022-11-16T06:43:50Z' groups: - uuid: 5875dc458fab45f699bdaf705773c951 name: 模板/服务 templates: - uuid: 70715d4c9a5744a0a0550c7131c107f5 template: service.apisix name: service.apisix groups: - name:...","categories": [],
        "tags": ["Monitor"],
        "url": "/monitor-zabbix-metrics/",
        "teaser": null
      }]
