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
        "excerpt":"Python中的__new__ __init__ __del__三个方法用于实例的创建和销毁,在使用python的类中，我们最常用的是__init__方法，通常称为构造方法,__new__方法几乎不会使用，这篇文章是基于Python3.6为基础来做实验，主要谈一谈python的__new__和__init__，__init__通常称为构造方法,但其实它是个“初始化方法”，真正的构造方法是__new__,__init__既然是初始化方法，那么肯定是对对象的初始化，也就是存在一个被初始化的对象 第一个例子 class inch(): def __init__(self): print(\"__init__\") def __new__(cls): print(\"__new__ \") print(\"__new__ \") __new__ None 因为我们没有从__new__返回任何结果，__init__这里不会调用。如果init被调用，我们就会看到我们在init中的打印语句。 第二个例子 class inch(): def __new__(cls): print(\"__new__ \") print(super(inch, cls).__new__(cls)) return super(inch, cls).__new__(cls) def __init__(self): print(\"__init__\") print(inch()) __new__ &lt;__main__.inch object at 0x002BF170&gt; __init__ &lt;__main__.inch object at 0x002BF170&gt; 用于构建实例的是特殊方法 new：是个类方法(不需要使用@classmethod)，调用__init__方法时要传入实例，__new__必须返回一个实例。返回的实例会作为第一个参数（即 self）传给__init__ 方法。注意:__init__不允许返回任何值 第三个例子 class...","categories": [],
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
        "excerpt":"如果python中的一个类定义了 call 方法，那么这个类它的实例就可以作为函数调用,也就是实现了 () 运算符，即可调用对象协议 code class TmpTest: def __init__(self, x, y): self.x = x self.y = y def __call__(self, x, y): self.x, self.y = x, y a = TmpTest(1, 2) a(4, 5) print(a.x, a.y) 4 5 在本文中不讨论装饰部分的内容，借用装饰器来讲解一个__call__方法的使用，如果需要将一个类作为装饰器，那需要为这个类实现__call__方法，一个使用__call__来实现类装饰器的例子 class TmpTest: def __init__(self, func): self.func=func def __call__(self, *args,**kwargs): result=self.func(*args,**kwargs) return result...","categories": [],
        "tags": ["Python"],
        "url": "/python-call/",
        "teaser": null
      },{
        "title": "`Python中的 __enter__ __exit__`",
        "excerpt":"在python中实现了__enter__和__exit__方法，即支持上下文管理器协议。上下文管理器就是支持上下文管理器协议的对象，它是为了with而生。当with语句在开始运行时，会在上下文管理器对象上调用__enter__方法。with语句运行结束后，会在上下文管理器对象上调用__exit__方法 语法 with的语法 with EXPR as VAR: BLOCK 伪代码 mgr = (EXPR) exit = type(mgr).__exit__ # Not calling it yet value = type(mgr).__enter__(mgr) exc = True try: try: VAR = value # Only if \"as VAR\" is present BLOCK except: # The exceptional case is handled here exc = False...","categories": [],
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
        "excerpt":"自定义镜像 数据卷 仓库 自定义镜像 需要写Dockerfile文件 ,如果名字不叫Dockerfile,则需要使用-f来指定文件 常用命令: FROM: 指定基镜像 MAINTAINER: 维护者信息 RUN: 在临时容器里执行的操作系统命令 ADD file /path/ : 把物理机里file拷贝到镜像的制定目录 /path COPY file /path/ : 把物理机里file拷贝到镜像的制定目录 /path ENV: 指定变量 USER: 指定容器内部以哪个用户运行进程 VOLUME: 指定数据卷 EXPOSE: 指定镜像容器所使用的端口，只是一个标记 CMD: 指定镜像创建出来的容器运行在什么进程 创建一个可以执行ipconfig的centos镜像 FROM centos:7 MAINTAINER yaliang.yin@eeoa.com RUN yun -y install net-tools -y CMD [\"/bin/bash\"] 构建命令 docker...","categories": [],
        "tags": ["Docker"],
        "url": "/docker-02/",
        "teaser": null
      },{
        "title": "使用kubeadm 安装Kubernetes",
        "excerpt":"介绍使用kubeadm部署集群,测试环境为kvm 使用kubeadm 部署集群 master上的组件 名称 作用 kubectl 命令行工具，用户来创建、删除，都使用此工具 api-server 接口,接收用户发送的请求 scheduler 调度器,当用户创建pod时,判断这个pod会调度到哪个worker controller-manager k8s的大管家,包括监测节点的状态,pod的数目 worker上的组件 名称 作用 kubelet 在包括master上的所有节点上运行,是一个代理,接受master分配的任务,并把节点的信息反馈给master上的api-server kube-proxy 在包括master在内的所有节点上运行,用于把发送给server的请求转发给后端的Pod,有iptables和ipvs两种模式. calico网络 使得节点的pod能够互相通信,集群安装好后,一定要安装它 安装集群 建立主机 主机名 IP地址 内存需求 操作系统 角色 master 192.168.122.200 4GB centos 7 master node1 192.168.122.202 4GB centos 7 node node2 192.168.122.203 4GB centos 7 node 初始化配置 virt-install...","categories": [],
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
      }]
