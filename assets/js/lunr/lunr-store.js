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
        "title": "`Python中的 __call__`",
        "excerpt":"如果python中的一个类定义了 call 方法，那么这个类它的实例就可以作为函数调用,也就是实现了 () 运算符，即可调用对象协议 code class TmpTest: def __init__(self, x, y): self.x = x self.y = y def __call__(self, x, y): self.x, self.y = x, y a = TmpTest(1, 2) a(4, 5) print(a.x, a.y) 4 5 在本文中不讨论装饰部分的内容，借用装饰器来讲解一个__call__方法的使用，如果需要将一个类作为装饰器，那需要为这个类实现__call__方法，一个使用__call__来实现类装饰器的例子 class TmpTest: def __init__(self, func): self.func=func def __call__(self, *args,**kwargs): result=self.func(*args,**kwargs) return result...","categories": [],
        "tags": ["Python"],
        "url": "/python-call/",
        "teaser": null
      },{
        "title": "`Python中的 __enter__ __exit__`",
        "excerpt":"在python中实现了__enter__和__exit__方法，即支持上下文管理器协议。上下文管理器就是支持上下文管理器协议的对象，它是为了with而生。当with语句在开始运行时，会在上下文管理器对象上调用 enter 方法。with语句运行结束后，会在上下文管理器对象上调用 exit 方法 语法 with的语法 with EXPR as VAR: BLOCK 伪代码 mgr = (EXPR) exit = type(mgr).__exit__ # Not calling it yet value = type(mgr).__enter__(mgr) exc = True try: try: VAR = value # Only if \"as VAR\" is present BLOCK except: # The exceptional case is handled...","categories": [],
        "tags": ["Python"],
        "url": "/python-enter-exit/",
        "teaser": null
      },{
        "title": "`Python中的 __len__、__getitem__、__setitem__、__delitem__、__contains__`",
        "excerpt":"Python 中特殊方法的一些理解笔记 __len__ 返回集合长度 __getitem__(self, item) 使用索引访问元素 __setitem__(self, key, value) 对索引赋值,使用 self[key] = value __delitem__(self, key) 删除索引值 del self[key] __contains__ 实现in运算符，如果没有实现这个方法python也会调用__getitem__来使in运算符可用 可变集合和不可变集合 可变集合需要实现: len getitem setitem delitem 不可变集合需要实现: len getitem code class TemTest: def __init__(self,): self.x=[i for i in range(10)] def __len__(self): return len(self.x) def __getitem__(self, item): return self.x[item] def...","categories": [],
        "tags": ["Python"],
        "url": "/python-len-getitem-setitem-delitem-contains/",
        "teaser": null
      }]
